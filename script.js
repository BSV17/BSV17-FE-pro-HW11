
let table = document.createElement("table");
table.classList.add("table", "table-bordered", "text-center");
let num = 1;
for (let i = 0; i < 10; i++) {
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for(let j = 0; j < 10; j++) {
        let tableData = document.createElement("td");
        tableRow.appendChild(tableData);
        tableData.innerHTML = `${num++}`;
    }
}

document.querySelector("body").appendChild(table);
