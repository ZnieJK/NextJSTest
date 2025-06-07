import { 
    Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Field, 
    Label} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { dropBoxModel } from '../types/interfaceModel'


interface DropboxComponentProp {
  itemsData: dropBoxModel[],
  label: string,
  selected: dropBoxModel | null,
  onChange: (item: dropBoxModel | null) => void
}

export default function DropBoxComponent({ itemsData, label, selected, onChange }: DropboxComponentProp) {
  const [query, setQuery] = useState('')

  const filteredItems =
    query === ''
      ? itemsData
      : itemsData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )

  return (
    <Field className="flex grow items-baseline justify-center gap-6">
      <Label>{label}</Label>
      <Combobox value={selected} onChange={onChange} onClose={() => setQuery('')}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
            displayValue={(item: dropBoxModel) => item?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-hover:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-(--input-width) rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:--spacing(1)] empty:invisible',
            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
          )}
        >
          {filteredItems.map((item) => (
            <ComboboxOption
              key={item.id}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-white">{item.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </Field>
  )
}
