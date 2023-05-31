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
  return (
    <div className='relative'>Billhome</div>
  )
}

export default Billhome