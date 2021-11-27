import {VirusEntity} from "./Virus";

export interface CreatureEntity {
    id: string;
    ip_address: string;
    viruses:VirusEntity;
}
