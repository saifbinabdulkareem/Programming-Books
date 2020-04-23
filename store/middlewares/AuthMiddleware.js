import { AuthAction } from '../actions';
import { Alert } from "react-native"
import { ApiCaller, NavigationService, Colors, Fonts } from '../../config';
import AsyncStorage from "@react-native-community/async-storage";
import { Toast } from 'native-base';
import Store from '..';

export default class AuthMiddleware {

    static SignUp(payload) {
        const { navigate } = NavigationService
        // payload["user_type"] = "user";
        // payload["current_time"] = (new Date().getTime()).toString();
        return (dispatch) => {
            // dispatch(AuthAction.Signup())
            // ApiCaller.Post("users", payload).then((res) => {
            //     if (res.status == 200) {
            //         Toast.show({ textStyle: { textAlign: "center", fontFamily: Fonts.Montserrat_Medium }, text: res["data"]["data"]["message"], type: "success", duration: 3000 })
            //         dispatch(AuthAction.SignupSuccess(res["data"]["data"]))
            //         navigate("SignIn")
            //         console.log('%c{res}', "color: green", ' => ', res)
            //     } else {
            //         Toast.show({ textStyle: { textAlign: "center", fontFamily: Fonts.Montserrat_Medium }, text: res["data"]["error"]["message"], type: "danger", duration: 3000 })
            //         dispatch(AuthAction.SignupFailure(res["data"]["error"]))
            //         console.log('%c{err}', "color: red", res)
            //     }
            // }).catch((err) => {
            //     console.log(err)
            //     dispatch(AuthAction.SignupFailure(err))
            // })
        }
    }

    static SignIn(payload) {
        const { navigate, replace } = NavigationService
        return (dispatch) => {
           
        }
    }

    static StateUser() {
        // AsyncStorage.removeItem("user")
        const { navigate, replace } = NavigationService
        return (dispatch) => {
            setTimeout(() => {
                AsyncStorage.getItem("user", (err, res) => {
                    console.log(err, res)
                    if (res) {
                        dispatch(AuthAction.StateUserSuccess(JSON.parse(res)))
                    }
                    else {
                        navigate("WalkThrough")
                        dispatch(AuthAction.StateUserFailure())
                    }
                })
            }, 2000)
        }
    }

    static SignOut() {
        const { navigate, reset_0 } = NavigationService
        // return (dispatch) => {
        //     dispatch(AuthAction.Signout())
        AsyncStorage.removeItem("user")
        reset_0("SignIn")
        // }
    }

}