import styled from "styled-components"
import colors from "../../Utils/colors"

export const Header = styled.div`
  position: absolute;
  z-index: 3;
  top: 20px;
  display: flex;
  justify-content: center;
`

export const HeaderItem = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  margin-right: 8px;
  cursor: pointer;

  background: white;
  border: 2px solid ${props => props.active ? 'black' : 'transparent'};

  svg {
    font-size: 22px;

    color: ${colors.font_icons};
  }

  &:last-of-type {
    margin-right: 0;
    margin-left: 10px;
  }

  &:nth-of-type(1) {
    margin-right: 20px;
  }

  &.color_changer {
    z-index: 100;
  }

  &:hover {
    transform: scale(1.04);
  }
`