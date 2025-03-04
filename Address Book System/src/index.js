const AddressBookSystem = require("./addressBookSystem");
const Contact = require("./contact");

const system = new AddressBookSystem();

// Creating Address Books
system.createAddressBook("Personal");
system.createAddressBook("Work");

// Creating Contacts
const contact1 = new Contact("Tushar", "Tembhare", "123 Main St", "Mumbai", "Maharashtra", "400001", "9876543210", "tushar@example.com");
const contact2 = new Contact("Rahul", "Sharma", "456 Elm St", "Pune", "Maharashtra", "411001", "9876543211", "rahul@example.com");
const contact3 = new Contact("Anjali", "Verma", "789 Oak St", "Delhi", "Delhi", "110001", "9876543212", "anjali@example.com");
const contact4 = new Contact("Priya", "Kapoor", "101 Pine St", "Mumbai", "Maharashtra", "400002", "9876543213", "priya@example.com");

// Adding Contacts
system.addContactToBook("Personal", contact1);
system.addContactToBook("Personal", contact2);
system.addContactToBook("Work", contact3);
system.addContactToBook("Work", contact4);

// Sorting Contacts by Name
console.log("\n--- Sorting Contacts by Name (Using sort()) ---");
system.sortContactsInBook("Personal");

console.log("\n--- Sorting Contacts by Name (Using map and sort()) ---");
system.sortContactsInBookWithMap("Work");
