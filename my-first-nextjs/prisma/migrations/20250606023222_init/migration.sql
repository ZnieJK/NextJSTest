-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "hairColor" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepartmentSummary" (
    "departmentName" TEXT NOT NULL,
    "maleCount" INTEGER NOT NULL,
    "femaleCount" INTEGER NOT NULL,
    "ageMin" INTEGER NOT NULL,
    "ageMax" INTEGER NOT NULL,
    "hairSummary" JSONB NOT NULL,
    "addressUsers" JSONB NOT NULL,

    CONSTRAINT "DepartmentSummary_pkey" PRIMARY KEY ("departmentName")
);
