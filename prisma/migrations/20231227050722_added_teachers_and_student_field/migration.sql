-- AlterTable
ALTER TABLE `account` MODIFY `id_token` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `firstname` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `Grade` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `teacher_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Grade_teacher_name_key`(`teacher_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Teacher_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `middlename` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `father_name` VARCHAR(191) NOT NULL,
    `mother_name` VARCHAR(191) NOT NULL,
    `caste` VARCHAR(191) NOT NULL,
    `grade_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_username_key`(`username`),
    UNIQUE INDEX `Student_grade_name_key`(`grade_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Grade` ADD CONSTRAINT `Grade_teacher_name_fkey` FOREIGN KEY (`teacher_name`) REFERENCES `Teacher`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_grade_name_fkey` FOREIGN KEY (`grade_name`) REFERENCES `Grade`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
