import React from 'react'
import { webPreviews } from '../../temaplates-example/web-preview/web-preview'
import { useDispatch } from 'react-redux'
import { loadTemplate } from '../../store/wap/wap.action'
import { Link } from 'react-router-dom'

export const Templates = () => {
  const dispatch = useDispatch()

  const onSelectTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  const onPreviewTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  return (
    <>
      <h2>Select a Template</h2>
      <section className='main-template-container'>
        {webPreviews.map((preview) => (
          <div key={preview.id} className={preview.id}>
            <div className='template-hover-info-container'>
              <p>
                A simple and bold layout that makes it easy for you to showcase
                your product and share it with the world in no time.
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
              <p className='info-template-category'>{preview.info.category}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
