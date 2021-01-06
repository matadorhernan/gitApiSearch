import { createAction, props } from '@ngrx/store';
import { RepoInformation } from 'src/app/Models/Repo.model';

export const setRepoUser = createAction(
  '[Repo Information] ReposUser Setted',
  props<{ RepoGithub: RepoInformation[] }>()
);
