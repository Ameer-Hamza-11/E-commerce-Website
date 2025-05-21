import axios from "axios";

export const getApiData = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
  } catch (error) {
    console.error("API Error:", error)
    throw error 
  }
}
