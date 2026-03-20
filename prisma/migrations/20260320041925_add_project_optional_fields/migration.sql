-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "features" TEXT,
ADD COLUMN     "tools" TEXT,
ADD COLUMN     "video_url" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "github_url" DROP NOT NULL;
