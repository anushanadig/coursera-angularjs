/* var parent = {
    name: "parent",
    obj :{
        objValue:"parentObjValue"
    }
}

var child = Object.create(parent);
child.name = "child";

var grandChild = Object.create(child);

console.log("child name: ",child.name);
console.log("child objvalue:", child.obj.objValue);
console.log("parent:", parent);
console.log("child:", child);
console.log("grandchild: ",grandChild);

console.log(child.obj===parent.obj); */


//function constructors

function Cat(name){
    this.name = name;
    console.log("this is: ",this);
}

var myCat = new Cat("Max");
console.log("myCat:", myCat);

Cat("max2");