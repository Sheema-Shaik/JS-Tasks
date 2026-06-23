console.log("Task 1");
let empName = prompt("Enter Employee Name:")
let empAge = prompt("Enter Employee Age:")
let empDepartment = prompt("Enter Employee Department")
let empSalary = prompt("Enter Employee Salary")
let employee ={
    name : empName,
    age : empAge,
    department : empDepartment,
    salary : empSalary
};
console.log("Employee Details:");
console.log(employee);
if(empSalary > 30000){
    console.log("Eligible for Bonus");
}else{
    console.log("Not Eligible ");
}

console.log("Task 2");
let productName = prompt("Enter Product Name:");
let productPrice = prompt("Enter Product Price:");
let quantity = prompt("Enter Quantity:");
let totalBill =productPrice * quantity;
let finalAmount;
if(totalBill > 5000){
    finalAmount =totalBill - (totalBill * 0.1);
    console.log("10% Discount Applied");
}else{
    finalAmount =totalBill;
}
console.log("Total Bill :",totalBill);
console.log("Final Amount:",finalAmount);

console.log("Task 3");
let studentName = prompt("Enter Student Name:");
let studentMarks = prompt("Enter Student Marks:");
if(studentMarks >=90){
    console.log("Grade A");
}else if(studentMarks >=75){
    console.log("Grade B");
}else if(studentMarks >=50){
    console.log("Grade C");
}else{
    console.log("Fail");
}

console.log("Task 4");
let userName = prompt("Enter User Name:");
let balance = prompt("Enter Account Balance:");
let withdrawAmount = prompt("Enter withdraw Amount:");
if(withdrawAmount <= balance){
    console.log("Transaction Successful");
}else{
    console.log("Insufficient Balance");
}

console.log("Task 5");
let username ="admin"
let password = 12345
let enteredUsername =prompt("Enter Username:");
let enteredPassword = prompt("Enter Password:");
if(enteredUsername === username && enteredPassword === password){
    console.log("LoginSuccessful");
}else{
    console.log("Invalid Username or Password");
}

console.log("Task 6");
let foodItems = ["Pizza","Burger","Pasta","Salad","Pastery","Biryani","Ice Cream","Donut"]
console.log("First Item :",foodItems[0]);
console.log("Last Item :",foodItems[foodItems.length -1]);
console.log("Total Items :",foodItems.length);
for(let item of foodItems){
    console.log(item);
}

console.log("Task 7");
let emp={
    name : "Sheema",
    age : 23,
    department :"IT",
    salary : 75000,
    experience :2
};
for(let key in emp){
    console.log(key,":",emp[key]);
}

console.log("Task 8");
let signal = prompt("Enter Traffic Signal Colour:");
switch(signal.toLowerCase()){
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
        console.log("Invalid");
}

console.log("Task 9");
let a = prompt("Enter Your Age:");
if(a>=0 && a<=12){
    console.log("Child");
}else if(a>=13 && a<=19){
    console.log("Teenager");
}else if(a>=20 && a<=59){
    console.log("Adult");
}else{
    console.log("Senior Citizen");
}

console.log("Task 10");
let employeeName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");
let result = attendance.toLowerCase() === "present" ? "Attendance :Present" : "Attendance :Absent";
console.log("Welcome "+employeeName);
console.log(result);