import React from 'react'
import { templatePreviews } from '../../temaplates-example/preview/template-preview'

export const Templates = () => {
  console.log(templatePreviews)
  return (
    <section className="main-template-container">
      {templatePreviews.map((preview) => (
        <div key={preview.id} className={preview.id}>
          <div className="template-hover-info-container">
            <p>A simple and bold layout that makes it easy for you to showcase your product
               and share it with the world in no time.</p>
               <div className="template-hover-btns-container">
                 <button className="template-preview-btn">Preview</button>
                 <button className="template-select-btn">Select</button>
               </div>
          </div>
          <img src={preview.info.img} alt="" />
          <hr />
          <div className="template-info-container">
            <p className="info-template-name">{preview.info.name}</p>
            <p className="info-template-category">{preview.info.category}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
