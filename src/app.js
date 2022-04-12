const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//defining the areas used in this code in order based roughly around when they're used
const newNoteArea = document.querySelector(".note-area")
const addNoteButton = document.querySelector(".fa-circle-plus")
const textBox = `<textarea id="textArea" cols="30" rows="10"></textarea>`
const saveButton = `<button class="saveButton">save</button>`
const cancelButton = `<button class="cancelButton">cancel</button>`
const sideBar = document.querySelector(".notes-list")
const noteListItem = `<li id="noteListItem"></li>`
const noteViewArea = document.querySelector(".read-note-area")
const noteViewTitle = `<h1 id="theTitle"></h1>`
const noteViewShell = `<p id="theNote"></p>`

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
      noteBody: textBoxContent,
      id: notes.length + 1
    })
    //add note title to sidebar
    sideBar.insertAdjacentHTML("beforeend", noteListItem)
    let theNote = sideBar.querySelector("#noteListItem").innerHTML = textBoxContentList[0]
    theNote = document.getElementById("noteListItem")
    theNote.id = notes.length
    //removing everything
    textArea.remove()
    cancelNoteButton.remove()
    saveNoteButton.remove()
    //re-enabling the (+) when the (save) button is clicked
    addNoteButton.addEventListener("click", noteFunction)
    //running the sidemenu function each time the save button is clicekd to update the notes
    makeNotesClickable()
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

  //changing functionality based on whether or not there is currently a note being read
  //this portion fo the code is a result of me being unable to add a functional (close) button
  //to close the note being read when clicked. This alternative closes the current note when a
  //new note area is spawned
  console.log(document.querySelector("#theTitle"))
  if (document.querySelector("#theTitle") != null) {
    console.log("Valid Query")
    theNote.remove()
    theTitle.remove()
  }
  else {
    console.log("Null Query")
  }
}
//you could say the most sublte (close) button is one that's invisible, but still easy to find 🤔

//adding the functionality to the (+) button
addNoteButton.addEventListener("click", noteFunction)

//adding functionality to the notes on the side menu
function makeNotesClickable() {
  let currentNote = document.getElementById(notes.length)
  currentNote.addEventListener("click", (evt) => {
    let currentNoteDict = (notes[currentNote.id - 1])
    console.log(currentNoteDict)
    noteViewArea.insertAdjacentHTML("beforeend", noteViewTitle)
    theTitle.textContent = currentNoteDict.title
    noteViewArea.insertAdjacentHTML("beforeend", noteViewShell)
    theNote.textContent = currentNoteDict.noteBody
  })
}
//cursors: pointer