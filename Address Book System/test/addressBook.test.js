const AddressBookSystem = require('../src/addressBook');
const Contact = require('../src/contact');

// Creating AddressBookSystem instance
const testSystem = new AddressBookSystem();

// Creating address books
testSystem.createAddressBook("Personal");
testSystem.createAddressBook("Work");

// Adding contacts
testSystem.addContact("Personal", new Contact("Tushar", "Tembhare", "MG Road", "Pune", "Maharashtra", "411001", "9876543210", "tushar@example.com"));
testSystem.addContact("Work", new Contact("Rahul", "Sharma", "IT Park", "Mumbai", "Maharashtra", "400001", "9876543211", "rahul@example.com"));
testSystem.addContact("Personal", new Contact("Neha", "Singh", "Baker Street", "Delhi", "Delhi", "110001", "9876543212", "neha@example.com"));

// Searching for contacts in Pune
console.log("\n🔍 Searching for contacts in Pune:");
console.log(testSystem.searchByCity("Pune"));

// Searching for contacts in Maharashtra
console.log("\n🔍 Searching for contacts in Maharashtra:");
console.log(testSystem.searchByState("Maharashtra"));





