/* Your Code Here */
function createEmployeeRecord([string, stringTwo,stringThree, num]) {
    const employee = {
        firstName: string, familyName: stringTwo, title: stringThree, payPerHour: num,
        timeInEvents:[] , timeOutEvents:[]
    }
    return employee
}
function createEmployeeRecords(arrayOne) {
    return arrayOne.map(data =>{
        return createEmployeeRecord(data)
       })
}

function createTimeInEvent(dateStamp) {
    let stampSplit = dateStamp.split(" ")
    console.log(`stampSplit is: ${stampSplit}`);   
    let hour = stampSplit[1];
    let date = stampSplit[0]
    this.timeInEvents.push({
        type:"TimeIn",
        hour: parseInt(hour,10),
        date: date
    })
}
 





// function hoursWorkedOnDate(date) {
//     const timeInArray = this.timeInEvents
//     const timeOutArray = this.timeOutEvents
//     const timeInObject = timeInArray.find(e => e.date === date)
//     const timeOutObject = timeOutArray.find(e => e.date === date)

//     return(timeOutObject.hour - timeInObject.hour) / 100
// }
/*

 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}