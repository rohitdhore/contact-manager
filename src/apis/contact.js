import  { storedList, saveToStorage }  from '../utils/localstorage';
export function contactListApi() {
	const contacts = storedList('contacts') || [];
	return contacts;
}

export function addContactApi(payload) {
	const contacts = storedList('contacts') || [];
	contacts.push(payload);
	saveToStorage('contacts', contacts);
	return contacts;
}

export function editContactApi(action) {
	return []
}

export function deleteContactApi(action) {
	return []
}

export function getContactApi(payload) {
	return []
}
