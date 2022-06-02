import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DynamicCmp } from '../Editor/cmps/dynamic-cmp/dynamic-cmp'
import { useParams } from 'react-router'
import { templateService } from '../../services/templates.service'

export const Preview = () => {
  const params = useParams()
  const [wapToDisplay, setWapToDisplay] = useState()

  useEffect(() => {
    const id = params.wapId
    const wap = templateService.getTemplateById(id)
    setWapToDisplay(wap)
  }, [])

  return (
    <section className="preview">
      {wapToDisplay?.cmps?.length &&
        wapToDisplay.cmps.map((cmp) => (
          <div key={cmp.id}>
            <DynamicCmp cmp={cmp} />
          </div>
        ))}
    </section>
  )
}
