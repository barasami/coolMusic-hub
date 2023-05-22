import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import LyricsIcon from '@mui/icons-material/Lyrics';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import './Navbar.css'

function Navbar() {
  return (
    <div className='myNav'>
        <div className='items'>
            <div>
                <Link to='/'><HomeIcon/>Home</Link>
            </div>
            <div>
                <Link to='/Bil'><AudiotrackIcon/>BillHome</Link>
            </div>
            <div>
                <Link to='/Lyric'><LyricsIcon/>Lyrics</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar