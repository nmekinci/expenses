// *********variables

let inputIncome = document.getElementById("add-income")
let inputAddButton = document.getElementById("button-addon2")
let expensesType = document.getElementById("choose")
let dateTime = document.getElementById("date-time")
let amount = document.getElementById("amount")
let saveButton = document.getElementById("save")
let tableElement = document.getElementById("list-table")

let resultIncomesSpan = document.getElementById("result-incomes")
let resultExpensesSpan = document.getElementById("result-expenses")
let resultSumspan = document.getElementById("result-sum")

let jSonArr = [];
let jSonObj ;

// *************events listeners

inputAddButton.addEventListener("click",() => {
    console.log(inputIncome.value);
    addIncomesToResult()
    resultSum()
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
    resultSum()
});


// ************* Functions area 

const addIncomesToResult = () => {
    resultIncomesSpan.innerText = Number(resultIncomesSpan.innerText) + Number(inputIncome.value)
}
const addExpensesToList = () => {
    let newTr = document.createElement("tr")

    let newTdExp = document.createElement("td")
    let newTdDate = document.createElement("td")
    let newTdAmount = document.createElement("td")
    let newTdTrash = document.createElement("td")
    
    let newI = document.createElement("i")
    newI.className = "bi bi-trash3 text-danger"

    newTdTrash.appendChild(newI)

    newTdAmount.innerText = jSonObj.amnt
    newTdDate.innerText = jSonObj.dt
    newTdExp.innerText = jSonObj.exp

    newTr.appendChild(newTdDate)
    newTr.appendChild(newTdExp)
    newTr.appendChild(newTdAmount)
    newTr.appendChild(newTdTrash)

    document.getElementById("table-body").appendChild(newTr)

// !above the code blocks are work for create 
// <tr>
//               <td>Mark</td>
//               <td>Otto</td>
//               <td>@mdo</td>
//               <td><i class="bi bi-trash3 text-danger"></i></td>
//             </tr>
// !this structe inside the tbody with id="table-body"

    resultExpensesSpan.innerText = Number(resultExpensesSpan.innerText) + Number(jSonObj.amnt)
    console.log(resultExpensesSpan.innerText);
}
const resultSum = () => {
    resultSumspan.innerText = Number(resultIncomesSpan.innerText) - Number(resultExpensesSpan.innerText)
}