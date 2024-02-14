
import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"



//reg API
export const registerAPI =async(users)=>{
return await commonAPI('POST',`${BASE_URL}/user/register`,users,"")

}

//login Api
export const loginAPI=async(users)=>{
    return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")

}

//booking reg
 export const bookregisterAPI=async(bookingusers)=>{
    return await commonAPI('POST',`${BASE_URL}/book/register`,bookingusers,"")
}


//add resort Api
export const addResortAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/resort/add`,reqBody,reqHeader)

}

//homeresort
export const homeresortAPI=async()=>{
    return await commonAPI('GET',`${BASE_URL}/resort/home-resort`)
}

//alleresort get
export const allresortAPI=async(searchKey)=>{
    return await commonAPI('GET',`${BASE_URL}/resort/all-resort?search=${searchKey}`)
}
//user resort get
export const userResortAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/user/allresort`,"",reqHeader)
}

//edit resort
export const editResortAPI=async(resortId,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${BASE_URL}/resort/edit/${resortId}`,reqBody,reqHeader)
}

//delete resort

export const deleteUserResortAPI=async(resortId,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/resort/remove/${resortId}`,{},reqHeader)
}
 //add service
 export const addServiceAPI = async(reqBody,reqHeader)=>{
   return await commonAPI('post',`${BASE_URL}/serviceusers/add`,reqBody,reqHeader)
 }

//service get
export const serviceuserAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/serviceusers/service-user`,"",reqHeader)
}

//getuserservice
export const ServiceFacilityAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/serviceusers/allservice`,"",reqHeader)
}
//delete service
export const ServiceDeleteAPI = async(serviceId,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/serviceusers/remove/${serviceId}`,{},reqHeader)}

 //add sightviews
 export const sightAddAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/seens/add/`,reqBody,reqHeader)}

//get sight view
export const sighthomeAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/seens/sightview`,"",reqHeader)
}

//getbooking
export const bookAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/book/bookcustom`,"",reqHeader)
}

//deletebook
export const deletebookAPI=async(bookId,reqHeader)=>{
    return await commonAPI('DELETE',`${BASE_URL}/book/remove/${bookId}`,{},reqHeader)
}