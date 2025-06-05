export type User = {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  hair: {
    color: string;
  };
  address: {
    postalCode: string;
  };
  company: {
    department: string;
  };
};

export type ApiResponse = {
  users: User[];
};
