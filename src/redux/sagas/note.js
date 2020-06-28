import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actionTypes";
import { populateAllNotes, populateNoteInfo } from "../actions";
import {
  pullAllNotes,
  pullNoteById,
  saveNewNote,
  modifyNote,
  deleteNote
} from "../../apis";

function* getAllNotes() {
  try {
    const allNotes = yield call(pullAllNotes);
    yield put(populateAllNotes(allNotes));
  } catch (err) {
    throw new Error(err);
  }
}

function* getNoteById(action) {
  try {
    const note = yield call(pullNoteById, action.payload.noteId);
    yield put(populateNoteInfo(note));
  } catch (err) {
    throw new Error(err);
  }
}

function* postNewNote(action) {
  try {
    yield call(saveNewNote, action.payload.note);
    const allNotes = yield call(pullAllNotes);
    yield put(populateAllNotes(allNotes));
  } catch (err) {
    throw new Error(err);
  }
}

function* putNote(action) {
  try {
    yield call(modifyNote, action.payload.note);
    const allNotes = yield call(pullAllNotes);
    yield put(populateAllNotes(allNotes));
  } catch (err) {
    throw new Error(err);
  }
}

function* removeNoteById(action) {
  try {
    yield call(deleteNote, action.payload.noteId);
    const allNotes = yield call(pullAllNotes);
    yield put(populateAllNotes(allNotes));
  } catch (err) {
    throw new Error(err);
  }
}

function* noteSagas() {
  yield takeLatest(actionTypes.GET_ALL_NOTES, getAllNotes);
  yield takeLatest(actionTypes.SUBMIT_NEW_NOTE, postNewNote);
  yield takeLatest(actionTypes.GET_NOTE_INFO, getNoteById);
  yield takeLatest(actionTypes.UPDATE_NOTE, putNote);
  yield takeLatest(actionTypes.DELETE_NOTE, removeNoteById);
}

export default noteSagas;
