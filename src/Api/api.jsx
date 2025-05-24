import axios from "axios";

const api = axios.create({
  baseURL: 'https://dummyjson.com/'
})

export const getApiData = async (pageNumber) => {
  const limit = 5;
  const skip = (pageNumber - 1) * limit

  try {
    const res = await api.get(`/products?limit=${limit}&skip=${skip}`)
    return res.data
  } catch (error) {
    console.error("API Error:", error)
    throw error
  }
}
