const button = document.querySelector("#addContactButton");

button.addEventListener("click", () => {
  addContact();
});

document
  .getElementById("addContactButton")
  .addEventListener("click", saveArray);
let contact = [];
function addContact() {
  const contactNameInput = document.getElementById("contactNameInput");
  const contactPhoneInput = document.getElementById("contactPhoneInput");
  const contactName = contactNameInput.value;
  const contactPhone = contactPhoneInput.value;

  //   console.log(contactPhoneInput.value);
  //   console.log(contactNameInput.value);

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

  contact.push(contact);
  contactNameInput.value = "";
  contactPhoneInput.value = "";
  // console.log(contact);
}

function saveArray() {
  const jsonString = JSON.stringify(contact);
  localStorage.setItem("myArray", jsonString);
  alert("Array saved to local storage!");
}
