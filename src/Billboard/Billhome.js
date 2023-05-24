import React, { useEffect, useState } from 'react'
import { myBillbord } from './billboard'

function Billhome() {
    const[bill,setbill]=useState([])

    useEffect(()=>{
        myBillbord()
        .then(({data})=>{
            setbill(data)
            console.log(data);
        })
    },[])
  return (
    <div className='relative'>Billhome</div>
  )
}

export default Billhome