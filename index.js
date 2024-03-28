//assign employee variable to an object that contains name and streetAddress
const employee = {
    name: "John",
    streetAddress: "42 North Hills",
}
//employee object initialized


//function that takes an object (first parameter),key from the object that we choose(second param), new value that we want to put in place (3rd param)
//if we wanted to change employee name to "Max", we would type in updateEmployeeWithKeyAndValue(employee,name,"Max")
function updateEmployeeWithKeyAndValue(obj,key,value){
    //creates a new object instead of fixing the old one. uses spread operator to fill out the rest of the object, streetAddress, anything else it might have
    const newObj = { ...obj };
    //changes the value we want to change
    newObj[key] = value;
    //gives back a new object
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    //does the same, except that it replaces the old object instead of creating a new object
    employee[key] = value;
    //replaces the old object
    return employee;
}
//deletes the entire property from an object
// if we had multiple employees, we can do employees.map(employee => deleteFromEmployeeByKey(employee,'name'))
function deleteFromEmployeeByKey(employee,key){
    //creates a new object that is duplicated from original (using spread)
    const newObj = { ...employee };
    //deletes the key we set in param
    delete newObj[key];
    //returns the new object
    return newObj;
}
//does the same but doesn't make a new object
function destructivelyDeleteFromEmployeeByKey(employee,key){
    //deletes from original
    delete employee[key];
    //returns the original
    return employee;
}