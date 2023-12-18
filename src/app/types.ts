export interface User_Place {
    distance: number;
    lat: string;
    lon: string;
}

export interface Parking_Info {
    parkingId: string;
    name: string;
    address: string;
    operatingTime: string;
    timeTicket: string;
    dayTicket: string;
    lat: string;
    lon: string;
}
export interface Coordinates {
    lat: number;
    lng: number;
}

export interface GeolocationData {
    loaded: boolean;
    coordinates?: {
        lat: number;
        lng: number;
    };
}
export interface UserLocation {
    lat: number;
    lng: number;
    setLat: React.Dispatch<React.SetStateAction<number>>;
    setLng: React.Dispatch<React.SetStateAction<number>>;
}

export interface SearchButtonProps {
    buttonText: string;
    options: string[];
    onClick: (value: string) => void;
}