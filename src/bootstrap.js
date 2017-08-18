import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Root from './component/root.component.js';
import createStore from './configureStore.js';
const store = createStore();

ReactDOM.render(<Provider store={store}>
	<Root/>
</Provider>,
document.getElementById('root'));