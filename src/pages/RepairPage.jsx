import { useParams } from 'react-router-dom';
import repairsData from '../data/repairs.json'; // Создай JSON с ремонтом и ценами

export default function RepairPage() {
  const { modelName } = useParams();
  const repairs = repairsData[modelName] || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">
        Reparaciones para {modelName.replace(/-/g, ' ')}
      </h1>
      
      {repairs.length ? (
        <ul className="space-y-4">
          {repairs.map((repair) => (
            <li
              key={repair.type}
              className="flex justify-between bg-neutral-800 p-4 rounded-lg"
            >
              <span>{repair.type}</span>
              <span className="font-bold text-yellow-400">{repair.price} €</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay reparaciones disponibles para esta modelo.</p>
      )}
    </div>
  );
}
