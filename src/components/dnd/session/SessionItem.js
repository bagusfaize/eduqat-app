import React from 'react'
import { MdDragIndicator } from 'react-icons/md'
import { BiEditAlt, BiDownload, BiCheck} from 'react-icons/bi'
import { LiaTimesSolid } from 'react-icons/lia'
import { BsCameraVideo, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import MaterialItem from '../material/MaterialItem'
import { useSessions } from '@/hooks/useSessions'
import { Input } from '@mui/joy'

export default function SessionItem({
    title
}) {
    const { isEdit, setIsEdit } = useSessions();

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div className='border border-gray-300 rounded-md p-3 bg-white mb-5'>
            <div className='flex items-center justify-between py-1 mb-2'>
                <div className='flex items-center'>
                    <MdDragIndicator className='text-xl text-gray-300 mr-2' />
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
                <div className='bg-gray-100 p-2 rounded-md'>
                    <BsThreeDots />
                </div>
            </div>
            <MaterialItem />
        </div>
    )
}
