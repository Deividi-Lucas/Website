import { Link } from "react-router-dom";
import { Card } from "./style";

export default function Post (props){
    return(
        <Card>
            <Link to={props.link}>
                <img src={props.img} alt=""/>
                <span>{props.span}</span>
            </Link>
        </Card>
    )
}