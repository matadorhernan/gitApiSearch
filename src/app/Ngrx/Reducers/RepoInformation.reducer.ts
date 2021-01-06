import { Action, createReducer, on } from '@ngrx/store';
import { IRepoInformation } from 'src/app/interfaces/RepoInformation.interface';
import { RepoInformation } from 'src/app/Models/Repo.model';
import {
  setRepoUser,
  unsetRepoUser,
} from './../Actions/RepoInformation.actions';

const initialState: RepoInformation[] = [];

const _RepoInformationReducer = createReducer(
  initialState,
  on(setRepoUser, (state, { RepoGithub }) => [...state, ...RepoGithub]),
  on(unsetRepoUser, (state) => (state = []))
);

export const RepoInformationReducer = (state, action) =>
  _RepoInformationReducer(state, action);
