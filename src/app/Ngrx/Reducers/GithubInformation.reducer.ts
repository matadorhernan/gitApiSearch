import { Action, createReducer, on } from '@ngrx/store';
import { IUserInformation } from 'src/app/interfaces/UserInformation.interface';
import { setUserName } from './../Actions/GithubInofrmation.actions';

const initialState: IUserInformation = {
  login: null,
  repos_url: null,
  avatar_url: null,
};

const _GithubInformationReducer = createReducer(
  initialState,
  on(setUserName, (state, { UserGithub }) => ({ ...state, ...UserGithub }))
);

export const GithubInformationReducer = (
  state: IUserInformation,
  action: Action
) => _GithubInformationReducer(state, action);
