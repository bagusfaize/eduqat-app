import Link from 'next/link'
import React from 'react'
import { HiArrowLongLeft, } from 'react-icons/hi2'

export default function Header({ title, onBack }) {
    return (
        <div className='p-6 shadow-sm flex items-center'>
            <Link href={onBack} className='border-r mx-3 px-3 border-gray-400'>
                <HiArrowLongLeft className='text-xl' />
            </Link>
            <h1 className='text-lg font-semibold'>{title}</h1>
        </div>
    )
}
