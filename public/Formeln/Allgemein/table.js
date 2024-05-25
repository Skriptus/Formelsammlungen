function getPosition(text,el) {
    const index = text.indexOf(el);
    return index !== -1 ? index : 0;
  }
function showFirstLastChars(element, firstChars = 4, lastChars = 2) {
  const text = element.textContent || element.innerText; // Get text content
  const totalLength = text.length;

  if (totalLength <= firstChars + lastChars) {
    return text; // If content is less than desired length, return all
  }
  const eq_pos = getPosition(text,"=") + getPosition(text,"a") ;
  var dot_pos = getPosition(text,".")
  var t_pos = getPosition(text,"times");
  console.log(getPosition(text,"approx"));
  if(dot_pos != 0){
    dot_pos = dot_pos - (eq_pos+1)
  }
  const length = eq_pos + firstChars + dot_pos;
  const firstPart = text.substring(0, length);
  if (t_pos != 0){
    t_pos = totalLength - t_pos
  }
  const lastPart = text.substring(totalLength - lastChars - t_pos);

  return `${firstPart}...${lastPart}`;
}

function checkOverflow(cell) {
    // Compare actual width vs scrollable width for horizontal overflow
    return cell.clientWidth < cell.scrollWidth;
  }
  function getAllCells(table) {
    const cells = [];
    // Get all table rows
    const rows = table.rows;
  
    // Loop through each row
    for (let i = 0; i < rows.length; i++) {
      const currentRow = rows[i];
  
      // Get all cells within the current row
      for (let j = 0; j < currentRow.cells.length; j++) {
        const cell = currentRow.cells[j];
        if (getPosition(cell.innerText,"=") != 0){
            if(cell.innerText.length > 16){
                cell.innerText = showFirstLastChars(cell);
            }
        cells.push(cell);}
      }
    }
  
    return cells;
  }
  
  // Example usage:
  const myTable = document.getElementById("table");
  const allCells = getAllCells(myTable);
