import { useCallback, useEffect, useState } from 'react'
import * as S from './style'

import Header from '../../Components/Header'

import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import { getData, getDataByID } from '../../Services/api'

const HomePage = () => {

  const [mode, setMode] = useState(false) // 'random' --> true / 'inOrder' --> false

  const [currentSlipCounter, setCurrentSlipCounter] = useState(1)
  const [currentSlip, setCurrentSlip] = useState()

  const handleCaptureClick = useCallback(async () => {
    const pricingTableElmt = document.querySelector('.advice_card')
    if (!pricingTableElmt) return

    const canvas = await html2canvas(pricingTableElmt)
    const dataURL = canvas.toDataURL('image/png')
    downloadjs(dataURL, 'download.png', 'image/png')
  }, [])

  const getRandomData = async () => {
    const slipData = await getData()
    setCurrentSlip(slipData)
  }

  const getEspecificData = async (id) => {
    const slipData = await getDataByID(id)
    setCurrentSlip(slipData)
  }

  useEffect(() => {
    if (mode) {
      getRandomData()
        .catch(console.error)
      return
    }
    getEspecificData(currentSlipCounter)
  }, [mode, currentSlipCounter])
  
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
            <button onClick={getRandomData}>Generate Another Advice</button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                if (currentSlipCounter === 1) return
                setCurrentSlipCounter(currentSlipCounter - 1)
              }}
            >Previous Advice</button>
            <button
              onClick={() => {
                setCurrentSlipCounter(currentSlipCounter + 1)
              }}
            >Next Advice</button>
          </>
        )}
      </S.AdviceGenerateContainer>

    </S.HomePage>
  )
}

export default HomePage