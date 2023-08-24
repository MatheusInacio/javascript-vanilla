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
const updateName = document.querySelector('input[name="updatename"]');
const updateAge = document.querySelector('input[name="updateage"]');
const updateFormButton = document.querySelector("button#updateitem");

const renderData = () => {
  mainDiv.innerHTML = "";

  people.forEach((person, index) => {
    const personP = document.createElement("p");
    const buttonContainer = document.createElement("aside");

    const deleteButton = document.createElement("button");
    deleteButton.id = index;
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", (event) => {
      people.splice(index, 1);
      renderData();
    });
    buttonContainer.appendChild(deleteButton);

    const updateButton = document.createElement("button");
    updateButton.id = index;
    updateButton.innerHTML = "Update";
    updateButton.addEventListener("click", (event) => {
      updateName.value = person.name;
      updateAge.value = person.age;
      updateFormButton.setAttribute("toupdate", index); //custom attribute to use in the button event later
    });
    buttonContainer.appendChild(updateButton);

    personP.innerHTML = `${person.name} is ${person.age} years old`;
    mainDiv.appendChild(personP);
    mainDiv.appendChild(buttonContainer);
  });
};

const createData = () => {
  const name = nameInput.value;
  const age = ageInput.value;
  if (name == "" || age < 0) {
    // show error message
  } else {
    const newPerson = { name, age };
    people.push(newPerson);
    renderData();
  }
};

const updateData = (event) => {
  console.log("in");
  const index = event.target.getAttribute("toupdate");
  const name = updateName.value;
  const age = updateAge.value;
  people[index] = { name, age };
  renderData();
};

renderData();
createButton.addEventListener("click", createData);
updateFormButton.addEventListener("click", updateData);
