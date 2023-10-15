'use client'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { BiDotsHorizontal } from 'react-icons/bi';
import SessionItem from './session/SessionItem';

const initialData = [
    {
        id: 's-1',
        title: 'Session 1',
        lessonMaterial: [
            {
                id: 's1-01',
                title: 'Judul Video Session 1-01'
            },
            {
                id: 's1-02',
                title: 'Judul Video Session 1-02'
            }
        ]
    },
    {
        id: 's-2',
        title: 'Session 2',
        lessonMaterial: [
            {
                id: 's1-01',
                title: 'Judul Video Session 2'
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

    const onDragEnd = (result) => {
        // console.log('clg drag', result);
        if (!result.destination) {
            return;
        }
        const items = reorder(
            data,
            result.source.index,
            result.destination.index
        )
        setData(items)

    };
    // const [ordered, setOrdered] = useState(Object.keys(initial));
    console.log('clg data', data);
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
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
                                            <SessionItem title={item.title} handleProps={...provided.dragHandleProps} />
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