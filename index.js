

function handleSubmit(){
    let type = document.querySelector("#type").value
    let name = document.getElementById("name").value
    let amount = document.querySelector("#amount").value
    let table = document.querySelector("table")
    let row = document.createElement("tr")
    let typeCol = document.createElement("td")
    let btn = document.createElement("button")
    btn.innerText = "Delete"
    typeCol.innerText = type
    let nameCol = document.createElement("td")
    nameCol.innerText = name
    let amountCol = document.createElement("td")
    amountCol.innerText = amount
    row.appendChild(typeCol)
    row.appendChild(nameCol)
    row.appendChild(amountCol)
    row.appendChild(btn)
    btn.addEventListener("click", function(){
        table.removeChild(row)
    })
    table.appendChild(row)
}

