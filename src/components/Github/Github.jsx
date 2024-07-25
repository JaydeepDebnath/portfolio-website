import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [ data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/JaydeepDebnath')
    //     .then(response => response.json()) 
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])
    // console.log(data)
    return(
    <div className="text-center m-4 bg-gray-600 text-white p-4 px-2 py-3 rounded-xl">
    <img src={data.avatar_url} alt="Git profile" width={300} className="mx-auto rounded-full shadow-lg mb-4" />
    <h2 className="text-3xl mb-4" style={{fontFamily:"-moz-initial", fontWeight:"initial", color:'Window'}}>Location: {data.location}</h2>
    <h1 className="text-3xl mb-4" style={{fontFamily:"-moz-initial", fontWeight:"initial", color:'Window'}}>Github Repositories Count: {data.public_repos}</h1>
</div>
);
}

export default Github

export const githubInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/JaydeepDebnath')
    return response.json()

}

