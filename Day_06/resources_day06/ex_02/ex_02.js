function addCar(agentString,car){
    const agentObject = JSON.parse(agentString);
    agentObject.car = car;
    return agentObject;
}
const agentString = '{"age": 57, "code": "007", "firstName": "James", "lastName": "Bond"}';
const carBrand = "Aston Martin";

const modifiedAgent = addCar(agentString, carBrand);
console.log(modifiedAgent);

const agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond",
    car: "Aston Martin"
}
