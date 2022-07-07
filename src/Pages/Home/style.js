import styled from "styled-components"
import colors from "../../Utils/colors"

export const HomePage = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: rgba(252, 227, 38, 1);
`

export const AdviceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  height: 100%;
  
  /* border: 2px solid orange; */
`

export const AdviceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`

export const AdviceCardIndex = styled.div`
  margin-bottom: 25px;

  font-size: 24px;
  font-weight: 200;

  color: ${colors.font_secondary};
`

export const AdviceCardMessege = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
`

export const AdviceGenerateContainer = styled.div`
  position: absolute;
  bottom: 60px;
  display: flex;
  justify-content: center;

  button {
    padding: 8px 18px;
    border-radius: 100px;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 15px;

    font-size: 16px;
    font-weight: 500;

    background-color: white;

    &:last-of-type {
      margin-right: 0;
    }
  }
`