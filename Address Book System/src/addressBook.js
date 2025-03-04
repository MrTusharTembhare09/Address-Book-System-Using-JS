class AddressBookSystem {
    constructor() {
        this.addressBooks = {};
    }

    createAddressBook(name) {
        if (!this.addressBooks[name]) {
            this.addressBooks[name] = [];
            console.log(`📂 New Address Book "${name}" created successfully!`);
        }
    }

    addContact(bookName, contact) {
        if (!this.addressBooks[bookName]) {
            console.log(`❌ Address Book "${bookName}" not found!`);
            return;
        }

        // Checking for duplicate entries using filter
        const isDuplicate = this.addressBooks[bookName]
            .filter(c => `${c.firstName} ${c.lastName}` === `${contact.firstName} ${contact.lastName}`)
            .length > 0;

        if (isDuplicate) {
            console.log(`❌ Duplicate Entry! Contact "${contact.firstName} ${contact.lastName}" already exists in ${bookName}.`);
            return;
        }

        // Adding contact if it's not a duplicate
        this.addressBooks[bookName].push(contact);
        console.log(`✅ Contact added successfully to ${bookName}!`);
    }

    getContactCount() {
        return Object.values(this.addressBooks)
            .reduce((total, contacts) => total + contacts.length, 0);
    }
}

module.exports = AddressBookSystem;
