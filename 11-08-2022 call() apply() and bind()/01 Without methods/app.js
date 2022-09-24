let student=
{
    ID:1001,
    sname:"ABCD",
    age:25,
    dept:"XYZ",
    details:function()
    {
        return (
        `
        Name:${this.sname}
        ID:${this.ID}
        Age:${this.age}
        Dept:${this.dept}
        `
        )
    }
};

let employee=
{
    ID:1002,
    sname:"DCBA",
    age:45,
    dept:"ZYX",
    details:function()
    {
        return (
        `
        Name:${this.sname}
        ID:${this.ID}
        Age:${this.age}
        Dept:${this.dept}
        `)
    }
}

// console.log(student);
// console.log(student.ID);
// console.log(student.sname);
// console.log(student.dept);
// console.log(student.age);
// console.log(student.details);
console.log(student.details());


// console.log(employee);
// console.log(employee.ID);
// console.log(employee.sname);
// console.log(employee.dept);
// console.log(employee.age);
// console.log(employee.details);
console.log(employee.details());