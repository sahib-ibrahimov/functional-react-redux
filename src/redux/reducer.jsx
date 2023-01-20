const initStore = {
  msg: ''
};

export default function reducer(store=initStore, action) {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      const temp = {...store};
      temp.msg = action.payload;
      return temp;
    }
    case 'DEL_MESSAGE': {
      const temp = {...store};
      temp.msg = '';
      return temp;
    }
    default: return store;
  }
}
