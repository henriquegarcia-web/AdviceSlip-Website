import styled from "styled-components"
import colors from "../../Utils/colors"

export const ColorChanger = styled.div`
  position: absolute;
  top: 100%;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;

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