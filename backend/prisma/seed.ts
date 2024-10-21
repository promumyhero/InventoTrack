import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();
/**
 * This function deletes all data from the specified Prisma models.
 * It takes an array of file names, extracts the model names, and deletes all records from each model.
 * If a model is not found, it logs an error message.
 * fungsi ini menghapus semua data dari model Prisma yang ditentukan.
 * Ini mengambil array nama file, mengekstrak nama model, dan menghapus semua catatan dari setiap model.
 * Jika model tidak ditemukan, itu mencatat pesan kesalahan.
 * @param orderedFileNames - An array of file names corresponding to Prisma models.
 */
async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`
      );
    }
  }
}
/**
 * This function seeds the database with data from JSON files in the seedData directory.
 * fungsi ini menanamkan database dengan data dari file JSON di direktori seedData.
 */
async function main() {
  const dataDirectory = path.join(__dirname, "seedData");
/**
 * An array of file names corresponding to Prisma models.
 * Sebuah array nama file yang sesuai dengan model Prisma.
 */
  const orderedFileNames = [
    "products.json",
    "expenseSummary.json",
    "sales.json",
    "salesSummary.json",
    "purchases.json",
    "purchaseSummary.json",
    "users.json",
    "expenses.json",
    "expenseByCategory.json",
  ];
  /**
   * Delete all data from the specified Prisma models.
   * fungsi ini menghapus semua data dari model Prisma yang ditentukan.
   */
  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];
  /**
   * If no Prisma model matches the file name, log an error message.
   * Jika tidak ada model Prisma yang cocok dengan nama file, log pesan kesalahan.
   */
    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      await model.create({
        data,
      });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}
/**
 * Seed the database with data from JSON files in the seedData directory.\
 * Tanamkan database dengan data dari file JSON di direktori seedData.
 */
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });