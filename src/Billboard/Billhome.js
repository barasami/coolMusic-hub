import React, { useEffect, useState } from 'react'
import { myBillbord } from './billboard'

function Billhome() {
    const[bill,setbill]=useState([])
    const[load,setLoad]=useState(false)

    useEffect(()=>{
        setLoad(true)
        myBillbord()
        .then(({data})=>{
            setbill(data)
            setLoad(false)
            console.log(data);
        })
    },[])

    const mydownload =bill?.result?.list
    
    const Colldownload=mydownload?.map((data)=>{
      const{album,album_image}=data
      return(
        <div key={album}>
          <div>{album}</div>
          <div>
            <img src={album_image} alt={album}/>
          </div>
        </div>
      )
    })
  return (
    <div className='relative'>
      {Colldownload}
    </div>
  )
}

export default Billhome