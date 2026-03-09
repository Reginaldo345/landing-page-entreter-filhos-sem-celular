import React from 'react';
import styles from './App.module.css';
import ebookCover from './assets/img/capa-ebook.jpg';

function App() {
  return (
    <div className={styles.container}>
      {/* HEADER HERO SECTION */}
      <header className={styles.header}>
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
            <div className={styles.priceValue}>R$ 9,90</div>
          </div>

          <div className={styles.heroCtaWrapper}>
            <a href="https://pay.kiwify.com.br/E2fB0Kj" target="_blank" rel="noreferrer" className={styles.ctaButtonPrimary}>
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
      <section className={styles.problemSection}>
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

      {/* WHAT'S INSIDE SECTION */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>O que você vai aprender neste e-book</h2>
        <div className={styles.contentGrid}>
          <div className={styles.contentCard}>
            <div className={styles.icon}>⏱️</div>
            <h3>Brincadeiras Rápidas</h3>
            <p>Atividades fáceis de preparar, ideais para os momentos em que você só tem 15 a 30 minutos disponíveis mas quer estar presente.</p>
          </div>
          <div className={styles.contentCard}>
            <div className={styles.icon}>🎯</div>
            <h3>Custo Zero</h3>
            <p>Esqueça os brinquedos caros. Aprenda a usar sucata, potes plásticos e itens do cotidiano para estimular a criatividade.</p>
          </div>
          <div className={styles.contentCard}>
            <div className={styles.icon}>🧠</div>
            <h3>Desenvolvimento</h3>
            <p>Ideias que promovem a concentração e a coordenação motora, fundamentais para a primeira infância, longe da passividade das telas.</p>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className={styles.footer} id="checkout">
        <div className={styles.footerContent}>
          <h2 className={styles.footerTitle}>Transforme a rotina da sua casa hoje</h2>
          <p className={styles.footerDescription}>
            Por menos que o valor de um lanche, você tem acesso a um manual completo com dezenas de ideias que vão trazer mais conexão e harmonia para a sua família.
          </p>
          
          <div className={styles.footerPriceContainer}>
            <h2>R$ 19,90</h2>
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
    </div>
  );
}

export default App;
