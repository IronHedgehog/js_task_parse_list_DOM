'use strict';

// write code here
const employeeList = document.querySelector('ul');
const employeeItems = Array.from(document.querySelectorAll('ul > li'));

const normalizeSalary = (salary) => {
  let result = '';

  for (const ch of salary) {
    if (!isNaN(ch)) {
      result += ch;
    }
  }

  return +result;
};

const sortList = (list) => {
  return list.sort(
    (a, b) =>
      normalizeSalary(b.dataset.salary) - normalizeSalary(a.dataset.salary),
  );
};

const sortedList = sortList(employeeItems);

const getEmployees = (list) => {
  employeeList.innerHTML = '';
  list.forEach((li) => employeeList.append(li));
};

getEmployees(sortedList);
