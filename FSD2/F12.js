function createProfile({ name, email }) {
    return { name, email };
}

const user = {
    name: "NITHIN",
    age: 25,
    email: "NITHIN@example.com",
    address: "123 Main St",
};

const profile = createProfile(user);
console.log(profile);