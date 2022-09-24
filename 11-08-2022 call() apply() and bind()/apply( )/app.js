let student=
{
    ID:1001,
    sname:"ABCD",
    age:25,
    dept:"XYZ"
};

let employee=
{
    ID:1002,
    sname:"DCBA",
    age:45,
    dept:"ZYX"
}


// function details()
// {
//     return (
//     `
//     Name:${this.sname}
//     ID:${this.ID}
//     Age:${this.age}
//     Dept:${this.dept}
//     `
//     )
// }

 //! One of the two functions

function details(hobby)
{
    console.log(hobby,salary)
    return (
    `
    Name:${this.sname}
    ID:${this.ID}
    Age:${this.age}
    Dept:${this.dept}
    `
    )
}


// console.log(details);


// console.log(details.apply(student));
// console.log(details.apply(employee));


console.log(details.apply(student,["Cricket",10000]));
// console.log(details.apply(employee,["Singing",40000]));