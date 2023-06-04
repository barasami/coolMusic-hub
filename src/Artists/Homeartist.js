import React, { useEffect, useState } from 'react'
import { getArtist } from './artist'
import { CircularProgress } from '@mui/material'
import './Artist.css'
import Myform from '../Forms/Myform'
import HeadphonesIcon from '@mui/icons-material/Headphones';

function Homeartist() {
    const[artist,setArtist]=useState([])
    const[myartist,setMyartist]=useState('50cent')
    const[load,setLoad]=useState(false)

    const UpdateArtist=(updated)=>{
      setMyartist(updated)
    }

    useEffect(()=>{
        setLoad(true)
        getArtist(myartist)
        .then(({data})=>{
            setArtist(data)
            setLoad(false)
            console.log(data);
        })
    },[myartist])

    let artists=artist?.artists
    let albums=artist?.albums
    let episodes=artist?.episodes
    let genres=artist?.genres
    let playlists=artist?.playlists
    let tracks=artist?.tracks
    let users=artist?.users
    let topResults=artist?.topResults
    
    
  return (
    <div className='results'>
      <div className='myresults'>
        <p className='title'><HeadphonesIcon className='head' color='success'/>MUSIC HUB</p>
        <div>
          <Myform UpdateArtist={UpdateArtist}/>
        </div>
      </div>
    </div>
  )
}

export default Homeartist