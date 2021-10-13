import TotalScore from './TotalScore';


export default function Scorecard(props){
    return(
        <div>
            <div className="Score-Flex">
                <img src={props.Logo1} />
                <p>{props.Team1}</p>
                <TotalScore />
            </div>
            <div className="Score-Flex">
                <img src={props.Logo2} />
                <p>{props.Team2}</p>
                <TotalScore />
            </div>
        </div>
    );
}
