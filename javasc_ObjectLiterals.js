// ########################## OBJECT LITERALS ################################

// Object literl are the data structure that stores values in pair Form(key, value).

let student = {
    name: "Ashish",
    age: 18,
    5: "Heloo"
};

// here student contains values in key and value form
// name is the key have value Ashish
//The order in which key values will be printed will be random until you use const

// ######################## Accessing Values ###########################

// There are two ways to access values from the Object

// *******By using objectVar["Key"]  , single or double quotes are neccessary for keys(if it is string)
console.log(student["name"]);
console.log(student[5]); //Here 5 is being converted into string and then compiler matched it with the key
// ####### JavaScript automatically converts anything written inside the sq brackets of objects to string and then matches with the key


// **** You can also access like this
let info = "name";
console.log(student[info]);


// ****** By using DOT operator objectVar.property
console.log(student.name);


// ################# Adding, Updating, Deleting Values ###############
// Adding and updating works like normal variables Ex-
student.age = 19; //age of the student will be updated 
console.log(student.age);
// and if that property 'age' was not present in the object it would have been added

student.city = "Mathura"; // since it doesnot exist it will be added to the object
console.log(student.city);

// For deleting we use 'delete' key word
delete student.age;
console.log(student);
delete student[5];
console.log(student);

// ######################### Nested Objects #####################
let classInfo = {
    student1 : {
        name: "Ashish",
        marks: 78,
        age: 18
    },

    student2 : {
        name: "Abhishek",
        marks: 90,
        age: 20
    },

    student3 : {
        name: "Deepak",
        marks: 57,
        age: 19
    }

};

console.log(classInfo.student1); // it will give the object student 1
//to access values of the inner object we use chain of dot operators
console.log(classInfo.student3.name);