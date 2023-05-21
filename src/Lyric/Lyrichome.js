import React, { useEffect, useState } from 'react'
import { getLyric } from './lyric'

function Lyrichome() {
    const[lyric,setLyric]=useState([])

    useEffect(()=>{
        getLyric()
        .then((data)=>{
            setLyric(data)
            console.log(data);
        })
    },[])
  return (
    <div>Lyrichome</div>
  )
}

export default Lyrichome