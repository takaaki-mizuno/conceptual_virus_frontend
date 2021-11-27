import * as React from 'react';
import {GetCreatures} from '../repositories/Creatures'
import {Creature as CreatureComponent} from "../components";
import {CreatureEntity} from "../models"
import {CCard, CContainer, CRow, CCol} from '@coreui/react'


interface Props {
}

export const Dashboard: React.FC<Props> = () => {
    const [creatures, setCreatures] = React.useState<[CreatureEntity]>();

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
            creatureElements.push(<CreatureComponent key={creature.id} ipAddress={creature.ip_address}
                                                     idString={creature.id} viruses={creature.viruses}/>)
        }
    }

    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <div className="body flex-grow-1 px-3">
                    <CContainer lg style={{padding: "20px"}}>
                        <h1 className="title" style={{padding: "20px", textAlign: "center"}}>Conceptual Virus Dashboard</h1>
                        <CRow>
                            {creatureElements}
                        </CRow>
                    </CContainer>
                </div>
            </div>
        </div>
    );
}
