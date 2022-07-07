import * as S from './style'

const ColorChanger = ({ mode, activeBackground, activeText }) => {

  const colors = [
    { id: '1', color: 'rgba(252, 227, 38, 1)' },
    { id: '2', color: 'rgba( 66, 227, 245, 1)' },
    { id: '3', color: 'red' },
    { id: '4', color: 'orangered' },
    { id: '5', color: 'green' },
    { id: '6', color: 'purple' },
    { id: '7', color: 'pink' },
    { id: '8', color: 'black' },
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