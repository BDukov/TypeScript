var AnimalGroup;
(function (AnimalGroup) {
    class Animal {
        furColor;
        type;
        constructor(furColor, numberOfLegs, type) {
            this.furColor = furColor;
            this.type = type;
        }
        getDetails() {
            return `This animal is of type ${this.type} and it has fur in a color of ${this.furColor}`;
        }
    }
    AnimalGroup.Animal = Animal;
})(AnimalGroup || (AnimalGroup = {}));
var HumanGroup;
(function (HumanGroup) {
    class Human {
        constructor() { }
        greetings() {
            return `Hi I am a human`;
        }
    }
    HumanGroup.Human = Human;
})(HumanGroup || (HumanGroup = {}));
