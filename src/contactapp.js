const prompt = require("prompt-sync")();

function printInfo(){
    console.log("Contect Management System");
    console.log("--------------------------");
    console.log("1. Add a Contact");
    console.log("2. Delete a Contact");
    console.log("3. View Contacts");
    console.log("4. Search Contacts")
    console.log("5. Exit");

}

function addContact(){
    const name = prompt("Enter name: ");
    const email = prompt("Enter email: ");
    const Contact= {name:name, email:email};
    contacts.push(Contact);
    console.log("Contact added successfully!");

}
function deleteContact(){}
function viewContacts(){
    console.log(contacts);
}
function searchContacts(){
}

const contacts = [];
let keepGoing = true;

printInfo();

while(keepGoing){
const number = prompt("Enter an operation (1-5): ");
switch(number){
    case "1":
        addContact();
        break;
    case "2":
        deleteContact();
        break;
        
    case "3":
        viewContacts();
    break;
    case "4":
        searchContacts();
        break;
    case "5":
        keepGoing = false;
        break;
    default:
        console.log("Unknown");
        break;   
}
}