import React from 'react'
import { templatePreviews } from '../../../temaplates-example/preview/template-preview'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadTemplate } from '../../../store/wap/wap.action'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export const WapTeasers = () => {
  const dispatch = useDispatch()

  const onSelectTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  const onPreviewTemplate = (id) => {
    dispatch(loadTemplate(id))
  }

  const arr = [1, 2, 3, 4]

  return (
    <div className="wap-teasers-container">
      <div className="wave3-png"></div>
      <h1>Here's a few of our Templates</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {templatePreviews.map((preview, idx) => {
          return (
            <SwiperSlide>
              <Link className="template-select-btn" to="/editor">
                <div className="main-template-container" style={{ backgroundImage: 'none', height: '100%' }} onClick={() => onSelectTemplate(preview.id)}>
                  <section className="templates-container">
                    <div key={preview.id} className={preview.id}>
                      <div className="template-hover-info-container">
                        <p>A simple and bold layout that makes it easy for you to showcase your product and share it with the world in no time.</p>
                        <div className="template-hover-btns-container">
                          <Link to={`/preview`} className="template-preview-btn">
                            <button onClick={() => onPreviewTemplate(preview.id)}>Preview</button>
                          </Link>
                          <button className="template-select-btn" onClick={() => onSelectTemplate(preview.id)}>
                            Select
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
                  </section>
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
