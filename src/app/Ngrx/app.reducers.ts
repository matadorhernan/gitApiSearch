import { ActionReducerMap } from '@ngrx/store';
import { RepoInformation } from '../Models/Repo.model';
import { UserInformation } from '../Models/User.model';
import { GithubInformationReducer } from './Reducers/GithubInformation.reducer';
import { RepoInformationReducer } from './Reducers/RepoInformation.reducer';

export interface AppState {
  GI: UserInformation;
  RI: RepoInformation[];
}

export const appReducers: ActionReducerMap<AppState> = {
  GI: GithubInformationReducer,
  RI: RepoInformationReducer,
};
