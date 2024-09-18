
import axios from 'axios';

const getProjects = async (Username: string) => {

    const data = {
      username: Username
    }
    console.log("DATA" );
    console.log(data);
  try {
    const response = await axios({
      url: `http://localhost:8080/projects/get`,
      method: "post",
      params: data,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }).catch((err) => {
      console.log(err)
      return err;
       });


    if (response.status === 200) {
      console.log(response.data.projects);
      return response.data.projects;
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
