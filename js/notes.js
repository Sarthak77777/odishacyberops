const notes = document.getElementById("notes");

notes.value = localStorage.getItem("ocy_notes") || "";

function saveNotes() {
  localStorage.setItem("ocy_notes", notes.value);
  alert("Notes saved locally in your browser.");
}
