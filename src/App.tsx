import React, { useState, useEffect } from 'react';
import minhaFoto from './assets/153385467.jpg';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tags: string[];
  githubUrl: string;
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [idioma, setIdioma] = useState<'pt' | 'en'>('pt');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en-US';
  }, [idioma]);

  const conteudos: Record<'pt' | 'en', {
    navAria: string;
    menu: { inicio: string; sobre: string; projetos: string; curriculo: string };
    githubAria: string;
    linkedinAria: string;
    themeAria: string;
    langAria: string;
    hero: {
      disponivel: string;
      saudacao: string;
      descricao: string;
      btnProjetos: string;
      btnCurriculo: string;
      altFoto: string;
      projetosLabel: string;
    };
    sobre: {
      tag: string;
      titulo: string;
      p1: string;
      p2: string;
      local: string;
      formacao: string;
      interesses: string;
      int1: string;
      int2: string;
      int3: string;
      habTitulo: string;
      habilidades: Record<string, string[]>;
    };
    projetos: {
      tag: string;
      titulo: string;
      btnGithub: string;
      githubAriaPrefix: string;
      lista: Projeto[];
    };
    curriculo: {
      tag: string;
      titulo: string;
      descricao: string;
      nomeArquivo: string;
      iframeTitle: string;
    };
    footer: string;
  }> = {
    pt: {
      navAria: "Navegação Principal",
      menu: { inicio: "Início", sobre: "Sobre", projetos: "Projetos", curriculo: "Currículo" },
      githubAria: "Acessar perfil de Gabriel no GitHub (abre em nova aba)",
      linkedinAria: "Acessar perfil de Gabriel no LinkedIn (abre em nova aba)",
      themeAria: isDarkMode ? "Alternar para modo claro" : "Alternar para modo escuro",
      langAria: "Alternar idioma para Inglês",
      hero: {
        disponivel: "Disponível para trabalhar",
        saudacao: "Olá, eu sou",
        descricao: "Desenvolvedor Full Stack e estudante de Ciência da Computação. Construo aplicações web modernas, escaláveis e estáveis, sempre focado em boas práticas, código limpo e experiências de usuário excepcionais — da ideia ao produto final.",
        btnProjetos: "Ver Meus Projetos",
        btnCurriculo: "Baixar Currículo",
        altFoto: "Foto de perfil do desenvolvedor ao ar livre, usando óculos de sol e regata esportiva.",
        projetosLabel: "Projetos"
      },
      sobre: {
        tag: "01. Sobre Mim",
        titulo: "Quem Eu Sou?",
        p1: "Sou Gabriel, estudante de Ciência da Computação apaixonado pelo desenvolvimento Full Stack. Construo aplicações web modernas e escaláveis, sempre focado em boas práticas, código limpo e experiências de usuário excepcionais.",
        p2: "Minha jornada começou com Java e fui expandindo meu repertório naturally — APIs REST com Spring Boot, interfaces reativas com Angular e infraestrutura com Docker. Acredito que um bom desenvolvedor domina tanto o front quanto o back.",
        local: "Localização: Brasil",
        formacao: "Formação: Bacharelado em Ciência da Computação — Concluído",
        interesses: "Interesses",
        int1: "Música", 
        int2: "Livros", 
        int3: "Jogos",
        habTitulo: "Habilidades & Ferramentas",
        habilidades: {
          "Back-End": ["Java", "Spring Boot", "Node.js", "Python", "C/C++", ".Net"],
          "Front-End": ["Angular", "React", "TypeScript", "HTML/CSS", "JavaScript"],
          "Banco de Dados": ["PostgreSQL", "MongoDB", "MySQL"],
          "DevOps": ["Docker", "Jenkins", "Git"],
          "Ferramentas": ["Figma", "VS Code", "IntelliJ"]
        }
      },
      projetos: {
        tag: "02. Portfólio",
        titulo: "Meus Projetos Recentes",
        btnGithub: "GitHub",
        githubAriaPrefix: "Ver código-fonte do projeto",
        lista: [
          {
            id: 1,
            titulo: "Geek Opinião",
            descricao: "Um blog moderno construído em Angular 19 dedicado a centralizar análises, resenhas e opiniões sobre o ecossistema Geek.",
            tags: ["HTML", "CSS", "TypeScript", "JavaScript", "Angular"],
            githubUrl: "https://github.com/g4lva01/Geek-opiniao"
          },
          {
            id: 2,
            titulo: "Processamento de Imagem",
            descricao: "Projeto que realiza modificações e filtros em imagens selecionadas pelo usuário.",
            tags: ["JavaScript", "HTML", "CSS"],
            githubUrl: "https://github.com/g4lva01/processamento-de-imagem"
          },
          {
            id: 3,
            titulo: "Pokédex",
            descricao: "Aplicação interativa que simula uma Pokédex com listagem e detalhes de monstrinhos.",
            tags: ["JavaScript", "HTML", "CSS"],
            githubUrl: "https://github.com/g4lva01/Pokedex"
          },
          {
            id: 4,
            titulo: "Sistema de Gestão para Escola Bíblica Dominical",
            descricao: "Sistema Web para informatizar e otimizar a gestão da Escola Bíblica Dominical.",
            tags: ["Angular", "TypeScript", "HTML", "CSS", "Java", "Spring Boot", "MySQL"],
            githubUrl: "https://github.com/g4lva01/TCC"
          },
          {
            id: 5,
            titulo: "Duelo de Honra",
            descricao: "Duelo de Honra é um jogo de luta desenvolvido em C# e Unity que busca eliminar a complexidade excessiva do gênero, oferecendo controles simples, aprendizado rápido e partidas dinâmicas e acessíveis.",
            tags: ["C#", "Unity"],
            githubUrl: "https://github.com/g4lva01/Duelo_de_honra"
          },
          {
            id: 6,
            titulo: "Poke-Card",
            descricao: "Projeto interativo que simula batalhas e visualização de cartas Poke-Card.",
            tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
            githubUrl: "https://github.com/g4lva01/Poker-card"
          }
        ]
      },
      curriculo: {
        tag: "03. Currículo",
        titulo: "Minhas Qualificações",
        descricao: "Visualize meu currículo acadêmico e profissional diretamente no navegador ou utilize os botões para salvar uma cópia em PDF.",
        nomeArquivo: "Curriculo_Gabriel_Galvao.pdf",
        iframeTitle: "Visualizador de PDF - Currículo de Gabriel Galvão"
      },
      footer: "© 2026 Gabriel. Portfólio Desenvolvido com Foco em Acessibilidade e Performance."
    },
    en: {
      navAria: "Main Navigation",
      menu: { inicio: "Home", sobre: "About", projetos: "Projects", curriculo: "Resume" },
      githubAria: "Access Gabriel's GitHub profile (opens in a new tab)",
      linkedinAria: "Access Gabriel's LinkedIn profile (opens in a new tab)",
      themeAria: isDarkMode ? "Switch to light mode" : "Switch to dark mode",
      langAria: "Switch language to Portuguese",
      hero: {
        disponivel: "Available for work",
        saudacao: "Hello, I am",
        descricao: "Full Stack Developer and Computer Science student. I build modern, scalable, and stable web applications, always focused on best practices, clean code, and exceptional user experiences — from idea to final product.",
        btnProjetos: "See My Projects",
        btnCurriculo: "Download Resume",
        altFoto: "Developer profile picture outdoors, wearing sunglasses and a sports tank top.",
        projetosLabel: "Projects"
      },
      sobre: {
        tag: "01. About Me",
        titulo: "Who Am I?",
        p1: "I'm Gabriel, a Computer Science student passionate about Full Stack development. I build modern and scalable web applications, always focusing on best practices, clean code, and exceptional user experiences.",
        p2: "My journey started with Java and I naturally expanded my repertoire — REST APIs with Spring Boot, reactive interfaces with Angular, and infrastructure with Docker. I believe a good developer masters both front and back end.",
        local: "Location: Brazil",
        formacao: "Education: Bachelor's in Computer Science — Completed",
        interesses: "Interests",
        int1: "Music", 
        int2: "Books", 
        int3: "Games",
        habTitulo: "Skills & Tools",
        habilidades: {
          "Back-End": ["Java", "Spring Boot", "Node.js", "Python", "C/C++", ".Net"],
          "Front-End": ["Angular", "React", "TypeScript", "HTML/CSS", "JavaScript"],
          "Database": ["PostgreSQL", "MongoDB", "MySQL"],
          "DevOps": ["Docker", "Jenkins", "Git"],
          "Tools": ["Figma", "VS Code", "IntelliJ"]
        }
      },
      projetos: {
        tag: "02. Portfolio",
        titulo: "My Recent Projects",
        btnGithub: "GitHub",
        githubAriaPrefix: "View source code of project",
        lista: [
          {
            id: 1,
            titulo: "Geek Opinion",
            descricao: "A modern blog built with Angular 19 dedicated to centralizing analyses, reviews, and opinions about the Geek ecosystem.",
            tags: ["HTML", "CSS", "TypeScript", "JavaScript", "Angular"],
            githubUrl: "https://github.com/g4lva01/Geek-opiniao"
          },
          {
            id: 2,
            titulo: "Image Processing",
            descricao: "Project designed to perform image manipulations and filters on user-selected files.",
            tags: ["JavaScript", "HTML", "CSS"],
            githubUrl: "https://github.com/g4lva01/processamento-de-imagem"
          },
          {
            id: 3,
            titulo: "Pokédex",
            descricao: "Interactive web application simulating a Pokédex with character listings and detailed stats.",
            tags: ["JavaScript", "HTML", "CSS"],
            githubUrl: "https://github.com/g4lva01/Pokedex"
          },
          {
            id: 4,
            titulo: "Sunday Bible School Management System",
            descricao: "Web application developed to computerize and streamline the management of Sunday Bible School classes.",
            tags: ["Angular", "TypeScript", "HTML", "CSS", "Java", "Spring Boot", "MySQL"],
            githubUrl: "https://github.com/g4lva01/TCC"
          },
          {
            id: 5,
            titulo: "Duel of Honor",
            descricao: "A fighting game developed in C# and Unity focused on dynamic controls and responsive combat mechanics.",
            tags: ["C#", "Unity"],
            githubUrl: "https://github.com/g4lva01/Duelo_de_honra"
          },
          {
            id: 6,
            titulo: "Poke-Card",
            descricao: "Interactive simulation for previewing and battling with Poke-Cards.",
            tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
            githubUrl: "https://github.com/g4lva01/Poker-card"
          }
        ]
      },
      curriculo: {
        tag: "03. Resume",
        titulo: "My Qualifications",
        descricao: "View my academic and professional resume directly in the browser or use the download buttons to save a PDF copy.",
        nomeArquivo: "Resume_Gabriel_Galvao.pdf",
        iframeTitle: "PDF Viewer - Gabriel Galvão's Resume"
      },
      footer: "© 2026 Gabriel. Portfolio Built with Accessibility and Performance Focus."
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      
      {/* NAVBAR / HEADER */}
      <header className="navbar" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} aria-label={conteudos[idioma].navAria}>
          <a href="#inicio">{conteudos[idioma].menu.inicio}</a>
          <a href="#sobre">{conteudos[idioma].menu.sobre}</a>
          <a href="#projetos">{conteudos[idioma].menu.projetos}</a>
          <a href="#curriculo">{conteudos[idioma].menu.curriculo}</a>
          
          {/* Botão GitHub */}
          <a 
            href="https://github.com/g4lva01" 
            target="_blank" 
            rel="noreferrer" 
            className="github-btn"
            aria-label={conteudos[idioma].githubAria}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
              style={{ fill: isDarkMode ? '#FF0000' : '#0000FF' }}
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* Botão LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/gabriel-g4lva0/" 
            target="_blank" 
            rel="noreferrer" 
            className="github-btn"
            aria-label={conteudos[idioma].linkedinAria}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
              style={{ fill: isDarkMode ? '#FF0000' : '#0000FF' }}
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Botão Idioma */}
          <button 
            className="lang-toggle" 
            onClick={() => setIdioma(idioma === 'pt' ? 'en' : 'pt')} 
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
            aria-label={conteudos[idioma].langAria}
          >
            <span aria-hidden="true">{idioma === 'pt' ? '🇺🇸' : '🇧🇷'}</span>
          </button>

          {/* Botão Tema */}
          <button 
            className="theme-toggle" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={conteudos[idioma].themeAria}
            aria-pressed={isDarkMode}
          >
            <span aria-hidden="true">{isDarkMode ? '☀️' : '🌙'}</span>
          </button>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        
        {/* HERO SECTION */}
        <section id="inicio" className="hero-section" aria-label="Apresentação inicial">
          <div className="hero-content">
            <div className="badge-available">
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" aria-hidden="true"></span>
              <span>{conteudos[idioma].hero.disponivel}</span>
            </div>
            <h1>
              {conteudos[idioma].hero.saudacao} <br />
              <span>Gabriel</span>
            </h1>
            <p>
              {conteudos[idioma].hero.descricao}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#projetos" className="btn-primary">
                {conteudos[idioma].hero.btnProjetos} <span aria-hidden="true">➔</span>
              </a>
              
              {/* Dropdown de Download do Currículo */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="btn-secondary"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    className="fill-none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke={isDarkMode ? '#FF0000' : '#0000FF'}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {conteudos[idioma].hero.btnCurriculo}
                  <span aria-hidden="true" style={{ fontSize: '0.7rem', marginLeft: '0.2rem', transition: 'transform 0.2s', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </button>

                {/* Menu Flutuante */}
                {isDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '115%',
                    left: 0,
                    minWidth: '190px',
                    backgroundColor: isDarkMode ? '#111625' : '#FFFFFF',
                    border: isDarkMode ? '1px solid #222222' : '1px solid #E2E8F0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    zIndex: 50,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <a 
                      href="/Curriculo_Gabriel_Galvao_Soares_Silva_PT.pdf" 
                      download
                      onClick={() => setIsDropdownOpen(false)}
                      style={{
                        padding: '0.75rem 1rem',
                        color: isDarkMode ? '#FFFFFF' : '#1E293B',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2E8F0',
                        transition: 'background 0.2s'
                      }}
                    >
                      🇧🇷 Português (PT-BR)
                    </a>
                    
                    <a 
                      href="/Gabriel_Galvao_Soares_Silva_Resume_EN.pdf" 
                      download
                      onClick={() => setIsDropdownOpen(false)}
                      style={{
                        padding: '0.75rem 1rem',
                        color: isDarkMode ? '#FFFFFF' : '#1E293B',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'background 0.2s'
                      }}
                    >
                      🇺🇸 English (EN)
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img src={minhaFoto} alt={conteudos[idioma].hero.altFoto} />
            </div>
            <div className="badge-projects-count">
              30+
              <span>{conteudos[idioma].hero.projetosLabel}</span>
            </div>
            <div className="badge-stack">
              <span className="label">principal stack</span>
              <span className="value">Java • Angular</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO SOBRE MIM & HABILIDADES */}
        <section id="sobre" className="section-wrapper" aria-labelledby="titulo-sobre">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* COLUNA ESQUERDA: QUEM EU SOU */}
            <div>
              <span className="section-tag" style={{ color: isDarkMode ? '#FF0000' : '#0000FF' }}>{conteudos[idioma].sobre.tag}</span>
              <h2 id="titulo-sobre" className="section-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>{conteudos[idioma].sobre.titulo}</h2>
              
              <p style={{ lineHeight: '1.7', opacity: 0.85, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                {conteudos[idioma].sobre.p1}
              </p>
              <p style={{ lineHeight: '1.7', opacity: 0.85, fontSize: '1.05rem', marginBottom: '2rem' }}>
                {conteudos[idioma].sobre.p2}
              </p>

              {/* Lista de dados biográficos */}
              <ul style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem', 
                borderTop: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0', 
                paddingTop: '1.5rem', 
                marginBottom: '2.5rem',
                listStyle: 'none',
                paddingLeft: 0
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', opacity: 0.9 }}>
                  <span style={{ color: isDarkMode ? '#FF0000' : '#0000FF', display: 'flex', alignItems: 'center' }} aria-hidden="true">
                    <svg width="18" height="18" stroke="currentColor" className="fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  {conteudos[idioma].sobre.local}
                </li>
                
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', opacity: 0.9 }}>
                  <span style={{ color: isDarkMode ? '#FF0000' : '#0000FF', display: 'flex', alignItems: 'center' }} aria-hidden="true">
                    <svg width="18" height="18" stroke="currentColor" className="fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </span>
                  {conteudos[idioma].sobre.formacao}
                </li>
              </ul>

              {/* Subseção Interesses */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>{conteudos[idioma].sobre.interesses}</h3>
                <ul style={{ display: 'flex', gap: '0.75rem', listStyle: 'none', paddingLeft: 0 }}>
                  <li>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDarkMode ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 0, 255, 0.08)', color: isDarkMode ? '#FFAAAA' : '#4444FF', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      {conteudos[idioma].sobre.int1}
                    </span>
                  </li>
                  <li>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDarkMode ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 0, 255, 0.08)', color: isDarkMode ? '#FFAAAA' : '#4444FF', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11.55C11.2 10.32 9.7 9.5 8 9.5c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.4 0 4.4-1.7 4.80-4H12v-4.45zM16 9.5c-1.7 0-3.2.82-4 2.05V16h.2c.4 2.3 2.4 4 4.8 4 2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
                      {conteudos[idioma].sobre.int2}
                    </span>
                  </li>
                  <li>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDarkMode ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 0, 255, 0.08)', color: isDarkMode ? '#FFAAAA' : '#4444FF', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4m-2-2v4m7-2h.01M18 12h.01" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
                      </svg>
                      {conteudos[idioma].sobre.int3}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA DIREITA: CARD DE HABILIDADES */}
            <aside style={{
              background: isDarkMode ? '#111625' : '#F8FAFC',
              border: isDarkMode ? '1px solid #222222' : '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                {conteudos[idioma].sobre.habTitulo}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {Object.entries(conteudos[idioma].sobre.habilidades).map(([categoria, lista]) => (
                  <div key={categoria}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>
                      {categoria}
                    </span>
                    <div className="tags">
                      {lista.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="projetos" className="section-wrapper" aria-labelledby="titulo-projetos">
          <span className="section-tag" style={{ color: isDarkMode ? '#FF0000' : '#0000FF' }}>{conteudos[idioma].projetos.tag}</span>
          <h2 id="titulo-projetos" className="section-title">{conteudos[idioma].projetos.titulo}</h2>
          
          <div className="projects-grid">
            {conteudos[idioma].projetos.lista.map(proj => (
              <article key={proj.id} className="project-card" aria-labelledby={`proj-titulo-${proj.id}`}>
                <div className="project-card-header">
                  <span className="code-icon" aria-hidden="true">&lt;/&gt;</span>
                  <ul className="tags" style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', paddingLeft: 0, flexWrap: 'wrap' }}>
                    {proj.tags.map(t => (
                      <li key={t} className="tag">{t}</li>
                    ))}
                  </ul>
                </div>
                
                <h3 id={`proj-titulo-${proj.id}`} style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                  {proj.titulo}
                </h3>
                
                <p style={{ fontSize: '0.9rem', opacity: 0.75, lineHeight: '1.5', minHeight: '4.5rem', margin: 0 }}>
                  {proj.descricao}
                </p>
                
                <div className="project-links">
                  <a 
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link github"
                    aria-label={`${conteudos[idioma].projetos.githubAriaPrefix} ${proj.titulo}`}
                  >
                    {conteudos[idioma].projetos.btnGithub}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SEÇÃO CURRÍCULO */}
        <section id="curriculo" className="section-wrapper" style={{ paddingBottom: '5rem' }} aria-labelledby="titulo-curriculo">
          <span className="section-tag" style={{ color: isDarkMode ? '#FF0000' : '#0000FF' }}>{conteudos[idioma].curriculo.tag}</span>
          <h2 id="titulo-curriculo" className="section-title" style={{ marginBottom: '1.5rem' }}>{conteudos[idioma].curriculo.titulo}</h2>
          
          <p style={{ lineHeight: '1.7', opacity: 0.85, fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
            {conteudos[idioma].curriculo.descricao}
          </p>

          <div style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            background: isDarkMode ? '#111625' : '#F8FAFC',
            border: isDarkMode ? '1px solid #222222' : '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '1.5rem', 
              paddingBottom: '1rem', 
              borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: isDarkMode ? '#FF0000' : '#0000FF', display: 'flex', alignItems: 'center' }} aria-hidden="true">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{conteudos[idioma].curriculo.nomeArquivo}</span>
              </div>
                           
                {/* Botões de Download PT e EN */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a 
                    href="/Curriculo_Gabriel_Galvao_Soares_Silva_PT.pdf" 
                    download
                    className="btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    aria-label="Baixar Currículo em Português (PDF)"
                  >
                    <svg width="14" height="14" className="fill-none" viewBox="0 0 24 24" strokeWidth="2" stroke={isDarkMode ? '#FF0000' : '#0000FF'} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    PT
                  </a>
                                  <a 
                  href="/Gabriel_Galvao_Soares_Silva_Resume_EN.pdf" 
                  download
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  aria-label="Download Resume in English (PDF)"
                >
                  <svg width="14" height="14" className="fill-none" viewBox="0 0 24 24" strokeWidth="2" stroke={isDarkMode ? '#FF0000' : '#0000FF'} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  EN
                </a>
              </div>
            </div>

            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: '600px', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              background: '#525659' 
            }}>
              <iframe
                src={idioma === 'pt' ? "/Curriculo_Gabriel_Galvao_Soares_Silva_PT.pdf#toolbar=1" : "/Gabriel_Galvao_Soares_Silva_Resume_EN.pdf#toolbar=1"}
                title={conteudos[idioma].curriculo.iframeTitle}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: isDarkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #E2E8F0',
        fontSize: '0.875rem',
        opacity: 0.7
      }}>
        <p>{conteudos[idioma].footer}</p>
      </footer>

    </div>
  );
};

export default App;