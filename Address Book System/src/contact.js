// Defining the Contact class
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

    toString() {
        return `${this.firstName} ${this.lastName} - ${this.city}, ${this.state} - ${this.zip}`;
    }
}

// AddressBook class to manage contacts
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Adding a contact to the address book
    addContact(contact) {
        this.contacts.push(contact);
    }

    // Sorting contacts by City, State, or Zip
    sortContactsBy(parameter) {
        if (["city", "state", "zip"].includes(parameter)) {
            return this.contacts.sort((a, b) => a[parameter].localeCompare(b[parameter]));
        } else {
            console.log("Invalid sorting parameter! Use 'city', 'state', or 'zip'.");
            return [];
        }
    }

    // Displaying all contacts
    displayContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// Creating an instance of AddressBook
const myAddressBook = new AddressBook();

// Adding sample contacts
myAddressBook.addContact(new Contact("Tushar", "Tembhare", "123 Street", "Pune", "Maharashtra", "411001", "9876543210", "tushar@example.com"));
myAddressBook.addContact(new Contact("Rahul", "Sharma", "456 Avenue", "Mumbai", "Maharashtra", "400001", "9123456789", "rahul@example.com"));
myAddressBook.addContact(new Contact("Sneha", "Verma", "789 Road", "Bangalore", "Karnataka", "560001", "8234567890", "sneha@example.com"));

// Sorting contacts by city
console.log("\n📌 Contacts sorted by City:");
myAddressBook.sortContactsBy("city");
myAddressBook.displayContacts();

// Sorting contacts by state
console.log("\n📌 Contacts sorted by State:");
myAddressBook.sortContactsBy("state");
myAddressBook.displayContacts();

// Sorting contacts by zip
console.log("\n📌 Contacts sorted by Zip:");
myAddressBook.sortContactsBy("zip");
myAddressBook.displayContacts();



