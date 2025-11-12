interface User {
    id: number;
    name: string;
    email: string;
    role?: 'admin' | 'user';
}
export declare class UsersService {
    private users;
    getAllUsers(role?: 'admin' | 'user'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    getUserById(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    createUser(user: User): {
        role: "admin" | "user";
        id: number;
        name: string;
        email: string;
    };
    updateUser(id: number, userUpdate: Partial<User>): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    deleteUser(id: string | number): {
        id: number;
        name: string;
        email: string;
        role: string;
    } | null;
}
export {};
