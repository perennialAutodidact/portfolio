-- CreateTable
CREATE TABLE "public"."CoreFeeling" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CoreFeeling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SecondaryFeeling" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "coreFeelingId" INTEGER NOT NULL,

    CONSTRAINT "SecondaryFeeling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LeafFeeling" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "secondaryFeelingId" INTEGER NOT NULL,

    CONSTRAINT "LeafFeeling_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoreFeeling_name_key" ON "public"."CoreFeeling"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SecondaryFeeling_name_key" ON "public"."SecondaryFeeling"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LeafFeeling_name_key" ON "public"."LeafFeeling"("name");

-- AddForeignKey
ALTER TABLE "public"."SecondaryFeeling" ADD CONSTRAINT "SecondaryFeeling_coreFeelingId_fkey" FOREIGN KEY ("coreFeelingId") REFERENCES "public"."CoreFeeling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LeafFeeling" ADD CONSTRAINT "LeafFeeling_secondaryFeelingId_fkey" FOREIGN KEY ("secondaryFeelingId") REFERENCES "public"."SecondaryFeeling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
