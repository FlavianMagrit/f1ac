import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(undefined);
    });
  }, []);

  return {
    user,
  };
}
