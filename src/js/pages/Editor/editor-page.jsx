import { EditorSidebar } from './cmps/sidebar/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { templateService } from '../../services/templates.service'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { setWap, setSelectedElement, updateWap } from '../../store/wap/wap.action'
import { wapService } from '../../services/wap-service'

export function Editor() {
  const wap = useSelector((storeState) => storeState.wapModule.wap)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!wap?.cmps?.length) {
      getDraft()
    }
    return () => {
      dispatch(setSelectedElement(null))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const cmp = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...cmp, id: uuidv4() });
    return destClone;
};

  const getDraft = async () => {
    const draft = await wapService.getDraft()
    if (draft[0]?.cmps?.length) {
      delete draft[0]._id
      dispatch(setWap(draft[0]))
    }
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle,
  })

  const addCmpToPage = (result) => {
    let cmp = templateService.getCmpById(result.draggableId)
    cmp = JSON.parse(JSON.stringify(cmp))
    cmp.id = uuidv4()
    wapService.changeCmpId(cmp)
    const newState = JSON.parse(JSON.stringify(wap))
    newState.cmps.splice(result.destination.index, 0, cmp)
    dispatch(updateWap(newState))
  }
  

  const handleDragEnd = async (result) => {
    // dropped outside the list
    if (!result.destination) return
    else if (result.destination.droppableId === 'editor' && result.source.droppableId !== 'editor') {
      console.log('result',result)
    //   copy(
    //     ITEMS,
    //     this.state[destination.droppableId],
    //     source,
    //     destination
    //  )
      addCmpToPage(result)
      return
    }

    const content = reorder(wap.cmps, result.source.index, result.destination.index)
    if (content) {
      dispatch(updateWap({ ...wap, cmps: content }))
    }
  }

  return (
    <section className="editor-container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <EditorSidebar />
        <EditorBoard wap={wap} getItemStyle={getItemStyle} />
      </DragDropContext>
    </section>
  )
}
