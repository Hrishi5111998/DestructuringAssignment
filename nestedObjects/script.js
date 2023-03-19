const person = {
    name: "Joy",
    age: 24,
    department:{
        name: 'Sales',
        Shift: 'Morning',
    
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62, Noida",
        state: "Delhi"
    }
}
}

function extract(person){
    const {department:{name, address: {city}}} = person
        return {name, city}
}
console.log(extract(person));