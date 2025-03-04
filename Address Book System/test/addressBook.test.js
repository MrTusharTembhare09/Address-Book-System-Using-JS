const AddressBookSystem = require("../src/addressBook");

const testSystem = new AddressBookSystem();
testSystem.createAddressBook("Personal");
testSystem.createAddressBook("Work");

testSystem.addContact("Personal", { firstName: "Tushar", lastName: "Tembhare", phone: "9876543210" });
testSystem.addContact("Work", { firstName: "Rahul", lastName: "Sharma", phone: "9876543211" });

console.log("\n📚 Total Contacts Count:", testSystem.getContactCount()); // Expected Output: 2

testSystem.addContact("Work", { firstName: "Amit", lastName: "Kumar", phone: "9876543212" });

console.log("\n📚 Updated Total Contacts Count:", testSystem.getContactCount()); // Expected Output: 3



