import {Link} from "react-router-dom";
import Trainers from "./TrainersMock";

function TrainersList(){

    return(

        <div>

            <h2>Trainer List</h2>

            <ul>

            {

                Trainers.map((trainer)=>(

                    <li key={trainer.TrainerId}>

                        <Link
                        to={`/trainer/${trainer.TrainerId}`}
                        >

                        {trainer.Name}

                        </Link>

                    </li>

                ))

            }

            </ul>

        </div>

    );

}

export default TrainersList;