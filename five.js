console.log("Task 1");
function yearly(salary){
    return salary * 12;
}
console.log("Yearly Salary :"+yearly(45000));

console.log("Task 2");
function result(marks){
    if(marks>=35){
        return "Pass";
    }else{
        return "Fail";
    }
}
console.log(result(72));

console.log("Task 3");
function Bill(price ,quantity){
    return price * quantity;
}
console.log("Total Bill :"+Bill(180,3));

console.log("Task 4");
function Employee(name ,department){
    console.log("Welcome "+name);
    console.log("Department "+department);
}
Employee("Naveen" ,"Development");

console.log("Task 5");
function Shopping(price ,discount){
    return price - discount;
}
console.log("Total Amount :"+Shopping(5000 ,500));

console.log("Task 6");
function login(callback){
    console.log("Login Successful");
    callback();
}
function loading(){
    console.log("Loading Dashboard");
}
login(loading);

console.log("Task 7");
function process(steps){
    steps();
}
function OrderReceived(){
    console.log("Order Received");
}
function PreparingFood(){
    console.log("Preparing Food");
}
function OutforDelivery(){
    console.log("Out For Delivery");
}
function Delivered(){
    console.log("Delivered");
}
process(OrderReceived);
process(PreparingFood);
process(OutforDelivery);
process(Delivered);

console.log("Task 8");
function* draw(){
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}
const coupon =draw();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

console.log("Task 9");
function Bonus(sal){
    return function(bonusAmt){
        console.log("Total :"+(sal + bonusAmt));
    };
}
Bonus(50000)(5000);

console.log("Task 10");
let employeeDetails={
    name : "Naveen",
    age :25
};
let employeeOff={
    department :"Development",
    salary :50000
};
let emplo={
    ...employeeDetails,...employeeOff
};
console.log(emplo);

console.log("Task 11");
const cart1 =["Iphone","Laptop"];
const cart2 =["Kate Spade","New Balance"];
const cart =[...cart1,...cart2];
console.log(cart);

console.log("Task 12");
function student(name,...marks){
    let total=0;
    for(let mark of marks){
        total+=mark;
    }
    let avg =total/marks.length;
    console.log("Student:",name);
    console.log("Total:",total);
    console.log("Average:",avg);
}
student("Naveen",90,85,88,95);


console.log("Task 13");
const product ={
    name : "Laptop",
    price :75000,
    brand :"Dell",
    stock :20
};
const {name ,price}=product;
console.log("Name :",name);
console.log("Price:",price);

console.log("Task 14");
const customer =[101,"Naveen","Chennai",987654321];
const [id,nam,city]=customer;
console.log("ID:",id);
console.log("Name :",nam);
console.log("City:",city);

console.log("Task 15");
let wish =["Mobile","Laptop"];
wish.push("Headset");
console.log(wish);

console.log("Task 16");
let list=["Mobile","Laptop","Headset"];
list.pop();
console.log(list);

console.log("Task 17");
let em=["Rahul","Arun","John","David"];
em.splice(2,1,"Naveen");
console.log(em);

console.log("Task 18");
let pro=["Mouse","Keyboard","Monitor","Laptop"];
console.log(pro.includes("Laptop"));

console.log("Task 19");
let salaries =[25000,45000,30000,70000];
salaries.sort();
console.log(salaries);

console.log("Task 20");
let messages =["Hi","Heloo","How are you?","Good Morning"];
messages.reverse();
console.log(messages);
