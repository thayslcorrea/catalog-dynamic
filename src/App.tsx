import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogItemCard, { CatalogItem } from './components/CatalogItemCard';

const initialCatalog: CatalogItem[] = [
  { id: 1, title: 'Academia Boa Forma', category: 'Saúde', description: 'Espaço fitness completo.' },
  { id: 2, title: 'Padaria Pão Quente', category: 'Alimentação', description: 'Pães e doces artesanais.' },
  { id: 3, title: 'Táxi do João', category: 'Transporte', description: 'Disponível 24h.' },
  { id: 4, title: 'Mercado Central', category: 'Compras', description: 'Produtos locais.' }
];

const App: React.FC = () => {
  const [catalog] = useState<CatalogItem[]>(initialCatalog);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredItems = catalog.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-3">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar por nome ou categoria..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredItems.length > 0 ? (
        filteredItems.map(item => <CatalogItemCard key={item.id} item={item} />)
      ) : (
        <p className="text-center text-muted">Nenhum item encontrado.</p>
      )}
    </div>
  );
};

export default App;
