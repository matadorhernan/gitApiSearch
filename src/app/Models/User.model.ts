import { IUserInformation } from '../interfaces/UserInformatio.interface';

export class UserInformation implements IUserInformation {
  /**
   *
   */

  constructor(
    public avatar_url: string,
    public login: string,
    public repos_url: string,
    public html_url: string
  ) {}
}
