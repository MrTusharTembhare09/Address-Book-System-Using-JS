const Contact = require("./contact");

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    // Adding a new contact
    addContact(contact) {
        this.contacts.push(contact);
        console.log(`✅ Contact added successfully to ${this.name}!`);
    }

    // Viewing persons by city
    viewByCity(city) {
        let filteredContacts = this.contacts.filter(contact => contact.city === city);
        console.log(`📖 People in ${city}:`);
        filteredContacts.forEach(contact => console.log(contact.toString()));
        return filteredContacts;
    }

    // Viewing persons by state
    viewByState(state) {
        let filteredContacts = this.contacts.filter(contact => contact.state === state);
        console.log(`📖 People in ${state}:`);
        filteredContacts.forEach(contact => console.log(contact.toString()));
        return filteredContacts;
    }
}

// Exporting AddressBook class
module.exports = AddressBook;
