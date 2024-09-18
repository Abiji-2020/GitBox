import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { getCookies } from '@/app/cookies/storeCookies';

const NewProjectButton = () => {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [defaultBranchName, setDefaultBranchName] = useState('main');
  const [username, setUsername] = useState('');


  const handleOpen = () => {
    setOpen(true);
  };
  const getcookie = async () => {
    const cookie =await getCookies();
    console.log(cookie);
    setUsername(cookie.username.value);
    return username;
  }
  useEffect(() => {
    getcookie();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const generateInitalCommit = (projectName, branchName) => {
    const currentTime = new Date();
    const timestamp = currentTime.getTime();
    const formattedTime = currentTime.toISOString().replace(/[:.-]/g, '');
    const uniqueString = `${formattedTime}-${projectName}-${branchName}-${timestamp}`;
  
    return uniqueString;
    }  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send data to server using Fetch API


    const repoData = {
        folder:{
            name: "Root",
            subFolders:{},
            files:[]
        },
        folderMetadata :{
            branch : defaultBranchName,
            commit : generateInitalCommit(projectName, defaultBranchName),
            EditedAt : new Date().toISOString(),
        },
        username: username,
        repoName: projectName,
        branchName: defaultBranchName
    };
    console.log("Data");
    console.log(repoData);

    fetch("http://localhost:8080/branchedRepo/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(repoData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    const projectData = {
        projectName: projectName,
        projectDescription: projectDescription,
        version:"1.0",
        link: projectName.replace(/[^a-zA-Z0-9_]/g, ''),
        username: username
    }
    console.log("Project Data");
    console.log(projectData);

    fetch("http://localhost:8080/projects/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData),
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));


    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create Project
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="project-name"
              label="Project Name"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="project-description"
              label="Project Description"
              value={projectDescription}
              onChange={(event) => setProjectDescription(event.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="default-branch-name"
              label="Default Branch Name"
              value={defaultBranchName}
              onChange={(event) => setDefaultBranchName(event.target.value)}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Create
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewProjectButton;