import Projectdetails from "../components/Projects/Projectdetails";
import ProjectHome from "../components/Projects/ProjectHome";

const Projects = () => {
  return (
    <div>
      <ProjectHome/>
      <Projectdetails/>
    </div>
  );
};

export default Projects;   // ✅ This FIXES the error
