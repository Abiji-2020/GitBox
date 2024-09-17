
import axios from 'axios';

const getProjects = async (Username: string) => {
  try {
    const response = await axios({
      url: `http://localhost:8080/projects/${Username}`,
      method: "get",
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (err:any) {
    if (err.response.status === 404) {
      console.log("Project does not exist");
      return [];
    } else {
      throw err;
    }
  }
};

export { getProjects };
