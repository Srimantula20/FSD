function mergeUserData(...objects) {
    return objects.reduce((merged, currentObject) => ({ ...merged, ...currentObject }), {});
  }
 
 
  const userDetails = { name: 'surya', age: 25 };
  const userAddress = { address: 'Sainikpuri', city: 'Hyderabad' };
  const userPreferences = { theme: 'Engineering Edu', language: 'EN' };
 
  const mergedData = mergeUserData(userDetails, userAddress, userPreferences);
  console.log(mergedData);