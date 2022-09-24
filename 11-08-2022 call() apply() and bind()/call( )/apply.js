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

console.log(details(student))
console.log(details.call(employee))

console.log(details.apply(student,["cricket",10000]))
console.log(details.apply(employee,["singing",20000]))
