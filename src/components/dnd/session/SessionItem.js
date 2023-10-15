'use client'
import React from 'react'
import { MdDragIndicator } from 'react-icons/md'
import { BiEditAlt, BiDownload, BiCheck} from 'react-icons/bi'
import { LiaTimesSolid } from 'react-icons/lia'
import { BsCameraVideo, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import MaterialItem from '../material/MaterialItem'
import { useSessions } from '@/hooks/useSessions'
import { Input } from '@mui/joy'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function SessionItem({
    title,
    lessons,
    dragHandler,
    onDragEndLesson
}) {
    const { isEdit, setIsEdit } = useSessions();

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }
    // console.log('clg props', dragHandler);
    return (
        <div className='border border-gray-300 rounded-md p-3 bg-white my-3'>
            <div className='flex items-center justify-between py-1 mb-2'>
                <div className='flex items-center'>
                    <span {...dragHandler}>
                        <MdDragIndicator className='text-xl text-gray-300 mr-2' />
                    </span>
                    {isEdit ?
                        <>
                            <Input placeholder="Type in here…"/>
                            <div className='ml-2'>
                                <button className='bg-gray-100 p-2 mx-1 rounded-md'>
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
                            {lessons.map((item, index) => (
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
