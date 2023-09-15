const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("Aaa", "Aba", "wedfa", "awefewf", "wefea", "123994", "9999999977", "a@a.com");
const contact2 = new Contact("Baa", "Ffrgra", "wedfa", "awefewf", "tegtgtrg", "123994", "9995599977", "b@b.com");
const contact3 = new Contact("Casj", "Trtgrg", "gtgrgw", "trghrt", "ljjgfe", "877866", "9993459977", "c@c.com");

addressBook.validateContact(contact1);
addressBook.addContact(contact1);
addressBook.validateContact(contact2);
addressBook.addContact(contact2);
addressBook.validateContact(contact3);
addressBook.addContact(contact3);
addressBook.displayContacts();
const contact4 = new Contact("Vuyewfdywf", "Pftygvutef", "gtgrgw", "trghrt", "4rq34r", "877866", "9993459977", "update@c.com");

const foundContact = addressBook.findContactByName("Aaa");
if(foundContact != null){
addressBook.editContact(foundContact,contact4);
}
addressBook.displayContacts();
addressBook.deleteContact("Baa");
addressBook.displayContacts();
console.log(addressBook.ContactCount());