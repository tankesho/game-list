export class User {
  id!: string;
  username: string;
  email?: string;
  password: string;
  isAdmin: boolean;
  constructor(username: string, password: string, isAdmin: boolean = false) {
    this.id = String(Math.round(Math.random() * 1000));
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    return u;
  }

  public static toWS(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    return u;
  }
}
