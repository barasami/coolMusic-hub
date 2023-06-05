import React from 'react'
import './Footer.css'


function Footer() {
    let date=new Date()
    let fm=new Intl.DateTimeFormat('en-us',{
        dateStyle:'medium'
    })
    let format=fm.format(date)
  return (
    <div className='footer'>
        <div className='fword'>
          <div className='format'>
            <p className='myfooter'>{format}</p>
          </div>
          <div className='right'>
            <p>&copy;MusicHub all rights reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer