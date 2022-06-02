import React, { useEffect } from 'react'
import { templatePreviews } from '../../temaplates-example/preview/template-preview'
import { useDispatch } from 'react-redux'
import { loadTemplate } from '../../store/wap/wap.action'
import { Link } from 'react-router-dom'

export const Templates = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    //scroll to the top of the page.
    window.scrollTo(0, 0)
  }, [])

  const onSelectTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  // const onPreviewTemplate = (id) => {
  //   dispatch(loadTemplate(id))
  // }

  return (
    <section className="main-template-container">
      <div className="template-page-intro">
        <h2>Choose how to start building your site</h2>
      </div>
      <section className="templates-container">
        <div>
          <div className="template-hover-info-container create-new">
            <p className="blank-label">BLANK</p>
            <div className="create-new-info-container">
              <p>Start from a blank canvas — and build exactly what you have in mind.</p>
              <div className="template-hover-btns-container">
                <Link className="template-select-btn" to="/editor">
                  <button onClick={() => onSelectTemplate('blank')}>Select</button>
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="template-info-container">
            <p className="info-template-name">Create a blank site</p>
          </div>
        </div>
        {templatePreviews.map((preview) => (
          <div key={preview.id} className={preview.id}>
            <div className="template-hover-info-container">
              <p>A simple and bold layout that makes it easy for you to showcase your product and share it with the world in no time.</p>
              <div className="template-hover-btns-container">
                <Link to={`/preview/${preview.id}`} target="_blank" className="template-preview-btn">
                  <button>Preview</button>
                </Link>
                <Link className="template-select-btn" to="/editor">
                  <button onClick={() => onSelectTemplate(preview.id)}>Select</button>
                </Link>
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
    </section>
  )
}
