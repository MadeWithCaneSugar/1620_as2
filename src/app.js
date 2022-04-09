const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//defining the areas used in this code in order based roughly around when they're used
const newNoteArea = document.querySelector(".create-note-area")
const addNoteButton = document.querySelector(".fa-circle-plus")
const textBox = `<textarea id="textArea" cols="30" rows="10"></textarea>`
const saveButton = `<button class="saveButton">save</button>`
const cancelButton = `<button class="cancelButton">cancel</button>`
const sideBar = document.querySelector("notes-list")

//overarching function for (+) button and contains sub-functions for (cancel) and (save) buttons
function noteFunction() {
  //adding the text-box, (save), and (cancel) buttons
  newNoteArea.insertAdjacentHTML("beforeend", textBox)
  newNoteArea.insertAdjacentHTML("beforeend", saveButton)
  newNoteArea.insertAdjacentHTML("beforeend", cancelButton)
  //disabling the (+) button to prevent multiple sets of elements from opening
  addNoteButton.removeEventListener("click", noteFunction)

  //functionality for the (save) button
  const saveNoteButton = document.querySelector(".saveButton")
  saveNoteButton.addEventListener("click", (evt) => {
    let textBoxContent = newNoteArea.querySelector("#textArea").value
    //splitting the note into a list to push the title to the proper slot
    let textBoxContentList = textBoxContent.split("\n")
    notes.push({
      title: textBoxContentList[0],
      notebody: textBoxContent,
      id: notes.length + 1
    })
    //removing everything
    textArea.remove()
    cancelNoteButton.remove()
    saveNoteButton.remove()
    //re-enabling the (+) when the (save) button is clicked
    addNoteButton.addEventListener("click", noteFunction)
    console.log(notes)
  })

  //functionality for the (cancel) button
  const cancelNoteButton = document.querySelector(".cancelButton")
  cancelNoteButton.addEventListener("click", (evt) => {
    //removing everything
    textArea.remove()
    cancelNoteButton.remove()
    saveNoteButton.remove()
    //re-enabling the (+) when the (cancel) button is clicked
    addNoteButton.addEventListener("click", noteFunction)
  })
}

//adding the functionality to the (+) button
addNoteButton.addEventListener("click", noteFunction)