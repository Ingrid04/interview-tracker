const initialState = {
    username: "",
    email: ""
}
export default(state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LOGIN_FORM':
            return action.formData
        default:
            return state;
    }

}