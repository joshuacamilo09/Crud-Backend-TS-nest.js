import { CreateUserDto } from '../DTO/CreateUserDto';
export declare class UsersService {
    private users;
    private idCounter;
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
    createUser(user: CreateUserDto): {
        id: number;
        name: string;
        email: string;
        role: "admin" | "user";
    };
    updateUser(id: number, userUpdate: Partial<{
        name: string;
        email: string;
        role: 'admin' | 'user';
    }>): {
        name: string;
        email: string;
        role: string;
        id: number;
    };
    deleteUser(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
