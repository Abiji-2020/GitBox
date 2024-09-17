import styles from "./styles/MainContainer.module.css";
import OutlineCard from "./OutlineCard";
import project from "../resources/project";
const MainContainer = () => {
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
