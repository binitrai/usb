const INITIAL_STATE = {
    loginName: "Saquib"
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_LOGIN_DATA':
            return {
                ...state
            }
        default:
            return state
    }
}

export default loginReducer;