import { UserActionTypes } from './user.reducer';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})