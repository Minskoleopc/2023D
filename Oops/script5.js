class Student {
    firstName = "chinmay"
    lastName = "deshpande"

    displayName(){
        console.log(this.firstName+ this.lastName)
    }
}

// incorrect way 
// class Teacher {

//     firstName = "chinmay"
//     lastName = "deshpande"
//     salary = 10000
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }

// }


class Teacher  extends Student{
    salary = 10000

}

let chinmayT = new Teacher()
console.log(chinmayT.firstName)
console.log(chinmayT.lastName)
console.log(chinmayT.salary)
chinmayT.displayName()

//program 2

// class StudentB {

//     constructor(fn, ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class TeacherB extends StudentB {

//     salary = 10000

// }

// let chinmatBT = new TeacherB("chinmayBT","deshpandeBT")
// console.log(chinmatBT.firstName)
// console.log(chinmatBT.lastName)
// console.log(chinmatBT.salary)
// chinmatBT.displayName()


// program 3
class StudentC {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln    
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}


class TeacherC extends StudentC {
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}

let ChinmayCC = new TeacherC("chinmayC","DeshpadneC",34)

console.log(ChinmayCC.firstName)
console.log(ChinmayCC.salary)
console.log(ChinmayCC.lastName)

ChinmayCC.displayName()
ChinmayCC.displaySalary()


// selenium //java   //cypress  //javascript  //python  //sql

  

