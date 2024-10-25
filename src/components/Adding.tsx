import "../css/AddingCss.css";

interface AddingProps {
  setAdding: Function;
}

const Adding: React.FC<AddingProps> = ({ setAdding }) => {
  return (
    <button onClick={() => setAdding(true)} className="addingDiv mt-4">
      <label className="label">Insert new House</label>
    </button>
  );
};
export default Adding;
