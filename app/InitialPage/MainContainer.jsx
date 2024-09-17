import styles from "./styles/MainContainer.module.css";
import OutlineCard from "./OutlineCard";
import React, { useState, useEffect } from "react";
import { getProjects } from "../resources/project";
import { getCookies } from "../cookies/storeCookies";




const MainContainer = () => {

  const [project, setProject] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const cookie = await getCookies();
      console.log(cookie);
      const username = cookie.username.value;
      const data = await getProjects(username);
      setProject(data);
  }
    fetchProjects() 
  }, []);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.HeadingContainer}>
          <h2 className={styles.heading}>PROJECTS</h2>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        {project.length === 0 ? (
          <div>No projects are currently available.</div>
        ) : (
          project.map((projectItem, index) => (
            <OutlineCard key={index} project={projectItem} />
          ))
        )}
      </div>
    </>
  );
};
export default MainContainer;
