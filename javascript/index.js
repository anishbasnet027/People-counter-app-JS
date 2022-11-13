let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let saveE = count + ","
    saveEl.innerText += saveE
}

function Clear() {
    countEl.innerText = 0
    saveEl.innerText = 0 + ","
}
