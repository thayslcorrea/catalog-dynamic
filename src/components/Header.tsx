import React from 'react';

const Header: React.FC = () => {
    return (
        <header class="text-center py-5 bg-white">
            <img alt="Logo do Catalog" class="img-fluid my-3" src={`${process.env.PUBLIC_URL}/images/logo.png`} style={{maxHeight: "150px;"}}></img>
            <h3>O Catálogo Urbano Inteligente que conecta pessoas, comércios e serviços.</h3>
            <p>Conectando você ao que importa, mesmo offline!</p>
        </header>
    )
}

export default Header