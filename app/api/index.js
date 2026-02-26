"use client"
const apiURL = process.env.NEXT_PUBLIC_API_URL
import axios from "axios"

const sendMessage = async (data) => {
  const response = await axios.post(apiURL+"/api/message", data)
  if(response.status !== 201){
    throw new Error(response.data.message || "Unknown error")
  }
  return response.data
}

export default { sendMessage };
