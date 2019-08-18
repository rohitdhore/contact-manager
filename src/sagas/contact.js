import { contactListWatcher, updateListWatcher } from '../actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { contactListApi, addContactApi, editContactApi, deleteContactApi, getContactApi } from '../apis/contact';

export function* contactListEffectSaga(action) {
    // data is obtained from browser localstorage
    try {
	    let data = yield call(contactListApi);
	    yield put(updateListWatcher(data));
	} catch (e) {
	    console.log(e);
	}    
}

export function* addContactEffectSaga(action) {
	// data is obtained from browser localstorage
    try {
	    let data  = yield call(addContactApi, action.payload);
	    yield put(contactListWatcher(data));
	    action.resolve();
	} catch (e) {
	    console.log(e);
	    action.reject(e);
	}    
}

export function* editContactEffectSaga(action) {
    // data is updated in localstorage and obtained a fresh copy
    try {
	    let { data } = yield call(editContactApi, action);
	    yield put(contactListWatcher(data));
	} catch (e) {
	    console.log(e);
	}    
}

export function* getContactEffectSaga(action) {
    // data is obtained after axios call is resolved
    try {
	    let { data } = yield call(getContactApi, action.payload);
	} catch (e) {
	    console.log(e);
	}    
}

export function* deleteContactEffectSaga(action) {
	// data is obtained after axios call is resolved
	try {
		let data  = yield call(deleteContactApi, action.payload.index);
		yield put(contactListWatcher(data));
		action.resolve();
	} catch (e) {
		console.log(e);
		action.reject(e);
	}
}

export function* contactListWatcherSaga() {
  yield takeLatest('CONTACT_LIST_WATCHER', contactListEffectSaga);
}

export function* addContactWatcherSaga() {
  yield takeLatest('ADD_CONTACT_WATCHER', addContactEffectSaga);
}

export function* editContactWatcherSaga() {
  yield takeLatest('EDIT_CONTACT_WATCHER', editContactEffectSaga);
}

export function* getContactWatcherSaga() {
  yield takeLatest('GET_CONTACT_WATCHER', getContactEffectSaga);
}

export function* deleteContactWatcherSaga() {
	yield takeLatest('DELETE_CONTACT_WATCHER', deleteContactEffectSaga);
}