import { PureComponent } from 'react';
import store from './redux/store';
import { delAction } from './redux/actions';

export default class Message extends PureComponent {
  state = {
    msg: ''
  }
  subFunc = () => {
    const globalState = store.getState();
    this.setState({msg: globalState.msg});
  }
  componentDidMount() {
    store.subscribe(this.subFunc)
  }
  del = () => {
    store.dispatch( delAction() );
  }
  render() {
    return (
      <>
        <p>
          {this.state.msg}
          <button onClick={this.del}>X</button>
        </p>
      </>
    );
  }
}
