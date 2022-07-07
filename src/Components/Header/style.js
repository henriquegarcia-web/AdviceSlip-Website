import styled from "styled-components"
import colors from "../../Utils/colors"

export const Header = styled.div`
  position: absolute;
  z-index: 3;
  top: 20px;
  display: flex;
  justify-content: center;

  /* border: 2px solid rebeccapurple; */
`

export const HeaderItem = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  margin-right: 10px;
  cursor: pointer;

  background: white;

  svg {
    font-size: 22px;

    color: ${colors.font_icons};
  }

  &:last-of-type {
    margin-right: 0;
  }
`