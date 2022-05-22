export class Contact {
    name = '';
    lastname = '';
    email = '';
    connected = true;

    constructor(name, lastname, email, connected){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.connected = connected;
    }
}