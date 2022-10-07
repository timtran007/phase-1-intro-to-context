// Your code here

// In this lab, we're going to build a time card and payroll application using the record-oriented approach. 

// When someone enters the company's state of the art technical office, the employee has to insert their card in a time clock which will record the time they came in. 

// When it's time to leave, the employee will "punch out."

// For simplicity's sake, we'll make these assumptions:

// Employees always check in and check out.
// Employees always check in and out on the hour.
// The time is represented on a 24-hour clock (1300 is 1:00 pm); this keeps the math easier and is the standard in most of the world.
// When timestamps are needed, they will be provided as Strings in the form: "YYYY-MM-DD 800" or "YYYY-MM-DD 1800" e.g. "2018-01-01 2300".
// Employees will never work across days, e.g., in at 2200 and out at 0400 the next day.

// 1) The payroll system
// populates a record from an Array
//   has a function called createEmployeeRecord:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:4:14)
// at processImmediate (node:internal/timers:466:21)

let createEmployeeRecord = function(row){
    return {
      firstName: row[0] ,
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: []
     }
 }

 function createEmployeeRecords(records){
    return records.map(function(row){
        return createEmployeeRecord(row)
    })
 }
 
 function createTimeInEvent(employee, dateAndTime){
    let [dateStamped, timeIn] = dateAndTime.split(" ")
    employee.timeInEvents.unshift({
        type: "TimeIn",
        date: dateStamped,
        hour: parseInt(timeIn, 10),
    })
    return employee
 }

 

 function createTimeOutEvent(employee, dateAndTime){
    let [dateStamped, timeOut] = dateAndTime.split(" ")
    employee.timeOutEvents.unshift({
        type: "TimeOut",
        date: dateStamped,
        hour: parseInt(timeOut, 10),
    })
    return employee
 }
 
 function hoursWorkedOnDate(employee, seekingDate){
    let clockIn = employee.timeInEvents.find(row => row.date === seekingDate)
    let clockOut = employee.timeOutEvents.find(row => row.date === seekingDate)
    return (clockOut.hour - clockIn.hour)/100
 }

 const wagesEarnedOnDate = function(employee, dateOfPay){
    let hourlyWage = employee.payPerHour
    let clockIn = employee.timeInEvents.find(row => row.date === dateOfPay)
    let clockOut = employee.timeOutEvents.find(row => row.date === dateOfPay)
    let hoursWorked = (clockOut.hour - clockIn.hour)/100
    return hourlyWage * hoursWorked
 }

let allWagesFor = function (employee){
    let elligiblePayDays = employee.timeInEvents.map(row => row.date)
    let totalPay = elligiblePayDays.reduce(function(pay, date){
        return pay + wagesEarnedOnDate(employee, date)
    }, 0)
    return totalPay
}

const calculatePayroll = function (arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(pay, record){
        return pay + allWagesFor(record)
    }, 0)
}



// 2) The payroll system
// populates a record from an Array
//   createEmployeeRecord
//     populates a firstName field from the 0th element:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:9:28)
// at processImmediate (node:internal/timers:466:21)



// 3) The payroll system
// populates a record from an Array
//   createEmployeeRecord
//     populates a familyName field from the 1th element:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:14:28)
// at processImmediate (node:internal/timers:466:21)

// 4) The payroll system
// populates a record from an Array
//   createEmployeeRecord
//     populates a title field from the 2th element:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:19:28)
// at processImmediate (node:internal/timers:466:21)

// 5) The payroll system
// populates a record from an Array
//   createEmployeeRecord
//     populates a payPerHour field from the 3th element:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:24:28)
// at processImmediate (node:internal/timers:466:21)

// 6) The payroll system
// populates a record from an Array
//   createEmployeeRecord
//     initializes a field, timeInEvents, to hold an empty Array:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:29:28)
// at processImmediate (node:internal/timers:466:21)

// 7) The payroll system
// populates a record from an Array
//   createEmployeeRecord
//     initializes a field, timeOutEvents, to hold an empty Array:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:34:28)
// at processImmediate (node:internal/timers:466:21)

// 8) The payroll system
// process an Array of Arrays into an Array of employee records
//   has a function called createEmployeeRecords:
// ReferenceError: createEmployeeRecords is not defined
// at Context.<anonymous> (test/indexTest.js:42:14)
// at processImmediate (node:internal/timers:466:21)

// 9) The payroll system
// process an Array of Arrays into an Array of employee records
//   createEmployeeRecords
//     creates two records:
// ReferenceError: createEmployeeRecords is not defined
// at Context.<anonymous> (test/indexTest.js:54:31)
// at processImmediate (node:internal/timers:466:21)

// 10) The payroll system
// process an Array of Arrays into an Array of employee records
//   createEmployeeRecords
//     correctly assigns the first names:
// ReferenceError: createEmployeeRecords is not defined
// at Context.<anonymous> (test/indexTest.js:59:31)
// at processImmediate (node:internal/timers:466:21)

// 11) The payroll system
// process an Array of Arrays into an Array of employee records
//   createEmployeeRecords
//     creates more than 2 records:
// ReferenceError: createEmployeeRecords is not defined
// at Context.<anonymous> (test/indexTest.js:77:31)
// at processImmediate (node:internal/timers:466:21)

