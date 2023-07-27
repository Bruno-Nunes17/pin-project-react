import * as types from './types'

export function reducer(state, action) {
  switch (action.type) {
    case types.openModalSavePinType:
      return {
        ...state,
        type: types.openModalSavePinType,
        mode: "savePin",
        activePinId: action.payload,
      };
      case types.openModalCreateFolderType:
      return {
        ...state,
        type: types.openModalCreateFolderType,
        mode: "createFolder",
      };
    case types.closeModalsType:
      return {
        ...state,
        type: types.closeModalsType,
        mode: null,
      };
      case types.fetchFoldersInitType:
        return {
          ...state,
          type: types.fetchFoldersInitType
        };
      case types.fetchFoldersSuccessType:
      return {
        ...state,
        type: types.fetchFoldersSuccessType,
        folders: action.payload
      };
      case types.saveFoldersSuccessType:
        return{
          ...state,
          type: types.saveFoldersSuccessType,
          folders: [
            ...state.folders, action.payload
          ]
        }
      case types.savePinInFoldersSuccessType:
        return{
          ...state,
          type: types.savePinInFoldersSuccessType,
          folders:  action.payload
        }
      case types.fetchPinsSuccessType:
        return{
          ...state,
          type: types.fetchPinsSuccessType,
          pins: action.payload
        }
        case types.fetchPinsBySearchSuccessType:
        return{
          ...state,
          type: types.fetchPinsBySearchSuccessType,
          pins: action.payload
        }
        case types.fetchPinsByIdSuccessType:
          return{
            ...state,
            type: types.fetchPinsByIdSuccessType,
            savedPins: action.payload
          }
        case types.openPastaPageType:
          return{
            ...state,
            type: types.openPastaPageType,
            activeFolderId: action.payload,
          }
          case types.openPastaSearchType:
          return{
            ...state,
            type: types.openPastaSearchType,
            query: action.payload,
          }
          case types.paginationSuccessType:
            return{
              ...state,
              type: types.paginationSuccessType,
              currentPage: action.payload,
            }
          case types.removePinSuccessType:
            return{
              ...state,
              type: types.removePinSuccessType,
              folders:  action.payload
            }  
          case types.removeFolderSuccessType:
            return{
              ...state,
              type: types.removeFolderSuccessType,
              folders: action.payload
            }
    default:
      return {...state,
      type: action.type};
  }
}
