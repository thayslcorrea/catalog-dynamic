import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogItemCard, { CatalogItem } from './components/CatalogItemCard';

const initialCatalog: CatalogItem[] = [
  { id: 1, title: 'Academia Boa Forma', category: 'Saúde', description: 'Espaço fitness completo para atividades físicas.' },
  { id: 2, title: 'Padaria Pão Quente', category: 'Alimentação', description: 'Padaria com variedade de pães e doces artesanais.' },
  { id: 3, title: 'Táxi do João', category: 'Transporte', description: 'Serviço de táxi disponível 24h na região central.' },
  { id: 4, title: 'Mercado Central', category: 'Compras', description: 'Supermercado com produtos locais e hortifruti.' }
];

const App: React.FC = () => {
  const [catalog] = useState<CatalogItem[]>(initialCatalog);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredItems = catalog.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Catálogo Urbano - Catalog</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar por nome ou categoria..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <CatalogItemCard key={item.id} item={item} />
        ))
      ) : (
        <p className="text-center text-muted">Nenhum item encontrado.</p>
      )}
    </div>
  );
};

export default App;