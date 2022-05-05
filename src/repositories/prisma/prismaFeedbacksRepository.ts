import { FeedbacksRepository, FeedbacksCreateData } from "../feedbacksRepository";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbacksCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  };
}