import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../misc/firebase";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        const data = {
          uid: authObj.uid,
          email: authObj.email,
        };
        setProfile(data);
      } else {
        setProfile(null);
      }
    });
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
