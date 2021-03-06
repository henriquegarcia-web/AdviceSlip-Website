import styled from "styled-components"
import colors from "../../Utils/colors"

export const HomePage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: rgba(252, 227, 38, 1);
`

// ------------------------------------------------- CABEÇALHO

export const HeaderOverlayTrigger = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: ${props => props.active ? 'block' : 'none'};
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
`

// ------------------------------------------------- CONTEÚDO PRINCIPAL

export const AdviceMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
`

export const AdviceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  padding: 50px 30px;
`

export const AdviceCardIndex = styled.div`
  margin-bottom: 25px;

  font-size: 24px;
  font-weight: 200;
  user-select: none;

  color: ${colors.font_secondary};
`

export const AdviceCardMessege = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
`
// ------------------------------------------------- RODAPÉ

export const AdviceGenerateContainer = styled.section`
  position: absolute;
  z-index: 1;
  bottom: 40px;
  display: flex;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 100px;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 15px;
    transition: .4s;

    font-size: 16px;
    font-weight: 500;

    background-color: white;

    svg {
      font-size: 20px;
    }

    &:last-of-type {
      margin-right: 0;

      svg {
        margin-left: 8px;
      }
    }

    &:first-of-type {
      svg {
        margin-right: 8px;
      }
    }

    &:hover {
      transform: scale(1.04);
    }

  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    button {
      width: 100%;
      margin-bottom: 10px;
      justify-content: center;

      svg {
         display: none;
      }
    }
  }
`