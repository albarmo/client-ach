const baseUrl = 'http:/localhost:5000'

export const login = (email,password) => {
    return(dispatch) => {
        fetch(`${baseUrl}/user/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data, "<<< data fetch login")
        })
        .catch(error => {
            console.log(error, '<<< error while login')
        })
    }
}

export const register = (email, password) => {
    return (dispatch) => {
        fetch(`${baseUrl}/user/register`,{
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data, '<<< data register')
        })
        .catch(error => {
            console.log(error, '<<< error while register')
        }) 
    }
}