const input = document.getElementById('input')
const btn = document.getElementById('button')
const div = document.getElementById('div')

let arr = []


btn.addEventListener('click', e => {
    e.preventDefault()
    btn.disabled = true
    const lists = input.value
    input.value = ""
    arr.push(lists)

    // Clear the div before adding new elements
    div.textContent = ""
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Create a new checkbox element
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        // Create a new label element
        const label = document.createElement('label')
        label.textContent = element
        
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete'
        delBtn.style.display = 'none'
        delBtn.classList.add('delete-btn')
        
        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.style.display = 'none'
        editBtn.classList.add('edit-btn')
        
        // Create a new div to hold checkbox and label
        const itemDiv = document.createElement('div')
        itemDiv.style.display = 'flex'
        itemDiv.classList.add('todo-item')
        itemDiv.appendChild(checkbox)
        itemDiv.appendChild(label)
        itemDiv.appendChild(delBtn)
        itemDiv.appendChild(editBtn)
        
        
        
        // Append the div to the main div
        div.appendChild(itemDiv)

        checkbox.addEventListener('click', () => {
            delBtn.style.display = checkbox.checked ? "block" : 'none'
            editBtn.style.display = checkbox.checked ? 'block' : 'none'
        })

        delBtn.addEventListener('click', () => {
            const delPromt = confirm("do you want to delete?")
            if(delPromt){
                arr.splice(i , 1 )
                
                div.removeChild(itemDiv)
                counter()
            }
            
        })

        editBtn.addEventListener('click', () => {
            const editPromt = prompt("edit here: ", element)
            
            
            label.textContent = editPromt
            arr[i] = editPromt
            
        })
    }
    counter()
})
function counter(){
    const arrLength = arr.length
    let todosLength = ''
    todosLength += `Your Todo's: ${arrLength}`
    document.getElementById('counter').textContent = todosLength
    if(arrLength === 0){
        todosLength = ''
        document.getElementById('counter').textContent = todosLength
    }
    console.log(arrLength)
}
btn.disabled = true
input.addEventListener("keyup", () => {
    if (input.value.length >= 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

// const input = document.getElementById('input')
// const btn = document.getElementById('button')
// const div = document.getElementById('div')

// let arr = []

// btn.addEventListener('click', e => {
//     e.preventDefault()
//     const lists = input.value
//     input.value = ""
//     arr.push(lists)

//     // Clear the div before adding new elements
//     div.innerHTML = ""

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
        
//         // Create a new paragraph element for each item
//         const paragraph = document.createElement('p')
//         paragraph.textContent = element

//         // Append the paragraph element to the div
//         div.appendChild(paragraph)
//     }
// })
