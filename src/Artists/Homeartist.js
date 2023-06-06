import React, { useEffect, useState } from 'react'
import { getArtist } from './artist'
import { CircularProgress } from '@mui/material'
import './Artist.css'
import Myform from '../Forms/Myform'
import HeadphonesIcon from '@mui/icons-material/Headphones';

function Homeartist() {
    let title='MUSIC HUB'
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
        })
    },[myartist])

    let artists=artist?.artists
    let albumss=artist?.albums
    let episodes=artist?.episodes
    let genres=artist?.genres
    let playlists=artist?.playlists
    let tracks=artist?.tracks?.items
    let topResults=artist?.topResults


    
    

    

    
    
    
    
    
  return (
    <div className='results'>
      <div className='myresults'>
        <p className='title'><HeadphonesIcon className='head' color='inherit'/>{title}</p>
        <div>
          <Myform UpdateArtist={UpdateArtist}/>
        </div>
        <div className='body'>
          <div>
           {}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homeartist