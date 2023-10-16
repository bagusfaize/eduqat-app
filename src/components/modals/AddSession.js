import React from 'react'
import { Input } from '@mui/joy'
import Button from '@/components/buttons/Button'
import { useForm } from 'react-hook-form';

export default function AddSessionModal({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    return (
        <div>
            <Input
                className='mt-3'
                placeholder="Session Title"
                {...register('title', {required: true})}
            />
            {errors.title && <ErrorMessage message="This field is required" />}
            <div className='flex justify-end'>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    text="Submit"
                />
            </div>
        </div>
    )
}

const ErrorMessage = ({message}) => (
    <div className='my-1 text-red-500 text-sm'>
        {message}
    </div>
)