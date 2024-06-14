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
    new Admin('3', 'Alice', 'Johnson', 'alice.johnson@example.com', 'Office', 'token789'),
    new Admin('4', 'Michael', 'Brown', 'michael.brown@example.com', 'Admin', 'tokenabc'),
    new Admin('5', 'Emily', 'Davis', 'emily.davis@example.com', 'Office', 'tokendef'),
    new Admin('6', 'William', 'Wilson', 'william.wilson@example.com', 'Admin', 'tokenghi'),
    new Admin('7', 'Sophia', 'Martinez', 'sophia.martinez@example.com', 'Office', 'tokenjkl'),
    new Admin('8', 'Daniel', 'Miller', 'daniel.miller@example.com', 'Admin', 'tokenmno'),
    new Admin('9', 'Olivia', 'Garcia', 'olivia.garcia@example.com', 'Office', 'tokenpqr'),
    new Admin('10', 'James', 'Thompson', 'james.thompson@example.com', 'Admin', 'tokensTU')
  ];
