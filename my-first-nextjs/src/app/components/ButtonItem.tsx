'use client'

import { useEffect, useRef, useState } from 'react'


interface ButtonProps {
  id: string
  label: string
  type: string 
  origin: string 
  current: string
  onChangeColumn: (id: string, newColumn: string) => void
}

export default function ButtonItem({ id, label, type, origin, current, onChangeColumn }: ButtonProps) {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const isMoved = current !== origin

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      onChangeColumn(id, origin)
      timerRef.current = null
    }, 5000)
  }

  const cancelTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const handleClick = () => {
    if (!isMoved) {
      onChangeColumn(id, type)
    } else {
      cancelTimer()
      onChangeColumn(id, origin)
    }
  }

  useEffect(() => {
    if (isMoved) {
      startTimer()
    } else {
      cancelTimer()
    }
    return () => {
      cancelTimer()
    }
  }, [current])

  return (
    <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      {label}
    </button>
  )
}
