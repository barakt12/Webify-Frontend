import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { wapService } from '../../services/wap-service'
import { DynamicCmp } from '../Editor/cmps/dynamic-cmp/dynamic-cmp'

export const Publish = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [wap, setWap] = useState()
  useEffect(() => {
    getWap()
  }, [])

  const getWap = async () => {
    try {
      const wapId = params.wapId
      const currWap = await wapService.getById(wapId)
      if (!currWap.isPublished) navigate('/')
      setWap(currWap)
      wapService.increaseViewCount(wapId)
    } catch (err) {
      navigate('/')
    }
  }

  return (
    <section className="preview">
      {wap?.cmps?.length &&
        wap.cmps.map((cmp) => (
          <div key={cmp.id}>
            <DynamicCmp cmp={cmp} />
          </div>
        ))}
    </section>
  )
}
