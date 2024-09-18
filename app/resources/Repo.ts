const repo = {
  folder: {
    name: "Root",
    subFolders: {
      folder1: {
        name: "Folder 1",
        subFolders: {},
        files: ["file1.txt", "file2.txt"],
      },
      folder2: {
        name: "Folder 2",
        subFolders: {
          subfolder1: {
            name: "Subfolder 1",
            subFolders: {},
            files: ["file3.txt"],
          },
        },
        files: ["file4.txt"],
      },
      folder3: {
        name: "Folder 3",
        subFolders: {
          subfolder2: {
            name: "Subfolder 2",
            subFolders: {},
            files: ["file5.txt"],
          },
          subfolder3: {
            name: "Subfolder 3",
            subFolders: {},
            files: ["file6.txt"],
          },
        },
        files: ["file7.txt"],
      },
      folder4: {
        name: "Folder 4",
        subFolders: {},
        files: ["file8.txt"],
      },
    },
    files: ["file9.txt"],
  },
  folderMetadata: {
    branch: "main",
    commit: "abc12332",
    EditedAt: "2022-01-02:00:111012",
  },
};


export default repo;