import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import List from '../../components/Vault/List';
import './VaultDashboard.scss';
import Navbar from "../../components/Navbar/Navbar";
import { Progress } from 'antd';

const VaultDashboard = () => {

  const { folderId } = useParams();
  const [currentFolder, setCurrentFolder] = useState(
    folderId || 'main'
  );

  useEffect(() => setCurrentFolder(folderId || 'main'), [folderId]);



  return (
    <>
      <Navbar page="crestera" />
      <div className="vaultDashboard">

        <div className="vaultDashButtons">
          <button className="vaultDashButton">upload</button>
          <button className="vaultDashButton">create</button>
          <Link to={`/folder/bin`}  style={{ textDecoration: 'none' }}>
          <button className="vaultDashButton">Trash</button>
          </Link>
          

          <div className='progressBar'>
            <Progress
              strokeColor={{
                from: '#0B572E',
                to: '#117f45',
              }}
              percent={60.9}
              status="active"
              size="small" 
            />
          </div>
        </div>

        <div className="breadcrumb">
        </div>

        <div className="folderList">
          <List currentFolder={currentFolder} />
        </div>

      </div>
    </>
  );
};

export default VaultDashboard;