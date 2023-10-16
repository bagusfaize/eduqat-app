'use client'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Button from '@/components/buttons/Button'
import SessionItem from './session/SessionItem';
import { BiPlus } from 'react-icons/bi';
import { Box, Modal, ModalClose, ModalDialog, Typography, Input } from '@mui/joy';
import AddSessionModal from '../modals/AddSession';
import AddLessonModal from '../modals/AddLesson';
import { nanoid } from 'nanoid';

const initialData = [
    {
        id: 's-1',
        title: 'Session 1',
        lessons: [
            {
                id: 's1-01',
                title: 'Video Session 1',
                required: true,
                previewable: true,
                location: 'online',
                date: '2021-12-31',
                time: '16:30',
                duration: '30 Min',
                downloadable: true,
                fileName: 'Downloadable'
            },
            {
                id: 's1-02',
                title: 'Onsite Event Session 1',
                required: true,
                previewable: false,
                location: 'onsite',
                date: '2021-12-31',
                time: '16:30',
                duration: '30 Min',
                downloadable: true,
                fileName: 'Downloadable'
            }
        ]
    }
]


export default function DragableList() {
    const [data, setData] = useState(initialData);
    const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
    const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
    const [selectedIdSession, setselectedIdSession] = useState('');
    
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEndSession = (result) => {
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
        setData(updatedSessions)
    };

    const onChangeTitle = (newTitle, index) => {
        const updatedTitle = [...data];
        updatedTitle[index].title = newTitle
        setData(updatedTitle);
    }

    const addSessionModal = () => {
        return (
            <Modal
                open={isSessionModalOpen}
                onClose={() => setIsSessionModalOpen(false)}
            >
                <ModalDialog size="sm">
                    <ModalClose />
                    <Box>
                        <Typography level='h4'>Add Session</Typography>
                        <AddSessionModal onSubmit={handleAddSession}/>
                    </Box>
                </ModalDialog>
            </Modal>
        )
    }

    const addLessonModal = () => {
        return (
            <Modal
                open={isLessonModalOpen}
                onClose={() => setIsLessonModalOpen(false)}
            >
                <ModalDialog size="md">
                    <ModalClose />
                    <Box>
                        <Typography level='h4'>Add Lesson</Typography>
                        <AddLessonModal onSubmit={handleAddLesson}/>
                    </Box>
                </ModalDialog>
            </Modal>
        )
    }

    const handleAddLesson = (newLesson) => {
        const updatedData = [...data];
        updatedData[selectedIdSession].lessons.push(newLesson);
        setData(updatedData);
        setIsLessonModalOpen(false)
    }

    const handleAddSession = (res) => {
        const newSession = {
            id: nanoid(5),
            title: res.title,
            lessons: []
        }
        const updatedSessions = [...data,newSession];
        setData(updatedSessions)
        setIsSessionModalOpen(false)
    }

    const handleOpenLessonModal = (id) => {
        setIsLessonModalOpen(true)
        setselectedIdSession(id)
    }

    return (
        <>
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
                                                    data={item}
                                                    onChangeTitle={(newTitle) => onChangeTitle(newTitle, index)}
                                                    onDragEndLesson={(res) => onDragEndLesson(res, index)}
                                                    dragHandler={...provided.dragHandleProps}
                                                    onOpenLessonModal={()=>handleOpenLessonModal(index)}
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
                <div className='flex justify-end mt-5'>
                    <Button
                        icon={<BiPlus size={17} />}
                        text="Add Session"
                        onClick={() => setIsSessionModalOpen(true)}
                        className="shadow-md"
                    />
                </div>
                {addSessionModal()}
                {addLessonModal()}
            </div>
        </>
    )
}