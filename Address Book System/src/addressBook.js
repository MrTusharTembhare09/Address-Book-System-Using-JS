// Creating a Contact class to store address book details
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

    // Validating the contact details before adding
    static validateContact(contact) {
        const nameRegex = /^[A-Z][a-z]{2,}$/;  // First letter capital, min 3 chars
        const phoneRegex = /^[6-9]\d{9}$/;     // Indian phone number format
        const zipRegex = /^\d{6}$/;            // 6-digit zip code
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(contact.firstName) || !nameRegex.test(contact.lastName)) {
            throw new Error("Invalid Name: First and Last names should start with a capital letter and have at least 3 characters.");
        }
        if (!phoneRegex.test(contact.phone)) {
            throw new Error("Invalid Phone Number: Must be a 10-digit number starting with 6-9.");
        }
        if (!zipRegex.test(contact.zip)) {
            throw new Error("Invalid Zip Code: Must be a 6-digit number.");
        }
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid Email Address.");
        }
    }
}

// Creating an Address Book to store contacts
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Adding a contact to the address book
    addContact(contact) {
        Contact.validateContact(contact);  // Validating before adding
        this.contacts.push(contact);
        console.log("✅ Contact added successfully!");
    }

    // Displaying all contacts
    displayContacts() {
        console.log("\n📒 Address Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phone}`);
        });
    }
}

// Example Usage
const myAddressBook = new AddressBook();
try {
    const newContact = new Contact("Tushar", "Tembhare", "MG Road", "Gondia", "Maharashtra", "441601", "9876543210", "tushar@example.com");
    myAddressBook.addContact(newContact);
    myAddressBook.displayContacts();
} catch (error) {
    console.error("❌ " + error.message);
}
