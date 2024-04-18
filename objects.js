//1
const people = [
    {name:'Alice', age:17},
    {name:'Eunice', age:22},
    {name:'Charlie', age:14},
    {name:'Max', age:19},
];
function filterNames(arr){
    return arr.filter(people=>people.age >=18);

  
};
const adults = filterNames(people);
console.log(adults)
///2
const products = [
     {names:'laptop', price:1200, category:'Electronic'},
     {name:'shirt', price:25, category:'clothing'},
      {name:'Headphones', price:80, category:'Electronics'},
      {name:'shoes', price:60, category:'clothing'},
  ];
  function groupCategories(product){
     return products.reduce((acc, curr)=>{
        if(!acc[curr.category]){
            acc[curr.category]=[];

        }
        acc[curr.category].push(curr);
        return acc;
     }, {});
  }
  console.log(products);


//3
 const students = [
     {name:'john', scores:[90,80,85]},
    {name:'Jane', scores:[95,92,88]},
    {name:'Jim',  scores:[70,80,75]},
    {name:'Jill', scores:[85,90,84]},
 ];
 function studentsGrade(students) {
    return students.filter(students => {
        const averageScore = students.scores.reduce((acc, curr)=>acc + curr, 0)/
        students.scores.length;
        return averageScore>=85;

    }).map(student => student.name);

 }
 const highGrades = studentsGrade(students);
 console.log(highGrades);

//4
 const car ={
    make:'ford',
    model:'Ranger',
    year:2023,
    displayInfo:function() {
        console.log(`Make:${this.make}, Model:${this.model},Year:${this.year}`);
    },
 };
 function addNewAge(car) {
    car["age"]= (2024-car.year)
    console.log(car)
 }
 addNewAge(car)