import React from 'react'
import { useState } from 'react'

function Lyricform() {
    const[song,setSong]=useState('')
    const[artist,setArtist]=useState('')

    const submitMe=(e)=>{
        e.preventDefault()
    }
    // if(!song || song === '')
    // return
    // else{
    //     console.log(song);
    // }

    // if(!artist || artist === '')
    // return
    // else{
    //     console.log(artist);
    // }
    
  return (
    <div>
        <form onSubmit={submitMe}>
            <div>
                <input type='text' placeholder='Song Name' required value={song} onChange={(e)=>e.target.value}/>
            </div>
            <div>
                <input type='text' placeholder='Artist' required value={artist} onChange={(e)=>e.target.value}/>
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    </div>
  )
}

export default Lyricform
