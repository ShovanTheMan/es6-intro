const fish =  {
    name: 'king hilsha',
    address: 'chadpur',
    color: 'silver',
    phone: '01701863746',
    price: '4000',

}

// const phone = fish.phone;
//const color = fish.color;
//const price = fish.price;
//const {age} = {name: 'almas', age: 56, profession :'artist'}

const {address} = fish;
console.log(address);

// array destructuring

const [first, another] = [44, 65];
console.log(first,another);

const nayoks = ['Sakib','Bappi','Raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Alim','Hakim'];
}
const [abba, chaca] = getNames();
console.log(abba);