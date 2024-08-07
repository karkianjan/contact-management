const button = document.querySelector("#addContactButton");

button.addEventListener("click", addContact);

document
  .getElementById("addContactButton")
  .addEventListener("click", saveArray);

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
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contact.forEach((contactItem) => {
    const li = document.createElement("li");
    li.textContent = `ID:${contactItem.id}, Username:${contactItem.name}, Phone Number: ${contactItem.phone}`;
    contactList.appendChild(li);
  });
}

