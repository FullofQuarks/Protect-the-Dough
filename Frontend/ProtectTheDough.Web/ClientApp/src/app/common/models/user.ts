export class User {
    userID: number;
    username: string;
    password: string;
    email: string;
    address: string;
    isLoggedIn: boolean;
    constructor(
        userId: number,
        username: string,
        password: string,
        email: string,
        address: string,
        isLoggedIn: boolean
    ) {}
}

export class UserId {
    id: number;
    constructor(id: number) {}
}
