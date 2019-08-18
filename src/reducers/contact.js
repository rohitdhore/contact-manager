import { handleActions } from 'redux-actions';

export default handleActions({
	UPDATE_LIST_WATCHER: (state, { payload }) =>
		Object.assign({}, state, {
			list: payload
		}),
	CONTACT_LIST_WATCHER: (state, { payload }) =>
		Object.assign({}, state, {
			list: payload
		}),
}, {
	list: []
});
