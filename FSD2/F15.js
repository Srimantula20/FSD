function createProfile({ name, age, interests }) {
    const [primaryInterest, secondaryInterest] = interests;
 
    return {
      name,
      age,
      primaryInterest,
      secondaryInterest,
    };
  }
 
  const person = {
    name: 'John',
    age: 25,
    interests: ['Reading', 'Traveling', 'Cooking'],
  };
 
  const profile = createProfile(person);
  console.log(profile);