const AddressBookSystem = require("../src/addressBook");

const testSystem = new AddressBookSystem();
testSystem.createAddressBook("Personal");

testSystem.addContact("Personal", { firstName: "Tushar", lastName: "Tembhare", phone: "9876543210" });
testSystem.addContact("Personal", { firstName: "Rahul", lastName: "Sharma", phone: "9876543211" });

// Trying to add a duplicate contact
testSystem.addContact("Personal", { firstName: "Tushar", lastName: "Tembhare", phone: "9123456789" }); 

console.log("\n📚 Total Contacts Count:", testSystem.getContactCount()); // Expected Output: 2 (Duplicate should be rejected)




