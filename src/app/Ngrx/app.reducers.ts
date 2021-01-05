import { ActionReducerMap } from '@ngrx/store';
import * as FromGithubInformation from './GithubInformation/GithubInformation.reducer';

export interface AppState {
  GI: FromGithubInformation.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  GI: FromGithubInformation.GithubInformationReducer,
};
