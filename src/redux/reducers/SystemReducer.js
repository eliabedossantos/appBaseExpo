const INITIAL_STATE = {
  loading: false,
};

const SystemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SYSTEM_INICIAL_STATE':
      return {...state, ...INITIAL_STATE};
    case 'SYSTEM_MODIFICA_CAMPO':
      let MSGS_MODIFICA_CAMPO = {...state};
      MSGS_MODIFICA_CAMPO[action.payload.campo] = action.payload.valor;
      return MSGS_MODIFICA_CAMPO;
    default:
      return state;
  }
};

export default SystemReducer;
