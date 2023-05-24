import React, { useEffect, useState } from 'react'
import { getLyric } from './lyric'
import './Lyric.css'

function Lyrichome() {
    const[lyric,setLyric]=useState([])

    useEffect(()=>{
        getLyric()
        .then(({data})=>{
            setLyric(data)
            console.log(data);
        })
    },[])
  return (
    <div className='relative'>
      Lyrichome
    
    </div>
  )
}

export default Lyrichome