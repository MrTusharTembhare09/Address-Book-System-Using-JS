const Contact = require("./contact");

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    // Adding a contact to the address book
    addContact(contact) {
        this.contacts.push(contact);
        console.log(`✅ Contact added to ${this.name}`);
    }

    // Sorting contacts alphabetically by first name
    sortByName() {
        this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log(`\n📖 Sorted Address Book (${this.name}) by Name:`);
        this.contacts.forEach(contact => console.log(contact.toString()));
    }

    // Sorting using JavaScript ES6 Array Functions (map, sort)
    sortByNameWithMap() {
        let sortedContacts = [...this.contacts].sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log(`\n📖 Sorted Address Book (${this.name}) by Name using Array Functions:`);
        sortedContacts.map(contact => console.log(contact.toString()));
    }
}

// Exporting AddressBook class
module.exports = AddressBook;



