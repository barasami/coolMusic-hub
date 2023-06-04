import React, { useState } from 'react'
import './Form.css'

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
    <div className='coolform'>
        <form onSubmit={mysubMit} className='form'>
            <div className='mydivs' >
                <input type='text' placeholder='Artist....'  className='txt'
                value={artist} onChange={(e)=>setArtist(e.target.value)}/>
            </div>
            <div className='mydivs'>
                <button className='btn'>search</button>
            </div>
        </form>
    </div>
  )
}

export default Myform