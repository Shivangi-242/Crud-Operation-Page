import { useState } from "react";
import Axios from "axios";
import StudentForm from "./StudentForm";

function CreateStudent() {
  const [arr, setArr] = useState([]);
  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: arr[0], email: arr[1], rollNo: arr[2] };
    Axios.post("https://crud-operations-syok.onrender.com/studentRoute/create-student", data)
      .then((res) => {
        if (res.status === 200) alert("Record added successfully");
        else Promise.reject();
      })
      .catch((err) => alert(err));
      event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        getState={getState}
        nameValue=""
        emailValue=""
        rollNoValue=""
      />
    </form>
  );
}

export default CreateStudent;
