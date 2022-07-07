import axios from "axios"

export const getData = async () => {
  let res = await axios.get('https://api.adviceslip.com/advice')
  return res.data
}

export const getDataByID = async (id) => {
  let res = await axios.get(`https://api.adviceslip.com/advice/${id}`)
  return res.data
}
