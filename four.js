console.log("Task 1");
let employee = [{
    name : "John",
    id : 1,
    salary : 30000
},{
    name : "Naveen",
    id :2,
    salary : 50000
}];
for(let emp of employee){
    console.log(emp);
}
for(let emp of employee){
    if(emp.salary >= 40000){
        console.log(emp.name + " :Employee Eligible for Bomus");
    }else{
        console.log(emp.name + " : Employee Not Eligible for Bonus");
    }
}

console.log("Task 2");
let marks1 =85;
let marks2=90;
let marks3 = 95;
let total = marks1 + marks2 +marks3;
let percentage = total/3
console.log("Total Marks :",total);
console.log("Percentage :",percentage);
if(percentage>=90){
    console.log("Grade A+");
}else if(percentage>=80){
    console.log("Grade A");
}else if(percentage>=70){
    console.log("Grade B");
}else if(percentage>=60){
    console.log("Grade C");
}else{
    console.log("Fail");
}

console.log("Task 3");
let products =[
    {name:"Laptop",price:50000},
    {name :"Mouse",price:2000},
    {name :"Keyboard",price:3000}
];
function Bill(products){
    let total=0;
    for(let product of products){
        total+=product.price;
    }
    console.log("Total Bill:",total);
    if(total>5000){
        let discount =total *0.10;
        total = total - discount;
        console.log("Discount Amount: "+discount);
        console.log("Total Bill:"+total);
    }else{
        console.log("No Discount Applied");
    }
}
Bill(products);

console.log("Task 4");
let username ="admin";
let password =12345
let result =(username==="admin" && password===12345)?"Login Successful":"Invalid";
console.log(result);

console.log("Task 5");
let signal ="Red";
switch(signal){
    case"Red":
        console.log("Stop");
        break;
    case"Yellow":
        console.log("Ready to Go");
        break;
    case"Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid");

}

console.log("Task 6");
let balance = 10000;
let withdrawAmount =3000;
if(withdrawAmount<=balance){
    balance=balance-withdrawAmount;
    console.log("Withdrawl Successful");
    console.log("Remaining Amount :"+balance);
}else{
    console.log("Insufficient Balance");
}

console.log("Task 7");
function orderPlaced(callback){
    console.log("Order Received");
    callback();
}
function prepareFood(callback){
    console.log("Food Preparing");
    callback();
}
function deliverFood(callback){
    console.log("Food Delivered");
}
orderPlaced(function(){
    prepareFood(function(){
        deliverFood();
    });
});

console.log("Task 8");
function* CashbackGenerator(){
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}
let offer = CashbackGenerator();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

console.log("Task 9");
let age=25;
let weight=55;
if(age>18){
    if(weight>50){
        console.log("Eligible for Treatment");
    }else{
        console.log("Not Eligible");
    }
    
}

console.log("Task 10");
let emp=[{
    name : "John",
    id : 101,
    salary : 35000
},{
    name : "Ram",
    id : 102,
    salary : 55000
}
];
function addEmployee(name ,id,salary){
    emp.push({
        name :name,
        id :id,
        salary : salary 

    });
    console.log("Employee Added Successfully");
}
function viewEmployee(){
    console.log("Employee List:");
    for (let empl of emp){
        console.log(empl);
    }
}
function calculateBonus(){
    for(let empl of emp){
        if(empl.salary>=50000){
            console.log(empl.name +": Eligible for Bonus");
        }else{
            console.log(empl.name + ": Not Eligible");
        }
    }
}
function searchEmp(id){
    let found = emp.find(empl=>empl.id===id);
    if(found){
        console.log("Employee Found:",found);
    }else{
        console.log("Not Found");
    }
}
function deleteEmp(id){
    let index =emp.findIndex(empl=>empl.id===id);
    if(index!==-1){
        emp.splice(index,1);
        console.log("Employee Deleted");
    }else{
        console.log("Not Found");
    }
}
function totalEmp(){
    console.log("Total Employee:",emp.length);
}
addEmployee("XYZ",102,55000);
viewEmployee();
calculateBonus();
searchEmp(102);
deleteEmp(101);
totalEmp();