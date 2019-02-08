import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'value':
      return {
        ...state,
        value: action.payload,
      };
    case 'isBar':
      return {
        ...state,
        isBar: action.payload,
      };
    default:
      return state;
  }
}

const Input = () => {
  const [state, dispatch] = useReducer(reducer, { value: '', isBar: 'no' });

  useEffect(() => {
    let mounted = true;
    Promise.resolve().then(() => {
      if (mounted) {
        dispatch({
          type: 'isBar',
          payload: state.value === 'bar' ? 'yes' : 'no',
        });
      }
    });
    return () => {
      mounted = false;
    };
  }, [state.value]);

  const onChange = e => {
    dispatch({ type: 'value', payload: e.target.value });
  };

  return (
    <div>
      <input data-testid="foo" value={state.value} onChange={onChange} />
      <div data-testid="check">isBar: {state.isBar}</div>
    </div>
  );
};

export default Input;
