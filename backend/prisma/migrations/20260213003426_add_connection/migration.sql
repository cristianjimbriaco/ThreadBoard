/*
  Warnings:

  - You are about to drop the column `description` on the `Connection` table. All the data in the column will be lost.
  - Added the required column `type` to the `Connection` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ConnectionType" AS ENUM ('CAUSES', 'LEADS_TO', 'PARALLEL', 'CONTRADICTS');

-- AlterTable
ALTER TABLE "Connection" DROP COLUMN "description",
ADD COLUMN     "type" "ConnectionType" NOT NULL;

-- CreateIndex
CREATE INDEX "Connection_boardId_idx" ON "Connection"("boardId");

-- CreateIndex
CREATE INDEX "Connection_sourceNodeId_idx" ON "Connection"("sourceNodeId");

-- CreateIndex
CREATE INDEX "Connection_targetNodeId_idx" ON "Connection"("targetNodeId");
