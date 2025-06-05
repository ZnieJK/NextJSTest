'use client'

import { useState } from 'react'
import { test1Data } from '../../prisma/constants'
import Column from './components/Column'
import { ButtonData } from './types/ButtonData'

//TODO Need to be update as homepage

export default function HomePage() {

  const distinctTypes = Array.from(new Set(test1Data.map(item => item.type)))

  const initialButtons: ButtonData[] = test1Data.map((item, index) => ({
    id: String(index + 1),
    label: item.name,
    type: item.type,
    origin: 'noHeader',
    current: 'noHeader',
  }))

  const [buttons, setButtons] = useState<ButtonData[]>(initialButtons)

  const handleChangeColumn = (id: string, newColumn: string) => {
    setButtons(prev =>
      prev.map(btn => (btn.id === id ? { ...btn, current: newColumn } : btn))
    )
  }

  const getButtonsByColumn = (column: string) =>
    buttons.filter(b => b.current === column)


  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      <Column
        key="noHeader"
        buttons={getButtonsByColumn('noHeader')}
        onChangeColumn={handleChangeColumn}
      />
      {distinctTypes.map(type => (
        <Column
          key={type}
          header={type}
          buttons={getButtonsByColumn(type)}
          onChangeColumn={handleChangeColumn}
        />
      ))}
    </main>
  )
}
