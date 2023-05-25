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
          <p className='myfooter'>{format}</p>
        </div>
    </div>
  )
}

export default Footer