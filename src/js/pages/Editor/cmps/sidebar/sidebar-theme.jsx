import { useSelector, useDispatch } from 'react-redux'
import { setWap } from '../../../../store/wap/wap.action'
import { ThemeCmp } from './theme-cmp'

export const SidebarTheme = ({ themeList }) => {
  const dispatch = useDispatch()
  const wap = useSelector((storeState) => storeState.wapModule.wap)

  const onSelectTheme = (theme) => {
    console.log('on select theme')
    setTheme(wap, theme)
  }

  const setTheme = (wap, themeColors) => {
    wap.cmps.forEach((cmp) => {
      cmp.style = { ...cmp.style, ...themeColors[cmp.themePalette] }
    })
    dispatch(setWap(wap))
  }
  return (
    <>
      {/* <h3 className='sidebar-action-text'>Choose a theme</h3> */}

      {themeList.map((theme) => {
        return (
          <ThemeCmp
            key={theme.id}
            theme={theme}
            onSelectTheme={onSelectTheme}
          />
        )
      })}
    </>
  )
}
