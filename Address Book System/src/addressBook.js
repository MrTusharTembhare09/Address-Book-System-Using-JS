// Contact class (Same as previous use cases)
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Validation method (Same as UC2)
    static validateContact(contact) {
        const nameRegex = /^[A-Z][a-z]{2,}$/;
        const addressRegex = /^[A-Za-z0-9\s]{4,}$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const zipRegex = /^\d{6}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(contact.firstName) || !nameRegex.test(contact.lastName)) {
            throw new Error("❌ Invalid Name: First and Last names should start with a capital letter and have at least 3 characters.");
        }
        if (!addressRegex.test(contact.address) || !addressRegex.test(contact.city) || !addressRegex.test(contact.state)) {
            throw new Error("❌ Invalid Address/City/State: Must be at least 4 characters long.");
        }
        if (!phoneRegex.test(contact.phone)) {
            throw new Error("❌ Invalid Phone Number: Must be a 10-digit number starting with 6-9.");
        }
        if (!zipRegex.test(contact.zip)) {
            throw new Error("❌ Invalid Zip Code: Must be a 6-digit number.");
        }
        if (!emailRegex.test(contact.email)) {
            throw new Error("❌ Invalid Email Address.");
        }
    }
}

// AddressBook class (Handles contacts)
class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    // Adding a contact
    addContact(contact) {
        try {
            Contact.validateContact(contact);
            this.contacts.push(contact);
            console.log(`✅ Contact added successfully to ${this.name}!`);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Finding a contact by name
    findContact(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    // Editing an existing contact
    editContact(firstName, lastName, newDetails) {
        let contact = this.findContact(firstName, lastName);
        if (!contact) {
            console.log(`❌ Contact ${firstName} ${lastName} not found.`);
            return;
        }

        // Updating the contact details if provided
        contact.address = newDetails.address || contact.address;
        contact.city = newDetails.city || contact.city;
        contact.state = newDetails.state || contact.state;
        contact.zip = newDetails.zip || contact.zip;
        contact.phone = newDetails.phone || contact.phone;
        contact.email = newDetails.email || contact.email;

        try {
            Contact.validateContact(contact);
            console.log(`✅ Contact ${firstName} ${lastName} updated successfully.`);
        } catch (error) {
            console.error("❌ Update Failed: " + error.message);
        }
    }

    // Display contacts
    displayContacts() {
        console.log(`\n📖 Address Book: ${this.name}`);
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phone}`);
        });
    }
}

// AddressBookSystem class to manage multiple books
class AddressBookSystem {
    constructor() {
        this.addressBooks = new Map();
    }

    // Creating a new Address Book
    createAddressBook(bookName) {
        if (this.addressBooks.has(bookName)) {
            console.log(`❌ Address Book "${bookName}" already exists.`);
            return;
        }
        this.addressBooks.set(bookName, new AddressBook(bookName));
        console.log(`📂 New Address Book "${bookName}" created successfully!`);
    }

    // Adding a contact to a specific book
    addContactToBook(bookName, contact) {
        if (!this.addressBooks.has(bookName)) {
            console.log(`❌ Address Book "${bookName}" not found.`);
            return;
        }
        this.addressBooks.get(bookName).addContact(contact);
    }

    // Editing a contact in a specific book
    editContactInBook(bookName, firstName, lastName, newDetails) {
        if (!this.addressBooks.has(bookName)) {
            console.log(`❌ Address Book "${bookName}" not found.`);
            return;
        }
        this.addressBooks.get(bookName).editContact(firstName, lastName, newDetails);
    }

    // Display all books and their contacts
    displayAllBooks() {
        console.log("\n📚 All Address Books:");
        this.addressBooks.forEach((book, name) => {
            book.displayContacts();
        });
    }
}

// Example Usage
const mySystem = new AddressBookSystem();
mySystem.createAddressBook("Personal");

// Adding a contact
mySystem.addContactToBook("Personal", new Contact("Tushar", "Tembhare", "MG Road", "Gondia", "Maharashtra", "441601", "9876543210", "tushar@example.com"));

// Editing the contact
mySystem.editContactInBook("Personal", "Tushar", "Tembhare", { phone: "9123456789", city: "Nagpur" });

// Display all books
mySystem.displayAllBooks();
