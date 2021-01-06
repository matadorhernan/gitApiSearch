export class RepoInformation {
    
  static FromGithub(
    name: string,
    description: string,
    git_commits_url: string
  ) {
    return new RepoInformation(name, description, git_commits_url);
  }
  constructor(
    public name: string,
    public description: string,
    public git_commits_url: string
  ) {}
}