// 12) The payroll system
// it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//   has a function called createTimeInEvent:
// ReferenceError: createTimeInEvent is not defined
// at Context.<anonymous> (test/indexTest.js:88:14)
// at processImmediate (node:internal/timers:466:21)

// 13) The payroll system
// it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//   createTimeInEvent
//     creates the correct type:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:95:24)
// at processImmediate (node:internal/timers:466:21)

// 14) The payroll system
// it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//   createTimeInEvent
//     extracts the correct date:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:102:24)
// at processImmediate (node:internal/timers:466:21)

// 15) The payroll system
// it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//   createTimeInEvent
//     extracts the correct hour:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:109:24)
// at processImmediate (node:internal/timers:466:21)

// 16) The payroll system
// it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//   has a function called createTimeOutEvent:
// ReferenceError: createTimeOutEvent is not defined
// at Context.<anonymous> (test/indexTest.js:120:14)
// at processImmediate (node:internal/timers:466:21)

// 17) The payroll system
// it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//   createTimeOutEvent
//     creates the correct type:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:127:24)
// at processImmediate (node:internal/timers:466:21)

// 18) The payroll system
// it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//   createTimeOutEvent
//     extracts the correct date:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:134:24)
// at processImmediate (node:internal/timers:466:21)

// 19) The payroll system
// it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//   createTimeOutEvent
//     extracts the correct hour:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:141:24)
// at processImmediate (node:internal/timers:466:21)

// 20) The payroll system
// Given an employee record with a date-matched timeInEvent and timeOutEvent
//   hoursWorkedOnDate calculates the hours worked when given an employee record and a date:
// ReferenceError: hoursWorkedOnDate is not defined
// at Context.<anonymous> (test/indexTest.js:152:14)
// at processImmediate (node:internal/timers:466:21)

// 21) The payroll system
// Given an employee record with a date-matched timeInEvent and timeOutEvent
//   hoursWorkedOnDate
//     calculates that the employee worked 2 hours:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:157:9)
// at processImmediate (node:internal/timers:466:21)

// 22) The payroll system
// Given an employee record with a date-matched timeInEvent and timeOutEvent
//   wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour:
// ReferenceError: wagesEarnedOnDate is not defined
// at Context.<anonymous> (test/indexTest.js:168:14)
// at processImmediate (node:internal/timers:466:21)

// 23) The payroll system
// Given an employee record with a date-matched timeInEvent and timeOutEvent
//   wagesEarnedOnDate
//     calculates that the employee earned 54 dollars:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:173:9)
// at processImmediate (node:internal/timers:466:21)

// 24) The payroll system
// Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
//   allWagesFor aggregates all the dates' wages and adds them together:
// ReferenceError: allWagesFor is not defined
// at Context.<anonymous> (test/indexTest.js:184:14)
// at processImmediate (node:internal/timers:466:21)

// 25) The payroll system
// Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
//   allWagesFor
//     calculates that the employee earned 378 dollars:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:189:9)
// at processImmediate (node:internal/timers:466:21)

// 26) The payroll system
// Given an array of multiple employees
//   calculatePayroll aggregates all the dates' wages and adds them together:
// ReferenceError: calculatePayroll is not defined
// at Context.<anonymous> (test/indexTest.js:204:14)
// at processImmediate (node:internal/timers:466:21)

// 27) The payroll system
// Given an array of multiple employees
//   calculatePayroll
//     calculates that the employees earned 770 dollars:
// ReferenceError: createEmployeeRecord is not defined
// at Context.<anonymous> (test/indexTest.js:209:23)
// at processImmediate (node:internal/timers:466:21)

// 28) The payroll system
// runs payroll using the mock data provided by Ultron data systems
//   Dependent functions: createEmployeeRecords
//     takes CSV data, returns an array of employee records
//       exists:
// ReferenceError: createEmployeeRecords is not defined
// at Context.<anonymous> (test/indexTest.js:245:18)
// at processImmediate (node:internal/timers:466:21)

// 29) The payroll system
// runs payroll using the mock data provided by Ultron data systems
//   Dependent functions: createEmployeeRecords
//     takes CSV data, returns an array of employee records
//       returns an Array with 2 records for Loki and Natalia:
// ReferenceError: createEmployeeRecords is not defined
// at Context.<anonymous> (test/indexTest.js:253:11)
// at processImmediate (node:internal/timers:466:21)

// 30) The payroll system
// runs payroll using the mock data provided by Ultron data systems
//   Full Payroll Test
//     from several imported CSV structures
//       calculatePayroll
//         exists:
// ReferenceError: calculatePayroll is not defined
// at Context.<anonymous> (test/indexTest.js:299:20)
// at processImmediate (node:internal/timers:466:21)

// 31) The payroll system
// runs payroll using the mock data provided by Ultron data systems
//   Full Payroll Test
//     from several imported CSV structures
//       calculatePayroll
//         correctly sums the payroll burden to $11,880 when passed an array of employee records:
// ReferenceError: createEmployeeRecords is not defined
// at Context.<anonymous> (test/indexTest.js:303:35)
// at processImmediate (node:internal/timers:466:21)
