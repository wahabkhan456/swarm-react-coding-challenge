import { Row, Col, Button, FormControl, InputGroup, Form } from 'react-bootstrap'
import { useQuery } from '@apollo/client';
import { getLaunchQuery } from '../queries/launchQuery';
import LaunchCard from '../components/LaunchCard';
import { Launch } from '../models/launch';
import { useState } from 'react';

export interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
    const [missionName, setMissionName] = useState('')
    const [rocketName, setRocketName] = useState('')
    const [limit, setLimit] = useState(10)
    const [firstLaunch, setFirstLaunch] = useState(0)
    const [secondLaunch, setSecondLaunch] = useState(1)
    const [launches  , setLaunches] = useState<Launch[]>([])
    const { error, data } = useQuery(getLaunchQuery(limit, missionName, rocketName),{onCompleted:(data)=>{
        setLaunches(data && data.launchesPast)
    }})

    const onCompare = ()=>{
        if(firstLaunch === secondLaunch){
            return
        }

        const filteredLaunches = [
            launches[firstLaunch],
            launches[secondLaunch]
        ]

        setLaunches(filteredLaunches)
    }

    const onReset = ()=>{
        setLaunches(data.launchesPast)
    }

    const loadMore = ()=>{
        setLimit(limit+10)
    }

    if (error) return <p>Error :(</p>;

    return (
        <div className="launchGrid">
            <h3 className='display-4 my-3'>Launches</h3>
            <Row>
                <Col md={6}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Mission Name"
                            aria-label="Mission Name"
                            aria-describedby="mission-name"
                            onChange={(event) => { setMissionName(event.target.value) }}
                            value={missionName}
                        />
                    </InputGroup>
                </Col>
                <Col md={6}>  <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Rocket Name"
                        aria-label="Rocket Name"
                        aria-describedby="rocket-name"
                        onChange={(event) => { setRocketName(event.target.value) }}
                        value={rocketName}
                    />
                </InputGroup></Col>
                <Col>
                    <InputGroup>
                        <Form.Control
                            id="launch-select-first"
                            as="select"
                            value={firstLaunch}
                            onChange={e => {
                                setFirstLaunch(parseInt(e.target.value))
                            }}
                        >
                            {launches.map((launch, i) => (
                                <option value={i}>{launch.mission_name}</option>
                            ))}
                        </Form.Control>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup>
                        <Form.Control
                            id="launch-select-second"
                            as="select"
                            value={secondLaunch}
                            onChange={e => {
                                setSecondLaunch(parseInt(e.target.value))
                            }}
                        >
                            {launches.map((launch, i) => (
                                <option value={i}>{launch.mission_name}</option>
                            ))}
                        </Form.Control>
                    </InputGroup>
                </Col>
                <Col>
                    <Button variant="primary" id="compare-btn" onClick={()=>{onCompare()}}>Compare</Button>
                    <Button variant="primary" onClick={()=>{onReset()}} style={{marginLeft: '1%'}}>Reset</Button>
                </Col>
            </Row>
            <br />
            <Row>
                {launches.map((launch, i) => (
                    <Col md={4} sm={4} id="launch-card" className="launchCard">
                        <LaunchCard key={i} launch={launch} />
                    </Col>
                ))}
            </Row>
            <br/>
            <Row>
                <Col></Col>
                <Col className="text-center">
                <Button variant="primary" onClick={()=>{loadMore()}}>Load More</Button>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Home