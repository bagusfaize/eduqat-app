import React from 'react'

export default function SessionSkeleton() {
    return (
        <div class="border border-gray-300 shadow rounded-md p-7 w-full mx-auto my-5">
            <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                    <div class="space-y-7">
                        <div class="grid grid-cols-10 gap-4 justify-between">
                            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                        </div>
                        {[...Array(3)].map(index => (
                            <div class="grid grid-cols-10 gap-4 justify-between" key={index}>
                                <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                                <div class="h-2 bg-gray-300 rounded col-span-8"></div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
