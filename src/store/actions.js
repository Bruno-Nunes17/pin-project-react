import * as types from "./types";
import * as pinServices from "../services/PinService";

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export const openModalSavePinAction = (id) => ({
  type: types.openModalSavePinType,
  payload: id,
});
export const openModalCreateFolderAction = () => ({
  type: types.openModalCreateFolderType,
});

export const closeModalsAction = () => ({
  type: types.closeModalsType,
});

//----

export const fetchFoldersInitAction = () => ({
  type: types.fetchFoldersInitType,
});

export const fetchFoldersSuccessAction = (folders) => ({
  type: types.fetchFoldersSuccessType,
  payload: folders,
});

export const fetchFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction());
  const folders = await pinServices.getFolders();
  dispatch(fetchFoldersSuccessAction(folders));
};

//----

export const saveFoldersInitAction = () => ({
  type: types.saveFoldersInitType,
});

export const saveFoldersSuccessAction = (folder) => ({
  type: types.saveFoldersSuccessType,
  payload: folder,
});

export const saveFoldersAction = async (dispatch, folderName, pinId) => {
  dispatch(saveFoldersInitAction());
  await sleep(1000);
  const newFolder = await pinServices.saveFolder(folderName);
  const folder = await pinServices.savePinInFolder(newFolder.id, pinId)
  dispatch(saveFoldersSuccessAction(folder));
};

//----

export const savePinInFolderInitAction = () => ({
  type: types.savePinInFoldersInitType,
});

export const savePinInFolderSuccessAction = (folders) => ({
  type: types.savePinInFoldersSuccessType,
  payload: folders,
});

export const savePinInFolderAction = async (dispatch, pinId, folderId, folderName) => {
  dispatch(savePinInFolderInitAction());
  await sleep(1000);
  await pinServices.savePinInFolder(folderId, pinId, folderName);
  const folders = await pinServices.getFolders();
  dispatch(savePinInFolderSuccessAction(folders));
};

//----

export const fetchPinsInitAction = () => ({
  type: types.fetchPinsInitType,
});

export const fetchPinsSuccessAction = (pinsData) => ({
  type: types.fetchPinsSuccessType,
  payload: pinsData,
});

export const fetchPinsAction = async (dispatch, page) => {
  dispatch(fetchPinsInitAction());
  const pinsData = await pinServices.getPins(page);
  dispatch(fetchPinsSuccessAction(pinsData));
};

//----

export const openPastaPageAction = (id) => ({
  type: types.openPastaPageType,
  payload: id,
});

//----

export const fetchPinsByIdInitAction = () => ({
  type: types.fetchPinsByIdInitType,
});

export const fetchPinsByIdSuccessAction = (pinsData) => ({
  type: types.fetchPinsByIdSuccessType,
  payload: pinsData,
});

export const fetchPinsByIdAction = async (dispatch, pinId) => {
  dispatch(fetchPinsByIdInitAction());
  const pinsData = await pinServices.getPinsById(pinId);
  dispatch(fetchPinsByIdSuccessAction(pinsData));
};

//----

export const paginationInitAction = () => ({
  type: types.paginationInitType,
});

export const paginationSuccessAction = (page) => ({
  type: types.paginationSuccessType,
  payload: page,
});

export const paginationAction = async (dispatch, currentPage) => {
  dispatch(paginationInitAction());
  console.log(currentPage);
  const page = await pinServices.page(currentPage)
  dispatch(paginationSuccessAction(page));
};
