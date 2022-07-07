import { useCallback, useState } from 'react'
import * as S from './style'

import Header from '../../Components/Header'

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const HomePage = () => {

  const [mode, setMode] = useState(false) // 'random' --> true / 'inOrder' --> false

  const data = {
    id: '54',
    advice: 'The more ideas that you give away, the more ideas that will come to you.'
  }

  const handleCaptureClick = useCallback(async () => {
    const pricingTableElmt = document.querySelector('.advice_card')
    if (!pricingTableElmt) return

    const canvas = await html2canvas(pricingTableElmt)
    const dataURL = canvas.toDataURL('image/png')
    downloadjs(dataURL, 'download.png', 'image/png')
  }, [])

  return (
    <S.HomePage id='background'>

      {/* ----------------------------------------------- CABEÇALHO */}

      <Header mode={mode} setMode={setMode} handleCaptureClick={handleCaptureClick} />
      
      {/* ----------------------------------------------- CONTEÚDO PRINCIPAL */}

      <S.AdviceMainContainer>
        <S.AdviceCard className='advice_card'>
          <S.AdviceCardIndex>#{data.id}</S.AdviceCardIndex>
          <S.AdviceCardMessege id='text'>{data.advice}</S.AdviceCardMessege>
        </S.AdviceCard>
      </S.AdviceMainContainer>

      {/* ----------------------------------------------- RODAPÉ */}      

      <S.AdviceGenerateContainer>
        {mode ? (
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