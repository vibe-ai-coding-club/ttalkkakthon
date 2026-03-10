-- AlterTable
ALTER TABLE "teams" ADD COLUMN "privacy_consent" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "teams" ADD COLUMN "consented_at" TIMESTAMP(3);
