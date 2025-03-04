const { throws } = require('assert');
const { Contact, AddressBookSystem } = require('../src/addressBook');

// Test case for creating an address book
const testSystem = new AddressBookSystem();
testSystem.createAddressBook("Friends");

// Test case for duplicate address book
testSystem.createAddressBook("Friends");  // Should show error

// Test case for adding a valid contact
testSystem.addContactToBook("Friends", new Contact("Amit", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "9876543210", "amit@gmail.com"));

// Test case for adding a contact to a non-existent address book
testSystem.addContactToBook("Unknown", new Contact("John", "Doe", "Bandra", "Mumbai", "Maharashtra", "400001", "9876543210", "john@gmail.com"));  // Should show error

console.log("✅ All Tests Executed!");


