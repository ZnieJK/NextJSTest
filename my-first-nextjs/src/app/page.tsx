// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// 'use client'

// import { useState, useRef } from 'react'
// import Column from '@/components/Column'
// import { ButtonData } from '@/types/ButtonData'

// export default function HomePage() {
//   const [buttons, setButtons] = useState<ButtonData[]>([
//     { id: '1', label: 'Btn 1', type: 1, origin: 'noHeader', current: 'noHeader' },
//     { id: '2', label: 'Btn 2', type: 2, origin: 'noHeader', current: 'noHeader' },
//     { id: '3', label: 'Btn 3', type: 1, origin: 'type1', current: 'type1' },
//     { id: '4', label: 'Btn 4', type: 2, origin: 'type2', current: 'type2' },
//   ])

//   const timeouts = useRef<{ [key: string]: NodeJS.Timeout }>({})

//   const handleClick = (button: ButtonData) => {
//     const newLocation = button.type === 1 ? 'type1' : 'type2'
//     setButtons(prev =>
//       prev.map(b => b.id === button.id ? { ...b, current: newLocation } : b)
//     )

//     if (timeouts.current[button.id]) {
//       clearTimeout(timeouts.current[button.id])
//     }

//     timeouts.current[button.id] = setTimeout(() => {
//       setButtons(prev =>
//         prev.map(b => b.id === button.id ? { ...b, current: b.origin } : b)
//       )
//     }, 5000)
//   }

//   const getButtonsByColumn = (column: 'noHeader' | 'type1' | 'type2') =>
//     buttons.filter(b => b.current === column)

//   return (
//     <main className="flex flex-col md:flex-row gap-4 p-4">
//       <Column buttons={getButtonsByColumn('noHeader')} onClick={handleClick} />
//       <Column header="Type 1" buttons={getButtonsByColumn('type1')} onClick={handleClick} />
//       <Column header="Type 2" buttons={getButtonsByColumn('type2')} onClick={handleClick} />
//     </main>
//   )
// }


// 'use client'

// import { useState, useRef } from 'react'
// import { ButtonData } from './types/ButtonData'
// import Column from './components/Column'
// import { PrismaClient } from '@prisma/client'

// export default async function HomePage() {

//   const prisma = new PrismaClient();
//   const test1Data = await prisma.Test1DataModel.findmany()
//   const [buttons, setButtons] = useState<ButtonData[]>([
//     { id: '1', label: 'Btn 1', type: 1, origin: 'noHeader', current: 'noHeader' },
//     { id: '2', label: 'Btn 2', type: 2, origin: 'noHeader', current: 'noHeader' },
//     { id: '3', label: 'Btn 3', type: 1, origin: 'type1', current: 'type1' },
//     { id: '4', label: 'Btn 4', type: 2, origin: 'type2', current: 'type2' },
//   ])

//   const timeouts = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

//   const handleClick = (button: ButtonData) => {
//     const isInOriginalColumn = button.current === button.origin
//     const targetColumn = isInOriginalColumn
//       ? button.type === 1 ? 'type1' : 'type2'
//       : button.origin

//     setButtons(prev =>
//       prev.map(b => b.id === button.id ? { ...b, current: targetColumn } : b)
//     )

//     if (timeouts.current[button.id]) {
//       clearTimeout(timeouts.current[button.id])
//     }

//     if (isInOriginalColumn) {
//       timeouts.current[button.id] = setTimeout(() => {
//         setButtons(prev =>
//           prev.map(b => b.id === button.id ? { ...b, current: b.origin } : b)
//         )
//       }, 5000)
//     }
//   }

//   const getButtonsByColumn = (column: 'noHeader' | 'type1' | 'type2') =>
//     buttons.filter(b => b.current === column)

//   return (
//     <main className="flex flex-col md:flex-row gap-4 p-4">
//       <Column buttons={getButtonsByColumn('noHeader')} onClick={handleClick} />
//       <Column header="Type 1" buttons={getButtonsByColumn('type1')} onClick={handleClick} />
//       <Column header="Type 2" buttons={getButtonsByColumn('type2')} onClick={handleClick} />
//     </main>
//   )
// }


'use client'

import { useState } from 'react'
import { test1Data } from '../../prisma/constants'
import Column from './components/Column'
import { ButtonData } from './types/ButtonData'

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
