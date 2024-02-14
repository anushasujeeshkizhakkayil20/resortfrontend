import React, { useEffect, useState } from 'react'
import SightCard from '../components/SightCard'
import { sighthomeAPI } from '../services/allAPI'

function SightSeeings() {

   //create a state
   const [homeSight,setHomeSight]=useState([])


  const getSight = async()=>{
    const result = await sighthomeAPI()
    console.log(result.data);
    setHomeSight(result.data)
  }
     useEffect(()=>{
        getSight()
     },[])
  return (
    <>
     <h1 className='text-center text-success mb-5 p-'>Tourist Spot</h1>
      <div>
    {homeSight?.length>0?
    homeSight?.map((item)=>( <div>
      <SightCard sight={item}/>
    </div>))
    :null}
    
    </div>
    </>
  )
}

export default SightSeeings