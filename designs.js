// Select color input
var pixelColor = document.querySelector('#colorPicker').value;
// Select size input
var mainTable = document.getElementById('pixelCanvas');

document.getElementById('sizePicker').method="post"; // stops posting table size to url

document.getElementById('pixelCanvas').addEventListener("click", colorCell);

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener("submit", makeGrid, false);

function makeGrid(event) {
    event.preventDefault();

    const tableTest = document.querySelector('tbody');
    if (tableTest) {
        tableTest.remove();
    };

    var gridHeight = document.getElementById('inputHeight').value;
    var gridWidth = document.getElementById('inputWidth').value;
        
    var tblBody = mainTable.createTBody();
        for (var i = 0; i < gridHeight; i++) {
            var row = document.createElement("tr"); // creates row
            
            for (var j = 0; j < gridWidth; j++) {
                var col = document.createElement("td"); // creates column
                row.appendChild(col);
            } 
            tblBody.appendChild(row);
        };
};

function colorCell(event) {
    pixelColor = document.querySelector('#colorPicker').value;
    event.target.style.backgroundColor = pixelColor;
};