let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b = a;
for(let i = 0; i < b.length; i++) {
    for(let j = 0; j < b[i].length; j++) {
        console.log(b[i][j].name, b[i][j].age);
    }
}