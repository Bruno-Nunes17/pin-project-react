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
  console.log(folders);
  if (folderIndex !== -1) {
    folders[folderIndex].pins.push(pinId);
  }
  await saveFolders(folders);

  return { ...folders[folderIndex] };
};

export const getPins = async () => {
  const fotos = await client.photos.curated({ page: 1, per_page: 12 });
  const pins = fotos.photos.map((foto) => ({
    id: foto.id,
    title: foto.alt,
    imagen: foto.src.portrait,
    total: 0,
  }));
  return pins;
};

export const getPinsById = async (pinId, totalPins) => {
  const fotos = await client.photos.show({ id: pinId });
  // const pins = fotos.map((foto) => ({
  //   id: foto.id,
  //   title: foto.alt,
  //   imagen: foto.src.portrait,
  // }));
  return {
    id: fotos.id,
    title: fotos.alt,
    imagen: fotos.src.portrait,
  };
};
