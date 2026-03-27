class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }
}

const users: User[] = [
    new User("Alice", "alice@example.com"),
    new User("Bob", "bob@example.com"),
    new User("Charlie", "charlie@example.com")
];

users.forEach(user => {
    console.log(`Name: ${user.getName()}, Email: ${user.email}`);
});
