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
} from '../constants';

const initialState = {
    user: {},
    error: {},
    loader: false,
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {

        case SIGNUP:
            state = {
                user: {},
                error: {},
                loader: true
            }
            break;

        case SIGNUP_SUCCESS:
            state = {
                user: action.payload,
                error: {},
                loader: false
            }
            break;

        case SIGNUP_FAILURE:
            state = {
                user: {},
                error: action.error,
                loader: false
            }
            break;

        case SIGNIN:
            state = {
                user: {},
                error: {},
                loader: true
            }
            break;

        case SIGNIN_SUCCESS:
            state = {
                user: action.payload,
                error: {},
                loader: false
            }
            break;

        case SIGNIN_FAILURE:
            state = {
                user: {},
                error: action.error,
                loader: false
            }
            break;

        case REQUEST_PASSWORD_RESET:
            state = {
                user: {},
                error: {},
                loader: true
            }
            break;

        case REQUEST_PASSWORD_RESET_SUCCESS:
            state = {
                user: action.payload,
                error: {},
                loader: false
            }
            break;

        case REQUEST_PASSWORD_RESET_FAILURE:
            state = {
                user: {},
                error: {},
                loader: false
            }
            break;

        case STATEUSER_SUCCESS:
            state = {
                user: action.payload,
                error: {},
                loader: false
            }
            break;

        case STATEUSER_FAILURE:
            state = {
                user: {},
                error: {},
                loader: false
            }
            break;

        case SIGNOUT:
            state = {
                user: {},
                error: {},
                loader: false
            }
            break;

        case VERIFYING:
            state = {
                ...state,
                loader: true
            }
            break;

        case VERIFICATION_SENT:
            state = {
                ...state,
                loader: false
            }
            break;

        case RESETING_PASSWORD:
            state = {
                ...state,
                loader: true
            }
            break;

        case RESTORED_PASSWORD_SUCCESS:
            state = {
                user: {},
                error: {},
                loader: false
            }
            break;

        case RESTORED_PASSWORD_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case LOADER_TRUE:
            state = {
                ...state,
                loader: true
            }
            break;

        case LOADER_FALSE:
            state = {
                ...state,
                loader: false
            }
            break;

        default:
            break;
    }

    return state;
}