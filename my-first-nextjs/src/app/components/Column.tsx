'use client'

import { ButtonData } from '../types/ButtonData'
import ButtonItem from './ButtonItem'

interface ColumnProps {
  header?: string
  buttons: ButtonData[]
  onChangeColumn: (id: string, newCol: string) => void
}

export default function Column({ header, buttons, onChangeColumn }: ColumnProps) {
  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded w-full md:w-1/3 h-[600px] overflow-y-auto 
        ${header ? 'border border-gray-300 dark:border-gray-600' : ''}`}
      >
      {header && (
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 
        dark:text-gray-100 text-center font-semibold py-2 -m-4 mb-0 rounded-t">
          {header}
        </div>
      )}
      {buttons.map(button => (
        <ButtonItem
          key={button.id}
          id={button.id}
          label={button.label}
          type={button.type}
          origin={button.origin}
          current={button.current}
          onChangeColumn={onChangeColumn}
        />
      ))}
    </div>
  )
}
