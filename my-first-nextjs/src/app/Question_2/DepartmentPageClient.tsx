'use client'

import { useState } from "react";
import DropBoxComponent from "../components/Dropdown";
import { DepartmentSummary } from "../types/DepartmentData";
import { dropBoxModel } from "../types/interfaceModel";
import Q2DepartmentComponent from "./Component/Q2DepartmentComponent";

interface PageClientProps {
  summaries: DepartmentSummary[];
}

export default function DepartmentPageClient({ summaries }: PageClientProps) {

    const allOption = { id: -1, name: "All Departments" };
    const dropBoxItems: dropBoxModel[] = [allOption, ...summaries.map((summary, index) => ({
        id: index,
        name: summary.departmentName,
    }))];


  const [selectedItem, setSelectedItem] = useState<dropBoxModel | null>(dropBoxItems[0])

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between border-b border-gray-100 p-4 shadow dark:border-gray-700">
        <div className="ps-8 min-w-0 flex-1" dir="ltr">
          <h2 className="text-2xl/7 font-bold text-gray-900 dark:text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">
            Department Summaries
          </h2>
        </div>
        <div className="mt-4 lg:mt-0 pe-8">
          <DropBoxComponent
            itemsData={dropBoxItems}
            label="Select Department"
            selected={selectedItem}
            onChange={(item) => setSelectedItem(item)}
          />
        </div>
      </div>
      <div className="container mx-auto px-15">
        {summaries
            .filter((_, index) => selectedItem?.id === -1 || index === selectedItem?.id)
            .map((summary, idx) => (
            <div key={idx} className="p-4 shadow dark:shadow-gray-500/40">
                <Q2DepartmentComponent data={summary} />
            </div>
        ))}
      </div>
    </div>
  )
}