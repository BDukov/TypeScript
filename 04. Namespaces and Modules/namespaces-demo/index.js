var PersonUtils;
(function (PersonUtils) {
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    PersonUtils.Person = Person;
})(PersonUtils || (PersonUtils = {}));
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const p1 = new Person("Pesho1");
const p2 = new PersonUtils.Person("Pesho2");
/// <reference path="Animal.ts" />
var AnimalGroup;
(function (AnimalGroup) {
    class Dog extends AnimalGroup.Animal {
        constructor(furColor, numberOfLegs, type) {
            super(furColor, numberOfLegs, type);
        }
        getStuff() {
            const h = new HumanGroup.Human();
        }
    }
    AnimalGroup.Dog = Dog;
    const P = 1;
    const x = () => 1;
})(AnimalGroup || (AnimalGroup = {}));
const dogPenny = new AnimalGroup.Dog("brown", 4, "Penny");
var LibraryUtil;
(function (LibraryUtil) {
    let ReadFiles;
    (function (ReadFiles) {
        class AsyncRead {
        }
        ReadFiles.AsyncRead = AsyncRead;
    })(ReadFiles = LibraryUtil.ReadFiles || (LibraryUtil.ReadFiles = {}));
    let WriteFiles;
    (function (WriteFiles) {
        class AsyncWrite {
        }
        WriteFiles.AsyncWrite = AsyncWrite;
    })(WriteFiles = LibraryUtil.WriteFiles || (LibraryUtil.WriteFiles = {}));
})(LibraryUtil || (LibraryUtil = {}));
