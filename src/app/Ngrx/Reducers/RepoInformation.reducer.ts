import { Action, createReducer, on } from '@ngrx/store';
import { IRepoInformation } from 'src/app/interfaces/RepoInformation.interface';
import { setRepoUser } from './../Actions/RepoInformation.actions';

const initialState: IRepoInformation = {
  name: null,
  description: null,
  git_commits_url: null,
};

const _RepoInformationReducer = createReducer(
  initialState,
  on(setRepoUser, (state, { RepoGithub }) => ({ ...state, ...RepoGithub }))
);

export const RepoInformationReducer = (
  state: IRepoInformation,
  action: Action
) => _RepoInformationReducer(state, action);
