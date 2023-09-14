const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("a", "a", "a", "a", "a", "1234", "99999999", "a@a.com");
const contact2 = new Contact("b", "b", "b", "b", "B", "98765", "777777", "b@b.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);

addressBook.displayContacts();