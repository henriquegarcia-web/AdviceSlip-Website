import { useState } from 'react'
import * as S from './style'

import { TbArrowsShuffle } from 'react-icons/tb'
import { AiOutlineBgColors, AiOutlineFontColors, AiOutlineDownload } from 'react-icons/ai'
import { MdGTranslate } from 'react-icons/md'

import ColorChanger from '../ColorChanger'
const Header = () => {

  const [backgroundColorChangerState, setBackgroundColorChangerState] = useState(false)
  const [textColorChangerState, setTextColorChangerState] = useState(false)
  const [colorChangerMode, setColorChangerMode] = useState('') // 'background' ou 'text'

  const toogleColorChangerState = ( mode ) => {
    if (mode === 'background') {
      if (backgroundColorChangerState) {
        setBackgroundColorChangerState(!backgroundColorChangerState)
        return
      }
      setBackgroundColorChangerState(true)
      setTextColorChangerState(false)
    }
    else {
      if (textColorChangerState) {
        setTextColorChangerState(!textColorChangerState)
        return
      }
      setBackgroundColorChangerState(false)
      setTextColorChangerState(true)
    }

    setColorChangerMode(mode)
  }

  return (
    <S.Header>
      <S.HeaderItem><TbArrowsShuffle /></S.HeaderItem>
      <S.HeaderItem onClick={() => toogleColorChangerState('background')}><AiOutlineBgColors /></S.HeaderItem>
      <S.HeaderItem onClick={() => toogleColorChangerState('text')}><AiOutlineFontColors /></S.HeaderItem>
      <S.HeaderItem><AiOutlineDownload /></S.HeaderItem>
      <S.HeaderItem><MdGTranslate /></S.HeaderItem>

      <ColorChanger 
        mode={colorChangerMode} 
        activeBackground={backgroundColorChangerState} 
        activeText={textColorChangerState} 
      />
    </S.Header>
  )
}

export default Header