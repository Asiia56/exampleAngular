export interface Crane {
    id: string;
    name: string;
    url: string;
    loadCapacity: number;
    telescopicBoom: number;
    maxHeight: number;
    maxRadius: number;
    axles: number
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