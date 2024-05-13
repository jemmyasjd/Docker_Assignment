import AcademicForm from './form';
import './App.css';
import FacultyForm from './form2';
import Details from './Details';
import Delete from './Delete';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <AcademicForm />
        <FacultyForm/>
        <Delete/>
        <Details/>
      {/* </header> */}
    </div>
  );
}

export default App;



// docker run -it imagename  : for running the images
// docker start/stop containername/id  : for starting/stoping the container 
// docker run -it -p 8000:8000 imagename   :: port mapping 
// docker build -t imagename Dockerfile-path : for building an image 
// docker network create networkname or docker network create ntname -d bridge/host/overlay  :: for creating the network
// docker run -d --name containername --network networkname -p 3307:3306 -e MYSQL_ROOT_PASSWORD=<password> imagename
// docker run -it -v path_to_mount_in_local_machine:path_inside_the_container imagename :: mounting a file using volume 
//              For eg : docker run -it -v C:\Users\jemmy:home/try ubuntu
//                       docker run -it -v "$(pwd):/app react

// For uploading to docker hub: 
// docker tag local_image_name:latest repo_name:latest
// docker push repo_image_name:latest






