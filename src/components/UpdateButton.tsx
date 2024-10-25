import { useLocation, useNavigate } from "react-router-dom";
import "../css/UpdateInfoHouse.css";

const UpdateInfoHouse = () => {
  const url = useLocation();
  const parameter = "";
  const id = Number(
    new URLSearchParams(url.search).get("id")?.toString() || parameter
  );
  const navigate = useNavigate();
  const link = `/updateHouse?id=${id}`;
  return (
    <div>
      <button className="updateHouse" onClick={() => navigate(link)}>
        Update the House
      </button>
    </div>
  );
};

export default UpdateInfoHouse;
