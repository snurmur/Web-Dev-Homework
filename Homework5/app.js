const app = new Vue({
  el: "#app",
  data: {
    notes: [],
    selectedNote: null,
  },
  methods: {
    createNote() {
      const newNote = {
        id: Date.now(),
        title: "New Note",
        content: "",
      };
      this.notes.push(newNote);
      this.selectedNote = newNote;
    },
    viewNote(id) {
      this.selectedNote = this.notes.find((note) => note.id === id);
    },
    saveNote() {
      // Save note to the server or local storage
      this.selectedNote = null;
    },
    deleteNote() {
      const index = this.notes.indexOf(this.selectedNote);
      if (index !== -1) {
        this.notes.splice(index, 1);
        this.selectedNote = null;
      }
    },
  },
});
