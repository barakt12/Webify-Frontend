import { useDispatch, useSelector } from 'react-redux'
import { wapService } from '../../../../services/wap-service'
import { setWap } from '../../../../store/wap/wap.action'

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import { SidebarSlider } from './sidebar-slider'

import { SidebarSelection } from './sidebar-selection'
import { useState } from 'react'

export const TxtEditor = () => {
  const _ = require('lodash')
  const dispatch = useDispatch()

  const { wap, selectedElement } = useSelector(
    (storeState) => storeState.wapModule
  )

  const [activeBtn, setActiveBtn] = useState('')

  const onChangeAlign = (alignType) => {
    selectedElement.style = { ...selectedElement.style, textAlign: alignType }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  const onChangeFontWeight = () => {
    const fontWeightType =
      selectedElement.style.fontWeight === 'bold' ? 'normal' : 'bold'
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
    console.log(selectedElement.style)
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

  const fontSizeDebounce = _.debounce(
    (sizeAmount) => onChangeFontSize(sizeAmount),
    20
  )

  const onChangeFontSize = (sizeAmount) => {
    sizeAmount = `${sizeAmount / 16}rem` //switch to rem
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

  const borderRadiusDebounce = _.debounce(
    (borderAmount) => onChangeBorderRadius(borderAmount),
    20
  )

  const onChangeBorderRadius = (borderAmount) => {
    selectedElement.style = {
      ...selectedElement.style,
      borderRadius: borderAmount,
    }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
  }

  return (
    <section className='txt-editor-container'>
      {selectedElement.type === 'txt' && (
        <>
          <div className='txt-align-container'>
            <p>Align</p>
            <div className='txt-icons-container'>
              <span
                onClick={() => {
                  onChangeAlign('left')
                  setActiveBtn('start')
                }}
                className={`${activeBtn === 'start' ? 'active' : ''}`}
              >
                <FormatAlignLeftIcon />
              </span>
              <span
                onClick={() => {
                  onChangeAlign('center')
                  setActiveBtn('center')
                }}
                className={`${activeBtn === 'center' ? 'active' : ''}`}
              >
                <FormatAlignCenterIcon />
              </span>
              <span
                onClick={() => {
                  onChangeAlign('right')
                  setActiveBtn('end')
                }}
                className={`${activeBtn === 'end' ? 'active' : ''}`}
              >
                <FormatAlignRightIcon />
              </span>
            </div>
          </div>
          <div className='txt-deco-container'>
            <p>Decoration</p>
            <div className='txt-deco-icons-container'>
              <span onClick={onChangeFontWeight}>
                <FormatBoldIcon />
              </span>
              <span onClick={onChangeFontFormat}>
                <FormatItalicIcon />
              </span>
              <span onClick={onChangeTextDeco}>
                <FormatUnderlinedIcon />
              </span>
            </div>
          </div>
        </>
      )}
      <div className='txt-slider-container'>
        <p>Font Size</p>
        <SidebarSlider
          isFontSize={true}
          onChangeFontSize={fontSizeDebounce}
          selectedElement={selectedElement}
        />
      </div>
      <div className='txt-slider-container'>
        <p>Border Radius</p>
        <SidebarSlider
          isFontSize={false}
          onChangeBorderRadius={borderRadiusDebounce}
          selectedElement={selectedElement}
        />
      </div>
      <div className='txt-type-container'>
        <p>Font Type</p>
        <SidebarSelection
          onChangeFontType={onChangeFontType}
          isFontType={true}
        />
      </div>
      <div className='txt-shadow-container'>
        <p>Font Shadow</p>
        <SidebarSelection
          onChangeTextShadow={onChangeTextShadow}
          isFontType={false}
        />
      </div>
    </section>
  )
}
