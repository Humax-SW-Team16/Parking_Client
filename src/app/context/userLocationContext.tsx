"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { UserLocation } from "../types";

export const UserLocationContext = createContext<UserLocation>({
  lat: 5,
  lng: 5,
  setLat: () => {},
  setLng: () => {},
});

export const useLocationContext = () => {
  return useContext(UserLocationContext);
};

interface UserLocationProviderProps {
  children: ReactNode;
}
export const UserLocationProvider = ({
  children,
}: UserLocationProviderProps) => {
  const [lat, setLat] = useState(126.7694043);
  const [lng, setLng] = useState(37.5124101);

  const userLocation: UserLocation = {
    lat,
    lng,
    setLat,
    setLng,
  };
  return (
    <UserLocationContext.Provider value={userLocation}>
      {children}
    </UserLocationContext.Provider>
  );
};
