/*
  Warnings:

  - The primary key for the `Board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Board` table. All the data in the column will be lost.
  - Added the required column `title` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NodeType" AS ENUM ('SCENE', 'THEORY');

-- AlterTable
ALTER TABLE "Board" DROP CONSTRAINT "Board_pkey",
DROP COLUMN "name",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Board_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Board_id_seq";

-- CreateTable
CREATE TABLE "Node" (
    "id" TEXT NOT NULL,
    "boardId" TEXT NOT NULL,
    "type" "NodeType" NOT NULL,
    "positionX" DOUBLE PRECISION NOT NULL,
    "positionY" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene" (
    "nodeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT,
    "season" INTEGER,
    "episode" INTEGER,
    "minute" INTEGER,
    "description" TEXT,
    "location" TEXT,
    "note" TEXT,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("nodeId")
);

-- CreateTable
CREATE TABLE "Theory" (
    "nodeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "Theory_pkey" PRIMARY KEY ("nodeId")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SceneCharacter" (
    "sceneNodeId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "SceneCharacter_pkey" PRIMARY KEY ("sceneNodeId","characterId")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL,
    "boardId" TEXT NOT NULL,
    "sourceNodeId" TEXT NOT NULL,
    "targetNodeId" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Theory" ADD CONSTRAINT "Theory_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SceneCharacter" ADD CONSTRAINT "SceneCharacter_sceneNodeId_fkey" FOREIGN KEY ("sceneNodeId") REFERENCES "Scene"("nodeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SceneCharacter" ADD CONSTRAINT "SceneCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_sourceNodeId_fkey" FOREIGN KEY ("sourceNodeId") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_targetNodeId_fkey" FOREIGN KEY ("targetNodeId") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;
