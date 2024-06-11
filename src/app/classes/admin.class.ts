export class Admin {
        _id: string = '';
        firstname: string = '';
        lastname: string = '';
        email: string = '';
        phone: string = '';
        token: string = '';

constructor(
            _id: string,
            firstname: string,
            lastname: string,
            email: string,
            phone: string,
            token: string
        ) {
            this._id = _id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.phone = phone;
            this.token = token;
        }
    }
    
    // Create an array of Admin instances with initial values
export const adminsArray: Admin[] = [
        new Admin('1', 'John', 'Doe', 'john.doe@example.com', '123-456-7890', 'token123'),
        new Admin('2', 'Jane', 'Smith', 'jane.smith@example.com', '987-654-3210', 'token456'),
        new Admin('3', 'Alice', 'Johnson', 'alice.johnson@example.com', '456-789-0123', 'token789')
    ];
    