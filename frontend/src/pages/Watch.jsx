
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  saveNotes,
  getNotes,
  updateNote,
  deleteNote,
} from "@/services/noteService";

import { generateQuiz } from "@/services/aiQuizService";

function Watch() {
  const { id } = useParams();
  const location = useLocation();

  const [videoTitle, setVideoTitle] = useState(
  location.state?.videoTitle || ""
  );

  console.log(location.state);

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, [id]);

  const fetchNotes = async () => {
    try {
      const data = await getNotes(id);

      setNotes(data);

      if (data.length > 0) {
        setVideoTitle(data[0].videoTitle);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async () => {
    try {
      if (!note.trim()) return;

      if (editingId) {
        await updateNote(editingId, note);

        setEditingId(null);
      } else {
        
        await saveNotes({
         
          videoId: id,
        
          videoTitle,
          content: note,
        });
      }

      setNote("");

      fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      await deleteNote(noteId);

      fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (selectedNote) => {
    setNote(selectedNote.content);
    setEditingId(selectedNote._id);
  };

  const quizGenerate = async () => {
    try {
      setLoading(true);

      const quizData = await generateQuiz({
        videoTitle,
        notes: notes.map((n) => n.content).join("\n"),
      });

      setQuiz(quizData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Video Section */}

        <Card className="overflow-hidden rounded-3xl border-0 shadow-2xl p-5">
          <h1 className="text-3xl font-bold mb-5">
            {videoTitle || "Video"}
          </h1>

          <iframe
            className="w-full aspect-video rounded-2xl"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube Video Player"
            allowFullScreen
          />
        </Card>

        {/* Notes Input */}

        <Card className="mt-8 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border-0 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">
            ✍️ Take Notes
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Capture key concepts, ideas and insights..."
              className="
                w-full
                h-52
                p-5
                rounded-2xl
                border
                border-gray-200
                resize-none
                outline-none
                focus:ring-2
                focus:ring-purple-500
              "
            />

            <Button
              type="submit"
              className="
                mt-4
                w-full
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                to-pink-500
              "
            >
              {editingId ? "Update Note" : "Save Note"}
            </Button>
          </form>
        </Card>

        {/* Notes */}

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            📚 Saved Notes
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {notes.map((note) => (
              <Card
                key={note._id}
                className="
                  p-5
                  rounded-3xl
                  bg-white/80
                  backdrop-blur-xl
                  border-0
                  shadow-lg
                  hover:shadow-purple-300/40
                  transition
                "
              >
                <p className="text-gray-700 leading-relaxed">
                  {note.content}
                </p>

                <div className="flex gap-3 mt-5">
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(note)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Quiz */}

        <Card className="mt-10 p-6 rounded-3xl bg-white shadow-xl">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">
              🧠 AI Quiz
            </h2>

            <Button
              onClick={quizGenerate}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Quiz"}
            </Button>
          </div>

          {quiz && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">
                {quiz.quizTitle}
              </h3>

              {quiz.questions.map((q, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-4"
                >
                  <p className="font-medium mb-3">
                    {index + 1}. {q.question}
                  </p>

                  <div className="grid gap-2">
                    {q.options.map((option, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="justify-start"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

      </div>
    </div>
  );
}

export default Watch;