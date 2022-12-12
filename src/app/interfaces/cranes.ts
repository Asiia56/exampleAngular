export interface Crane {
  id: string;
  name: string;
  iconUrl: string;
  loadCapacity: number;
  telescopicBoom: number;
  maxHeight: number;
  maxRadius: number;
  axles: number;
  description: string;
  category: string
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
