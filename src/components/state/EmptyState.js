import Image from 'next/image'
import React from 'react'

export default function EmptyState({text}) {
  return (
    <div className='flex flex-col justify-center items-center mt-3 mb-5'>
        <Image src='/no-data.svg' width={50} height={50} alt='no-data' />
        <span className='text-sm text-gray-500 mt-3'>{text}</span>
    </div>
  )
}
