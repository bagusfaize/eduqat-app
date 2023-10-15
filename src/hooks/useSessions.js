import { useState } from 'react'

export const useSessions = () => {
  const [isEdit, setIsEdit] = useState(false)
    return {
        isEdit,
        setIsEdit
  }
}
