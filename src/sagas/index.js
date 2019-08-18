import {all} from 'redux-saga/effects';
import { contactListWatcherSaga, addContactWatcherSaga, editContactWatcherSaga, getContactWatcherSaga, deleteContactWatcherSaga } from './contact';

export default function* rootSaga() {
	yield all([
		contactListWatcherSaga(),
		addContactWatcherSaga(),
		editContactWatcherSaga(),
		getContactWatcherSaga(),
		deleteContactWatcherSaga()
	]);
}