const state = {
    users: [],
    loading: false,
    errors: ""
}

export const testUseAppSelector = (f: any) => f(state);