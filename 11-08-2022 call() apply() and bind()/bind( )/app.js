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
};


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

function details(hobby,salary)
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

// console.log(details.bind(student));
// s=details.bind(student);
// console.log(s);
// console.log(s());

// console.log(details.bind(employee));
// e=details.bind(employee);
// console.log(e);
// console.log(e());



console.log(details.bind(student,"Cricket",10000));
s=details.bind(student,"Cricket",10000);
console.log(s);
console.log(s());

console.log(details.bind(employee,"Singing",40000));
e=details.bind(employee,"Singing",40000);
console.log(e);
console.log(e());