import axios from "axios";


let project = [
  {
    name: "My Project",
    version: "1.0.0",
    description: "My project description",
    link: "/my-project",
  },
  {
    name: "My Second Project",
    version: "1.0.0",
    description: "My second project description",
    link: "/my-second-project",
  },
];

const getProjects = async (Username: string) => {
  const response = await axios({
    url: `http://localhost:8080/projects/${Username}`,
    method: "get",
  }).catch((err) => {
    if (err.response.status === 404) {
      console.log("Project does not exist");
      project = [];
      return err;
    }
  })
  if (response === undefined) project = [];
  if (response.status === 200)
  project = await response.data;
  if (project === undefined) project = [];
  return;
}

export { getProjects };
export default project;
