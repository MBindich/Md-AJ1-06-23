//2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person, который будет соответствовать массиву
interface IUser {
    name: string;
    age: number;
    occupation: string
}

interface IAdmin {
    name: string;
    age: number;
    role: string
}

type Person = IUser | IAdmin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

