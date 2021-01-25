let dog = {
    name: "Coco",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.sayLegs());

document.getElementById("dogInfo").innerHTML = dog.name + " " + dog.numLegs;