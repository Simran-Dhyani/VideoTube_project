
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  saveNotes,
  getNotes,
  updateNote,
  deleteNote,
} from "@/services/noteService";

function Watch() {
  const { id } = useParams();

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, [id]);

  const fetchNotes = async () => {
    try {
      const data = await getNotes(id);
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async () => {
    try {
      if (editingId) {
        await updateNote(editingId, note);
        setEditingId(null);
      } else {
        await saveNotes(id, note);
      }

      setNote("");
      fetchNotes();
    } catch (error) {
      console.log(error);
      alert("Failed");
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

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Video Section */}
        <div className="lg:w-2/3">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-lg"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube Video Player"
              allowFullScreen
            />
          </div>
        </div>

        {/* Notes Section */}
        <div className="lg:w-1/3">
          <Card className="p-5 lg:sticky lg:top-6">

            <h2 className="text-xl font-semibold mb-4">
              My Notes
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
                placeholder="Write your notes here..."
                className="
                  w-full
                  h-40
                  p-4
                  border
                  rounded-xl
                  resize-none
                "
              />

              <Button
                type="submit"
                className="w-full mt-4"
              >
                {editingId ? "Update Note" : "Save Note"}
              </Button>
            </form>

            <div className="mt-6 space-y-3">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className="border rounded-lg p-3"
                >
                  <p>{note.content}</p>

                  <div className="flex gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => handleEdit(note)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(note._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </Card>
        </div>

      </div>
    </div>
  );
}

export default Watch;