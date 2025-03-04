// Contact class (Same as UC2)
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

    // Validation (Same as UC2)
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

// AddressBook class (Stores contacts, handles multiple books)
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
mySystem.createAddressBook("Work");

// Adding contacts to "Personal" Address Book
mySystem.addContactToBook("Personal", new Contact("Tushar", "Tembhare", "MG Road", "Gondia", "Maharashtra", "441601", "9876543210", "tushar@example.com"));
mySystem.addContactToBook("Work", new Contact("Rahul", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "9876543211", "rahul@example.com"));

// Display all books
mySystem.displayAllBooks();

