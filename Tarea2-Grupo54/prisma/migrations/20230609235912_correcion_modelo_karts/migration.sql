-- DropForeignKey
ALTER TABLE "Karts" DROP CONSTRAINT "Karts_id_personaje_fkey";

-- AlterTable
ALTER TABLE "Karts" ALTER COLUMN "id_personaje" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Karts" ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "Personajes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
