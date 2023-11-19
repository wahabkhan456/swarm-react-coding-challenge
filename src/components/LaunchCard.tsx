import { Card } from "react-bootstrap";
import { Launch } from "../models/launch";

export interface LaunchCardProps {
    launch: Launch
}

const LaunchCard: React.FC<LaunchCardProps> = (props: LaunchCardProps) => {
    const launch = props.launch;

    return (
        <Card style={{ width: '20rem', height: '24rem' }}>
            <Card.Img variant="top" src={(launch.ships.length && launch.ships[0].image) || 'assets/demo.jpg'} />
            <Card.Body>
                <Card.Title>{launch.mission_name}</Card.Title>
                <Card.Text>
                    <div>
                        <strong>Launch Date: </strong>
                        {new Date(launch.launch_date_local).toLocaleString('en')}
                    </div>
                    <div>
                        <strong>Rocket Name: </strong>
                        {launch.rocket.rocket_name}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default LaunchCard;