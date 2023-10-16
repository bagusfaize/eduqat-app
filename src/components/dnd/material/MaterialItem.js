import React from 'react'
import { BsCameraVideo, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { MdDragIndicator } from 'react-icons/md'
import { BiEditAlt, BiDownload, BiMap } from 'react-icons/bi'
import { HiOutlineMapPin } from 'react-icons/hi2'

export default function MaterialItem({
    data,
    dragHandler
}) {
    return (
        <div className='flex justify-between hover:bg-gray-50 ml-5 p-1 rounded-md'>
            <div className='flex items-center'>
                <span {...dragHandler}>
                    <MdDragIndicator className='text-xl text-gray-300 mr-2' />
                </span>
                <span className='bg-gray-100 p-2 rounded-md'>
                    {data.location === 'online' ?
                        <BsCameraVideo />
                        :
                        <HiOutlineMapPin />
                    }
                </span>
                <div className='flex items-center'>
                    <span className='text-sm mx-1 font-medium px-2'>{data.title}</span>
                    {data.required &&
                        <span className='text-sm mx-1 font-medium border-l px-2 text-purple-700'>
                            Required
                        </span>
                    }
                    {data.previewable &&
                        <>
                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-1"></div>
                            <span className='text-sm mx-1 font-medium px-2 text-gray-400'>Previewable</span>
                        </>
                    }
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center space-x-2'>
                    <span><AiOutlineCalendar /></span>
                    <span className='text-sm font-medium'>{`${data.date}, ${data.time}`}</span>
                </div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-3"></div>
                <div className='flex items-center space-x-2'>
                    <span><AiOutlineClockCircle /></span>
                    <span className='text-sm font-medium'>{data.duration}</span>
                </div>
                {data.downloadable &&
                    <>
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-3"></div>
                        <div className='flex items-center space-x-2 cursor-pointer'>
                            <span><BiDownload /></span>
                            <span className='text-sm font-medium'>Downloadable</span>
                        </div>
                    </>
                }
                <div className='bg-gray-100 p-2 rounded-md ml-3'>
                    <BsThreeDotsVertical />
                </div>
            </div>
        </div>
    )
}
