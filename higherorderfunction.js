const data = [
    { 
      id: 1, 
      name: "Alice", 
      age: 25, 
      skills: ["JavaScript"], 
      salary: 50000, 
      projects: [{ name: "Project A", hours: 120 }, { name: "Project B", hours: 80 }]
    },
    { 
      id: 2, 
      name: "Bob", 
      age: 30, 
      skills: ["Python", "Django"], 
      salary: 60000, 
      projects: [{ name: "Project C", hours: 200 }, { name: "Project D", hours: 100 }]
    },
    { 
      id: 3, 
      name: "Rharlie", 
      age: 28, 
      skills: ["JavaScript", "Node.js", 'c'],
  salary: 70000, 
      projects: [{ name: "Project A", hours: 150 }, { name: "Project C", hours: 50 }]
    },
    { 
      id: 4, 
      name: "Favid", 
      age: 35, 
      skills: ["Go", "Kubernetes"], 
      salary: 80000, 
      projects: [{ name: "Project D", hours: 180 }]
    },
    { 
      id: 5, 
      name: "Eve", 
      age: 27, 
      skills: ["JavaScript", "Vue"], 
      salary: 55000, 
      projects: [{ name: "Project B", hours: 90 }, { name: "Project E", hours: 60 }]
    }
];

//   Create an array of names of all employees.
// ["Alice", "Bob", "Charlie", "David", "Eve"]  output
// ["Alice", "Charlie", "Eve"]  // output
// ek cheez chahiyea hota hai output  -> Number, string, object, array, array of object, 2 d array

// map 


function addingTwoToelement(ele, i, item) {
   return ele + 2;
}

const arr = [1,2,3];
const result = data.map(data => data.id %2==0 ? data : false
).sort((a, b)=> b.id-a.id)
console.log('sasaasasa',result);


//filter

//reduce