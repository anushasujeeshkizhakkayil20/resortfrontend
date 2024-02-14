
import { BASE_URL } from "./baseURL.js"
import { commonAPI } from "./commonAPI"



//booking reg
export const bookregisterAPI=async(bookingusers)=>{
    return await commonAPI('POST',`${BASE_URL}/book/register`,bookingusers,"")
}


//booking login
export const bookloginAPI=async(bookingusers)=>{
    return await commonAPI('POST',`${BASE_URL}/book/login`,bookingusers,"")
}