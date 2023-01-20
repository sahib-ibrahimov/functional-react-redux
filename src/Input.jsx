import { PureComponent } from 'react';
import store from './redux/store';
import { addAction } from './redux/actions';

export default class Input extends PureComponent {
  state = {
    value: ''
  }
  inputChange = (e) => {
    this.setState({value: e.target.value});
  }
  buttonClick = () => {
    store.dispatch( addAction(this.state.value) );
  }
  render() {
    return (
      <>
        <input onChange={this.inputChange} />
        <button onClick={this.buttonClick}>save</button>
      </>
    );
  }
}
