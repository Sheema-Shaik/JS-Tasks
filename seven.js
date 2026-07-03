console.log("Task 1");
let students = [
    {
        name : "Naveen",
        id : 101,
        mark :85
    },
    {
        name : "John",
        id : 102,
        mark : 45
    },
    {
        name : "Arun",
        id : 103,
        mark : 25
    }
];
console.log("All Students");
for (let student of students){
    console.log(student);
}
console.log("Student Names:");
for (let student of students){
    console.log(student.name);
}
for (let student of students){
    if (student.id === 102){
        console.log(student);
    }
}
console.log("Students who Passes:");
for (let student of students){
    if (student.mark >= 35){
        console.log(student);
    }
}
console.log("Total Students:",students.length);

console.log("Task 2");
let employees = [
    {
        name : "Naveen",
        salary : 30000
    },
    {
        name : "John",
        salary : 45000
    },
    {
        name : "Arun",
        salary :60000
    }
];
let highest = employees[0].salary;
for ( let emp of employees){
    if (emp.salary > highest){
        highest = emp.salary;
    }
}
console.log("Highest Salary :",highest);
let lowest = employees[0].salary;
for ( let emp of employees){
    if (emp.salary < lowest){
        lowest = emp.salary;
    }
}
console.log("Lowest Salary :",lowest);
console.log("Salary After Bonus:");
for (let emp of employees){
    emp.salary += 5000
    console.log(emp.name+" "+emp.salary);

}
let totalSalary =0;
for (let emp of employees){
    totalSalary += emp.salary;
}
console.log("Total Salary :",totalSalary);
for (let emp of employees){
    if (emp.salary > 40000){
        console.log(emp);
    }
}
 
console.log("Task 3");
let products = [
    {
        name : "Laptop",
        price : 50000
    },
    {
        name : "Mouse",
        price : 500
    },
    {
        name : "Keyboard",
        price : 1500
    }
];
console.log("Product Names :");
for (let product of products){
    console.log(product.name);
}
let totalBill =0;
for (let product of products){
    totalBill += product.price;
}
console.log("Total Bill :",totalBill);
for (let product of products){
    if (product.name === "Mouse"){
        console.log(product);
    }
}
for (let product of products){
    let discount = product.price - (product.price * 0.1);
    console.log(product.name,":",discount);
}
let finalBill =0;
for (let product of products){
    let discount = product.price - (product.price * 0.1);
    finalBill += discount;
}
console.log("Final Bill :",finalBill);

console.log("Task 4");
let account ={
    name : "Naveen",
    balance : 50000
};
account.balance += 10000;
console.log("After Deposite :",account.balance);
account.balance -= 5000;
console.log("After withdraw :",account.balance);
console.log("Balance :",account.balance);
if (account.balance < 20000){
    console.log("Balance below 20000");
}else {
    console.log("Balance above 20000");
}
console.log(account);

console.log("Task 5");
let username = prompt("Enter Username :");
let password = prompt("Enter Password :");
if (username === "admin" && password === "12345"){
    alert("Welcome");
    console.log("Welcome");
}else{
    alert("Invalid Username or Password");
    console.log("Invalid");
}


