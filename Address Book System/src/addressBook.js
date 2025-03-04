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
        const addressRegex = /^[A-Za-z0-9\s]{4,}$/; // Min 4 characters
        const phoneRegex = /^[6-9]\d{9}$/;     // 10-digit Indian phone number
        const zipRegex = /^\d{6}$/;            // 6-digit zip code
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

// Creating an Address Book to store contacts
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Adding a contact to the address book
    addContact(contact) {
        try {
            Contact.validateContact(contact);  // Validating before adding
            this.contacts.push(contact);
            console.log("✅ Contact added successfully!");
        } catch (error) {
            console.error(error.message);
        }
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
    const validContact = new Contact("Tushar", "Tembhare", "MG Road", "Gondia", "Maharashtra", "441601", "9876543210", "tushar@example.com");
    myAddressBook.addContact(validContact);
    myAddressBook.displayContacts();

    // Invalid Contact (Should fail)
    const invalidContact = new Contact("tu", "te", "abc", "xy", "M", "44160", "12345", "invalid.com");
    myAddressBook.addContact(invalidContact);
} catch (error) {
    console.error("❌ " + error.message);
}
