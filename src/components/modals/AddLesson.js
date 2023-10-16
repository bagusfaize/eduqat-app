import React from 'react'
import { Checkbox, FormControl, FormLabel, Grid, Input, Option, Select } from '@mui/joy'
import Button from '@/components/buttons/Button'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid';

export default function AddLessonModal({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // {
    //     id: 's1-01',
    //     required: true,
    //     previewable: true,
    //     time: '16:30',
    //     duration: '06:30 Min',
    //     downloadable: true,
    //     fileName: 'Downloadable'
    // },

    const handleSubmitLesson = (data) => {
        const newLesson = {
            id: nanoid(5),
            title: data.title,
            date: data.date,
            time: data.time,
            location: data.location,
            duration: `${data.duration} Min`,
            required: data.required,
            previewable: data.previewable,
            downloadable: true,
            fileName: 'Downloadable'
        }
        onSubmit(newLesson);
    }

    const generateError = (error) => {
        return (
            <ErrorMessage message={error.message} />
        )
    }

    return (
        <div className='w-96'>
            <FormControl>
                <FormLabel className='mt-2'>Title</FormLabel>
                <Input {...register('title', { required: 'title is required' })} />
                {errors.title && generateError(errors.title)}
            </FormControl>

            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={6}>
                    <FormControl>
                        <FormLabel className='mt-2'>Date</FormLabel>
                        <Input type='date' {...register('date', { required: 'date is required' })} />
                        {errors.date && generateError(errors.date)}
                    </FormControl>
                </Grid>
                <Grid xs={6}>
                    <FormControl>
                        <FormLabel className='mt-2'>Time</FormLabel>
                        <Input type='time' {...register('time', { required: 'time is required' })} />
                        {errors.time && generateError(errors.time)}
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={6}>
                    <FormControl>
                        <FormLabel className='mt-2'>Location</FormLabel>
                        <Select {...register('location', { required: 'location is required' })}>
                            <Option value="online">Online</Option>
                            <Option value="onsite">Onsite</Option>
                        </Select>
                        {errors.location && generateError(errors.location)}
                    </FormControl>
                </Grid>
                <Grid xs={6}>
                    <FormControl>
                        <FormLabel className='mt-2'>Duration (minutes)</FormLabel>
                        <Input type='number' {...register('duration', { required: 'duration is required' })} />
                        {errors.duration && generateError(errors.duration)}
                    </FormControl>
                </Grid>
            </Grid>
            <div className='flex flex-col'>
                <FormLabel className='mt-2'>Additional Info</FormLabel>
                <Checkbox className='mt-2' label="Required" {...register('required')} />
                <Checkbox className='mt-2' label="Previewable" {...register('previewable')} />
            </div>
            <div className='flex justify-end'>
                <Button
                    onClick={handleSubmit(handleSubmitLesson)}
                    text="Submit"
                />
            </div>
        </div>
    )
}

const ErrorMessage = ({ message }) => (
    <div className='my-1 text-red-500 text-sm'>
        {message}
    </div>
)