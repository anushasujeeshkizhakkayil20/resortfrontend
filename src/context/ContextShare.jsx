import React, { createContext, useState} from 'react'



//services
export const addServiceResponseContext =createContext()

export const addResortResponseContext = createContext()
export const editResortResponseContext =createContext()


function ContextShare({children}) {
    //childern predefinde props use to all data
    //data to share
    const [addResortResponse,setAddResortResponse]=useState({})
    const [editResortResponse,setEditResortResponse]=useState({})
    //service
    const[addServiceResponse,setAddServiceResponse]=useState({})
    

  return (
    <>
  <addResortResponseContext.Provider value={{addResortResponse,setAddResortResponse}}>
    <editResortResponseContext.Provider value={{editResortResponse,setEditResortResponse}}>
   < addServiceResponseContext.Provider value={{addServiceResponse,setAddServiceResponse}}>
  {children}
  </addServiceResponseContext.Provider>
  </editResortResponseContext.Provider>
  </addResortResponseContext.Provider>
  </>
  )
}

export default ContextShare