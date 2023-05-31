import React, { useEffect, useState } from 'react'
import { getLyric } from './lyric'
import './Lyric.css'
import Lyricform from '../Forms/Lyricform'


function Lyrichome() {
    const[lyric,setLyric]=useState([])
    const[load,setLoad]=useState(false)

    const[mysong,setSong]=useState('Gods plan')
    const[myartist,setArtist]=useState('Drake')

    useEffect(()=>{
        setLoad(true)
        getLyric(mysong,myartist)
        .then(({data})=>{
            setLyric(data)
            setLoad(false)
            console.log(data);
        })
    },[mysong,myartist])

    const artist=lyric?.artist 
    const song =lyric?.song 
    const lyrics=lyric?.lyrics

    const getArtists=(artist)=>{
      setArtist(artist)
    }
    const getSongs=(song)=>{
      setSong(song)
    }

  return (
    <div className='relative'>
      <div className='alignment'>
        <div className='ptitle'>
          <h3 className='title'>Lyrics Hub</h3>
        </div>
        <div>
          <Lyricform getArtists={getArtists}
          getSongs={getSongs}/>
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