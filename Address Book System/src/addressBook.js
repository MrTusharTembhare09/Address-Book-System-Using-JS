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
        if (this.addressBooks[bookName]) {
            this.addressBooks[bookName].push(contact);
            console.log(`✅ Contact added successfully to ${bookName}!`);
        } else {
            console.log(`❌ Address Book "${bookName}" not found!`);
        }
    }

    deleteContact(bookName, fullName) {
        if (this.addressBooks[bookName]) {
            const initialLength = this.addressBooks[bookName].length;
            this.addressBooks[bookName] = this.addressBooks[bookName].filter(
                (contact) => `${contact.firstName} ${contact.lastName}` !== fullName
            );

            if (this.addressBooks[bookName].length < initialLength) {
                console.log(`🗑️ Contact "${fullName}" deleted successfully from ${bookName}!`);
            } else {
                console.log(`❌ Contact "${fullName}" not found in ${bookName}!`);
            }
        } else {
            console.log(`❌ Address Book "${bookName}" not found!`);
        }
    }

    getContactCount() {
        return Object.values(this.addressBooks)
            .reduce((total, contacts) => total + contacts.length, 0);
    }
}

module.exports = AddressBookSystem;
