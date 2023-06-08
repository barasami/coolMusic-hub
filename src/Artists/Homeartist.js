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
    let episodes=artist?.episodes?.items
    let playlists=artist?.playlists?.items
    let tracks=artist?.tracks?.items

    let podcast=artist?.podcasts?.items

    let topFeature=artist?.topResults?.featured

    //episodes
    const Myepisodes=episodes?.map((data)=>{
      return(
        <div>
          <div className='title'>Episodes</div>
          <div className='name'>{data.name}</div>
          <div>{data.description}</div>
        </div>
      )
    })

    //podcasts

    const Mypodcasts=podcast?.map((data)=>{
      return(
        <div>
          <div className='title'>Podcast</div>
          <div className='name'>{data.name}</div>
          <div>{data.mediaType}</div>
          <div>{data.type}</div>
        </div>
      )
    })
    
    //features
    const Myfeature=topFeature?.map((data)=>{
      return(
        <div>
          <div className='title'>Feature</div>
          <div className='name'>{data.name}</div>
          <div>{data.description}</div>
          
        </div>
      )
    })

    //albums
    const Myalbums=albumss?.map((data)=>{
      return(
        <div>
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

    //tracks
    const Mytracks=tracks?.map((data)=>{
      let playable=data.playability?.playable
      return(
        <div>
          <div className='title'>Tracks</div>
          <div className='name'>{data.name}</div>
          <div>{playable}</div>
        </div>
      )
    })

     //myartists
    const Myartists=artists?.map(({data})=>{

      return(
        <div>
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
          <div className='tracks'>
            {Mytracks}
          </div>
          <div>
            {Myfeature}
          </div>
          <div>
            {Myalbums}
          </div>
          <div>
            {Myepisodes}
          </div>
          <div>
            {Mypodcasts}
          </div>
      </div>
      }
      </div>
    </div>
  )
}

export default Homeartist