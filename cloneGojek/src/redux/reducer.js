import {combineReducers} from 'redux';

const initialState = {
  name: 'Robot Ijo',
};
const initialRegisterReducer = {
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
