const addButton = document.querySelector("#addContactButton");

addButton.addEventListener("click", addContact);
document
  .getElementById("addContactButton")
  .addEventListener("click", saveArray);

const searchButton = document.querySelector("#searchContactButton");
searchButton.addEventListener("click", searchContact);

let contact = [];

document.addEventListener("DOMContentLoaded", () => {
  loadContacts();
});

function addContact() {
  const contactNameInput = document.getElementById("contactNameInput");
  const contactPhoneInput = document.getElementById("contactPhoneInput");
  const contactName = contactNameInput.value;
  const contactPhone = contactPhoneInput.value;

  if (contactName && contactPhone) {
    const newContact = {
      id: Date.now(),
      name: contactName,
      phone: contactPhone,
    };
    contact.push(newContact);
    contactNameInput.value = "";
    contactPhoneInput.value = "";
  }
}

function saveArray() {
  const jsonString = JSON.stringify(contact);
  localStorage.setItem("myArray", jsonString);
  alert("Array saved to local storage!");
  loadContacts();
}

function loadContacts() {
  const savedContacts = localStorage.getItem("myArray");
  if (savedContacts) {
    contact = JSON.parse(savedContacts);
    displayContacts();
  }
}

function displayContacts() {
  const contactTableBody = document.getElementById("contactTableBody");
  contactTableBody.innerHTML = "";

  contact.forEach((contactItem) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = contactItem.id;

    const nameCell = document.createElement("td");
    nameCell.textContent = contactItem.name;

    const phoneCell = document.createElement("td");
    phoneCell.textContent = contactItem.phone;

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.id = `deleteContactButton-${contactItem.id}`;

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteContact(contactItem.id);
    });
    actionCell.appendChild(deleteButton);

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(actionCell);

    contactTableBody.appendChild(row);
  });
}

function deleteContact(id) {
  contact = contact.filter((contactItem) => contactItem.id !== id);
  saveArray();
  alert("Contact deleted");
  displayContacts();
}

function searchContact() {
  const searchInput = document
    .getElementById("contactSearch")
    .value.toLowerCase();
  const filteredContacts = contact.filter((contactItem) =>
    contactItem.name.toLowerCase().includes(searchInput)
  );

  const contactTableBody = document.getElementById("contactTableBody");
  contactTableBody.innerHTML = "";

  filteredContacts.forEach((contactItem) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = contactItem.id;

    const nameCell = document.createElement("td");
    nameCell.textContent = contactItem.name;

    const phoneCell = document.createElement("td");
    phoneCell.textContent = contactItem.phone;

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.id = `deleteContactButton-${contactItem.id}`;

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteContact(contactItem.id);
    });
    actionCell.appendChild(deleteButton);

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    row.appendChild(actionCell);

    contactTableBody.appendChild(row);
  });
}
