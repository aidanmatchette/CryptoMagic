import { Backdrop, Button, CircularProgress, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'react-chartjs-2'
import dashboardAPI from '../../api/dashboardAPI'
import { CryptoState } from '../../Context'
import './coinchart.css'
import LoadingDashboard from '../LoadingDashboard'
import { ThemeProvider } from '@emotion/react'

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
    console.log(numDays);
 
    const handleNumOfDays = (event) => {
        setNumDays(event.target.value)

    }
    const data={ 
        labels: graphData?.map((dataPoint) => {
            let date = new Date(dataPoint[0])
            let time = date.getHours() > 12 
                ? `${date.getHours() - 12}:${date.getMinutes()} pm`
                : `${date.getHours()}:${date.getMinutes()} am`
            return numDays !== 1 ? date.toLocaleDateString() : time
        }),
        datasets: [
            {data: graphData?.map((dataPoint) => dataPoint[1])}
        ]
    } 
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: "rgb(91, 25, 129)",
          },
          type: "dark",
        },
      });
  return (
    <ThemeProvider theme={darkTheme}> 
    <div className='coin-chart-container'>
        <div className='chart-buttons'>
            <Button className='num-buttons' onClick={handleNumOfDays} variant='contained' sx={{borderRadius: 10}} value={365} >Year</Button>
            <Button className='num-buttons' onClick={handleNumOfDays} variant='contained' sx={{borderRadius: 10}} value={30} >Month</Button>
            <Button className='num-buttons' onClick={handleNumOfDays} variant='contained' sx={{borderRadius: 10}} value={1} >Day</Button>
        </div>
        <div className='graph-container'>
            <div className='coin-graph'>
            { graphData 
                    ? <Line data={{ 
                        labels: graphData.map((dataPoint) => {
                            let date = new Date(dataPoint[0])
                            let time = date.getHours() > 12 
                                ? `${date.getHours() - 12}:${date.getMinutes()} pm`
                                : `${date.getHours()}:${date.getMinutes()} am`
                            return numDays === 1 ? time : date.toLocaleDateString() 
                        }),
                        datasets: [
                            {
                                // backgroundColor: 'rgb(61, 52, 148)',
                                borderColor: '#8250AD',
                                data: graphData.map((dataPoint) => dataPoint[1]),
                                label: `Price of ${coin.name} in ${symbol}`
                            }
                        ]  
                    }}
                    options={{
                        elements: {
                        point: {
                            radius: 1,
                        }
                        },
                        scales: {
                            y: {
                              ticks: { color: 'white', size: 20},
                              grid: {display: false, borderColor: 'white', borderWidth: 2}
                            },
                            x: {
                              ticks: { color: 'white'},
                              grid: {display: false, borderColor: 'white', borderWidth: 2}
                            }
                          }
                    }}

                    /> 
                    : <LoadingDashboard />
            }
            </div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default CoinChart