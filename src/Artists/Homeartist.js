import React, { useEffect, useState } from 'react'
import { getArtist } from './artist'

function Homeartist() {
    const[artist,setArtist]=useState([])

    useEffect(()=>{
        getArtist()
        .then(({data})=>{
            setArtist(data)
            console.log(data);
        })
    },[])
  return (
    <div className='relative'>Homeartist</div>
  )
}

export default Homeartist