let allPerson = [
    {
        firstName: "aditya kumar",
        gender: "male",
    },
    {
        firstName: "adiba aftab",
        gender: "female",
    },
    {
        firstName: "chandan kumar",
        gender: "male",
    },
];

for (let i = 0; i < allPerson.length; i++) {
    if (allPerson[i]["gender"] == "male")
        console.log("good morning mr. " + allPerson[i]["firstName"]);
    if (allPerson[i]["gender"] == "female")
        console.log("good morning miss. " + allPerson[i]["firstName"]);
}

