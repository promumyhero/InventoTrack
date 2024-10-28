import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
/**
 * GET /expenses/by-category
 *
 * Retrieves a summary of expenses, grouped by category.
 *
 * @example
 * curl -X GET http://localhost:3000/expenses/by-category
 *
 * @returns {object} Summarized expense data, with the following shape:
 * {
 *   expenseByCategoryId: string,
 *   expenseSummaryId: string,
 *   date: Date,
 *   category: string,
 *   amount: string,
 * }
 */
export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: "desc",
        },
      }
    );
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );

    res.json(expenseByCategorySummary);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving expenses by category" });
  }
};