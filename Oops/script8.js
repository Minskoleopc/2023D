
// class Calculator {
//     addition(x,y){
//         console.log(x+y)
//     }

//     addition(x,y,z){
//         console.log(x+y+z)
//     }

//     addition(x,y,z,a){
//         console.log(x+y+z+a)
//     }

// }

// cc = new Calculator()
// cc.addition(12,34)
// cc.addition(12,34,55)
// cc.addition(12,34,55,66)


class CalculatorB {
    static addition(x, y, z, a) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }
}
CalculatorB.addition(12, 35, 6, 7)
CalculatorB.addition(12, 35, 6)
CalculatorB.addition(12, 35)


// program 3


class World {
    save() {
        console.log("I am saving from world bank")
    }
    loan() {
        console.log("I am loan from world bank")
    }
}
class SBI extends World {
    save() {
        console.log("I am saving from sbi bank")
        super.save()
    }
    loan() {
        console.log("I am loan from  sbi bank")
        super.loan()
    }
}
let a = new SBI()

a.save()
a.loan()






// nyc = new World()
// nyc.loan()
// nyc.save()




