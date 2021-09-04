array1 = [23, 34, 45, "sina", 120.3]
let student = {
        name: "sina",
        degree: 19,
        age: 19,
        bithday() {
            this.age += 1
            return {
                cel: this.name,
                fa: this.age + 23,
                kel: this.name - 23
            }
        },
        changeName() {
            this.name = prompt("pls enter new name :")
        }

    }
    // alert(student.bithday())
    // alert(student.age)
function func1() {
    alert(student.age)
}

function func2() {
    let ar = student.bithday()
    console.log(ar)
    alert(ar["age"])
}

function func3() {
    student.changeName()
    alert(student.name)
}




// var hello;

// hello = () => {
//     document.getElementById("demo").innerHTML += "<h1>salam</h1><br>";
// }

// window.addEventListener("load", hello);
// document.getElementById("btn").addEventListener("click", hello);






for (;;) {

}
if (x == 3) {

}

















// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

























// {
//     "employees": [
//         { "firstName": "John", "lastName": "Doe" },
//         { "firstName": "Anna", "lastName": "Smith" },
//         { "firstName": "Peter", "lastName": "Jones" }
//     ]
// }