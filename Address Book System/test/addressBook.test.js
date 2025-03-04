const { AddressBookSystem, Contact } = require('../src/addressBook');

const testSystem = new AddressBookSystem();
testSystem.createAddressBook("Work");

// Adding a contact
testSystem.addContactToBook("Work", new Contact("Rahul", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "9876543211", "rahul@example.com"));

// Editing a contact
testSystem.editContactInBook("Work", "Rahul", "Sharma", { phone: "9234567890", zip: "400002" });

// Trying to edit a non-existent contact
testSystem.editContactInBook("Work", "John", "Doe", { city: "Delhi" });

console.log("✅ All Tests Executed!");



