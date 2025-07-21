import React, {use, useState} from "react";
import quadro1 from "../quadros1.jpg";
import quadro2 from "../quadros2.png";
import quadro3 from "../quadros3.jpg";
import quadro4 from "../quadros4.jpg";
import banner1 from "../banner1.png";
import banner2 from "../banner2.jpg";
import banner3 from "../banner3.jpg";
import folder1 from "../folder1.png";
import folder2 from "../folder2.jpg";
import folder3 from "../folder3.jpg";
import adesivo1 from "../adesivo1.webp";
import adesivo2 from "../adesivo2.jpg";
import adesivo3 from "../adesivo3.jpg";
import adesivo4 from "../adesivo4.webp";
import caneca1 from "../caneca1.webp";
import caneca2 from "../caneca2.webp";
import caneca3 from "../caneca3.jpg";
import plotagem1 from "../plotagem1.jpg";
import plotagem2 from "../plotagem2.jpg";
import plotagem3 from "../plotagem3.jpg";
import arte from "../logovx.png";
import camisa1 from "../camisa1.webp";

const servicos = [
    {
        id: 1, 
        nome: "Quadros",
        imagens: [quadro1, quadro2, quadro3, quadro4],
        descricao: "Quadros decorativos personalizados feitos sob medida em material de alta qualidade. Escolha entre uma variedade de tamanhos e estilos para complementar sua decoração.",
    },
    {
        id: 2, 
        nome: "Banner",
        imagens: [banner1, banner2, banner3],
        descricao: "Banners personalizados para eventos, promoções ou publicidade. Disponíveis em diversos tamanhos e materiais, ideais para chamar a atenção do seu público.",
    },
    {
        id: 3, 
        nome: "Folder",
        imagens: [folder1, folder2, folder3],
        descricao: "Folders e panfletos personalizados para divulgação de produtos e serviços. Impressão de alta qualidade com design atrativo para impactar seu público-alvo.",
    },
    {
        id: 4, 
        nome: "Adesivo",
        imagens: [adesivo1, adesivo2, adesivo3, adesivo4],
        descricao: "Adesivos personalizados para uso comercial ou pessoal. Disponíveis em diversos formatos e tamanhos, perfeitos para branding, decoração ou presentes.",
    },
    {
        id: 5, 
        nome: "Canecas personalizadas",
        imagens: [caneca1, caneca2, caneca3],
        descricao: "Canecas personalizadas com estampas exclusivas. Ideal para presentes, eventos ou uso pessoal. Escolha o modelo e a arte que mais combina com você.",
    },
    {
        id: 6, 
        nome: "Plotagem",
        imagens: [plotagem1, plotagem2, plotagem3],
        descricao: "Plotagem de alta precisão para projetos técnicos, arquitetônicos ou artísticos. Impressão em grande formato com qualidade profissional.",
    },
    {
        id: 7, 
        nome: "Arte personalizada",
        imagens: [arte],
        descricao: "Criação de artes personalizadas para atender às suas necessidades específicas, seja para eventos, campanhas publicitárias ou projetos pessoais.",
    },
    {
        id: 8, 
        nome: "Camisas",
        imagens: [camisa1],
        descricao: "Camisas personalizadas com estampas exclusivas. Ideal para eventos, uniformes ou presentes especiais. Escolha o modelo e a arte que mais combina com você.",
    },
];

function Catalog() {
    const [expandido, setExpandido] = useState(null);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleExpand = (id) => {
        setExpandido(expandido === id ? null : id);
        setCarouselIndex(0);
    };

    const nextImg = (imagens) => {
        setCarouselIndex((prev) => (prev + 1) % imagens.length);
    };
    const prevImg = (imagens) => {
        setCarouselIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    return (
        <section className="catalog">
            <h2>Catálogo de Serviços</h2>
            <div className="catalog-list">
                {servicos.map((servico) => (
                    <div 
                        className={`catalog-card${expandido === servico.id ? ' expanded' : ''}`} 
                        key={servico.id}
                        onClick={() => handleExpand(servico.id)}
                        style={{ cursor: "pointer" }}
                    >
                        <span>{servico.nome}</span>
                        {expandido === servico.id && (
                            <div className="catalog-details">
                                <div className="catalog-carousel">
                                    <button onClick={e => {e.stopPropagation(); prevImg(servico.imagens);}}>&lt;</button>
                                    <img src={servico.imagens[carouselIndex]} loading="lazy" alt={servico.nome} />
                                    <button onClick={e => {e.stopPropagation(); nextImg(servico.imagens);}}>&gt;</button>
                                </div>
                                <p>{servico.descricao}</p>
                                <a href="https://api.whatsapp.com/send?phone=5585997230990&text=" className="btn-catalog" target="blank">Solicitar Orçamento</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Catalog;