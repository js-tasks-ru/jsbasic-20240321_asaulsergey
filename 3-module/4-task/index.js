function showSalary(users, age) {
  let newUsers = users.filter((user) => user.age <= age);
  let string = newUsers
    .map(us => `${us.name}, ${us.balance}`)
    .join('\n');
  return string;
}

