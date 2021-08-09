import {combineReducers} from 'redux';

const initialState = {
  name: 'Robot Ijo',
};
const initialRegisterReducer = {
  form:{
    fullName:'',
    email:'',
    password:'',
  },
  title: 'Wiro Sableng guyu mukidi',
  desc: 'Buku seri terbaru guyon mukidi',
};

const initialLoginRegister = {
  info: 'Tolong masukan Email sebagai username',
  isLogin: true,
};

const LoginReducer = (state = initialLoginRegister, action) => {
  return state;
};

const RegisterReducer = (state = initialRegisterReducer, action) => {
  if(action.type==='SET_TITLE'){
    return {
      ...state,
      title: 'Register Ganti Title'
    }
  }
  if (action.type==='SET_FORM'){
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]:action.inputValue,
      }
    }
  }
  return state;
};

const reducer = combineReducers({
  LoginReducer,
  RegisterReducer,
});
// const reducer = (state = initialState, action) => {
//   return state;
// };

export default reducer;
