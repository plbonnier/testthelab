/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  // const navigate = useNavigate();
  const [token, setToken] = useState(() =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  console.info("token from userProvider", token);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!token) {
      setUser({});
      return;
    }

    // Si un token est présent, fetch les données utilisateur
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/me`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          setUser({});
          console.error(
            `Failed to fetch user data. HTTP status: ${response.status}`
          );
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);

        setUser({});
      }
    };

    fetchUserData();
  }, [token]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,

      token,
      updateToken: (newToken) => {
        if (newToken) {
          localStorage.setItem("token", JSON.stringify(newToken));
        } else {
          localStorage.removeItem("token");
        }
        setToken(newToken);
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/usermissions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.info("Success:", data);
          })
          .catch((err) => console.info(err));
      },
    }),
    [user, token]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
