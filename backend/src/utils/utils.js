import axios from "axios";

const getCSRFToken = () => {
    let csrfToken
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
        const crumbs = cookie.split('=')
        if (crumbs[0].trim() === 'csrftoken') {
            csrfToken = crumbs[1]
        }
    }
    return csrfToken
}

axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

const logOut = async () => {
    console.log('-------log out --------')
    const response = await axios.post('/logout')
}

export {
    getCSRFToken,
    logOut
}