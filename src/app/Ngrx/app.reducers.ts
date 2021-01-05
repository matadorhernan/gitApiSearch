import { ActionReducerMap } from '@ngrx/store';
import { UserInformation } from '../Models/User.model';
import { GithubInformationReducer } from './GithubInformation/GithubInformation.reducer';

export interface AppState {
  GI: UserInformation;
}

export const appReducers: ActionReducerMap<AppState> = {
  GI: GithubInformationReducer,
};
