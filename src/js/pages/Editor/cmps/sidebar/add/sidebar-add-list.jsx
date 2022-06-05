import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export function SidebarAdd({ addCmpList }) {
  return addCmpList.map((cmp, idx) => {
    return (
      <Draggable key={cmp.id} draggableId={cmp.id} index={idx}>
        {(provided, snapshot) => {
          return (
            <>
              <img ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={cmp.id} className="mini-cmp" src={cmp.thumbnail} alt="" />
              {snapshot.isDragging && <img className="mini-cmp" src={cmp.thumbnail} alt="" />}
            </>
          )
        }}
      </Draggable>
    )
  })
}
