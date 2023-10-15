'use client'
import React, { useState } from 'react'
import { MdDragIndicator } from 'react-icons/md'
import { BiEditAlt, BiDownload, BiCheck} from 'react-icons/bi'
import { LiaTimesSolid } from 'react-icons/lia'
import { BsCameraVideo, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import MaterialItem from '../material/MaterialItem'
import { useSessions } from '@/hooks/useSessions'
import { Input } from '@mui/joy'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function SessionItem({
    data,
    dragHandler,
    onDragEndLesson,
    onChangeTitle
}) {
    const [isEditTitle, setIsEditTitle] = useState(false);
    const [title, setTitle] = useState(data.title);

    const handleEdit = () => {
        setIsEditTitle(!isEditTitle)
    }

    const handleChangeTitle = (e) => {
        onChangeTitle(title)
        setIsEditTitle(false)
    }
    // console.log('clg props', dragHandler);
    return (
        <div className='border border-gray-300 rounded-md p-3 bg-white mb-5'>
            <div className='flex items-center justify-between py-1 mb-2'>
                <div className='flex items-center'>
                    <span {...dragHandler}>
                        <MdDragIndicator className='text-xl text-gray-300 mr-2' />
                    </span>
                    {isEditTitle ?
                        <>
                            <Input 
                                value={title} 
                                onChange={(e)=>setTitle(e.target.value)}
                            />
                            <div className='ml-2'>
                                <button 
                                    onClick={handleChangeTitle}
                                    className='bg-gray-100 p-2 mx-1 rounded-md'
                                >
                                    <BiCheck/>
                                </button>
                                <button 
                                    onClick={handleEdit}
                                    className='bg-gray-100 p-2 mx-1 rounded-md'>
                                    <LiaTimesSolid/>
                                </button>
                            </div>
                        </>
                        :
                        <>
                            <span className='font-medium'>{title}</span>
                            <BiEditAlt 
                                className='text-xl text-gray-300 mx-2 cursor-pointer' 
                                onClick={handleEdit}
                            />
                        </>
                    }
                </div>
                <div className='bg-gray-100 p-2 rounded-md mr-1'>
                    <BsThreeDots />
                </div>
            </div>
            <div>
            <DragDropContext onDragEnd={onDragEndLesson}>
                <Droppable
                    droppableId="lesson"
                // type="COLUMN"
                // direction="horizontal"
                >
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {data.lessons.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <MaterialItem data={item} dragHandler={...provided.dragHandleProps} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            </div>
        </div>
    )
}
