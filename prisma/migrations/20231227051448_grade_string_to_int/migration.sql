/*
  Warnings:

  - You are about to alter the column `name` on the `grade` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `grade` DROP FOREIGN KEY `Grade_teacher_name_fkey`;

-- AlterTable
ALTER TABLE `grade` MODIFY `name` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Grade` ADD CONSTRAINT `Grade_teacher_name_fkey` FOREIGN KEY (`teacher_name`) REFERENCES `Teacher`(`username`) ON DELETE NO ACTION ON UPDATE CASCADE;
