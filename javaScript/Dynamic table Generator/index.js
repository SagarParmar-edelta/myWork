let table = document.getElementById('myTable');

const makeTable = () => {
    let rows = document.getElementById('numOfRows').value;
    let cols = document.getElementById('numOfCols').value;
    if(rows > 0 && cols > 0){
        for(let i=1; i <= rows; i++){
            let tr = document.createElement('tr');
    
            for(let j=1; j <= cols; j++){
                let td = document.createElement('td');toString(i+j);
    
                td.innerText = i+' '+j;
                tr.appendChild(td);
            }
    
            table.appendChild(tr);
        }  
    }else{
        alert("Invalid number!");
    }

    document.getElementById('numOfRows').value = '';
    document.getElementById('numOfCols').value = '';
     
}

const clearTable = () => {
    table.innerHTML = "";
   
}

document.getElementById('createTable').addEventListener('click', makeTable);
document.getElementById('clearTable').addEventListener('click', clearTable);