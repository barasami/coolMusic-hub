import React, { useEffect, useState } from 'react'
import { getArtist } from './artist'
import { CircularProgress } from '@mui/material'
import './Artist.css'

function Homeartist() {
    const[artist,setArtist]=useState([])
    const[load,setLoad]=useState(false)

    useEffect(()=>{
        setLoad(true)
        getArtist()
        .then(({data})=>{
            setArtist(data)
            setLoad(false)
            console.log(data);
        })
    },[])

    let artists=artist?.artists
    let albums=artist?.albums?.items
    let episodes=artist?.episodes
    let genres=artist?.genres
    let playlists=artist?.playlists?.items
    let tracks=artist?.tracks
    let users=artist?.users
    let topResults=artist?.topResults
    
    
  return (
    <div className='relative'>
      <div className='myhome'>
        <p className='title'>MUSIC HUB</p>
        <div>
          {Mycoleps}
        </div>
      </div>
    </div>
  )
}

export default Homeartist