// Themes
import { themes } from '../temaplates-example/themes/themes'



const getThemes = () => {
  return themes
}

const getThemeByCategory = (category) => {
  console.log(themes)
  console.log(themes[category])
  // return themes[category]
}

export const themeService = {
  getThemes,
  getThemeByCategory,
}
