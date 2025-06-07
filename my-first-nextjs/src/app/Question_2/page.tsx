import { prisma } from "@/lib/prisma";
import { DepartmentSummary } from "../types/DepartmentData";
import DepartmentPageClient from "./DepartmentPageClient";


export default async function Page() {
  const depertmentinfo = await prisma.departmentSummary.findMany();
  const summaries = depertmentinfo as DepartmentSummary[];

  return <DepartmentPageClient summaries={summaries} />;
}
