import React, { useEffect, useState } from 'react'
import { getArtist } from './artist'
import { CircularProgress, Paper } from '@mui/material'
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
            console.log(data);
            setLoad(false)
        })
    },[myartist])

    let artists=artist?.artists?.items
    let albumss=artist?.items?.items
    let episodes=artist?.episodes?.items
    let genres=artist?.genres?.items
    let playlists=artist?.playlists?.items
    let tracks=artist?.tracks?.items

    let topFeature=artist?.topResults?.featured
    let topItems=artist?.topResults?.items

    const Myplaylist=playlists?.map(({data} )=>{
      return(
      <div key={data.id}>
        <div>
          {data.name}
        </div>
        <div>
          {data.description}
        </div>
        
      </div>)

    })

    const Myartists=artists?.map(({data})=>{

      return(
        <div>
          <div>
            {data.profile.name}
          </div>
        </div>
      )
    })

    

  
  

    

    
  return (
    <div className='results'>
      <div className='myresults'>
        <p className='title'><HeadphonesIcon className='head' color='inherit'/>{title}</p>
        <div>
          <Myform UpdateArtist={UpdateArtist}/>
        </div>
        <div className='body'>
          <div>
           {Myplaylist}
          </div>
          <div>
            {Myartists}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homeartist