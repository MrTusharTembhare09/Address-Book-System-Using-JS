const AddressBook = require("./addressBook");

class AddressBookSystem {
    constructor() {
        this.addressBooks = new Map(); // Using a Map to store multiple address books
    }

    // Creating a new Address Book
    createAddressBook(name) {
        if (!this.addressBooks.has(name)) {
            this.addressBooks.set(name, new AddressBook(name));
            console.log(`📂 New Address Book "${name}" created successfully!`);
        } else {
            console.log(`⚠️ Address Book "${name}" already exists.`);
        }
    }

    // Adding a contact to a specific address book
    addContactToAddressBook(bookName, contact) {
        if (this.addressBooks.has(bookName)) {
            this.addressBooks.get(bookName).addContact(contact);
        } else {
            console.log(`🚫 Address Book "${bookName}" not found.`);
        }
    }

    // Viewing persons in a city across all address books
    viewPersonsByCity(city) {
        console.log(`🔍 Searching for people in city: ${city}`);
        this.addressBooks.forEach(addressBook => {
            addressBook.viewByCity(city);
        });
    }

    // Viewing persons in a state across all address books
    viewPersonsByState(state) {
        console.log(`🔍 Searching for people in state: ${state}`);
        this.addressBooks.forEach(addressBook => {
            addressBook.viewByState(state);
        });
    }

    // **UC10: Get Count of Contacts by City Across Address Books**
    getCountByCity(city) {
        let totalCount = Array.from(this.addressBooks.values())
            .map(addressBook => addressBook.getCountByCity(city)) // Extract counts
            .reduce((total, count) => total + count, 0); // Sum up counts
        console.log(`🏙️ Total number of contacts in ${city}: ${totalCount}`);
        return totalCount;
    }

    // **UC10: Get Count of Contacts by State Across Address Books**
    getCountByState(state) {
        let totalCount = Array.from(this.addressBooks.values())
            .map(addressBook => addressBook.getCountByState(state)) // Extract counts
            .reduce((total, count) => total + count, 0); // Sum up counts
        console.log(`🌎 Total number of contacts in ${state}: ${totalCount}`);
        return totalCount;
    }
}

// Exporting AddressBookSystem class
module.exports = AddressBookSystem;
