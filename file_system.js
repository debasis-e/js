const fs = require("fs"); //comment
const prompt = require("prompt-sync")();

let name = prompt("enter your name: ");
let phone = prompt("Enter your Phone Number: ")

fs.readFile("./example.txt", (err, data) => {
    const prevValue = data.toString();
    let toWrite = `${prevValue} \nName: ${name}\nPhone Number: ${phone}`;

    fs.writeFile("./example.txt", toWrite, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File Written Succesfullly!!\n");
        }
    })
})






fs.readFile("./example.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
})