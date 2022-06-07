import { useSelector, useDispatch } from 'react-redux'
import { updateWap } from '../../../../../store/wap/wap.action'
import { ThemePreview } from './theme-preview'

export const SidebarTheme = ({ themeList }) => {
  const dispatch = useDispatch()
  const wap = useSelector((storeState) => storeState.wapModule.wap)

  const onSelectTheme = (theme) => {
    setTheme(wap, theme)
  }

  const setTheme = (wap, { colors, fontFamily }) => {
    dispatch(saveToHistory())
    wap = JSON.parse(JSON.stringify(wap))
    wap.cmps.forEach((cmp) => {
      cmp.style = { ...cmp.style, ...colors[cmp.themePalette], fontFamily }
    })

    dispatch(updateWap(wap))
  }

  return (
    <>
      {/* <h3 className='sidebar-action-text'>Choose a theme</h3> */}

      {themeList.map((theme) => {
        return <ThemePreview key={theme.id} theme={theme} onSelectTheme={onSelectTheme} />
      })}
    </>
  )
}
