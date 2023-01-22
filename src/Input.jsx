import { useState } from 'react';
import { connect } from 'react-redux';
import { addAction } from './redux/actions';

function dispatchToProps(dispatch) {
  return {
    add: (data) => dispatch( addAction(data) )
  }
}

const connector = connect(null, dispatchToProps);

function Input({add}) {
  const [value, setValue] = useState('');
  const inputChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <input onChange={inputChange} />
      <button onClick={
        () => {
          add(value);
        }
      }>
        save
      </button>
    </>
  );
}

export default connector(Input);
