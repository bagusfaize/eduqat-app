'use client'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { BiDotsHorizontal } from 'react-icons/bi';
import SessionItem from './session/SessionItem';

const initialData = [
    {
        id: 's-1',
        title: 'Session 1',
        lessons: [
            {
                id: 's1-01',
                title: 'Video 1 Session 1',
                required: true,
                previewable: true,
                date: '24 Oktober 2021',
                time: '16:30',
                duration: '06:30 Min',
                downloadable:true,
                fileName: 'Downloadable'
            },
            {
                id: 's1-02',
                title: 'Video 2 Session 1',
                required: true,
                previewable: false,
                date: '24 Oktober 2021',
                time: '16:30',
                duration: '06:30 Min',
                downloadable:true,
                fileName: 'Downloadable'
            }
        ]
    },
    {
        id: 's-2',
        title: 'Session 2',
        lessons: [
            {
                id: 's1-01',
                title: 'Video 1 Session 2',
                required: true,
                previewable: false,
                date: '24 Oktober 2021',
                time: '16:30',
                duration: '06:30 Min',
                downloadable:true,
                fileName: 'Downloadable'
            },
        ]
    }
]


export default function DragableList({
    initial
}) {
    const [data, setData] = useState(initialData);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEndSession = (result) => {
        // console.log('clg drag', result);
        if (!result.destination) {
            return;
        }
        const updatedSessions = reorder(
            data,
            result.source.index,
            result.destination.index
        )
        setData(updatedSessions)
    };

    const onDragEndLesson = (result, sessionIndex) => {
        console.log('clg drag', sessionIndex, result);
        if (!result.destination) {
            return;
        }
        const updatedSessions = [...data];
        const updatedLessons = reorder(
            data[sessionIndex].lessons,
            result.source.index,
            result.destination.index
        )
        updatedSessions[sessionIndex].lessons = updatedLessons;
        console.log('clg res', updatedSessions);
        setData(updatedSessions)
    };
    // const [ordered, setOrdered] = useState(Object.keys(initial));
    // console.log('clg data', data);
    return (
        <div>
            <DragDropContext onDragEnd={onDragEndSession}>
                <Droppable
                    droppableId="session"
                // type="COLUMN"
                // direction="horizontal"
                >
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {data.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <SessionItem 
                                                title={item.title} 
                                                lessons={item.lessons} 
                                                onDragEndLesson={(res)=>onDragEndLesson(res, index)}
                                                dragHandler={...provided.dragHandleProps} 
                                            />
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
    )
}

const Container = ({ children }) => {
    return (
        <div className='bg-cyan-400 inline-flex'>
            {children}
        </div>
    )
}