interface IUser {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number
}


const users: IUser[] = [
  {
    name: "Max Mustermann", 
    age: 25, 
    occupation: 'Chimney sweep',
    car: "WV" 
  },
  {
    name: "Kate Muller", 
    age: 23, 
    occupation: 'Astronaut', 
    children: 2
  }
];