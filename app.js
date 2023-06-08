// *********variables

let inputIncome = document.getElementById("add-income")
let inputAddButton = document.getElementById("button-addon2")
let expensesType = document.getElementById("choose")
let dateTime = document.getElementById("date-time")
let amount = document.getElementById("amount")
let saveButton = document.getElementById("save")
let tableElement = document.getElementById("list-table")

let resultIncomesSpan = document.getElementById("result-incomes")

let jSonArr = [];
let jSonObj ;
// let tableRow;

// *************events listeners

inputAddButton.addEventListener("click",() => {
    console.log(inputIncome.value);
    addIncomesToResult()
});

saveButton.addEventListener("click",(e) => {
    e.preventDefault()
    jSonObj = {
        dt:dateTime.value,
        exp:expensesType.value,
        amnt:amount.value,
    };
    jSonArr.push(jSonObj);
    console.log(jSonArr);
    addExpensesToList()
});


// ************* Functions area 

const addIncomesToResult = () => {
    resultIncomesSpan.innerText = Number(resultIncomesSpan.innerText) + Number(inputIncome.value)
}
const addExpensesToList = () => {
    
    let tableRow = `
    <tbody class="">
            <tr>
              <td>${jSonObj.dt}</td>
              <td>${jSonObj.exp}</td>
              <td>${jSonObj.amnt}</td>
              <td><i class="bi bi-trash3 text-danger"></i></td>
            </tr>
          </tbody>
    `;
    let newTableRow = document.createElement(tableRow)
    document.getElementById("table-body").appendChild(newTableRow)
}