import { IUserInformation } from '../interfaces/UserInformation.interface';

export class UserInformation implements IUserInformation {
  /**
   *
   */

  static FromGithub(avatar_url: string, login: string, repos_url: string) {
    return new UserInformation(avatar_url, login, repos_url);
  }

  constructor(
    public avatar_url: string,
    public login: string,
    public repos_url: string
  ) {}
}
