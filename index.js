// Shushana Saki Counter App

let clickCount = 0
function increment() { // This is a function
    let countJS = document.getElementById("count-el")
    clickCount++
    console.log(clickCount)
    countJS.innerHTML = clickCount
    console.log(countJS)
}