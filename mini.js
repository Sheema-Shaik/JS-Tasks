console.log("Mini Project Task");
let bonus = 5000;
let employees = [
    { name : "A", id :1,salary :30000},
    { name : "B",id : 2 ,salary : 40000},
    { name : "C", id:3, salary : 50000},
    { name :"D",id : 4, salary : 60000}
];
function viewEmployees(){
    console.log("Employee List:");
    employees.forEach(function(emp){
        console.log("Name :",emp.name);
        console.log("ID :",emp.id);
        console.log("Salary:",emp.salary);
    });
}
viewEmployees();
function searchEmployee(){
    let id = Number(prompt("Enter Employee ID:"));    let employee = employees.find(function(emp){
        return emp.id === id;
    });
    if (employee){
        console.log(employee);
        console.log("Employee Found");
    }
    else{
        console.log("Employee Not Found");
    }
}
searchEmployee();
function addBonus(){
    employees.map(function(emp){
        emp.salary = emp.salary + bonus;
    });
    console.log("After Bonus:");
    viewEmployees();
}
addBonus();
function highestSal(){
    let high = employees.reduce(function(max,emp){
        if (emp.salary > max.salary){
            return emp;
        }
        else{
            return max;
        }

    });
    console.log("Highest Salary");
    console.log(high);
}
highestSal();
function lowestSal(){
    let low = employees.reduce(function(min,emp){
        if (emp.salary < min.salary){
            return emp;
        }
        else{
            return min;
        }
    });
    console.log("Lowest Salary");
    console.log(low);
}
lowestSal();
function totalSal(){
    let tot = employees.reduce(function(sum,emp){
        return sum+emp.salary;
    },0);
    console.log("Total Salary :",tot);
}
totalSal();
function salAbove40000(){
    let result = employees.filter(function(emp){
        return emp.salary > 40000;
    });
    console.log(result);
}
salAbove40000();
function employeeReport(){
    employees.forEach(function(emp){
        console.log("Employee Name :",emp.name);
        console.log("Employee ID :",emp.id);
        console.log("Employee Salary:",emp.salary);
    });
}
employeeReport();
function currentDateTime(){
    let today = new Date();
    console.log(today);
}
currentDateTime();

function fetchEmployees(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);

})
}
fetchEmployees();

function exitProgram(){
    let choice = "Exit";
    switch(choice){
        case "Exit":
            console.log("Thank You");
            break;
        default:
            console.log("Invalid Option");
        }
}
exitProgram();

