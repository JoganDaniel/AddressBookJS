class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log("Contact Added Successfully");
    }

    displayContacts() {
        this.contacts.forEach(contact => {
            console.log(`First Name: ${contact.firstName}`);
            console.log(`Last Name: ${contact.lastName}`);
            console.log(`Address: ${contact.address}`);
            console.log(`City: ${contact.city}`);
            console.log(`State: ${contact.state}`);
            console.log(`Zip Code: ${contact.zip}`);
            console.log(`Phone Number: ${contact.phoneNumber}`);
            console.log(`Email: ${contact.email}`);
            console.log("");
        });
    }

    validateContact(contact)
    {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(contact.firstName)) {
            throw new Error(`First name should start with a capital letter and have at least 3 characters.`);
        }
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(contact.lastName)) {
            throw new Error(`Last name should start with a capital letter and have at least 3 characters.`);
        }
        if (contact.address.length < 4) {
            throw new Error(`Address should have at least 4 characters.`);
        }
        if (contact.city.length < 4) {
            throw new Error(`city should have at least 4 characters.`);
        }
        if (contact.state.length < 4) {
            throw new Error(`state should have at least 4 characters.`);
        }
        if (! /^\d{6}$/.test(contact.zip)) {
            throw new Error(`Invalid zipcode.`);
        }
        if (! /^\d{10}$/.test(contact.phoneNumber)) {
            throw new Error(`Invalid Phone.`);
        }
        if (! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact.email)) {
            throw new Error(`Invalid email.`);
        }
        
    }
    findContactByName(firstName) {
        const foundContactIndex = this.contacts.findIndex(contact => {
            return contact.firstName === firstName;
        });

        if (foundContactIndex !== -1) {
            return this.contacts[foundContactIndex];
        } else {
            return null;
        }
    }
    editContact(existingContact, updatedContactInfo) {
        const foundContactIndex = this.contacts.findIndex(contact => {
            return contact === existingContact;
        });

        if (foundContactIndex !== -1) {
            this.contacts[foundContactIndex] = updatedContactInfo;
            console.log("Updated");
            return true; 
        } else {
            console.log("Wrong input");
            return false; 
        }
    }
    deleteContact(name) {
        let a = 0;
        this.contacts.forEach(element => {
            if (name === element.firstName) {
                console.log("Contact Deleted Successfully");
                this.contacts.splice(a, 1);
            }
            a++;
        }
        );
    }
    ContactCount()
    {
        const count = this.contacts.length;
        return count;
    }

}

module.exports = AddressBook;