
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(count)
    saved = count + " - "
    saveEl.textContent += saved
    count = 0
    countEl.textContent = count
}


    
