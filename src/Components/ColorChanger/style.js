import styled from "styled-components"
import colors from "../../Utils/colors"

export const ColorChangerContainer = styled.div`
  position: absolute;
  top: 100%;
  display: ${props => props.active ? 'flex' : 'none'};
  margin-top: 15px;
`

export const ColorChangerOverlayTrigger = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.1);
`

export const ColorChanger = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;

  background: white;
`

export const ColorChangerHeader = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0;
  margin-bottom: 8px;
  user-select: none;

  color: ${colors.font_secondary};
`

export const ColorChangerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Color = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100px;
  cursor: pointer;
  margin-right: 6px;

  background: ${props => props.color};
  border: 2px solid transparent;

  &:last-of-type {
    margin-right: 0;
  }
`