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
            console.log(data);
            setLoad(false)
        })
    },[myartist])

    let artists=artist?.artists?.items
    let albumss=artist?.items?.items
    let playlists=artist?.playlists?.items
    

    //albums
    const Myalbums=albumss?.map((data)=>{
      return(
        <div  key={data.id} className='albums'>
          <div className='title'>Albums</div>
          <div className='name'>{data.name}</div>
          <div>{data.date.year}</div>
        </div>
      )
    })

    //playlist
    const Myplaylist=playlists?.map(({data} )=>{
      return(
      <div key={data.id}>
        <div className='title'>Playlist</div>
        <div className='name'>
          {data.name}
        </div>
        <div>
          {data.description}
        </div>
        
      </div>)

    })

    

     //myartists
    const Myartists=artists?.map(({data})=>{

      return(
        <div  key={data.id}>
          <div className='title'> Artists</div>
          <div className='name'>
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
        {load ? <CircularProgress color='inherit' className='circular'/> : 
        <div className='body'>
          <div className='playlist'>
           {Myplaylist}
          </div>
          <div className='artist'>
            {Myartists}
          </div>
          <div className='album'>
            {Myalbums}
          </div>
         
      </div>
      }
      </div>
    </div>
  )
}

export default Homeartist