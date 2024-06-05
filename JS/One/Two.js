const allUser = [
    {
        firstName: "harkirat",
        gender: "male",
    },
    {
        firstName: "raman",
        gender: "male",
    },
    {
        firstName: "priya",
        gender: "female",
    },
];

for (let i = 0; i < allUser.length; i++) {
    if (allUser[i]["gender"] == "male") {
        console.log(allUser[i]["firstName"]);
    }
}

let sum = 0;
for (let i = 0; i < 100000000000; i++) {
    sum = sum + i;
}

console.log(sum);
