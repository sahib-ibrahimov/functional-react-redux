import { connect } from 'react-redux';
import { delAction } from './redux/actions';

function storeToProps(store) {
  return {
    msg: store.msg
  }
}

function dispatchToProps(dispatch) {
  return {
    del: () => dispatch( delAction() )
  }
}

const connector = connect(storeToProps, dispatchToProps);

function Message({del, msg}) {
  return (
    <>
      <p>
        {msg}
        <button onClick={del}>X</button>
      </p>
    </>
  );
}

export default connector(Message);
