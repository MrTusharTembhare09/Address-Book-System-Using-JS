const { strictEqual, throws } = require('assert');
const { Contact, AddressBook } = require('../src/addressBook');

// Testing Contact Creation and Validation
try {
    const validContact = new Contact("Amit", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "9876543210", "amit@gmail.com");
    Contact.validateContact(validContact);
    console.log("✅ Valid Contact Test Passed!");
} catch (error) {
    console.error("❌ Valid Contact Test Failed:", error.message);
}

// Testing Invalid Contact (Wrong Phone Number)
throws(() => {
    const invalidContact = new Contact("Amit", "Sharma", "Andheri", "Mumbai", "Maharashtra", "400001", "1234567890", "amit@gmail.com");
    Contact.validateContact(invalidContact);
}, Error, "❌ Phone Number Validation Failed!");
