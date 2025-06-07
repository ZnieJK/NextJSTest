'use client'

import { prisma } from "@/lib/prisma";
import { DepartmentSummary } from "../types/DepartmentData";
import Q2RowComponent from "./Component/Q2RowComponent";
import { dropBoxModel } from "../types/interfaceModel";


export default async function Page() {
    const depertmentinfo = await prisma.departmentSummary.findMany()

    const summaries = depertmentinfo as DepartmentSummary[];

    const people: dropBoxModel[] = [
      { id: 1, name: 'Tom Cook' },
      { id: 2, name: 'Wade Cooper' },
      { id: 3, name: 'Tanya Fox' },
      { id: 4, name: 'Arlene Mccoy' },
      { id: 5, name: 'Devon Webb' },
    ]
    
    return(
        <div>
            <div className="lg:flex lg:items-center lg:justify-between border-b border-gray-100 p-4 shadow dark:border-gray-700">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl/7 font-bold text-gray-900 dark:text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">
                    Department Summaries
                    </h2>
                </div>
            </div>
             <div>
                {summaries.map((summary, idx) => (
                    <div key={idx} className="p-4 shadow dark:shadow-indigo-500/40">
                        <Q2RowComponent data={summary} 
                        />
                    </div>
                ))}
            </div>
        </div>
        
    )
}