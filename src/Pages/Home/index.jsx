import React, { useState } from 'react'
import * as S from './style'
import { TbArrowsShuffle } from 'react-icons/tb'
import { AiOutlineBgColors, AiOutlineFontColors, AiOutlineDownload } from 'react-icons/ai'
import { MdGTranslate } from 'react-icons/md'

const HomePage = () => {

  const [mode, setMode] = useState('inOrder') // 'random' ou 'inOrder' --> 'random' estado inicial

  const data = {
    id: '54',
    advice: 'The more ideas that you give away, the more ideas that will come to you.'
  }

  return (
    <S.HomePage>

      {/* ------------------------------------------- CABEÇALHO ------ */}

      <S.AdviceHeaderContainer>
        <S.HeaderItem><TbArrowsShuffle /></S.HeaderItem>
        <S.HeaderItem><AiOutlineBgColors /></S.HeaderItem>
        <S.HeaderItem><AiOutlineFontColors /></S.HeaderItem>
        <S.HeaderItem><AiOutlineDownload /></S.HeaderItem>
        <S.HeaderItem><MdGTranslate /></S.HeaderItem>
      </S.AdviceHeaderContainer>
      
      {/* ------------------------------- CONTEÚDO PRINCIPAL ------ */}

      <S.AdviceMainContainer>
        <S.AdviceCard>
          <S.AdviceCardIndex>#{data.id}</S.AdviceCardIndex>
          <S.AdviceCardMessege>{data.advice}</S.AdviceCardMessege>
        </S.AdviceCard>
      </S.AdviceMainContainer>

      {/* ------------------------------------------- RODAPÉ ------ */}      

      <S.AdviceGenerateContainer>
        {mode === 'random' ? (
          <>
            <button>Generate Another Advice</button>
          </>
        ) : (
          <>
            <button>Previous Advice</button>
            <button>Next Advice</button>
          </>
        )}
      </S.AdviceGenerateContainer>

    </S.HomePage>
  )
}

export default HomePage