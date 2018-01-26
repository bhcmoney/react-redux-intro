import { combineReducers } from "redux";
import LibraryReducer from './LibraryReducer';
import selectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: selectionReducer
})