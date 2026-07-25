import { useParams } from "react-router-dom";
import Trainers from "./TrainersMock";

function TrainerDetails() {

  const { id } = useParams();

  const trainer = Trainers.find(
    (item) => item.TrainerId === parseInt(id)
  );

  if (!trainer) {

    return <h2>Trainer Not Found</h2>;

  }

  return (

    <div>

      <h2>Trainer Details</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto",
          borderCollapse: "collapse"
        }}
      >

        <tbody>

          <tr>
            <td><b>Trainer Id</b></td>
            <td>{trainer.TrainerId}</td>
          </tr>

          <tr>
            <td><b>Name</b></td>
            <td>{trainer.Name}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>{trainer.Email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>{trainer.Phone}</td>
          </tr>

          <tr>
            <td><b>Technology</b></td>
            <td>{trainer.Technology}</td>
          </tr>

          <tr>
            <td><b>Skills</b></td>
            <td>{trainer.Skills}</td>
          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default TrainerDetails;