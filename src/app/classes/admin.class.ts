export class Admin {
    _id: string = '';
    firstname: string = '';
    lastname: string = '';
    email: string = '';
    type: string = '';
    token: string = '';

    constructor(
        _id: string,
        firstname: string,
        lastname: string,
        email: string,
        type: string,
        token: string
    ) {
        this._id = _id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.type = type;
        this.token = token;
    }
}

// Create an array of Admin instances with initial values
export const adminsArray: Admin[] = [
    new Admin('1', 'John', 'Doe', 'john.doe@example.com', 'Office', 'token123'),
    new Admin('2', 'Jane', 'Smith', 'jane.smith@example.com', 'Admin', 'token456'),
    new Admin('3', 'Alice', 'Johnson', 'alice.johnson@example.com', 'Office', 'token789')
];
