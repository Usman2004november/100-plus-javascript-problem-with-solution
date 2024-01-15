// check leap year
function isLeapYear(year){
    if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0 ){
        return `${year} is leap year`
    }else{
        return `${year} is not leap year`
    }
}
console.log(isLeapYear(1900)); // not leap year
console.log(isLeapYear(2024));