import { Action, createReducer, on } from '@ngrx/store';
import {setUserName} from './GithubInofrmation.actions';

export interface State {
  userName:string;
}

const initialState: State = {
  userName: null,
};

 const _GithubInformationReducer = createReducer(
  initialState,
  on(setUserName, (state, { userName }) => ({ ...state, userName }))
);

export const GithubInformationReducer=(state: State, action: Action)=> _GithubInformationReducer(state, action);



