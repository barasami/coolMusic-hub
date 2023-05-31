import React from 'react'
import { useState } from 'react'

function Lyricform({getArtists,getSongs}) {
    const[song,setSong]=useState('')
    const[artist,setArtist]=useState('')

    const submitMe=(e)=>{
        e.preventDefault()

        if(!song || song === '')
        return
        else{
            getSongs(song);
            setSong(' ')
        }

        if(!artist || artist === '')
        return
        else{
            getArtists(artist);
            setArtist( ' ')
        }
    }
    
    
  return (
    <div>
        <form onSubmit={submitMe}>
            <div>
                <input type='text' placeholder='Song Name' required value={song} onChange={(e)=>setSong(e.target.value)}/>
            </div>
            <div>
                <input type='text' placeholder='Artist' required value={artist} onChange={(e)=>setArtist(e.target.value)}/>
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    </div>
  )
}

export default Lyricform
