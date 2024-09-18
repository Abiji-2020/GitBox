"use client";

import { useState } from 'react';
import { FolderOpen, Description } from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from 'next/link';
import data from "../../resources/Repo";

const FolderPage = () => {
  const [currentFolder, setCurrentFolder] = useState(data.folder);

  const handleFolderClick = (folderName) => {
    const folder = currentFolder.subFolders[folderName];
    setCurrentFolder(folder);
  };

  return (
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
              <TableCell>
                <Link href={`/folder/${folderName}`}>
                  <a onClick={() => handleFolderClick(folderName)}>
                    <FolderOpen />
                    {folderName}
                  </a>
                </Link>
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
  );
};

export default FolderPage;