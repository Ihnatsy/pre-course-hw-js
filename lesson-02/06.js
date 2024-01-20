let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let cloneAddress = structuredClone(passportWithAddress)

cloneAddress.address.city = 'Bobryisk'

console.log(passportWithAddress.address.city)
console.log(cloneAddress.address.city)