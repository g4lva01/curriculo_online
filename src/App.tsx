import React, { useState } from 'react';
import minhaFoto from './assets/153385467.jpg';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tags: string[];
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const listaProjetos: Projeto[] = [
    {
      id: 1,
      titulo: "Extrator de Palavras-chave com N-Gramas",
      descricao: "Aplicação web para extrair palavras-chave de cauda longa usando algoritmos de N-Gramas com análise de frequência.",
      tags: ["Java", "Vite", "Spring Boot", "PostgreSQL"],
    },
    {
      id: 2,
      titulo: "Gerador de Senhas Aleatórias",
      descricao: "Ferramenta web para gerar senhas seguras com critérios personalizáveis, caracteres especiais, números e letras.",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 3,
      titulo: "CRUD de Clientes em JavaScript",
      descricao: "Sistema completo de gerenciamento de clientes com criação, leitura, atualização e exclusão utilizando localStorage.",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 4,
      titulo: "Sistema de Cadastro de Alunos",
      descricao: "Aplicação desktop para gerenciamento de cadastro de alunos com integração a banco de dados MySQL.",
      tags: ["Java", "MySQL", "JDBC"],
    },
    {
      id: 5,
      titulo: "Currículo Online",
      descricao: "Currículo web responsivo e interativo, desenvolvido com HTML e CSS puros para apresentação pessoal.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      titulo: "Gerador de QR Code",
      descricao: "Aplicação web que gera QR Codes personalizados a partir de URLs ou textos com opções de download.",
      tags: ["Python", "Flask", "qrcode"],
    }
  ];

  const habilidades = {
    "Back-End": ["Java", "Spring Boot", "Node.js", "Python", "C/C++", ".Net"],
    "Front-End": ["Angular", "React", "TypeScript", "HTML/CSS", "JavaScript"],
    "Banco de Dados": ["PostgreSQL", "MongoDB", "MySQL"],
    "DevOps": ["Docker", "Jenkins", "Git"],
    "Ferramentas": ["Figma", "VS Code", "IntelliJ"]
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      
      {/* NAVBAR */}
      <header className="navbar">
        <div className="text-xl font-bold tracking-tight">Gabriel.</div>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#curriculo">Currículo</a>
          
          <a href="https://github.com/g4lva01" target="_blank" rel="noreferrer" className="github-btn">
            <svg width="16" height="16" className="fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>

          <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <div className="badge-available">
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            Disponível para trabalhar
          </div>
          <h1>
            Olá, eu sou <br />
            <span>Gabriel</span>
          </h1>
          <p>
            <strong>Desenvolvedor Full Stack</strong> e estudante de Ciência da Computação. 
            Construo aplicações web modernas, escaláveis e estáveis, sempre focado em boas práticas, código limpo e experiências de usuário excepcionais — da ideia ao produto final.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#projetos" className="btn-primary">
              Ver Meus Projetos ➔
            </a>
            <a 
              href="/Curriculo_Gabriel_Galvao.pdf" 
              download
              className="btn-secondary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg 
                width="16" 
                height="16" 
                className="fill-none" 
                viewBox="0 0 24 24" 
                strokeWidth="2"
                stroke={isDarkMode ? '#FF0000' : '#0000FF'}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar Currículo
            </a>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image-wrapper">
            <img src={minhaFoto} alt="Gabriel" />
          </div>
          <div className="badge-projects-count">
            30+
            <span>Projetos</span>
          </div>
          <div className="badge-stack">
            <span className="label">principal stack</span>
            <span className="value">Java • Angular</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE MIM & HABILIDADES (LADO A LADO) */}
      <section id="sobre" className="section-wrapper">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'start' }}>
          
          {/* COLUNA ESQUERDA: QUEM EU SOU */}
          <div>
            <span className="section-tag" style={{ color: isDarkMode ? '#FF0000' : '#0000FF' }}>01. Sobre Mim</span>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Quem Eu Sou?</h2>
            
            <p style={{ lineHeight: '1.7', opacity: 0.85, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Sou Gabriel, estudante de <strong>Ciência da Computação</strong> apaixonado pelo desenvolvimento Full Stack. Construo aplicações web modernas e escaláveis, sempre focado em boas práticas, código limpo e experiências de usuário excepcionais.
            </p>
            <p style={{ lineHeight: '1.7', opacity: 0.85, fontSize: '1.05rem', marginBottom: '2rem' }}>
              Minha jornada começou com Java e fui expandindo meu repertório naturalmente — APIs REST com Spring Boot, interfaces reativas com Angular e infraestrutura com Docker. Acredito que um bom desenvolvedor domina tanto o front quanto o back.
            </p>

            {/* Detalhes com Ícones Circulares com Cores Dinâmicas por Tema */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem', 
              borderTop: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0', 
              paddingTop: '1.5rem', 
              marginBottom: '2.5rem' 
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', opacity: 0.9 }}>
                {/* O span define a cor correspondente ao tema ativo */}
                <span style={{ color: isDarkMode ? '#FF0000' : '#0000FF', display: 'flex', alignItems: 'center' }}>
                  {/* Trocamos 'stroke-current' por stroke="currentColor" */}
                  <svg width="18" height="18" stroke="currentColor" className="fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Brasil
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', opacity: 0.9 }}>
                {/* O span define a cor correspondente ao tema ativo */}
                <span style={{ color: isDarkMode ? '#FF0000' : '#0000FF', display: 'flex', alignItems: 'center' }}>
                  {/* Trocamos 'stroke-current' por stroke="currentColor" */}
                  <svg width="18" height="18" stroke="currentColor" className="fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                Bacharelado em Ciência da Computação — Concluído
              </div>
            </div>

            {/* Subseção Interesses */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Interesses</h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDarkMode ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 0, 255, 0.08)', color: isDarkMode ? '#FFAAAA' : '#4444FF', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                  Música
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDarkMode ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 0, 255, 0.08)', color: isDarkMode ? '#FFAAAA' : '#4444FF', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 11.55C11.2 10.32 9.7 9.5 8 9.5c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.4 0 4.4-1.7 4.80-4H12v-4.45zM16 9.5c-1.7 0-3.2.82-4 2.05V16h.2c.4 2.3 2.4 4 4.8 4 2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
                  Livros
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDarkMode ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 0, 255, 0.08)', color: isDarkMode ? '#FFAAAA' : '#4444FF', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4m-2-2v4m7-2h.01M18 12h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
                  </svg>
                  Jogos
                </span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: CARD INTEGRADO DE HABILIDADES */}
          <div style={{
            background: isDarkMode ? '#111625' : '#F8FAFC',
            border: isDarkMode ? '1px solid #222222' : '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '2.5rem',
            marginTop: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Habilidades & Ferramentas</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {Object.entries(habilidades).map(([categoria, itens]) => {
                let estiloTag = { background: '#1E293B', color: '#94A3B8', padding: '0.4rem 0.9rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '600' };

                if (categoria === "Back-End") {
                  estiloTag = { ...estiloTag, background: 'rgba(0, 75, 255, 0.2)', color: '#38BDF8' };
                } else if (categoria === "Front-End") {
                  estiloTag = { ...estiloTag, background: 'rgba(147, 51, 234, 0.2)', color: '#C084FC' };
                } else if (categoria === "Banco de Dados") {
                  estiloTag = { ...estiloTag, background: 'rgba(22, 163, 74, 0.2)', color: '#4ADE80' };
                } else if (categoria === "DevOps") {
                  estiloTag = { ...estiloTag, background: 'rgba(234, 88, 12, 0.2)', color: '#FB923C' };
                } else if (categoria === "Ferramentas") {
                  estiloTag = { ...estiloTag, background: 'rgba(71, 85, 105, 0.25)', color: '#E2E8F0' };
                }

                return (
                  <div key={categoria}>
                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.7rem', color: '#64748B', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: '700' }}>
                      {categoria}
                    </h4>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {itens.map(item => (
                        <span key={item} style={estiloTag}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="projetos" className="section-wrapper">
        <span className="section-tag" style={{ color: isDarkMode ? '#FF0000' : '#0000FF' }}>02. Portfólio</span>
        <h2 className="section-title">Meus Projetos Recentes</h2>
        <div className="projects-grid">
          {listaProjetos.map(proj => (
            <div key={proj.id} className="project-card">
              <div className="project-card-header">
                <span className="code-icon">&lt;/&gt;</span>
                <div className="tags">
                  {proj.tags.slice(0, 3).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>{proj.titulo}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.75, lineHeight: '1.5', minHeight: '4.5rem', margin: 0 }}>{proj.descricao}</p>
              <div className="project-links">
                <a href="#github" className="project-link github">GitHub</a>
                <a href="#demo" className="project-link demo">Ver Demo ➔</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO CURRÍCULO */}
      <section id="curriculo" className="section-wrapper" style={{ paddingBottom: '5rem' }}>
        <span className="section-tag" style={{ color: isDarkMode ? '#FF0000' : '#0000FF' }}>03. Currículo</span>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Minhas Qualificações</h2>
        
        <p style={{ lineHeight: '1.7', opacity: 0.85, fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Visualize meu currículo acadêmico e profissional diretamente no navegador ou utilize o botão abaixo para salvar uma cópia em PDF.
        </p>

        {/* Container do Visualizador de PDF */}
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
          
          {/* Header interno do visualizador */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2E8F0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: isDarkMode ? '#FF0000' : '#0000FF', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Curriculo_Gabriel_Galvao.pdf</span>
            </div>

            {/* Link direto alternativo caso o navegador não suporte embed */}
            <a 
              href="/Curriculo_Gabriel_Galvao.pdf" 
              download
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg 
                width="14" 
                height="14" 
                className="fill-none" 
                viewBox="0 0 24 24" 
                strokeWidth="2"
                stroke={isDarkMode ? '#FF0000' : '#0000FF'}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </div>

          {/* O Embed do PDF corrigido com o nome exato */}
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '600px', 
            borderRadius: '8px', 
            overflow: 'hidden',
            background: '#525659'
          }}>
            <iframe
              src="/Curriculo_Gabriel_Galvao.pdf#toolbar=1"
              title="Currículo Gabriel Galvão"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Gabriel. Portfólio Ajustado.</p>
      </footer>
    </div>
  );
};

export default App;