import React from "react";
import trabalho1 from "../portfolio1.jpg";
import trabalho2 from "../portfolio1.jpg";
import trabalho3 from "../portfolio1.jpg";

const trabalhos = [
    { id: 1, imagem: trabalho1, descricao: "..."},
    { id: 2, imagem: trabalho2, descricao: "..." },
    { id: 3, imagem: trabalho3, descricao: "..." },
]

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2>Portfólio</h2>
            <div className="portfolio-grid">
                {trabalhos.map(trabalho => (
                    <div className="portfolio-item" key={trabalho.id}>
                        <img src={trabalho.imagem} alt={trabalho.descricao} />
                        <p>{trabalho.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;