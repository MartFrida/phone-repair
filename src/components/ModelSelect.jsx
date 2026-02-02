export default function ModelSelect({ models, onSelect }) {
  const handleChange = (e) => {
    const modelId = e.target.value;
    if (!modelId) return;

    onSelect(modelId);
    e.target.value = '';
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
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
    </select>
  );
}
