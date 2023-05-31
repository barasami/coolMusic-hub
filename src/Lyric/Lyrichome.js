import React, { useEffect, useState } from 'react'
import { getLyric } from './lyric'
import './Lyric.css'
import Lyricform from '../Forms/Lyricform'


function Lyrichome() {
    const[lyric,setLyric]=useState([])
    const[load,setLoad]=useState(false)

    useEffect(()=>{
        setLoad(true)
        getLyric()
        .then(({data})=>{
            setLyric(data)
            setLoad(false)
            console.log(data);
        })
    },[])

    const artist=lyric?.artist 
    const song =lyric?.song 
    const lyrics=lyric?.lyrics

  return (
    <div className='relative'>
      <div className='alignment'>
        <div className='ptitle'>
          <h3 className='title'>Lyrics Hub</h3>
        </div>
        <div>
          <Lyricform/>
        </div>
        <div>
          <div>
            {artist}
          </div>
          <div>
            {song}
          </div>
        </div>
        <div className='content'>
         <p className='paragraph'>
          {lyrics}
         </p>
        </div>
     </div>
    
    </div>
  )
}

export default Lyrichome