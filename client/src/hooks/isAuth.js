import {useSelector} from "react-redux";

function useIsAuth() {
    const {email,token,id} = useSelector(state => state.user)
    return ({
        isAuth: !!email,
        email: email,
        id: id,
        token: token
    });
}

export default useIsAuth;