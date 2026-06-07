
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

return ( <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6">

```
  <div className="max-w-7xl mx-auto">

    <Card className="overflow-hidden rounded-3xl border-0 shadow-2xl">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allowFullScreen
      />
    </Card>

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

  </div>
</div>


);
}
      
export default Watch;
