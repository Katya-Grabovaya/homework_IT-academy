class Client {
    constructor (name, surname, dateOfBirth, passportNumber) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
	this.passportNumber = passportNumber;
    }
    setName (name) {
        this.name = name;
    }

    setSurname (surname) {
        this.surname = surname;
    }

    setDateOfBirth (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    setPassportNumber (passportNumber) {
        this.passportNumber = passportNumber;
    }

    getName () {
        return this.name;
    }

    getSurname () {
        return this.surname;
    }

    getDateOfBirth () {
        return this.dateOfBirth;
    }

    getPassportNumber () {
        return this.passportNumber;
    }

}

class ClientBuilder {
        constructor() {
            this.client = new Client();
        }
    
        addName(name) {
            this.client.name = name;
            return this;
        }
    
        addSurname(surname) {
            this.client.surname = surname;
            return this;
        }

        addDateOfBirth(dateOfBirth) {
            this.client.dateOfBirth = dateOfBirth;
            return this;
        }

        addPassportNumber(passportNumber) {
                this.client.passportNumber = passportNumber;
                return this;
            }
    
        build() {
            return this.client;
        }
    }




module.exports = ClientBuilder;