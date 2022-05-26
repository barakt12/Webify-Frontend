import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DynamicCmp } from '../Editor/cmps/dynamic-cmp/dynamic-cmp'

export const Preview = () => {
  const [pageContent, setPageContent] = useState({})
  const wap = useSelector((storeState) => storeState.wapModule.wap)

  useEffect(() => {
    setPageContent(wap)
  }, [wap])

  return (
    <section className='preview'>
      {pageContent?.cmps?.length &&
        pageContent.cmps.map((cmp) => (
          <div key={cmp.id}>
            <DynamicCmp cmp={cmp} />
          </div>
        ))}
    </section>
  )
}
