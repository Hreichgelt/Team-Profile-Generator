const Employee = require("../lib/employee");

// create employee object
test("create new employee", () => {
  const employeee = new Employee();
  expect(typeof employeee).toBe("object");
});

test("make sure we can provide name id email and title and it will set ", () => {
  const employeee = new Employee("Boss", "Hugo", "17", "email@email.com");
  expect(employeee.title).toBe("Boss");
  expect(employeee.name).toBe("Hugo");
  expect(employeee.id).toBe("17");
  expect(employeee.email).toBe("email@email.com");
});

test("make sure we can get name id email title", () => {
  const employeee = new Employee("Boss", "Hugo", "17", "email@email.com");
  expect(employeee.getTitle()).toBe("Boss");
  expect(employeee.getName()).toBe("Hugo");
  expect(employeee.getId()).toBe("17");
  expect(employeee.getEmail()).toBe("email@email.com");
});
