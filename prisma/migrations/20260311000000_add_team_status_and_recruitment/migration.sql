-- CreateEnum
CREATE TYPE "TeamStatus" AS ENUM ('PENDING', 'CONFIRMED', 'WAITLISTED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "RecruitmentStatus" AS ENUM ('NOT_RECRUITING', 'RECRUITING', 'CLOSED');

-- AlterTable
ALTER TABLE "teams" ADD COLUMN "status" "TeamStatus" NOT NULL DEFAULT 'PENDING';
ALTER TABLE "teams" ADD COLUMN "recruitment_status" "RecruitmentStatus" NOT NULL DEFAULT 'NOT_RECRUITING';
ALTER TABLE "teams" ADD COLUMN "recruitment_note" TEXT;

-- DataMigration: depositConfirmed === true → status = CONFIRMED
UPDATE "teams" SET "status" = 'CONFIRMED' WHERE "deposit_confirmed" = true;
