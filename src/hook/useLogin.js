import { useState } from 'react'

export function useLogin() {
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(null);


    const Login = (username , password) => {
        setLoading(true)
        setData(null)
        setError(null)
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'username': username,
            'password': password
        });

        axios.post('http://localhost:8080/checklogin', data)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setData(response.data)
                setLoading(false)
            })

            .catch(function (error) {
                console.log(error);

            });

    }
    return {data , error , loading , Login}
}