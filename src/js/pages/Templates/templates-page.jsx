import React from 'react'
import { templatePreviews } from '../../temaplates-example/preview/template-preview'
import { useDispatch } from 'react-redux'
import { loadTemplate } from '../../store/wap/wap.action'
import { Link } from 'react-router-dom'

export const Templates = () => {
  const dispatch = useDispatch()

  const onSelectTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  return (
    <>
      <h2>Select a Template</h2>
      <section className="main-template-container">
        {templatePreviews.map((preview) => (
          <div key={preview.id} className={preview.id}>
            <div className="template-hover-info-container">
              <p>A simple and bold layout that makes it easy for you to showcase your product and share it with the world in no time.</p>
              <div className="template-hover-btns-container">
                <button className="template-preview-btn">Preview</button>
                <button className="template-select-btn" onClick={() => onSelectTemplate(preview.id)}>
                  <Link to="/editor">Select</Link>
                </button>
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
    </>
  )
}
