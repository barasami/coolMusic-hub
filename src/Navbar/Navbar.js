import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import LyricsIcon from '@mui/icons-material/Lyrics';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import './Navbar.css'

function Navbar() {
    const yr=new Date().getFullYear()
  return (
    <div className='myNav'>
        <div className='items'>
            <div>
                <p className='title'>Cool Music Hub</p>
            </div>
            <hr className='hr'></hr>
            <div className='home'>
                <Link to='/' className='links'><HomeIcon color='secondary'/>Home</Link>
            </div>
            <hr className='hrhub'></hr>
            <div className='chub'>
                <blockquote className='hub'>"your coolest music hub"</blockquote>
            </div>
            <div className='mycopy'>
                <p className='copy'>&copy;MusicHub,{yr}all rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar