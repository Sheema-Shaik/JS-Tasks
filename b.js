console.log("Task 21");
let employees = [
    {
        name: "Rahul",
        id:1,
        salary: 40000
    },
    {
        name: "ABC",
        id: 2,
        salary: 50000
    }
];
function addEmployee(name,id, salary) {
    employees.push({ name,id, salary });
}
addEmployee("XYZ",3, 75000);
function viewEmployees() {
    console.log("Employee List");
    console.log(employees);
}
viewEmployees();
function searchEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    console.log(employee);
}
searchEmployee(2);
function calculateSalary(id, bonus) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        console.log("Total Salary :", employee.salary + bonus);
    }
}
calculateSalary(2, 5000);
function removeEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
}
removeEmployee(1);
viewEmployees();
employees.sort((a, b) => a.salary - b.salary);
console.log("Sorted Employees");
console.log(employees);
function findEmployee(name) {
    const employee = employees.find(emp => emp.name === name);
    console.log(employee);
}
findEmployee("ABC");
employees.forEach(({name,id, salary }) => {
    console.log(
        "Name:", name,
        "ID:",id,
        "Salary:", salary
    );
});