const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("Aaa", "Aba", "wedfa", "awefewf", "wefea", "123994", "9999999977", "a@a.com");
const contact2 = new Contact("Baa", "Ffrgra", "wedfa", "awefewf", "tegtgtrg", "123994", "9995599977", "b@b.com");

addressBook.validateContact(contact1);
addressBook.addContact(contact1);
addressBook.validateContact(contact2);

addressBook.addContact(contact2);
addressBook.displayContacts();