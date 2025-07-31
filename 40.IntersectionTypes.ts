type PersonIntersection = {
  name: string;
  age: number;
};

type EmployeeIntersection = {
  EmployeeIntersectionId: number;
  department: string;
};

// Intersection type that includes all properties from PersonIntersection and EmployeeIntersection
type StaffIntersection = PersonIntersection & EmployeeIntersection;

const StaffIntersectionMember: StaffIntersection = {
  name: "Manoj",
  age: 25,
  EmployeeIntersectionId: 1001,
  department: "Engineering",
};

console.log(StaffIntersectionMember);
