import {
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNOUT,
    STATEUSER_SUCCESS,
    STATEUSER_FAILURE,
    REQUEST_PASSWORD_RESET,
    REQUEST_PASSWORD_RESET_SUCCESS,
    REQUEST_PASSWORD_RESET_FAILURE,
    VERIFYING,
    VERIFICATION_SENT,
    RESETING_PASSWORD,
    RESTORED_PASSWORD_SUCCESS,
    RESTORED_PASSWORD_FAILURE,
    LOADER_TRUE,
    LOADER_FALSE
} from '../constants'


export default class AuthAction {

    static Signup() {
        return {
            type: SIGNUP,
        }
    }

    static SignupSuccess(payload) {
        return {
            type: SIGNUP_SUCCESS,
            payload
        }
    }

    static SignupFailure(error) {
        return {
            type: SIGNUP_FAILURE,
            error
        }
    }

    static Signin() {
        return {
            type: SIGNIN,
        }
    }

    static SigninSuccess(payload) {
        return {
            type: SIGNIN_SUCCESS,
            payload
        }
    }

    static SigninFailure(error) {
        return {
            type: SIGNIN_FAILURE,
            error
        }
    }

    static StateUserSuccess(payload) {
        return {
            type: STATEUSER_SUCCESS,
            payload
        }
    }

    static StateUserFailure() {
        return {
            type: STATEUSER_FAILURE,
        }
    }

    static Signout() {
        return {
            type: SIGNOUT,
        }
    }

    static LoaderTrue() {
        return {
            type: LOADER_TRUE
        }
    }

    static LoaderFalse() {
        return {
            type: LOADER_FALSE
        }
    }

    static RequestPasswordReset() {
        return {
            type: REQUEST_PASSWORD_RESET
        }
    }

    static RequestPasswordResetSuccess(payload) {
        return {
            type: REQUEST_PASSWORD_RESET_SUCCESS,
            payload
        }
    }

    static RequestPasswordResetFailure() {
        return {
            type: REQUEST_PASSWORD_RESET_FAILURE
        }
    }

    static Verifing() {
        return {
            type: VERIFYING
        }
    }

    static VerifyCodeSent() {
        return {
            type: VERIFICATION_SENT,
        }
    }

    static ResetingPassword() {
        return {
            type: RESETING_PASSWORD
        }
    }

    static RestoredPasswordSuccess() {
        return {
            type: RESTORED_PASSWORD_SUCCESS,
        }
    }

    static RestoredPasswordFailure() {
        return {
            type: RESTORED_PASSWORD_FAILURE,
        }
    }
}