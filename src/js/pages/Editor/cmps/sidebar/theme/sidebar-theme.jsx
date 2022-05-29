import { useSelector, useDispatch } from 'react-redux'
import { setWap } from '../../../../../store/wap/wap.action'
import { ThemePreview } from './theme-preview'

export const SidebarTheme = ({ themeList }) => {
  const dispatch = useDispatch()
  const wap = useSelector((storeState) => storeState.wapModule.wap)

  const onSelectTheme = (theme) => {
    console.log('on select theme',theme)
    setTheme(wap, theme)
  }

  const setTheme = (wap, {colors,fontFamily}) => {
    console.log(colors,fontFamily)
    wap.cmps.forEach((cmp) => {
      cmp.style = { ...cmp.style, ...colors[cmp.themePalette], fontFamily}
    })
    dispatch(setWap(wap))
  }


  return (
    <>
      {/* <h3 className='sidebar-action-text'>Choose a theme</h3> */}

      {themeList.map((theme) => {
        return (
          <ThemePreview
            key={theme.id}
            theme={theme}
            onSelectTheme={onSelectTheme}
          />
        )
      })}
    </>
  )
}
