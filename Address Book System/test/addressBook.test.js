const { strictEqual, throws } = require('assert');
const { Contact, AddressBook } = require('../src/addressBook');

// Test case for a valid contact
try {
    const validContact = new Contact("Amit", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "9876543210", "amit@gmail.com");
    Contact.validateContact(validContact);
    console.log("✅ Valid Contact Test Passed!");
} catch (error) {
    console.error("❌ Valid Contact Test Failed:", error.message);
}

// Test case for an invalid first name
throws(() => {
    const invalidContact = new Contact("am", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "9876543210", "amit@gmail.com");
    Contact.validateContact(invalidContact);
}, Error, "❌ First Name Validation Failed!");

// Test case for an invalid address
throws(() => {
    const invalidContact = new Contact("Amit", "Sharma", "abc", "xy", "M", "400001", "9876543210", "amit@gmail.com");
    Contact.validateContact(invalidContact);
}, Error, "❌ Address Validation Failed!");

// Test case for an invalid phone number
throws(() => {
    const invalidContact = new Contact("Amit", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "1234567890", "amit@gmail.com");
    Contact.validateContact(invalidContact);
}, Error, "❌ Phone Number Validation Failed!");

console.log("✅ All Test Cases Executed!");

