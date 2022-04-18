import { Backdrop, Button, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import dashboardAPI from '../../api/dashboardAPI'
import { CryptoState } from '../../Context'
import './coinchart.css'
import LoadingDashboard from '../LoadingDashboard'

const CoinChart = ({ coin }) => {

    const [graphData, setGraphData] = useState()
    const [numDays, setNumDays] = useState(1)

    const {symbol, currency} = CryptoState();

    const generateGraphData = async () => {
       const data = await dashboardAPI.getGraphData(coin.id, numDays, currency) 
       setGraphData(data)
    }
    console.log('--------- Days ---------', numDays)
    useEffect(() => {
        generateGraphData()

    }, [numDays, currency])
    console.log(graphData);
 
    const handleNumOfDays = (event) => {
        setNumDays(event.target.value)

    }
    const data={ 
        labels: graphData.map((dataPoint) => {
            let date = new Date(dataPoint[0])
            let time = date.getHours() > 12 
                ? `${date.getHours() - 12}:${date.getMinutes()} pm`
                : `${date.getHours()}:${date.getMinutes()} am`
            return numDays !== 1 ? date.toLocaleDateString() : time
        }),
        datasets: [
            {data: graphData.map((dataPoint) => dataPoint[1])}
        ]
    } 
  return (
    <div>
        <div className='chart-buttons'>
            <Button onClick={handleNumOfDays} variant='contained' sx={{borderRadius: 10}} value={365} >Year</Button>
            <Button onClick={handleNumOfDays} variant='contained' sx={{borderRadius: 10}} value={30} >Month</Button>
            <Button onClick={handleNumOfDays} variant='contained' sx={{borderRadius: 10}} value={1} >Day</Button>
        </div>
        <div className='coin-graph'>

           {/* { graphData 
                ? <Line /> 
                : <LoadingDashboard />
           } */}
        </div>
    </div>
  )
}

export default CoinChart