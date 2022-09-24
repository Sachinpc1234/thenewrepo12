let student={
    id:1,
    sname:"ABCD",
    age:25,
    dept:"xyz"
}

let employee={
    id:2,
    sname:"dcba",
    age:35,
    dept:"opd"
}
function details(hobby,salary){
    console.log(hobby,salary)


    return(
        `
        Name:${this.sname}
        Id:${this.id}
        Age:${this.age}
        Dept:${this.dept}
        `
    )
}
console.log(details)

e=details.bind(student,"cricket",100000)
s=details.bind(employee,"singing",200000)

console.log(s)
console.log(s())

console.log(e)
console.log(e())