import * as React from 'react';
import {Trends} from "./Trend";
import {CCol, CCard, CCardHeader, CCardBody, CCardFooter} from '@coreui/react'


interface VirusProps {
    total_count: number,
    trends: { [name: string]: number },
}

interface CreatureProps {
    ipAddress: string,
    idString: string,
    viruses: VirusProps
}

export const Creature = (props: CreatureProps) => {
    return (
        <CCol xs={4}>
            <CCard className="mb-4" style={{padding: "20px"}}>
                <CCardHeader style={{padding: "20px"}}>
                    <h3>{props.ipAddress}</h3>
                </CCardHeader>
                <CCardBody style={{padding: "20px"}}>
                    <Trends total_count={props.viruses.total_count} trends={props.viruses.trends}/>
                </CCardBody>
                <CCardFooter style={{padding: "20px"}}>
                    <p> Total Variants: {props.viruses.total_count}</p>
                </CCardFooter>
            </CCard>
        </CCol>
    );
}
