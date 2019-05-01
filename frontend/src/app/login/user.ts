export class User {
    constructor(
        public createdAt: string,
        public email: string,
        public id: string,
        public clientToken: string,
        public userType: string,
        public username: string
    ) { }
}
