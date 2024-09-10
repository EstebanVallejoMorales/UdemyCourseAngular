const skills: string[] = ['Bash', 'Counter', 'Healing'];

// How can I specify the type of the properties of the following object
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', '']    
}

interface Character{
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string; //
}

export {};