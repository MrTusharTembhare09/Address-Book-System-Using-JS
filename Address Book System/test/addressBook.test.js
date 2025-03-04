const AddressBookSystem = require("../src/addressBook");

const testSystem = new AddressBookSystem();
testSystem.createAddressBook("Personal");

testSystem.addContact("Personal", { firstName: "Tushar", lastName: "Tembhare", phone: "9876543210" });
testSystem.addContact("Personal", { firstName: "Rahul", lastName: "Sharma", phone: "9876543211" });

console.log("\n📚 All Address Books Before Deletion:");
console.log(testSystem.addressBooks);

testSystem.deleteContact("Personal", "Tushar Tembhare");

console.log("\n📚 All Address Books After Deletion:");
console.log(testSystem.addressBooks);


