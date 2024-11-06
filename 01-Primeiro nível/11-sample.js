class user {
    constructor(userProfile) {
        this.name = userProfile.name;
        this.age = userProfile.age;
        this.role = userProfile.role;
        this.creationDate = userProfile.created;
        this.lastLogin = userProfile.lastLogin;
        this.isActive = userProfile.active;
        this.totalLoginAttempts = userProfile.loginAttempts;
        this.currentLoginAttempts = userProfile.totalLoginAttemptsNumber;
    }

    verificarAtvidade() {
        if (this.isActive) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    verificarCredenciais() {
        if (this.role === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

function numeroDeAdmins(users) {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].role === "admin") {
            count++;
        }
    }
    return count;
}

function tentativasExcessivas(user, maxLoginAttempts) {
    if (user.currentLoginAttempts > maxLoginAttempts) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

function mostRecentlyLoggedIn(user1, user2) {
    if (user1.lastLogin > user2.LastLogin) {
        return `${user1.name} logou mais recentemente.`;
    } else {
        return `${user2.name} logou mais recentemente.`;
    }
}

function criadoRecente(user) {
    const now = new Date();
    const recentlyCreatedDate = 31_536_000_000;
    if (now - user.creationDate < recentlyCreatedDate) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const yearCreated1 = 2023;
const monthCreated1 = 1;
const dayCreated1 = 15;
const yearLastLogin1 = 2024;
const monthLastLogin1 = 8;
const dayLastLogin1 = 1;

const userProfile1 = {
    name: "Carlos",
    age: 25,
    role: "admin",
    creationDate: new Date(yearCreated1, monthCreated1, dayCreated1),
    lastLogin: new Date(yearLastLogin1, monthLastLogin1, dayLastLogin1),
    active: true,
    totalLoginAttempts: 100,
    currentLoginAttempts: 2
};

const yearCreated2 = 2020;
const monthCreated2 = 4;
const dayCreated2 = 22;
const yearLastLogin2 = 2024;
const monthLastLogin2 = 7;
const dayLastLogin2 = 31;

const userProfile2 = {
    name: "Ana",
    age: 30,
    role: "guest",
    creationDate: new Date(yearCreated2, monthCreated2, dayCreated2),
    lastLogin: new Date(yearLastLogin2, monthLastLogin2, dayLastLogin2),
    active: true,
    totalLoginAttempts: 50,
    currentLoginAttempts: 3
};

const yearCreated3 = 2022;
const monthCreated3 = 10;
const dayCreated3 = 5;
const yearLastLogin3 = 2024;
const monthLastLogin3 = 6;
const dayLastLogin3 = 10;

const userProfile3 = {
    name: "José",
    age: 29,
    role: "admin",
    creationDate: new Date(yearCreated3, monthCreated3, dayCreated3),
    lastLogin: new Date(yearLastLogin3, monthLastLogin3, dayLastLogin3),
    active: false,
    totalLoginAttempts: 200,
    currentLoginAttempts: 5
};


const yearCreated4 = 2021;
const monthCreated4 = 2;
const dayCreated4 = 10;
const yearLastLogin4 = 2024;
const monthLastLogin4 = 12;
const dayLastLogin4 = 25;

const userProfile4 = {
    name: "Maria",
    age: 35,
    role: "guest",
    creationDate: new Date(yearCreated4, monthCreated4, dayCreated4),
    lastLogin: new Date(yearLastLogin4, monthLastLogin4, dayLastLogin4),
    active: false,
    totalLoginAttempts: 80,
    currentLoginAttempts: 7
};

const users = [
    new user(userProfile1),
    new user(userProfile2),
    new user(userProfile3),
    new user(userProfile4)
];
console.log(`Usuários admin: ${numeroDeAdmins(users)}`);

users[0].verificarAtvidade();
users[1].verificarCredenciais();
const user2 = 2;
const maxLoginAttempts = 4;
tentativasExcessivas(users[user2], maxLoginAttempts);
const user0 = 0;
const user3 = 3;
console.log(mostRecentlyLoggedIn(users[user0], users[user3]));
criadoRecente(users[user3]);
