<<<<<<< HEAD:client/src/pages/Vault/VaultDashboard.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import './VaultDashboard.scss';
import Navbar from "../../components/Navbar/Navbar";
import FolderCreate from '../../components/Vault/FolderCreate/FolderCreate';
import FileCreate from '../../components/Vault/FileCreate/FileCreate';
import { getFolders, getFoldershome, getFileshome, getFiles } from '../../services/AuthService';
import FileList from '../../components/Vault/FileList/FileList'
import FolderList from '../../components/Vault/FolderList/FolderList'
import { UserContext } from '../../App';
=======
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./VaultDashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import FolderCreate from "../../components/Vault/FolderCreate/FolderCreate";
import FileCreate from "../../components/Vault/FileCreate/FileCreate";
import {
  getFolders,
  getFoldershome,
  getFileshome,
  getFiles,
} from "../../services/AuthService";
import FileList from "../../components/Vault/FileList/FileList";
import FolderList from "../../components/Vault/FolderList/FolderList";
import { UserContext } from "../../App";
>>>>>>> host_test_2:server/client/src/pages/Vault/VaultDashboard.js

const VaultDashboard = () => {
  const { state, dispatch } = useContext(UserContext);

  //get the mother folder
  const { folderId } = useParams();
  const [currentFolder, setCurrentFolder] = useState(folderId || "home");

  useEffect(() => setCurrentFolder(folderId), [folderId]);

  //popup
  const [popup, setpopup] = useState(false);
  const [popup1, setpopup1] = useState(false);

  //Folder
  const [updatefolders, setupdatefolders] = useState(false);
  const [folders, setFolders] = useState([]);

<<<<<<< HEAD:client/src/pages/Vault/VaultDashboard.js

  useEffect(() => {
    currentFolder !== "home" ?
      GetFolders()
      :
      GetFoldersHome();
  }, [popup, updatefolders, currentFolder, state]);
=======
  useEffect(() => {
    currentFolder !== "home " ? GetFolders() : GetFoldersHome();
  }, []);
  useEffect(() => {
    currentFolder !== "home" ? GetFolders() : GetFoldersHome();
  }, [popup]);
  useEffect(() => {
    currentFolder !== "home" ? GetFolders() : GetFoldersHome();
  }, [updatefolders]);
  useEffect(() => {
    currentFolder !== "home" ? GetFolders() : GetFoldersHome();
  }, [currentFolder]);
>>>>>>> host_test_2:server/client/src/pages/Vault/VaultDashboard.js

  const GetFolders = async () => {

    console.log(state._id);
    try {
      const response = await getFolders(currentFolder, state._id);
      console.log(response.data.data);
      setFolders(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const GetFoldersHome = async () => {
    try {
      const response = await getFoldershome(state._id);
      console.log(response.data.data);
      setFolders(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  //File
  const [files, setFiles] = useState([]);

  useEffect(() => {
<<<<<<< HEAD:client/src/pages/Vault/VaultDashboard.js
    currentFolder !== "home " ?
      GetFiles()
      :
      GetFilesHome();
  }, [popup1, updatefolders, currentFolder, state]);

  useEffect(() => {
    currentFolder !== 'home' ?
      GetFiles()
      :
      GetFilesHome();
  }, [currentFolder,state,popup1, updatefolders]);
=======
    currentFolder !== "home " ? GetFiles() : GetFilesHome();
  }, []);
  useEffect(() => {
    currentFolder !== "home" ? GetFiles() : GetFilesHome();
  }, [currentFolder]);
  useEffect(() => {
    currentFolder !== "home" ? GetFiles() : GetFilesHome();
  }, [popup1]);
>>>>>>> host_test_2:server/client/src/pages/Vault/VaultDashboard.js

  const GetFiles = async () => {
    try {
      const response = await getFiles(currentFolder, state._id);
      console.log(response.data.data);
      setFiles(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const GetFilesHome = async () => {
    try {
      const response = await getFileshome(state._id);
      console.log(response.data.data);
      setFiles(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar page="crestera" />
      <div className="vaultDashboard">
        <div className="vaultDashButtons">
          <button className="vaultDashButton" onClick={() => setpopup1(true)}>
            upload
          </button>
          <button className="vaultDashButton" onClick={() => setpopup(true)}>
            create
          </button>
        </div>

        <div className="folderList">
          <div className="box">
            {/* Header */}
            <div className="VaultHeader">
              <div className="VaultHeader_fileIcon"></div>
              <div className="VaultHeader_title1">
                <p>Name</p>
              </div>
              <div className="VaultHeader_middleIcon"></div>
              <div className="VaultHeader_title2"> </div>
              <div className="VaultHeader_title3">
                <p>Date Modified</p>
              </div>
              <div className="VaultHeader_setings"></div>
            </div>

            {/* Folder list */}
            {folders.map((folder) => (
              <div key={folder._id}>
                <FolderList
                  folder={folder}
                  updatefolders={updatefolders}
                  setupdatefolders={setupdatefolders}
                />
              </div>
            ))}

            {/* File list */}
<<<<<<< HEAD:client/src/pages/Vault/VaultDashboard.js
            {
              files.map((file) =>
                <FileList file={file} updatefolders={updatefolders} setupdatefolders={setupdatefolders} />
              )
            }
=======
            {files.map((file) => (
              <FileList file={file} />
            ))}
>>>>>>> host_test_2:server/client/src/pages/Vault/VaultDashboard.js
          </div>
        </div>
      </div>
      <FolderCreate
        trigger={popup}
        settrigger={setpopup}
        currentfolder={currentFolder}
      />
      <FileCreate
        trigger={popup1}
        settrigger={setpopup1}
        currentfolder={currentFolder}
      />
    </>
  );
};

export default VaultDashboard;