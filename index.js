

let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let resetEl=document.getElementById("save-el")
let totalCountEl=document.getElementById("totalCount-el")
let resetBtn=document.getElementById("reset-btn")
let count = 0
let entryCount = 0
let totalCount = 0

function increment(){
  count += + 5
  countEl.textContent=count+" mins"
}

function save() {
  let entryFirst = count
  let entry = " - "+count
  if (entryCount == 0){
    saveEl.textContent = entryFirst
  } else{
    saveEl.textContent += entry
  }
  totalCount += count
  totalCountEl.textContent= totalCount
  count = 0
  countEl.textContent= 0 + " mins"
  entryCount += +1
  
}

function reset(){
    // resetBtn.style.backgroundColor="darkRed"
    // resetBtn.textContent = "Confirm reset?"
    // resetBtn.onclick = function reset(){
      count = 0
      entryCount = 0
      countEl.textContent=0 + " mins"
      saveEl.textContent=0
      totalCountEl.textContent=0
      // resetBtn.style.backgroundColor="#00005C"
      // resetBtn.textContent = "RESET"
}

