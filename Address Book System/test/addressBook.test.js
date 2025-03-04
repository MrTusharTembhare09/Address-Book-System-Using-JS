const Contact = require("../src/contact");
const AddressBookSystem = require("../src/addressBookSystem");

// Creating the address book system
const testSystem = new AddressBookSystem();

// Creating new address books
testSystem.createAddressBook("Personal");
testSystem.createAddressBook("Work");

// Creating contacts
const contact1 = new Contact("Tushar", "Tembhare", "123 Main St", "Mumbai", "Maharashtra", "400001", "9876543210", "tushar@example.com");
const contact2 = new Contact("Rahul", "Sharma", "456 Elm St", "Pune", "Maharashtra", "411001", "9876543211", "rahul@example.com");
const contact3 = new Contact("Anjali", "Verma", "789 Oak St", "Delhi", "Delhi", "110001", "9876543212", "anjali@example.com");

// Adding contacts to Address Books
testSystem.addContactToAddressBook("Personal", contact1);
testSystem.addContactToAddressBook("Work", contact2);
testSystem.addContactToAddressBook("Work", contact3);

// Viewing persons by city
console.log("\n--- Viewing Persons by City ---");
testSystem.viewPersonsByCity("Mumbai");
testSystem.viewPersonsByCity("Delhi");

// Viewing persons by state
console.log("\n--- Viewing Persons by State ---");
testSystem.viewPersonsByState("Maharashtra");
testSystem.viewPersonsByState("Delhi");






