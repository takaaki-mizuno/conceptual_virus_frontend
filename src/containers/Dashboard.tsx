import * as React from 'react';
import {GetCreatures} from '../repositories/Creatures'

interface Props {
}

export const Dashboard: React.FC<Props> = (props) => {
    const [creatures, setCreatures] = React.useState([]);

    React.useEffect(() => {
        const interval = 1000 * 60;
        GetCreatures().then(
            (creatures) => {
                if (creatures) {
                    setCreatures(creatures)
                }
            }
        )
        const intervalId = setInterval(() => {
            GetCreatures().then(
                (creatures) => {
                    if (creatures) {
                        setCreatures(creatures)
                    }
                }
            ).catch(err => {
                console.log(err)
            })
        }, interval);
        return () => {
            clearInterval(intervalId)
        };
    }, []);

    let creatureElements = []
    if (creatures) {
        for (let i = 0; i < creatures.length; i++) {
            const creature = creatures[i];
            console.log(creature);
            creatureElements.push(<div>{creature["ip_address"]}</div>)
        }
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                {creatureElements}
            </div>
        </div>
    );
}
