/*
  Warnings:

  - Added the required column `reviewAmount` to the `ContactFormSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactFormSubmission" ADD COLUMN     "reviewAmount" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "coupons" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "coupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContactFormSubmissionTocoupons" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ContactFormSubmissionTocoupons_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ContactFormSubmissionTocoupons_B_index" ON "_ContactFormSubmissionTocoupons"("B");

-- AddForeignKey
ALTER TABLE "_ContactFormSubmissionTocoupons" ADD CONSTRAINT "_ContactFormSubmissionTocoupons_A_fkey" FOREIGN KEY ("A") REFERENCES "ContactFormSubmission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactFormSubmissionTocoupons" ADD CONSTRAINT "_ContactFormSubmissionTocoupons_B_fkey" FOREIGN KEY ("B") REFERENCES "coupons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
