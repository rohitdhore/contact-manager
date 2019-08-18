export function addContactWatcher(data) {
  return {
    type: 'ADD_CONTACT_WATCHER',
    payload: data
  };
}

export function contactListWatcher(data) {
  return {
    type: 'CONTACT_LIST_WATCHER',
    payload: data
  };
}

export function updateListWatcher(data) {
  return {
    type: 'UPDATE_LIST_WATCHER',
    payload: data
  };
}

export function contactEditWatcher(data, id) {
  return {
    type: 'CONTACT_EDIT_WATCHER',
    payload: data,
    id
  };
}

export function getContactWatcher(data) {
  return {
    type: 'GET_CONTACT_WATCHER',
    payload: data
  };
}
