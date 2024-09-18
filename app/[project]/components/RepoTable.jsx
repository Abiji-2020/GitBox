"use client";
import { useState } from 'react';
import { FolderOpen, Description } from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import data from "../../resources/Repo";
import { useRouter } from 'next/navigation';

const FolderPage = () => {
  const router = useRouter();
  const [currentFolder, setCurrentFolder] = useState(data.folder);
  const [folderHistory, setFolderHistory] = useState([data.folder]);

  const handleFolderClick = (folderName) => {
    const folder = currentFolder.subFolders[folderName];
    setCurrentFolder(folder);
    setFolderHistory([...folderHistory, folder]);
  };

  const handleBackClick = () => {
    if (folderHistory.length > 1) {
      const previousFolder = folderHistory[folderHistory.length - 2];
      setCurrentFolder(previousFolder);
      setFolderHistory(folderHistory.slice(0, -1));
    }
  };

  return (
    <div>
      {folderHistory.length > 1 && (
        <button onClick={handleBackClick}>Back</button>
      )}
      <TableContainer>
        <Table aria-label="folders table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(currentFolder.subFolders).map((folderName) => (
              <TableRow key={folderName}>
                <TableCell onClick={() => handleFolderClick(folderName)}>
                  <FolderOpen />
                  {folderName}
                </TableCell>
                <TableCell>Folder</TableCell>
              </TableRow>
            ))}
            {currentFolder.files.map((file) => (
              <TableRow key={file}>
                <TableCell>
                  <Description />
                  {file}
                </TableCell>
                <TableCell>File</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FolderPage;
