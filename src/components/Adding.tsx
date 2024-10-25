import { useNavigate } from "react-router-dom";
import "../css/Adding.css";

const Adding = () => {
  const navigate = useNavigate();
  const link = "/insertNewHouse";
  return (
    <div className="addingDiv mt-4" onClick={() => navigate(link)}>
      <label className="label">Insert new House</label>
    </div>
  );
};
export default Adding;
