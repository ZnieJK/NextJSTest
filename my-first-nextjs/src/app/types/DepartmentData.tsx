export interface DepartmentSummary {
  departmentName: string
  maleCount: number
  femaleCount: number
  ageMin: number
  ageMax: number
  hairSummary: Record<string, number> 
  addressUsers: Record<string, string>
}

export interface Department {
  id: string,
  departmentName: string
}