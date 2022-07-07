import { useCallback, useEffect, useState } from 'react'
import * as S from './style'

import Header from '../../Components/Header'

import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import getData from '../../Services/api'

const HomePage = () => {

  const [mode, setMode] = useState(false) // 'random' --> true / 'inOrder' --> false

  const [currentSlip, setCurrentSlip] = useState()

  const handleCaptureClick = useCallback(async () => {
    const pricingTableElmt = document.querySelector('.advice_card')
    if (!pricingTableElmt) return

    const canvas = await html2canvas(pricingTableElmt)
    const dataURL = canvas.toDataURL('image/png')
    downloadjs(dataURL, 'download.png', 'image/png')
  }, [])

  const getCurrentData = async () => {
    const slipData = await getData()
    setCurrentSlip(slipData)
  }

  useEffect(() => {
    getCurrentData()
      .catch(console.error)
  }, [])
  
  return (
    <S.HomePage id='background'>

      {/* ----------------------------------------------- CABEÇALHO */}

      <Header mode={mode} setMode={setMode} handleCaptureClick={handleCaptureClick} />
      
      {/* ----------------------------------------------- CONTEÚDO PRINCIPAL */}

      <S.AdviceMainContainer>
        <S.AdviceCard className='advice_card'>
          <S.AdviceCardIndex>#{currentSlip?.slip.id}</S.AdviceCardIndex>
          <S.AdviceCardMessege id='text'>{currentSlip?.slip.advice}</S.AdviceCardMessege>
        </S.AdviceCard>
      </S.AdviceMainContainer>

      {/* ----------------------------------------------- RODAPÉ */}      

      <S.AdviceGenerateContainer>
        {mode ? (
          <>
            <button onClick={getCurrentData}>Generate Another Advice</button>
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