export const ThemeCmp = ({ theme, onSelectTheme }) => {
  return (
    <section
      className='theme-container'
      onClick={() => onSelectTheme(theme.colors)}
    >
      <div className='theme-header-info'>
        <p className='theme-header'>{theme.name}</p>
        <p className='theme-description'>{theme.description}</p>
      </div>
      <div className='theme-colors-container'>
        {Object.entries(theme.colors).map((color, idx) => {
          return (
            <div
              key={theme.id + idx}
              style={{
                flexBasis: '60%',
                height: '15px',
                width: '100px',
                backgroundColor: color[1].backgroundColor,
              }}
            ></div>
          )
        })}
      </div>
    </section>
  )
}
