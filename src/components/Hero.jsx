import React, {useEffect, useState, useRef} from "react";
import img1 from "../hero1.png";
import img2 from "../hero2.png";
import img3 from "../hero3.png";

const imagens = [img1, img2, img3];

function Hero() {
    const btnRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagens.length);
        }, 5000); // Troca a imagem a cada 5 segundos
        return () => clearInterval(timer);
    }, []);

    const handleMouseMove = (e) => {
        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty('--x', `${x}%`);
        btn.style.setProperty('--y', `${y}%`);
    };

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % imagens.length);
    };

    return (
        <section className="hero">
            <div className="hero-texto">
                <h1>
                    Soluções em <span className="cmyk-m">Comunicação Visual</span> e <span className="cmyk-y">Serviços Digitais</span>
                </h1>
                <p>
                    Impressão rápida, design personalizado e qualidade profissional para você!
                </p>
                <a href="https://api.whatsapp.com/send?phone=5585997230990&text=" target="blank" className="btn-hero" ref={btnRef} onMouseMove={handleMouseMove}>Faça seu orçamento</a>
            </div>
            <div className="hero-imagem">
                <button className="carousel-arrow left" onClick={prevImage} aria-label="Imagem anterior">&#8592;</button>
                <img src={imagens[index]} loading="lazy" alt="Imagem ilustrativa" />
                <button className="carousel-arrow right" onClick={nextImage} aria-label="Próxima imagem">&#8594;</button>
            </div>
        </section>
    );
}

export default Hero;