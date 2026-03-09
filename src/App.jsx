import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ebookCover from './assets/img/capa-ebook.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* NAVIGATION MENU */}
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.navOpen : ''}`}>
        <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Abrir Menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        {isMenuOpen && (
          <div className={styles.menuOverlay} onClick={closeMenu}>
            <ul className={styles.menuList} onClick={(e) => e.stopPropagation()}>
              <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
              <li><a href="#problema" onClick={closeMenu}>O Problema</a></li>
              <li><a href="#conteudos" onClick={closeMenu}>O Que Vai Aprender</a></li>
              <li><a href="#importancia" onClick={closeMenu}>Por Que é Importante?</a></li>
              <li><a href="#comprar" onClick={closeMenu}>Adquirir E-book</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* HEADER HERO SECTION */}
      <header id="inicio" className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.badge}>Guia Prático e Direto ao Ponto</span>
          <h1 className={styles.title}>
            Como Entreter Seus Filhos <span className={styles.highlight}>Sem Celular</span>
          </h1>
          <p className={styles.subtitle}>
            Descubra atividades simples, rápidas e com materiais que você já tem em casa para tirar as crianças das telas sem gerar estresse e sem gastar dinheiro com brinquedos novos.
          </p>
          
          <div className={styles.priceContainer}>
            <span className={styles.priceLabel}>Adquira o e-book por apenas</span>
            <div className={styles.priceValue}>R$ 27,00</div>
          </div>

          <div className={styles.heroCtaWrapper}>
            <a href="#comprar" className={styles.ctaButtonPrimary}>
              Comprar E-book Agora
            </a>
            <p className={styles.guaranteeText}>🔒 Pagamento 100% Seguro. Entrega Imediata por E-mail.</p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src={ebookCover} 
            alt="Capa do E-book Como Entreter Seus Filhos Sem Celular" 
            className={styles.ebookImage} 
          />
        </div>
      </header>

      {/* ABOUT THE PROBLEM SECTION */}
      <section id="problema" className={styles.problemSection}>
        <div className={styles.problemContent}>
          <h2>A realidade que ninguém te conta sobre o uso excessivo de telas</h2>
          <p>
            Sabemos o quanto é exaustivo chegar do trabalho e precisar dar atenção aos filhos. Muitas vezes, o celular e o tablet parecem ser a única solução para conseguir alguns minutos de descanso ou para poder fazer as tarefas de casa em paz.
          </p>
          <p>
            O problema é que o excesso de telas gera crianças mais <strong>ansiosas, irritadas e impacientes</strong>. A boa notícia é que você não precisa de brincadeiras mirabolantes para reverter isso. Este material foi criado pensando em pais reais, com rotinas cansativas, que precisam de ideias práticas.
          </p>
        </div>
      </section>

      {/* COMBO CONTENT SECTION */}
      <section id="conteudos" className={styles.comboSection}>
        <div className={styles.comboHeader}>
          <h2 className={styles.sectionTitle}>O que você vai aprender</h2>
          <p className={styles.comboDescription}>
            Este guia reúne estratégias simples e práticas para ajudar pais a entreter seus filhos sem depender de celulares, melhorar o interesse pelos estudos e criar uma rotina saudável para as crianças.
          </p>
        </div>
        
        <div className={styles.comboGrid}>
          {/* Card 1 */}
          <div className={styles.comboCard}>
            <div className={styles.comboIcon}>🧸</div>
            <h3>Como Entreter Seus Filhos Sem Celular</h3>
            <p>Mostra várias ideias de brincadeiras criativas e atividades simples para manter as crianças entretidas sem usar telas.</p>
          </div>
          {/* Card 2 */}
          <div className={styles.comboCard}>
            <div className={styles.comboIcon}>🤝</div>
            <h3>Como Entreter Seus Filhos Sem Celular Sem Brigas</h3>
            <p>Ensina estratégias para reduzir o uso de celular das crianças de forma tranquila, evitando discussões e conflitos.</p>
          </div>
          {/* Card 3 */}
          <div className={styles.comboCard}>
            <div className={styles.comboIcon}>📚</div>
            <h3>Como Fazer Seu Filho Gostar de Estudar</h3>
            <p>Apresenta métodos para transformar o estudo em algo mais interessante e motivador para as crianças.</p>
          </div>
          {/* Card 4 */}
          <div className={styles.comboCard}>
            <div className={styles.comboIcon}>⏰</div>
            <h3>Rotina Saudável Para Crianças</h3>
            <p>Explica como criar uma rotina equilibrada com horários para estudo, brincadeiras e descanso.</p>
          </div>
        </div>
      </section>

      {/* IMPORTANCE SECTION */}
      <section id="importancia" className={styles.importanceSection}>
        <div className={styles.importanceHeader}>
          <h2 className={styles.sectionTitle}>Por que este e-book é tão importante para o seu filho?</h2>
          <p className={styles.importanceDescription}>
            Reduzir o tempo de tela não é apenas sobre ter mais tempo para brincar, é uma necessidade cientificamente comprovada para o desenvolvimento saudável das crianças.
          </p>
        </div>
        
        <div className={styles.importanceGrid}>
          {/* Card 1 */}
          <div className={styles.importanceCard}>
            <div className={styles.importanceIcon}>🧠</div>
            <h3>Desenvolvimento Saudável</h3>
            <p>O excesso de telas pode causar atrasos na fala e dificuldades de aprendizado. Reduzir esse tempo estimula a criatividade e o foco.</p>
          </div>
          {/* Card 2 */}
          <div className={styles.importanceCard}>
            <div className={styles.importanceIcon}>💖</div>
            <h3>Saúde Emocional</h3>
            <p>Crianças que passam muito tempo em dispositivos eletrônicos têm maior tendência à ansiedade, irritabilidade e impaciência no dia a dia.</p>
          </div>
          {/* Card 3 */}
          <div className={styles.importanceCard}>
            <div className={styles.importanceIcon}>🌙</div>
            <h3>Melhoria no Sono</h3>
            <p>A luz azul das telas prejudica a qualidade do sono infantil. Uma rotina de brincadeiras reais garante noites mais tranquilas e restauradoras.</p>
          </div>
        </div>
      </section>



      {/* FOOTER CALL TO ACTION */}
      <footer className={styles.footer} id="comprar">
        <div className={styles.footerContent}>
          <h2 className={styles.footerTitle}>Transforme a rotina da sua casa hoje</h2>
          <p className={styles.footerDescription}>
            Por menos que o valor de um lanche, você tem acesso a um manual completo com dezenas de ideias que vão trazer mais conexão e harmonia para a sua família.
          </p>
          
          <div className={styles.footerPriceContainer}>
            <h2>R$ 27,00</h2>
            <p>Pagamento único</p>
          </div>

          <a href="https://pay.kiwify.com.br/E2fB0Kj" target="_blank" rel="noreferrer" className={styles.ctaButtonLarge} style={{ textDecoration: 'none', display: 'inline-block' }}>
            Garantir Meu E-book
          </a>
          
          <div className={styles.securityBadges}>
            <span>✔️ Acesso Imediato</span>
            <span>✔️ Compra Segura</span>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button className={styles.scrollTopButton} onClick={scrollToTop} aria-label="Voltar ao topo">
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
