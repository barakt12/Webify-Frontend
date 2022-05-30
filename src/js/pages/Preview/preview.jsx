import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DynamicCmp } from '../Editor/cmps/dynamic-cmp/dynamic-cmp'

export const Preview = () => {
  const wap = useSelector((storeState) => storeState.wapModule.wap)

  console.log(wap)
  return (
    <section className='preview'>
      {wap?.cmps?.length &&
        wap.cmps.map((cmp) => (
          <div key={cmp.id}>
            <DynamicCmp cmp={cmp} />
          </div>
        ))}
    </section>
  )
}
