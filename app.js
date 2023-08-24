const people = [
  { name: "Alex Merced", age: 35 },
  { name: "Bob Jones", age: 65 },
  { name: "Steve Smith", age: 22 },
  { name: "Macie Willis", age: 32 },
  { name: "John Jingle", age: 40 },
];

const mainDiv = document.querySelector("main");
const nameInput = document.querySelector("input[name='name']");
const ageInput = document.querySelector("input[name='age']");
const createButton = document.getElementById("createButton");

const renderData = () => {
  mainDiv.innerHTML = "";

  people.forEach((person, index) => {
    const personP = document.createElement("p");
    const buttonContainer = document.createElement("aside") 

    const deleteButton = document.createElement("button");
    deleteButton.id = index;
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", event => {
        people.splice(index, 1);
        renderData();
    })
    buttonContainer.appendChild(deleteButton);

    personP.innerHTML = `${person.name} is ${person.age} years old`;
    mainDiv.appendChild(personP);
    mainDiv.appendChild(buttonContainer);
  });
};

const createData = () => {
  const name = nameInput.value;
  const age = ageInput.value;
  const newPerson = { name, age };
  people.push(newPerson);
  renderData();
};

renderData();
createButton.addEventListener("click", createData);
