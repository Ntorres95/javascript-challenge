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

    // cariable to collect the value property
    var inputValue = inputElement.property("value");

    //sanity check
    console.log(inputValue);

    
};