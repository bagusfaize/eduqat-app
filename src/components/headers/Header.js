import Link from 'next/link'
import React from 'react'
import { HiArrowLongLeft, } from 'react-icons/hi2'

export default function Header({ title, onBack }) {
    return (
        <div className='bg-white p-6 flex items-center shadow-[0_4px_6px_5px_rgba(0,0,0,0.025)]'>
            <Link href={onBack} className='border-r mx-3 px-3 border-gray-400'>
                <HiArrowLongLeft className='text-xl' />
            </Link>
            <h1 className='text-lg font-semibold'>{title}</h1>
        </div>
    )
}
