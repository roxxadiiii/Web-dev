/**
 * write a program that prints all the male people's first name given a complex object
 */

const person = [
    {
        firstName: "Aditya Kumaar",
        gender: "male",
    },
    {
        firstName: "Sonal Sharma",
        gender: "female",
    },
    {
        firstName: "Ravi Patel",
        gender: "male",
    },
    {
        firstName: "Ankita Gupta",
        gender: "female",
    },
    {
        firstName: "Vikas Kumar",
        gender: "male",
    },
    {
        firstName: "Priya Verma",
        gender: "female",
    },
    {
        firstName: "Harish Joshi",
        gender: "male",
    },
    {
        firstName: "Shreya Singh",
        gender: "female",
    },
    {
        firstName: "Rajesh Yadav",
        gender: "male",
    },
    {
        firstName: "Neha Aggarwal",
        gender: "female",
    },
];

for (let i = 0; i < person.length; i++) {
    if (person[i]["gender"] == "male") {
        console.log(person[i]["firstName"] + " is male");
    }
}
