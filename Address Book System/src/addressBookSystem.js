const AddressBook = require("./addressBook");
const Contact = require("./contact");

class AddressBookSystem {
    constructor() {
        this.addressBooks = new Map();
    }

    // Creating a new address book
    createAddressBook(name) {
        if (!this.addressBooks.has(name)) {
            this.addressBooks.set(name, new AddressBook(name));
            console.log(`📂 Address Book '${name}' created!`);
        } else {
            console.log(`⚠️ Address Book '${name}' already exists.`);
        }
    }

    // Adding contact to a specific address book
    addContactToBook(bookName, contact) {
        if (this.addressBooks.has(bookName)) {
            this.addressBooks.get(bookName).addContact(contact);
        } else {
            console.log(`🚫 Address Book '${bookName}' not found.`);
        }
    }

    // Sorting contacts in a specific address book
    sortContactsInBook(bookName) {
        if (this.addressBooks.has(bookName)) {
            this.addressBooks.get(bookName).sortByName();
        } else {
            console.log(`🚫 Address Book '${bookName}' not found.`);
        }
    }

    // Sorting using JavaScript ES6 Array Functions
    sortContactsInBookWithMap(bookName) {
        if (this.addressBooks.has(bookName)) {
            this.addressBooks.get(bookName).sortByNameWithMap();
        } else {
            console.log(`🚫 Address Book '${bookName}' not found.`);
        }
    }
}

// Exporting AddressBookSystem class
module.exports = AddressBookSystem;

