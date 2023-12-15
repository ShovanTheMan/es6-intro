function add(first, second){
    const total = first + second;
    return total;
}

const result = add(10, 20);
console.log(result);

function fullName (first , last = 'chowdhury'){ //default parameter
    const name = first + ' ' + last;
    return name;
}

const name = fullName("Aslam");
console.log(name);