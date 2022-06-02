import React from 'react'
import { templatePreviews } from '../../../temaplates-example/preview/template-preview'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadTemplate } from '../../../store/wap/wap.action'

export const WapTeasers = () => {
  const dispatch = useDispatch()

  const onSelectTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  const onPreviewTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  return (
    <div className='wap-teasers-container'>
      <div className='wave3-png'></div>
      <h1>Here's a few of our Templates</h1>
      <div
        className='main-template-container'
        style={{ backgroundImage: 'none', height: '100%' }}
      >
        <section className='templates-container'>
          {templatePreviews.map((preview, idx) => {
            if (idx > 2) return
            return (
              <div key={preview.id} className={preview.id}>
                <div className='template-hover-info-container'>
                  <p>
                    A simple and bold layout that makes it easy for you to
                    showcase your product and share it with the world in no
                    time.
                  </p>
                  <div className='template-hover-btns-container'>
                    <Link to={`/preview`} className='template-preview-btn'>
                      <button onClick={() => onPreviewTemplate(preview.id)}>
                        Preview
                      </button>
                    </Link>
                    <Link className='template-select-btn' to='/editor'>
                      <button onClick={() => onSelectTemplate(preview.id)}>
                        Select
                      </button>
                    </Link>
                  </div>
                </div>
                <img src={preview.info.img} alt='' />
                <hr />
                <div className='template-info-container'>
                  <p className='info-template-name'>{preview.info.name}</p>
                  <p className='info-template-category'>
                    {preview.info.category}
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
