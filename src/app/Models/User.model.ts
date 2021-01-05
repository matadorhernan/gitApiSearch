import { IUserInformation } from '../interfaces/UserInformatio.interface';

export class UserInformation implements IUserInformation {
  /**
   *
   */

  static FromGithub({ avatar_url, login, repos_url }) {
    return new UserInformation(avatar_url, login, repos_url);
  }

  constructor(
    public avatar_url: string,
    public login: string,
    public repos_url: string
  ) {}
}
