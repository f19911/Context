var calculations = {
  salasySum: function () {
    return this.reduce(function (acc, next) {
      return acc + next;
    }, 0);
  },
  logName: function () {
    this.forEach(function (user) {
      console.log(user.name);
    });
  },
  findUsersByIds: function (ids) {
    return this.filter(function (user) {
      return ids.find(function (id) {
        return user.id === id;
      });
    });
  },
};

var users = [
  {
    id: 1,
    name: "User 2",
    salary: 200,
  },
  {
    id: 2,
    name: "User 3",
    salary: 200,
  },
  {
    id: 3,
    name: "User 4",
    salary: 200,
  },
];
let allSalary = users.map(function (value) {
  return value.salary;
});
console.log(calculations.salasySum.call(allSalary));
calculations.logName.call(users);
console.log(calculations.findUsersByIds.call(users, [2, 3]));