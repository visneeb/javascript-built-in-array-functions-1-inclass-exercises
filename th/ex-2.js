/* 
- ให้เขียน Function ที่ชื่อว่า addBonusForSelectedDepartment ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 3 ตัวคือ employeeInfo, bonus และ department
        1. employeeInfo เป็น Array ที่บรรจุข้อมูลพนักงาน
        2. bonus เป็น Number ที่บรรจุจำนวนเงินโบนัส
        3. department เป็น String ที่บรรจุชื่อแผนกที่จะเพิ่มโบนัสให้
    - Function นี้จะนำ employeeInfo มาตรวจสอบแล้วเลือกเฉพาะคนที่อยู่ในแผนกที่จะเพิ่มโบนัสให้ เพื่อเพิ่มโบนัสตามจำนวนเงินที่ระบุไว้ แล้วนำมาคำนวณว่าเจ้าของบริษัทจะต้องใช้เงินทั้งหมดเท่าไร เพื่อจ่ายเงินเดือนเดือนนั้นให้พนักงานในแผนกที่กำหนด จากนั้นให้ Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here

function addBonusForSelectedDepartment(employeeInfo, bonus, department) {
  return employeeInfo
    .filter((emp) => emp.department === department)
    .map((emp) => emp.salary + bonus)
    .reduce((sum, salary) => (sum += salary), 0);
}

const employeeInfo = [
  {
    firstname: "Alice",
    lastName: "Redfield",
    department: "IT",
    salary: 25000,
  },
  {
    firstname: "John",
    lastName: "Doe",
    department: "HR",
    salary: 30000,
  },
  {
    firstname: "Emily",
    lastName: "Clark",
    department: "Finance",
    salary: 35000,
  },
  {
    firstname: "Michael",
    lastName: "Brown",
    department: "IT",
    salary: 27000,
  },
  {
    firstname: "James",
    lastName: "Taylor",
    department: "HR",
    salary: 29000,
  },
  {
    firstname: "Jessica",
    lastName: "Johnson",
    department: "Finance",
    salary: 33000,
  },
  {
    firstname: "Robert",
    lastName: "Miller",
    department: "Operations",
    salary: 31000,
  },
  {
    firstname: "David",
    lastName: "Wilson",
    department: "Operations",
    salary: 34000,
  },
];

console.log(addBonusForSelectedDepartment(employeeInfo, 5000, "HR")); // 69000
console.log(addBonusForSelectedDepartment(employeeInfo, 1000, "Operations")); // 67000
