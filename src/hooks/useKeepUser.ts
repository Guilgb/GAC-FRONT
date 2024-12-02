import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export function useKeepUser() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setPath(window.location.pathname);
    if (!user) {
      const recoverData = JSON.parse(sessionStorage.getItem("user") || "{}");
      if (Object.keys(recoverData).length) {
        setUser(recoverData);
      } else {
        navigate("/");
      }
    }
    if (!token && path !== '/new-password') {
      navigate("/");
    }
  }, [user, path]);

  return { user, setUser, navigate };
}
