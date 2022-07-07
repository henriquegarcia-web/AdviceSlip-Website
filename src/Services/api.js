import axios from "axios"

const getData = async () => {
  let res = await axios.get('https://api.adviceslip.com/advice')
  return res.data
}

export default getData