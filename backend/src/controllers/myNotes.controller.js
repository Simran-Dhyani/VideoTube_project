import { Note } from "../models/note.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const myNotes = asyncHandler(async (req, res) => {
  const notes = await Note.aggregate([
    {
      $match: {
        user: req.user._id,
      },
    },
    {
      $group: {
        _id: "$videoId",
        notesCount: { $sum: 1 },
       
      },
    },
  ]);

  return res.status(200).json(
    new ApiResponse(200, notes, "My Notes fetched successfully")
  );
});

export default myNotes;