import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { SidebarSlider } from './sidebar-slider'

export const TxtEditor = () => {

  return <section className="txt-editor-container">
    txt editor
    <div className="txt-align-container">
      <p>Align</p>
      <div className="txt-icons-container">
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      </div>
    </div>
    <div className="txt-deco-container">
    <p>Decoration</p>
      <div className="txt-deco-icons-container">
      <FormatBoldIcon />
      <FormatItalicIcon />
      <FormatUnderlinedIcon />
      </div>
    </div>
    <div className="txt-slider-container">
      <p>Font Size</p>
      <SidebarSlider />
    </div>
  </section>
}