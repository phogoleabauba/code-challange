import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import { RootState } from '../app/store/store';
import { User } from '../models/User';
import { getUsers } from '../services/users-service';

export interface UsersState {
    users: User[];
    loading: boolean;
    errors: string;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    errors: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
    },
});

export const { setUsers, setLoading, setErrors } = userSlice.actions;

export default userSlice.reducer;

export const usersSelector = (state: { userStore: UsersState }) => state.userStore;

// Actions
export const getUsersAction = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        try {

            if (getState().userStore.users.length === 0) {
                const response = await getUsers();
                dispatch(setLoading(false));
                dispatch(setUsers(response?.data?.items));
            }
        } catch (e: any) {
            dispatch(setErrors(e.message));
            dispatch(setLoading(false));
        }
    }
}

export const updateUsersAction = (updatedUser: User): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        try {
            let users = getState().userStore.users;
            const updatedUsers = users.map((user: User) => {
                if (user.display_name === updatedUser.display_name) {
                    return updatedUser;
                } else {
                    return user;
                }
            })
            dispatch(setLoading(false));
            dispatch(setUsers(updatedUsers));
        } catch (e: any) {
            dispatch(setErrors(e.message));
            dispatch(setLoading(false));
        }
    }
}


