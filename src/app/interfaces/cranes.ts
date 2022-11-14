export interface Crane {
    id: string;
    name: string;
    url: string;
    loadCapacity: number;
    telescopicBoom: number;
    maxHeight: number;
    maxRadius: number;
    axles: number,
    shortDescription: string
}

export interface DeepFoundation {
    id: string;
    name: string;
    url: string;
    operWeight: string;
    maxTorque: number;
    kellyDrillingDepth: number;
    kellyDrillingDiameter: number;
    shortDescription: string
}

export interface MobileCrane {
    id: number;
    name: string;
    loadCapacity?: number;
    telescopicBoom?: number;
    maxHeight?: number;
    maxRadius?: number;
    axles?: number
}
