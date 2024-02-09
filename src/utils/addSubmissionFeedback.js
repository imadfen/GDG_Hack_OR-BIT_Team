import mongoCollection from "./mongoCollection";
import { ObjectId } from "mongodb";

export default async function addSubmissionFeedback(team_id, feedback) {
  try {
    const submissionsCollection = await mongoCollection("submissions");
    const submission = await submissionsCollection.findOne({
      team_id,
    });
    if (!submission) {
      throw new Error("Submission not found");
    }
    submission.feedbacks.push(feedback);
    await submissionsCollection.updateOne(
      { team_id },
      { $set: { feedbacks: submission.feedbacks } }
    );
  } catch (error) {
    throw new Error(error.message);
  }
}
