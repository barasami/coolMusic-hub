import React, { useState } from 'react'

function Myform({UpdateArtist}) {

    const[artist,setArtist]=useState('')

    const mysubMit=(e)=>{
        e.preventDefault()
        if(!artist || artist === ' ')
        return
        setArtist(UpdateArtist)
        setArtist( ' ')
    }
  return (
    <div>
        <form onSubmit={mysubMit}>
            <div>
                <input type='text' placeholder='Artist' 
                value={artist} onChange={(e)=>setArtist(e.target.value)}/>
            </div>
            <div>
                <button>search</button>
            </div>
        </form>
    </div>
  )
}

export default Myform