import { createAction, props } from '@ngrx/store';

export const setUserName = createAction(
  '[Github Information] userName Setted',
  props<{ userName: string }>()
);
