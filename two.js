console.log("-----Task 1-----");
console.log("Employee Details");
console.log("---------------");
let employeename ="Sheema"
console.log("Name :"+employeename);
const employeeID = "EMP1234"
console.log("ID :"+employeeID);
let employeedepartment = "IT"
console.log("Department :"+employeedepartment);
let employeesalary = 50000
console.log("Salary :"+employeesalary);
let isPermanent = true
console.log("Permanent :"+isPermanent);

console.log("-----Task 2-----");
let skills = ["Python","SQL","Power BI","Excel","Communication"]
console.log("First Skill :",skills[0]);
console.log("Third Skill :",skills[2]);
console.log("Last Skill :",skills[skills.length -1]);
console.log("All Skills :",skills.length);

console.log("-----Task 3-----");
const company = {
    companyName : "Tech Solutions",
    companyLocation : "Canada",
    employees : 50000,
    technologies :["AI","Cyber Security","Cloud Computing","Data Analytics"]
};
console.log("Company Name :",company.companyName);
console.log("Location :",company.companyLocation);
console.log("No.of Employees :",company.employees);
console.log("Second Technology :",company.technologies[1]);
console.log("Total Technologies :",company.technologies.length);

console.log("-----Task 4------");
let basicSalary = 30000
let bonus = 5000
let totalSalary = basicSalary + bonus
let tax = totalSalary *0.1
let finalSalary = totalSalary - tax
console.log("Basic Salary :",basicSalary);
console.log("Bonus :",bonus);
console.log("Total Salary :",totalSalary);
console.log("Tax :",tax);
console.log("Final Salary :",finalSalary);

console.log("-----Task 5-----");
let attendance = 92
let examAllowed = attendance >=75? "Eligible for Exam" : "Not Eligible for Exam";
console.log("Attendance :",attendance);
console.log("Exam Eligibility :",examAllowed);

console.log("-----Task 6------");
let username ="admin"
let password =97865
let loginStatus = username === "admin" && password ===97865 ?"Login Successful" : "Invalid Credentials";
console.log(loginStatus);

console.log("-----Task 7-----");
let productName = "Laptop"
let productPrice = 75000
let quantity =2
let totalBill = productPrice * quantity
console.log("Product Name :",productName);
console.log("Price Per Unit :",productPrice);
console.log("Quantity :",quantity);
console.log("Total Bill :",totalBill);

console.log("-----Task 8-----");
let visitors = 100
console.log("Initial Visitors :",visitors); //100
console.log("Pre Increment :",++visitors);  // 101
console.log("Post Increment :",visitors++); // print 101 then becomes 102
console.log("Current Visitors :",visitors); // 102
console.log("Pre Decrement :",--visitors); // 101
console.log("Post Decrement :",visitors--); // print 101 then becomes 100
console.log("Final :",visitors); // 100

console.log("-----Task 9-----");
console.log(10 =="10");    //true
console.log(10 ==="10");   //false
console.log(20 !="20");  //false
console.log(20 !=="20");   //true
console.log(5 < 10);   //true
console.log(15 >=20);   //false
console.log(100 <= 100);    //true

console.log("-----Task 10------");
let empName =prompt("Enter Employee Name :");
let empAge =prompt("Enter Employee Age :");
let joinCompany =confirm("Do you want to join the company?");
joinCompany ?alert("Welcome "+empName) :alert("Thank you");


console.log("-----Final Challenge-----");
let employee ={
    name :"Sheema",
    id :"EMP1234",
    department :"IT",
    experience :1,
    salary :75000,
    company :"Tech Solutions",
    location :"Canada"
};
let empSkills =["Python","SQL","Power BI","Excel","Communication"]
let empBonus = 5000
let finalSal = employee.salary + empBonus
let loginStat = employee.name === "Sheema" && employee.id ==="EMP1234" ?"Login Successful" : "Invalid Credentials";
let attendancePer = 92
let attendanceSta = attendancePer >=75? "Eligible" : "Not Eligible";
console.log("===============================");
console.log("Employee Details:");
console.log("==============================");
console.log("Employee Name :",employee.name);
console.log("Employee ID:",employee.id);
console.log("Department :",employee.department);
console.log("Experience :",employee.experience);
console.log("Salary :",employee.salary);
console.log("Skills :",empSkills);
console.log("Final Salary after Bonus :",finalSal);
console.log("Login Status :",loginStat);
console.log("Attendance Percentage :",attendancePer);
console.log("Exam Eligibility :",attendanceSta);
console.log("Company Name :",employee.company);
console.log("Location :",employee.location);
console.log("===============================");

console.log("================================");
console.log("FLIGHT TICKET BOOKING SYSTEM");
console.log("================================");
let passengerName = prompt("Enter Passenge Name:");
let passengerAge = prompt("Enter Passenger Age:");
const flight = {
    flightNumber : "EK565",
    airline :"Emirates",
    from :"Bangalore",
    destination :"Toranto"
};
let seatTypes = ["Economy","Premium Economy","Business","First Class"]
let ticketPrice = [150000 ,175000, 250000,400000]
let numofTickets =2
let totalCost = ticketPrice[1]* numofTickets
let bookingConfirmation = confirm("Do you want to book the flight?")
let bookingStatus = bookingConfirmation ? "Ticked Booked" :"Booking Cancelled";
console.log("Passenger Name :",passengerName);
console.log("Passenger Age :",passengerAge);
console.log("Flight Number :",flight.flightNumber);
console.log("Airline :",flight.airline);
console.log("Departure :",flight.from);
console.log("Destination :",flight.destination);
console.log("Seat Type :",seatTypes[1]);
console.log("Ticket Price :",ticketPrice[1]);
console.log("Number of Tickets :",numofTickets);
console.log("Total Cost :",totalCost);
console.log("Booking Status :",bookingStatus);
console.log("================================");