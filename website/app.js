/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function getZip(){
    return document.getElementById('zip').value;
}

function getMessage(){
    return document.getElementById('feelings').value;
}

async function postStuff() {
    const data = {zip:getZip(), message:getMessage()};
    console.log(data);
    const response = await fetch('/entry', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    const { date, description, message, temp } = await response.json(); // parses JSON response into native JavaScript objects
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('date').innerHTML = date;
    document.getElementById('content').innerHTML = `Weather: ${description}, Notes: ${message}`;
}

document.getElementById('generate').addEventListener('click', postStuff);

