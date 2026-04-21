class name{
    constructor(name, age){
        this.name = name
        this.age = age

    };
    displayFunction(){

        return this.name + this.age
    };

}

let obj = new name("Bernard", 18);

console.log(obj.displayFunction);