console.log("Task 6");
let signal = prompt("Enter Signal Color(red,yellow,green):");
switch (signal){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

console.log("Task 7");
let balance = 50000;
let choice = prompt("Enter your choice(1.Balance 2.Deposit 3.Withdraw 4.Exit):");
switch (choice){
    case "1":
        console.log("Balance :",balance);
        break;
    case "2":
        let deposit = prompt("Enter Deposit Amount :");
        balance += deposit;
        console.log("Balance After Deposit :",balance);
        break;
    case "3":
        let withdraw = prompt("Enter Withdraw Amount :");
        if (withdraw <=balance){
            balance -= withdraw;
            console.log("Withdraw Successfull");
            console.log("Balance ",balance);
        }else{
            console.log("Insufficient Balance");
        }
        break;
    case "4":
        console.log("Exit");
        break;
    default:
        console.log("Invalid Choice");
}

console.log("Task 8");
let score = [10,25,40,60,80,100];
let highe = score[0];
for (let i=0;i<score.length;i++){
    if (score[i] > highe){
        highe = score[i];
    }
}
console.log("Highest Score :",highe);
let lowe = score[0];
for (let i=0;i<score.length;i++){
    if (score[i]< lowe){
        lowe = score[i];
    }
}
console.log("Lowest Score :",lowe);
let total =0;
for (let i=0;i<score.length;i++){
    total += score[i];
}
console.log("Total Score :",total);
let average = total/score.length;
console.log("Average Score :",average);

console.log("Task 9");
let age = prompt("Enter Age :");
let booking =confirm("Do you want to book a movie ticket?");
if (booking){
    if (age >= 18){
        alert("Ticket Booked");
        console.log("Ticket Booked");
    }else{
        alert("Not Allowed");
        console.log("Not Allowed");
    }
}else{
    alert("Booking Cancelled");
}

console.log("Task 10");
let token = prompt("Enter Token (1.Doctor A 2.Doctor B 3.Doctor C):");
switch (token){
    case "1":
        console.log("Doctor A");
        break;
    case "2":
        console.log("Doctor B");
        break;
    case "3":
        console.log("Doctor C");
        break;
    default:
        console.log("Invalid");
}

console.log("Task 11");
let fruits = ["Apple","Orange","Banana"];
console.log(fruits);
fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);
fruits.splice(1,1,"Grapes");
console.log(fruits);
let newFruits = fruits.slice(0,2);
console.log(newFruits);
console.log(fruits);

console.log("Task 12");
let employee1 =[
    { name :"A",salary : 20000},
    { name :"B",salary :35000},
    { name :"C",salary : 50000},
    { name :"D",salary : 70000}
];
let updateSalary = employee1.map(function(emp1){
    return{
        name : emp1.name,
        salary : emp1.salary + 5000
    };
});
console.log("Salary After Bonus:");
console.log(updateSalary);
let salaryAbove30000 = employee1.filter(function(emp1){
    return emp1.salary > 30000;
});
console.log("Salary Above 30000:");
console.log(salaryAbove30000);
let salary50000 = employee1.find(function(emp1){
    return emp1.salary === 50000;
});
console.log("Employee with salary 50000:");
console.log(salary50000);
let totalSalary1 = employee1.reduce(function(total,emp1){
    return total + emp1.salary;
},0);
console.log("Total Salary:");
console.log(totalSalary1);
let salaryAbove60000 = employee1.some(function(emp1){
    return emp1.salary > 60000;
});
console.log("Employee Salary Above 60000:");
console.log(salaryAbove60000);
let salaryAbove15000 = employee1.every(function(emp1){
    return emp1.salary > 15000;
});
console.log("Employee Salary Above 15000:");
console.log(salaryAbove15000);

console.log("Task 13");
let company = "Stackly IT";
console.log(company);
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.trim());
console.log(company.replace("IT","Software"));
console.log(company.includes("Stackly"));
console.log(company.split(" "));

console.log("Task 14");
let time = setInterval(function(){
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());},1000);
setTimeout(function(){
    clearInterval(time);
    console.log("Time Stopped");
},1000);

console.log("Task 15");
fetch("https://fakestoreapi.com/products")
.then(function(a){
    return a.json();
})
.then(function(products){
    console.log("All Products:");
    products.forEach(function(prod){
        console.log(prod.title);
    });
    products.forEach(function(prod){
        console.log(prod.price);
    });
    products.forEach(function(prod){
        if (prod.price > 100){
            console.log(prod);
        }

    });
    console.log("Total Products:");
    console.log(products.length);
    products.forEach(function(prod){
        console.log(prod.category);
    });
})
.catch(function(error){
    console.log("Error:",error);
});
