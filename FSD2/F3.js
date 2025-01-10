function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
  }
 
 
  const employee = { name: 'Sankeerth', role: 'AI Developer', age: 23, location: 'EU' };
  const updatedEmployee = updateEmployeeDetails(employee, 'Senior Developer');
  console.log(updatedEmployee);
 