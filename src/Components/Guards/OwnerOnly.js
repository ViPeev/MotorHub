import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../../utils/localStorage";
import { getOwnerId } from "../../api/data";
import { Skeleton } from "../Misc/Loaders/Loaders";

const OwnerRoute = ({ children }) => {
  const [ownerId, setOwnerId] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { userData } = getUserData();

  useEffect(() => {
    getOwnerId(id)
      .then((result) => {
        setOwnerId(result.ownerId);
      })
      .catch((error) => {
        navigate("/404", { replace: true });
      });
  }, [id, navigate]);

  return !ownerId ? (
    <Skeleton height={"suspense"} />
  ) : ownerId !== userData._id ? (
    <Navigate to="/" replace />
  ) : children ? (
    children
  ) : (
    <Outlet />
  );
};

export default OwnerRoute;
