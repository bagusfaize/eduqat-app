import React from 'react'
import { BsCameraVideo, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { MdDragIndicator } from 'react-icons/md'
import { BiEditAlt, BiDownload } from 'react-icons/bi'

export default function MaterialItem() {
    return (
        <div className='flex justify-between hover:bg-gray-50 ml-5 p-1 rounded-md'>
            <div className='flex items-center'>
                <MdDragIndicator className='text-xl text-gray-300 mr-2' />
                <span className='bg-gray-100 p-2 rounded-md'>
                    <BsCameraVideo />
                </span>
                <div className='flex items-center'>
                    <span className='text-sm mx-1 font-medium px-2'>Judul Video</span>
                    <span className='text-sm mx-1 font-medium border-l px-2 text-purple-700'>Required</span>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-1"></div>
                    <span className='text-sm mx-1 font-medium px-2 text-gray-400'>Previewable</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center space-x-2'>
                    <span><AiOutlineCalendar /></span>
                    <span className='text-sm font-medium'>24 Oktober 2021, 16:30</span>
                </div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-3"></div>
                <div className='flex items-center space-x-2'>
                    <span><AiOutlineClockCircle /></span>
                    <span className='text-sm font-medium'>06:30 Min</span>
                </div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-3"></div>
                <div className='flex items-center space-x-2'>
                    <span><BiDownload /></span>
                    <span className='text-sm font-medium'>Downloadable</span>
                </div>
                <div className='bg-gray-100 p-2 rounded-md ml-3'>
                    <BsThreeDotsVertical />
                </div>
            </div>
        </div>
    )
}