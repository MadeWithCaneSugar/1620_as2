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
const textBox = `<textarea name="newnote" id="textArea" cols="30" rows="10"></textarea>`
const saveButton = `<button class="saveButton">save</button>`
const cancelButton = `<button class="cancelButton">cancel</button>`


function noteFunction() {
  //adding the text-box, (save), and (cancel) buttons
  newNoteArea.insertAdjacentHTML("beforeend", textBox)
  newNoteArea.insertAdjacentHTML("beforeend", saveButton)
  newNoteArea.insertAdjacentHTML("beforeend", cancelButton)

  //disabling the (+) button
  addNoteButton.removeEventListener("click", noteFunction)

  //functionality of the (cancel) button
  const cancelNoteButton = document.querySelector(".cancelButton")
  const saveNoteButton = document.querySelector(".saveButton")
  cancelNoteButton.addEventListener("click", (evt) => {
    textArea.remove()
    cancelNoteButton.remove()
    saveNoteButton.remove()
    
    //re-enabling the (+) when the (cancel) button is clicked
    addNoteButton.addEventListener("click", noteFunction)
  })
}

//adding the functionality to the (+) button
addNoteButton.addEventListener("click", noteFunction)
