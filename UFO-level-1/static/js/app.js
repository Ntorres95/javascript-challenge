// from data.js
var tableData = data;

//variable to select the button
var button = d3.select("#filter-btn");

//variable to select the form
var form = d3.select("#form");

// event handlers for button click and enter
button.on("click", runEnter);
form.on("submit", runEnter);

// function to run events
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // variable to collect the input element
    var inputElement = d3.select("#datetime");

    // variable to collect the value property
    var inputValue = inputElement.property("value");

    //sanity check
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    //sanity check
    console.log(filteredData);

    //variable to collect the table
    var tbody = d3.select("tbody");

    //itertate through the filtered data and add the values to the table
    data.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};