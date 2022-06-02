import { useDispatch, useSelector } from 'react-redux'
import { updateCmp } from '../../../../../store/wap/wap.action'

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import { EditSlider } from './edit-slider'

import { EditOptions } from './edit-options'
import { useEffect } from 'react'

export const TxtEditor = () => {
  const dispatch = useDispatch()
  const { selectedCmp } = useSelector((storeState) => storeState.wapModule)

  useEffect(() => {}, [selectedCmp])

  const onChangeFontWeight = () => {
    const fontWeightType =
      selectedCmp.style.fontWeight === 'bold' ||
      selectedCmp.style.fontWeight === '700'
        ? 'normal'
        : 'bold'
    selectedCmp.style = {
      ...selectedCmp.style,
      fontWeight: fontWeightType,
    }

    dispatch(updateCmp(selectedCmp))
  }

  const onChangeFontFormat = () => {
    const fontFormatType =
      selectedCmp.style.fontStyle === 'italic' ? 'normal' : 'italic'
    selectedCmp.style = {
      ...selectedCmp.style,
      fontStyle: fontFormatType,
    }
    dispatch(updateCmp(selectedCmp))
  }
  const onChangeTextDeco = () => {
    const fontDecoType =
      selectedCmp.style.textDecoration === 'underline' ? 'none' : 'underline'
    selectedCmp.style = {
      ...selectedCmp.style,
      textDecoration: fontDecoType,
    }
    dispatch(updateCmp(selectedCmp))
  }

  const onChangeStyling = (type, value) => {
    if (type === 'fontSize') value = `${value / 16}rem`
    if (selectedCmp.style && value === selectedCmp.style[type]) return
    selectedCmp.style = { ...selectedCmp.style, [type]: value }

    dispatch(updateCmp(selectedCmp))
  }

  const currStyles = {
    txtAlign: selectedCmp?.style?.textAlign,
    txtBold: selectedCmp?.style?.fontWeight,
    fontStyle: selectedCmp?.style?.fontStyle,
    txtDeco: selectedCmp?.style?.textDecoration,
    txtShadow: selectedCmp?.style?.textShadow,
    fontFamily: selectedCmp?.style?.fontFamily,
  }

  return (
    <section className='txt-editor-container'>
      {selectedCmp.type === 'txt' && (
        <>
          <div className='txt-align-container'>
            <p>Align</p>
            <div className='txt-icons-container'>
              <span
                onClick={() => onChangeStyling('textAlign', 'left')}
                className={`${currStyles.txtAlign === 'left' ? 'active' : ''}`}
              >
                <FormatAlignLeftIcon />
              </span>
              <span
                onClick={() => onChangeStyling('textAlign', 'center')}
                className={`${
                  !currStyles.txtAlign || currStyles.txtAlign === 'center'
                    ? 'active'
                    : ''
                }`}
              >
                <FormatAlignCenterIcon />
              </span>
              <span
                onClick={() => onChangeStyling('textAlign', 'right')}
                className={`${currStyles.txtAlign === 'right' ? 'active' : ''}`}
              >
                <FormatAlignRightIcon />
              </span>
            </div>
          </div>
          <div className='txt-deco-container'>
            <p>Decoration</p>
            <div className='txt-deco-icons-container'>
              <span
                onClick={() => onChangeFontWeight()}
                className={`${
                  currStyles.txtBold === 'bold' || currStyles.txtBold === '700'
                    ? 'active'
                    : ''
                }`}
              >
                <FormatBoldIcon />
              </span>
              <span
                onClick={() => onChangeFontFormat()}
                className={`${
                  currStyles.fontStyle === 'italic' ? 'active' : ''
                }`}
              >
                <FormatItalicIcon />
              </span>
              <span
                onClick={() => onChangeTextDeco()}
                className={`${
                  currStyles.txtDeco === 'underline' ? 'active' : ''
                }`}
              >
                <FormatUnderlinedIcon />
              </span>
            </div>
          </div>
          <div className='txt-slider-container'>
            <p>Font Size</p>
            <EditSlider
              isFontSize={true}
              onChangeStyling={onChangeStyling}
              selectedCmp={selectedCmp}
            />
          </div>
        </>
      )}
      <div className='txt-slider-container'>
        <p>Border Radius</p>
        <EditSlider
          isFontSize={false}
          onChangeStyling={onChangeStyling}
          selectedCmp={selectedCmp}
        />
      </div>
      {selectedCmp.type === 'txt' && (
        <>
          <div className='txt-type-container'>
            <p>Font</p>
            <EditOptions
              onChangeStyling={onChangeStyling}
              isFontType={true}
              currFontType={currStyles.fontFamily}
            />
          </div>
          <div className='txt-shadow-container'>
            <p>Font Shadow</p>
            <EditOptions
              onChangeStyling={onChangeStyling}
              isFontType={false}
              currTxtShadow={currStyles.txtShadow}
            />
          </div>
        </>
      )}
    </section>
  )
}
