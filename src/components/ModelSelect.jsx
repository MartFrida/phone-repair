import { useNavigate } from 'react-router-dom';

export default function ModelSelect({ models }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (!e.target.value) return;

    const urlName = e.target.value.toLowerCase().replace(/\s+/g, '-');
    navigate(`/reparar/${urlName}`);
  };

  return (
    <select
      onChange={handleChange}
      defaultValue=""
      className="bg-neutral-900 border border-neutral-700 text-white rounded-lg px-4 py-2 w-full sm:w-72 focus:outline-none focus:border-yellow-400 transition"
    >
      <option value="" disabled>
        Selecciona un modelo
      </option>

      {models.map((model) => (
        <option key={model.id} value={model.name}>
          {model.name}
        </option>
      ))}
    </select>
  );
}
