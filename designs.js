// variable name for pixel canvas object 
var mainTable = document.getElementById('pixelCanvas');

// stops posting table size to url
document.getElementById('sizePicker').method="post"; 

// Listener event for pixel click
document.getElementById('pixelCanvas').addEventListener("click", colorCell);

// Submit button listener event - Calls makeGrid()
document.getElementById('sizePicker').addEventListener("submit", makeGrid, false);

// Makes user defined size pixel grid
// tableTest check to see if there is an existing pixel grid and clears it if necessary 
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

// Change the background color of the selected pixel
// pixelColor = select color input
// by using target.closest the user is ensured that only individual pixels will be colored
function colorCell(event) {
    var pixelColor = document.querySelector('#colorPicker').value;
    var target = event.target;
    try {
        td = target.closest('td');
        td.style.backgroundColor = pixelColor;
    } catch (e) {}
};