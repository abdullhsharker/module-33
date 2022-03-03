// const user = { name: 'abdullah', id: 36578, job: 'businessman' };
// console.log(user);

const shop = {
    name: 'sharker hardware',
    address: 'kalibari mor',
    profit: 20000,
    peodduct: ['loha', 'rong', 'Ms tar', 'machine'],

}
// console.log(shop);

// output Stringify hisebe pete hole
const stringified = JSON.stringify(shop);
console.log(stringified);


// output stringify theke java script er object er moto convert kore.

const convert = JSON.parse(stringified);
console.log(convert);
