export class User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    updatedAt: Date;
    albums: [{ title: string, author: string, genre: string }];
  }

  