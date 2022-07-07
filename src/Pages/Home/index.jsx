import React, { useState } from 'react'
import * as S from './style'

const HomePage = () => {

  const [mode, setMode] = useState('inOrder') // 'random' ou 'inOrder' --> 'random' estado inicial

  const data = {
    id: '54',
    advice: 'The more ideas that you give away, the more ideas that will come to you.'
  }

  return (
    <S.HomePage>
      
      <S.AdviceContainer>
        <S.AdviceCard>
          <S.AdviceCardIndex>#{data.id}</S.AdviceCardIndex>
          <S.AdviceCardMessege>{data.advice}</S.AdviceCardMessege>
        </S.AdviceCard>
      </S.AdviceContainer>

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