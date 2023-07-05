export class UserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  login: string;
  avatar: string;
  level: number;
  expirience: number;
  isAdmin: boolean;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    login?: string,
    avatar?: string,
    level?: number,
    expirience?: number,
    isAdmin?: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;

    this.login = login || new Date().toString();
    this.avatar =
      avatar || "https://cdn-icons-png.flaticon.com/512/3607/3607444.png";
    this.level = level || 1;
    this.expirience = expirience || 0;
    this.isAdmin = isAdmin || false;
  }
}
