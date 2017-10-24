import './main.css'
const fs = require('fs')
const readline = require('readline');

const addWorker = function addWorker(name = '', photo = '', state = '') {
  const states = ['late', 'missing', 'onBreak'];

  if (!name.length) {
    throw Error('addWorker: name parameter is required');
  }

  if (!photo.length) {
    throw Error('addWorker: photo parameter is required');
  }

  if (!states.includes(state)) {
    throw Error(state.length ? `Working state "${state}" doesn't exist` : 'addWorker: state parameter is required');
  }

  const employees = document.querySelector(`#${state} .employees`);

  // create employee div element
  const employee = document.createElement('div');
  employee.className = `employee`;
  employee.id = `employee_${name}`;

  // create child for emplloyee and set it to photo
  const photoTag = document.createElement('div');
  photoTag.className = 'photo';
  const imgTag = document.createElement('img');
  imgTag.src = photo;
  photoTag.appendChild(imgTag);

  // create child for employee and set it to name
  const nameTag = document.createElement('div');
  nameTag.className = 'name';
  nameTag.appendChild(document.createTextNode(name));

  // append childs to employee
  employee.appendChild(photoTag);
  employee.appendChild(nameTag);

  // append employee to employees
  employees.appendChild(employee);
};


var rd = readline.createInterface({
    input: fs.createReadStream('../listTestFile.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    const eachPiece = line.split(" ");
    console.log("First piece of the line: " + eachPiece);
});

addWorker('John Doe', 'https://media.giphy.com/media/EsmlrgWNx5v0Y/giphy.gif', 'late');
