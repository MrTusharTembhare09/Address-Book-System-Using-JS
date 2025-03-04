// Creating AddressBookSystem class
class AddressBookSystem {
    constructor() {
        this.addressBooks = new Map(); // Stores multiple address books
    }

    // Creating a new address book
    createAddressBook(name) {
        if (!this.addressBooks.has(name)) {
            this.addressBooks.set(name, []);
            console.log(`📂 New Address Book "${name}" created successfully!`);
        } else {
            console.log(`⚠️ Address Book "${name}" already exists.`);
        }
    }

    // Adding a new contact to the specific address book
    addContact(bookName, contact) {
        if (!this.addressBooks.has(bookName)) {
            console.log(`❌ Address Book "${bookName}" does not exist.`);
            return;
        }

        // Checking for duplicate entries
        let existingContacts = this.addressBooks.get(bookName);
        if (existingContacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            console.log(`⚠️ Contact "${contact.firstName} ${contact.lastName}" already exists in "${bookName}".`);
            return;
        }

        existingContacts.push(contact);
        console.log(`✅ Contact added successfully to ${bookName}!`);
    }

    // Searching for persons in a particular city
    searchByCity(city) {
        let results = [];
        this.addressBooks.forEach((contacts, bookName) => {
            let matches = contacts.filter(contact => contact.city === city);
            results.push(...matches.map(contact => ({ bookName, ...contact })));
        });

        console.log(`🔍 Found ${results.length} contacts in city "${city}"`);
        return results;
    }

    // Searching for persons in a particular state
    searchByState(state) {
        let results = [];
        this.addressBooks.forEach((contacts, bookName) => {
            let matches = contacts.filter(contact => contact.state === state);
            results.push(...matches.map(contact => ({ bookName, ...contact })));
        });

        console.log(`🔍 Found ${results.length} contacts in state "${state}"`);
        return results;
    }
}

// Exporting the class for testing
module.exports = AddressBookSystem;
