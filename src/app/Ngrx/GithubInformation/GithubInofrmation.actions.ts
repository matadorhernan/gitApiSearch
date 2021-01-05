import { createAction, props } from '@ngrx/store';
import { UserInformation } from 'src/app/Models/User.model';

export const setUserName = createAction(
  '[Github Information] userName Setted',
  props<{ UserGithub: UserInformation }>()
);
