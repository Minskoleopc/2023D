class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayG(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayF(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displayS(){
        console.log(this.sname + this.lastName)
    }

}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.fname)
console.log(chinmay.sname)

chinmay.displayF()
chinmay.displayS()
chinmay.displayG()

// program 2

class FatherA {

    constructor(fn,ln){
        this.firstName =  fn
        this.lastName = ln
    }
    displayPn(){
        console.log(this.firstName + this.lastName)
    }

}

class SonA extends FatherA {
    constructor(fn,ln,sn){
       super(fn,ln)
        this.sn = sn
    }
    displaySn(){
        console.log(this.sn + this.lastName)
    }
}

class DaughterA extends FatherA {
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dn = dn
    }
    displayDn(){
        console.log(this.dn + this.lastName)
    }
}

let amol = new SonA("dilip","rao","amol")
let mayuri = new DaughterA("dilip","rao","mayuri")

amol.displayPn()
amol.displaySn()

mayuri.displayDn()
mayuri.displayPn()

// program 3

class worldBank  {
    save(){
        console.log('I am save from world bank')
    }

    loan(){
        console.log('I am loan from world bank')
    }
}

class SBI extends worldBank {
    save(){
        console.log('I am save from SBI')
    }

    loan(){
        console.log('I am loan from SBI')
    }
}

let SBIa = new SBI()
SBIa.save()
SBIa.loan()

// polymorphism





