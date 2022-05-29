export const ThemeCmp = ({ theme, onSelectTheme }) => {
  return (
    <section
      className='theme-container'
      onClick={() => onSelectTheme(theme)}
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
                // flexBasis: '60%',
                height: '15px',
                // idth: '100px',
                backgroundColor: color[1].background,
              }}
            ></div>
          )
        })}
      </div>
    </section>
  )
}
