// 'use client'

// import { ButtonData } from '../types/ButtonData'
// import ButtonItem from './ButtonItem'

// interface ColumnProps {
//   header?: string
//   buttons: ButtonData[]
//   onClick: (button: ButtonData) => void
// }

// export default function Column({ header, buttons, onClick }: ColumnProps) {
//   return (
//     <div className="flex flex-col gap-2 border p-4 rounded w-full md:w-1/3">
//       {header && <h2 className="text-lg font-semibold mb-2">{header}</h2>}
//       {buttons.map(button => (
//         <ButtonItem
//           key={button.id}
//           label={button.label}
//           onClick={() => onClick(button)}
//         />
//       ))}
//     </div>
//   )
// }


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
    <div className="flex flex-col gap-2 border p-4 rounded w-full md:w-1/3">
      {header && <h2 className="text-lg font-semibold mb-2">{header}</h2>}
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
