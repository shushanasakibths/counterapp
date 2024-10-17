// Shushana Saki Counter App

let clickCount = 0
let savedEntries = "";

function increment() { // This is a function
    let countJS = document.getElementById("count-el")
    clickCount++
    console.log(clickCount)
    countJS.innerHTML = clickCount
    console.log(countJS)
}

function save() {
    let entriesEl = document.getElementById("entries");
    savedEntries += clickCount + " - ";
    entriesEl.textContent = "Previous entries: " + savedEntries;
    document.getElementById("count-el").innerHTML = clickCount;

}
