import { 
    Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Field, 
    Label} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { dropBoxModel } from '../types/interfaceModel'


interface DropboxComponentProp {
    itemsData: dropBoxModel[],
    label: string
}


export default function DropBoxComponent({ itemsData, label }: DropboxComponentProp) {
  const [selected, setSelected] = useState<dropBoxModel | null>(null)
  const [query, setQuery] = useState('')

  const filtered =
    query === ''
      ? itemsData
      : itemsData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )

  return (
    <div className="w-72">
      <label className="block text-sm text-white mb-1">{label}</label>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-md bg-[#121212] text-white">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm bg-[#121212] placeholder-gray-400 focus:outline-none"
              displayValue={(item: dropBoxModel) => item?.name || ''}
              onChange={(e) => setQuery(e.target.value)}
              placeholder=""
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          {filtered.length > 0 && (
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#1e1e1e] text-white shadow-lg ring-1 ring-black ring-opacity-5 text-sm z-10">
              {filtered.map((item) => (
                <Combobox.Option
                  key={item.id}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-gray-700 text-white' : 'text-gray-300'
                    }`
                  }
                >
                  {item.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  )
}
//   const [query, setQuery] = useState('')
//   const [selected, setSelected] = useState<dropBoxModel|null>(itemsData[1])

//   const filteredItems =
//     query === ''
//       ? itemsData
//       : itemsData.filter((item) => {
//           return item.name.toLowerCase().includes(query.toLowerCase())
//         })

//   return (
//     <div className="mx-auto h-screen w-52 pt-20">
//       <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')} __demoMode>
//         <div className="relative">
//           <ComboboxInput
//             className={clsx(
//               'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
//               'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
//             )}
//             displayValue={(item: dropBoxModel) => item?.name}
//             onChange={(event) => setQuery(event.target.value)}
//           />
//           <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
//             <ChevronDownIcon className="size-4 fill-white/60 group-data-hover:fill-white" />
//           </ComboboxButton>
//         </div>

//         <ComboboxOptions
//           anchor="bottom"
//           transition
//           className={clsx(
//             'w-(--input-width) rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:--spacing(1)] empty:invisible',
//             'transition duration-100 ease-in data-leave:data-closed:opacity-0'
//           )}
//         >
//           {filteredItems.map((item) => (
//             <ComboboxOption
//               key={item.id}
//               value={item}
//               className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
//             >
//               <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
//               <div className="text-sm/6 text-white">{item.name}</div>
//             </ComboboxOption>
//           ))}
//         </ComboboxOptions>
//       </Combobox>
//     </div>
//   )
// }


// import { Combobox, ListboxOption, ComboboxOption, Label } from '@headlessui/react'
// // import { Label } from '@/components/fieldset'
// import * as Headless from '@headlessui/react'

// function Example({ currentUser, users }) {
//   return (
//     <Headless.Field className="flex grow items-baseline justify-center gap-6">
//       <Label>Assigned to</Label>
//       <Combobox
//         name="user"
//         options={users}
//         displayValue={(user) => user?.name}
//         defaultValue={currentUser}
//         className="max-w-48"
//       >
//         {(user) => (
//           <ComboboxOption value={user}>
//             <ListboxOption>{user.name}</ListboxOption>
//           </ComboboxOption>
//         )}
//       </Combobox>
//     </Headless.Field>
//   )
// }
