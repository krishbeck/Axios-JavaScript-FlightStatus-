/**
 * Search flight based on input value
 */
function searchFlight() {
    var input = document.getElementById("searchbar");   // search input
    // TODO :: if input empty then return

    var inputUpperCase = input.value.toUpperCase();     // post filter -> uppercase

    // grab 'flight-list' table and check all column values
    var table = document.getElementById("flight-list");
    for(var i = 1, row; row = table.rows[i]; i++){      // starting from row 1, skipping header
        row.style.display = "none";                     // hide TODO :: write in css
        for (var j = 0, col; col = row.cells[j]; j++){  // iterating over each column
            if(col){
                colUpperCase = col.innerHTML.toUpperCase(); // column value uppercase
                var isPartialMatching = colUpperCase.indexOf(inputUpperCase) > -1;  // check for matching, and set style
                if(isPartialMatching){
                    row.style.display = "";             // TODO write in css
                    break;                              // break if found
                }
            }
        }
    }
}

// invoke search flight based on keyup event
document.getElementById("searchbar").onkeyup = () => {
    searchFlight(); // search flight
}