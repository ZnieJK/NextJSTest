-- CreateTable
CREATE TABLE "Test1DataModel" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Test1DataModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test1DataType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Test1DataType_pkey" PRIMARY KEY ("id")
);
