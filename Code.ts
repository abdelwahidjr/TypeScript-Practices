class User {
    private id: number;
    private name: string;
    private email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    setName(name: string): void {
        this.name = name;
    }

    setEmail(email: string): void {
        if (!email.includes('@')) {
            throw new Error("Invalid email");
        }
        this.email = email;
    }
}

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.getId() === id);
    }

    // Other user management functionalities...
}

/*

Here's why this TypeScript code can be seen as high-quality:

1. Type Safety: The use of explicit types for variables and function returns ensures that the code is less prone to type-related errors.

2. Encapsulation: The `User` class keeps its properties private and exposes them through getter and setter methods, protecting the integrity of the data.

3. Validation: The `setEmail` method includes basic validation, demonstrating how TypeScript can be used to enforce data integrity.

4. Readability: The code is straightforward and easy to read, making it clear what each class and method is responsible for.

5. Maintainability: The clear structure and use of classes make the codebase easier to maintain and extend. For example, adding new properties to the `User` class or new methods to the `UserManager` class would be straightforward.

6. Scalability: The `UserManager` class abstracts the logic for managing users, making it easier to scale and modify how users are handled in the future.

This example, while simple, demonstrates good TypeScript practices such as type safety, class-based organization, and encapsulation. 
These practices contribute to a more maintainable, scalable, and robust codebase, which are qualities to be proud of in any software development project.

*/
