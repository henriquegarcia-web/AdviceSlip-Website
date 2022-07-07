import { useState } from 'react'
import * as S from './style'

import Header from '../../Components/Header'

const HomePage = () => {

  const [mode, setMode] = useState('inOrder') // 'random' ou 'inOrder' --> 'random' estado inicial

  const data = {
    id: '54',
    advice: 'The more ideas that you give away, the more ideas that will come to you.'
  }

  return (
    <S.HomePage id='background'>

      {/* ------------------------------------------- CABEÇALHO ------ */}

      <Header />
      
      {/* ------------------------------- CONTEÚDO PRINCIPAL ------ */}

      <S.AdviceMainContainer>
        <S.AdviceCard>
          <S.AdviceCardIndex>#{data.id}</S.AdviceCardIndex>
          <S.AdviceCardMessege id='text'>{data.advice}</S.AdviceCardMessege>
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