import { useParams } from "react-router-dom";


const Singleview = () => {

    const id = useParams().questionId

    return <p>{id}</p>

}

export default Singleview