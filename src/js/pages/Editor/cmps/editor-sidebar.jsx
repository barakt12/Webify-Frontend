import { SidebarBtns } from './sidebar-btns'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { templateService } from '../../../services/templates.service'

export function EditorSidebar({ elements }) {
  const [isSidebarShown, toggleSidebarShown] = useState(true)
  const [cmpList, setCmpList] = useState(null)
  const [activeBtn, setActiveBtn] = useState('add')

  useEffect(() => {
    const cmps = templateService.getCmpsByCategory('header')
    setCmpList(cmps)
  }, [])

  const onChooseCmps = (category) => {
    const cmps = templateService.getCmpsByCategory(category)
    setCmpList(cmps)
  }

  const onShowThemes = () => {
    setCmpList(null)
  }

  return (
    <section className="editor-sidebar">
      <SidebarBtns onChooseCmps={onChooseCmps} onShowThemes={onShowThemes} />
      <Droppable droppableId="hb5" isDropDisabled={true}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="cmps-list" style={{ width: isSidebarShown ? '270px' : '0px' }}>
            {cmpList &&
              cmpList.map((cmp, idx) => {
                return (
                  <Draggable key={cmp.id} draggableId={cmp.id} index={idx}>
                    {(provided, snapshot) => {
                      return (
                        <>
                          <img ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={cmp.id} className="mini-cmp" src={cmp.thumbnail} alt="" />
                          {/* {snapshot.draggingOver ? <img key={cmp.id} className="mini-cmp copy-dnd" src={cmp.thumbnail} alt="" /> : null} */}
                        </>
                      )
                    }}
                  </Draggable>
                )
              })}
          </div>
        )}
      </Droppable>
      <div className="sidebar-close-btn" onClick={() => toggleSidebarShown(!isSidebarShown)}>
        <svg width={'15'} height="96" viewBox="0 0 15 96" className="sidebar-close-svg">
          <path
            d="M0 0H3V1.00588C3.0011 4.42584 3.9102 9.97716 7.27295 13.2873C7.45088 13.4625 7.62629 13.6347 7.79957 13.8048L7.85959 13.8637C9.89318 15.8599 11.6678 17.602 12.9234 19.7206C14.0939 21.6956 14.792 23.9527 14.9602 27H15V68C15 71.7381 14.3125 74.3685 13.0144 76.6235C11.7533 78.8142 9.94312 80.5911 7.86152 82.6344L7.79905 82.6957C7.62594 82.8656 7.4507 83.0377 7.27295 83.2127C3.9102 86.5228 3.0011 92.0739 3 95.4938V96H0V0Z"
            className="vu-d0A"
          ></path>
          <path
            d="M3 0H2V1.00619C2.0011 4.50696 2.9164 10.4021 6.57143 14C6.74993 14.1757 6.92582 14.3484 7.09903 14.5184C11.2616 18.6046 13.8752 21.1704 13.9957 28H14V68C14 75.2071 11.3611 77.7976 7.09857 81.9821L7.07621 82.004C6.91037 82.1668 6.7421 82.332 6.57143 82.5C2.9164 86.0979 2.0011 91.993 2 95.4938V96H3V95.4938C3.0011 92.0739 3.9102 86.5228 7.27295 83.2127C7.4507 83.0377 7.62594 82.8656 7.79905 82.6957L7.86152 82.6344C9.94312 80.5911 11.7533 78.8142 13.0144 76.6235C14.3125 74.3685 15 71.7381 15 68V27H14.9602C14.792 23.9527 14.0939 21.6956 12.9234 19.7206C11.6678 17.602 9.89318 15.8599 7.85959 13.8637L7.79957 13.8048C7.62629 13.6347 7.45088 13.4625 7.27295 13.2873C3.9102 9.97716 3.0011 4.42584 3 1.00588V0Z"
            className="mcI_jw"
          ></path>
        </svg>
        <svg
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '40%',
            stroke: 'white',
            transform: isSidebarShown ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scaleX(-1)',
            transition: '0.3s',
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path stroke="white" strokeLinecap="round" strokeWidth="1.25" d="M7 3.17 4.88 5.3a1 1 0 0 0 0 1.42L7 8.83"></path>
        </svg>
      </div>
    </section>
  )
}

// transform: scaleX(-1) translate(50%, -50%);
