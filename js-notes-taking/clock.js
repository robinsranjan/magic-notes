//if users add  a notes add it to local storage
show()
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {

  let addTxt = document.getElementById("addTxt")
  let notes = localStorage.getItem("notes")
  if (notes == null) {
    notesObj = [];
  }

  else {
    notesObj = JSON.parse(notes)

  }
  notesObj.push(addTxt.value);
  let str = JSON.stringify(notesObj)
  localStorage.setItem("notes", str)
  addTxt.value = "";
   

  show()
})

function show() {
  let notes = localStorage.getItem("notes")
  if (notes == null) {
     notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes)

  }
  let htmlstring = "";

  notesObj.forEach(function(element,index)  {
    htmlstring+=`   <div class="card my-2 mx-2 " style="width: 18rem;">
                 
    <div class="card-body noteCard">
      <h5 class="card-title"> title ${index+1}</h5>
      <p class="card-text"> ${element}</p>
      <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
  </div>`

  });
let notesele=document.getElementById("notes")
if(notesObj!=0)
{
  notesele.innerHTML=htmlstring
}
else
{
  notesele.innerHTML=`type and click on add notes to add a notes`
}

}


//function to delete note

function deleteNote(index)
{
let notes=localStorage.getItem("notes")

  if (notes == null) {
   var notesObj = [];
  }

  else {
    notesObj = JSON.parse(notes);

  }
notesObj.splice(index,1)

  let str = JSON.stringify(notesObj)
  localStorage.setItem("notes", str)

show()
}