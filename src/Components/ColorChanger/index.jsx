import * as S from './style'

const ColorChanger = ({ mode, activeBackground, activeText }) => {

  const colors = [
    { id: '1', color: 'rgba(252, 227, 38, 1)' },
    { id: '2', color: 'rgba( 66, 227, 245, 1)' },
    { id: '3', color: 'rgba(255, 71, 51, 1)' },
    { id: '4', color: 'rgba(255, 180, 51, 1)' },
    { id: '5', color: 'rgba(51, 255, 92, 1)' },
    { id: '6', color: 'rgba(173, 51, 255, 1)' },
    { id: '7', color: 'rgba(255, 51, 238, 1)' },
  ]

  return (
    <S.ColorChanger active={activeBackground || activeText}>
      <S.ColorChangerHeader>
        {mode === 'background' ? (
          'Change background color'
        ) : (
          'Change font color'
        )}
      </S.ColorChangerHeader>
      <S.ColorChangerWrapper>
        {colors.map(({ id, color }) => (
          <S.Color 
            key={id}
            color={color}
            onClick={(e) => {
              const background = document.getElementById(mode)
              const card = document.querySelector('.advice_card')

              if (mode === 'background') {
                background.style.background = color
                card.style.background = color
                return
              }
              
              background.style.color = color
            }}
          ></S.Color>
        ))}
      </S.ColorChangerWrapper>
    </S.ColorChanger>
  )
}

export default ColorChanger