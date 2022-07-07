import { useState } from 'react'
import * as S from './style'

import { TbArrowsShuffle } from 'react-icons/tb'
import { AiOutlineBgColors, AiOutlineFontColors, AiOutlineDownload } from 'react-icons/ai'

import ColorChanger from '../ColorChanger'

import { useEffect } from 'react'

const Header = ({ mode, setMode, handleCaptureClick }) => {

  const [currentMode, setCurrentMode] = useState()

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

  useEffect(() => {
    setMode(currentMode)
  }, [currentMode])

  return (
    <S.Header>

      {/* ----------------------------------------------- ITEMS DO HEADER */}

      <S.HeaderItem active={currentMode} onClick={() => setCurrentMode(!currentMode)}>
        <TbArrowsShuffle />
      </S.HeaderItem>
      <S.HeaderItem onClick={() => toogleColorChangerState('background')}>
        <AiOutlineBgColors />
      </S.HeaderItem>
      <S.HeaderItem onClick={() => toogleColorChangerState('text')}>
        <AiOutlineFontColors />
      </S.HeaderItem>
      <S.HeaderItem onClick={() => handleCaptureClick()}>
        <AiOutlineDownload />
      </S.HeaderItem>
      
      {/* ----------------------------------------------- CONTÂINER DE TROCA DE CORES */}

      <ColorChanger 
        mode={colorChangerMode} 
        activeBackground={backgroundColorChangerState} 
        activeText={textColorChangerState} 
      />

    </S.Header>
  )
}

export default Header