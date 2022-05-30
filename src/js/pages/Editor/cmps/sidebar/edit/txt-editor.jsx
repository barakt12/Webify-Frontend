import { useDispatch, useSelector } from 'react-redux'
import { wapService } from '../../../../../services/wap-service'
import { setWap } from '../../../../../store/wap/wap.action'

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import { EditSlider } from './edit-slider'

import { EditOptions } from './edit-options'
import { useEffect, useState } from 'react'

export const TxtEditor = () => {
  const _ = require('lodash')
  const dispatch = useDispatch()
  const { wap, selectedElement } = useSelector(
    (storeState) => storeState.wapModule
  )
  const [activeBtn, setActiveBtn] = useState('')

  useEffect(() => {
    console.log(selectedElement.style)
    
  },[selectedElement])

  // Refactor all functions to a single function


  const onChangeAlign = (alignType) => {
    selectedElement.style = { ...selectedElement.style, textAlign: alignType }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeFontWeight = () => {
    const fontWeightType =
      (selectedElement.style.fontWeight === 'bold' || selectedElement.style.fontWeight === '700') ? 'normal' : 'bold'
    selectedElement.style = {
      ...selectedElement.style,
      fontWeight: fontWeightType,
    }

    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeFontFormat = () => {
    const fontFormatType =
      selectedElement.style.fontStyle === 'italic' ? 'normal' : 'italic'
    selectedElement.style = {
      ...selectedElement.style,
      fontStyle: fontFormatType,
    }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeTextDeco = () => {
    const fontDecoType =
      selectedElement.style.textDecoration === 'underline'
        ? 'none'
        : 'underline'
    selectedElement.style = {
      ...selectedElement.style,
      textDecoration: fontDecoType,
    }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeFontSize = (sizeAmount) => {
    sizeAmount = `${sizeAmount / 16}rem` //switch to rem
    if (sizeAmount === selectedElement.style.fontSize) return
    selectedElement.style = { ...selectedElement.style, fontSize: sizeAmount }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeFontType = (familyType) => {
    selectedElement.style = { ...selectedElement.style, fontFamily: familyType }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeTextShadow = (shadowType) => {
    selectedElement.style = { ...selectedElement.style, textShadow: shadowType }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeBorderRadius = (borderAmount) => {
    selectedElement.style = {
      ...selectedElement.style,
      borderRadius: borderAmount,
    }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }


  const currStyles = { txtAlign: selectedElement?.style?.textAlign,
                       txtBold: selectedElement?.style?.fontWeight,
                       fontStyle: selectedElement?.style?.fontStyle,
                       txtDeco: selectedElement?.style?.textDecoration,
                       txtShadow: selectedElement?.style?.textShadow,
                       fontFamily: selectedElement?.style?.fontFamily
                      }

  return (
    <section className="txt-editor-container">
      {selectedElement.type === 'txt' && (
        <>
          <div className="txt-align-container">
            <p>Align</p>
            <div className="txt-icons-container">
              <span
                onClick={() => onChangeAlign('left')}
                className={`${(currStyles.txtAlign === 'left') ? 'active' : ''}`}
              >
                <FormatAlignLeftIcon />
              </span>
              <span
                onClick={() => onChangeAlign('center')}
                className={`${(!currStyles.txtAlign || currStyles.txtAlign === 'center') ? 'active' : ''}`}
              >
                <FormatAlignCenterIcon />
              </span>
              <span
                onClick={() => onChangeAlign('right')}
                className={`${(currStyles.txtAlign === 'right') ? 'active' : ''}`}
              >
                <FormatAlignRightIcon />
              </span>
            </div>
          </div>
          <div className="txt-deco-container">
            <p>Decoration</p>
            <div className="txt-deco-icons-container">
              <span
                onClick={() => onChangeFontWeight()}
                className={`${(currStyles.txtBold === 'bold' || currStyles.txtBold === '700') ? 'active' : ''}`}
              >
                <FormatBoldIcon />
              </span>
              <span
                onClick={() => onChangeFontFormat()}
                className={`${currStyles.fontStyle === 'italic' ? 'active' : ''}`}
              >
                <FormatItalicIcon />
              </span>
              <span
                onClick={() => onChangeTextDeco()}
                className={`${currStyles.txtDeco === 'underline' ? 'active' : ''}`}
              >
                <FormatUnderlinedIcon />
              </span>
            </div>
          </div>
          <div className="txt-slider-container">
            <p>Font Size</p>
            <EditSlider
              isFontSize={true}
              onChangeFontSize={onChangeFontSize}
              selectedElement={selectedElement}
            />
          </div>
        </>
      )}
      <div className="txt-slider-container">
        <p>Border Radius</p>
        <EditSlider
          isFontSize={false}
          onChangeBorderRadius={onChangeBorderRadius}
          selectedElement={selectedElement}
        />
      </div>
      {selectedElement.type === 'txt' && (
        <>
          <div className="txt-type-container">
            <p>Font Type</p>
            <EditOptions
              onChangeFontType={onChangeFontType}
              isFontType={true}
              currFontType={currStyles.fontFamily}
            />
          </div>
          <div className="txt-shadow-container">
            <p>Font Shadow</p>
            <EditOptions
              onChangeTextShadow={onChangeTextShadow}
              isFontType={false}
              currTxtShadow={currStyles.txtShadow}
            />
          </div>
        </>
      )}
    </section>
  )
}
