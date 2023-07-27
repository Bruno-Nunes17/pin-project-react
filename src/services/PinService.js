import { createClient } from "pexels";

const client = createClient(
  "MXuO49I2G4c0ov7ZUdHGFdU4TaQZaTAvW8pwIUFsKDsgocifftGuazsW"
);

const generateId = () => {
  return `${Math.floor(Math.random() * 100_000).toString(16)}-${Math.floor(
    Math.random() * 100_000
  ).toString(16)}`;
};

const saveFolders = async (folders) => {
  localStorage.setItem("folders", JSON.stringify(folders));
};

export const getFolders = async () => {
  return JSON.parse(localStorage.getItem("folders")) || [];
};

export const saveFolder = async (folderName) => {
  const folders = await getFolders();
  const newFolder = {
    id: generateId(),
    name: folderName,
    pins: [],
  };
  folders.push(newFolder);
  await saveFolders(folders);
  return newFolder;
};

export const savePinInFolder = async (folderId, pinId) => {
  const folders = await getFolders();
  const folderIndex = folders.findIndex(function (folder) {
    return folder.id === folderId;
  });
  if (folderIndex !== -1) {
    folders[folderIndex].pins.push(pinId);
  }
  await saveFolders(folders);

  return { ...folders[folderIndex] };
};
export const removePin = async (folderId, pinId) => {
  const folders = await getFolders();
  const folderIndex = folders.findIndex(function (folder) {
    return folder.id === folderId;
  });
  const indexToRemove = folders[folderIndex].pins.indexOf(pinId);
  if (folderIndex !== -1) {
    folders[folderIndex].pins.splice(indexToRemove, 1);
  }
  await saveFolders(folders);

  return { ...folders[folderIndex] };
};

export const removeFolder = async (folderId) => {
  const folders = await getFolders();
  const folderIndex = folders.findIndex(function (folder) {
    return folder.id === folderId;
  });
  if (folderIndex !== -1) {
    folders.splice(folderIndex, 1);
  }
  await saveFolders(folders);

  return folders;
};

export const page = async (currentPage) =>{
  const page = currentPage;
  return page;
}

export const getPins = async (page) => {
  const fotos = await client.photos.curated({
     page: page, 
     per_page: 16 
    });
  const pins = fotos.photos.map((foto) => ({
    id: foto.id,
    title: foto.alt,
    imagen: foto.src.portrait,
    total: 0,
  }));
  return pins;
};

export const getPinsById = async (pinId) => {
  const pins = []
  for(let i = 0; i < pinId.length; i++){
  const fotos = await client.photos.show({ id: pinId[i] });
  pins.push(fotos)
  }
  const fotos = pins.map((foto) => ({
    id: foto.id,
    title: foto.alt,
    imagen: foto.src.portrait,
  }));
  return fotos;
};
