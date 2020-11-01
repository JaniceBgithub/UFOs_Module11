
//general plan: 
//1. load the data.js file
//2. Build the initial table with all the data by looping through the data.js file
//3. listen for a change in table and then call the updateFilters function 
//the updateFilters function will then call the filterTable function 
//Then the build table function will be called with the filteredData as input into it, rather than the whole data.js file
//goes through each change and runs the program multiple times to get the complete filter


//from data.js file 
var tableData = data;

// reference the table body in html
var tbody = d3.select("tbody")

//build table by looping through each row and appending values from data
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        var row =tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
            cell.text(val);
    });
});
}


//initially populate the table with the tabledata, basically everything from the data.js file
buildTable(tableData)

//Create filter variable
var filters = {};


function updateFilters() {
  //get the element that was changed and get the user input into the filter field
  var change = d3.select(this).select("input");

  //get the value of the item that has changed
  var elementValue = change.property("value");

  //hold the id of the attribute that has changed
  var filterId = change.attr("id");

  //check if these filter values of changed, if yes, append the filters variable, else delete the item from filters
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
    // Call function to apply all filters and rebuild the table
    filterTable();
  }

  function filterTable() {
    // filterdata = tabledata initially until repopulate
    let filteredData = tableData;
   //go through data and keep anything that matches filters
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
    // use filtered data to build table
    buildTable(filteredData);
  }

  // determine when there has been a change and then call the updatefilters function 
  //the browser detects a change with a mouse click on the page. 
  //goes through each item one by one for filter changes and reruns the code everytime. 
  //ie make a change in one filter, then when you click on next field, the code runs
  //the button on the page does nothing, just a mechanism to get the user to click somewhere in browser


  //For example to select all elements with class item use d3.selectAll('.item').  Getting all the filter class items
  d3.selectAll(".filter").on("change", updateFilters);

 
