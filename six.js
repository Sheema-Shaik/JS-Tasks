console.log("Task 1");
let employees = [
    {
        name : "Naveen",
        id : 101,
        salary : 30000
    },
    {
        name : "John",
        id : 102,
        salary : 60000
    },
    {
        name : "Arun",
        id : 103,
        salary : 45000
    }
];
let highest = employees[0];
employees.forEach(function(emp){
    if (emp.salary > highest.salary){
        highest = emp;
    }
});
console.log("Highest Salary :"+highest.salary);
console.log("Employee Name :"+highest.name);

console.log("Task 2");
let searchId = 103;
let employee = employees.find(function(emp){
    return emp.id === searchId;
});
if (employee){
    console.log("Employee Found");
    console.log("Name :"+employee.name);
    console.log("Salary :"+employee.salary);
}else{
    console.log("Employee Not Found");
}

console.log("Task 3");
let bonus =5000;
employees.forEach(function(emp){
    console.log(emp.name+" "+(emp.salary + bonus));
});

console.log("Task 4");
let employees1 =[
    {
        name : "Naveen",
        experience :2
    },
    {
        name : "John",
        experience :7
    },
    {
        name : "Arun",
        experience : 5
    }
];
employees1.forEach(function(emp){
    if (emp.expeience >= 5){
        console.log(emp.name+ "- Senior Employee");
    }else{
        console.log(emp.name+ "- Junior Employee");
    }
});

console.log("Task 5");
employees.forEach(function(emp){
    console.log(emp.name);
});

console.log("Task 6");
employees.forEach(function(emp){
    console.log(emp.id);
});

console.log("Task 7");
let total = 0;
employees.forEach(function(emp){
    total = total + emp.salary;
});
console.log("Total Salary :"+total);

console.log("Task 8");
let result = employees.filter(function(emp){
    return emp.salary > 40000;
});
result.forEach(function(emp){
    console.log(emp.name);
});

console.log("Task 9");
employees.map(function(emp){
    console.log(emp.name+" "+(emp.salary + 5000));
});

console.log("Task 10");
employees.forEach(function(emp){
    console.log("Employee Name :"+emp.name);
    console.log("Employee ID :"+emp.id);
    console.log("Salary :"+emp.salary);
});

console.log("Task 11");
console.log("Total Employees :"+employees.length);
console.log("Highest Salary :"+highest.salary);
console.log("Highest Salary Employee:"+highest.name);
let lowest = employees[0];
employees.forEach(function(emp){
    if(emp.salary < lowest.salary){
        lowest = emp;
    }
});
console.log("Lowest Salary :"+lowest.salary);
console.log("Lowest Salary Employee :"+lowest.name);
console.log("Total Salary :"+total);