// Class code examples

const names =  ["Marco", "Carlos", "Carol"]

const capitalize = (string) =>{
    return string.toUpperCase();
}

const allCaps = names.map(capitalize) //  ["Marco", "Carlos", "Carol"].map()

console.log(names, allCaps);

const numbers = [1, 2, 3, 7, 5, 6, 4, 8, 9, 10, 11, 12];

const double = numbers.map(x=> x*2)

console.log(double);

const students = [
    {name: 'Rafa', color: 'Blue', age: 12},
    {name: 'Elise', color: 'Pink', age: 21},
    {name: 'Bodei', color: 'Yellow', age: 31},
    {name: 'Jorge', color: 'Red', age: 11}
]


students
.map(x=> `Hello ${x.name} you are ${x.age} years old and your fav color is ${x.color}`)
.forEach(x => console.log(x));

console.log(
    ["Marco", "Carlos", "Carol"]
    .map(()=>{})
    .length
)

console.log(numbers
.map(x=>x*2)
.filter(x=>x > 13)
.sort((a,b)=> a-b)
)
