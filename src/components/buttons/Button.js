import React from 'react'
import clsx from 'clsx'

export default function DefaultButton({ type = 'solid', children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'focus:outline-none font-medium rounded-lg text-sm px-5 py-2 mb-2 flex items-center space-x-2', {
        'bg-purple-700 hover:bg-purple-800 text-white focus:ring-4 focus:ring-purple-100': type === 'solid',
        'text-purple-700 bg-white border border-purple-700 hover:bg-purple-50 focus:ring-4 focus:ring-purple-100': type === 'outline',
      }
      )}
    >
      {children}
    </button>
  )
}