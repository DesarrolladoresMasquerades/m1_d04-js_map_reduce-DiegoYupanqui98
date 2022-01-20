// Class code examples

const numbers = [1, 2, 3, 7, 5, 6, 4, 8, 9, 10, 11, 12];
const palabas= ['h','o','l','a']

const sum  = palabas.reduce((acumulator,currentvalue)=>acumulator+currentvalue);

console.log(sum)

const students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Sarah', lastName: "O'Connor", age: 45}
]

const summary = students.reduce((a,c)=> {
    a.class.push(`${c.firstName} ${c.lastName}`);
    a.count++;
    return a
},
{class:[],
count:0})

console.log(summary)