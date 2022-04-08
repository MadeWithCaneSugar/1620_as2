const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//defining the areas used in this code
const newNoteArea = document.querySelector(".create-note-area")
const addNoteButton = document.querySelector(".fa-circle-plus")
const textBox = `<textarea name="newnote" id="textArea" cols="30" rows="10"></textarea>
  <button class="saveButton">save</button>
  <button class="cancelButton">cancel</button>`

// create new note button (+)
addNoteButton.addEventListener("click", (evt) => {
  console.log(evt);
  newNoteArea.insertAdjacentHTML("afterend", textBox)

  const cancelNoteButton = document.querySelector(".cancelButton")
  cancelNoteButton.addEventListener("click", (evt) => {
    console.log(evt);
    newNoteArea.removeChild(textBox);
  })
})



//cancel current note button
