import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { 
  Play, Copy, ArrowLeft, Heart, CheckCircle2, 
  Sparkles, Coffee, ChevronRight
} from 'lucide-react';

// Importar os dados do ficheiro separado!
import { CATEGORIES, VIDEOS, GLOSSARY_TERMS } from './data.js';

// --- COMPONENTE PARA ROLAR PARA O TOPO SEMPRE QUE MUDAR DE PÁGINA ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#000000] text-[#E0E0E0] font-sans selection:bg-[#00D4FF] selection:text-white flex flex-col">
        
        {/* HEADER GLOBAL */}
        <header className="fixed top-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold text-white tracking-wider flex items-center gap-2 hover:scale-105 transition-transform">
                <Play className="w-8 h-8 text-[#00D4FF]" fill="#00D4FF" />
                <span>AI<span className="text-[#00D4FF]">PROMPTS</span></span>
              </Link>
              <Link to="/glossary" className="hidden md:block text-sm font-bold tracking-widest text-gray-400 hover:text-white transition-colors">
                GLOSSARY
              </Link>
            </div>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-full flex items-center gap-2 hover:bg-yellow-500/10 transition-colors">
              <Heart size={18} /> DONATE
            </a>
          </div>
        </header>

        {/* ÁREA ONDE AS PÁGINAS MUDAM */}
        <main className="pt-16 pb-20 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/glossary" element={<GlossaryList />} />
            <Route path="/glossary/:articleId" element={<ArticleView />} />
            <Route path="/video/:videoId" element={<VideoView />} />
          </Routes>
        </main>

        {/* FOOTER GLOBAL */}
        <footer className="bg-[#121212] border-t border-gray-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <Play className="w-5 h-5 text-gray-500" /> © {new Date().getFullYear()} AI Prompts. All rights reserved.
            </div>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm font-medium">Terms</button>
              <button className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm font-medium">Privacy</button>
            </div>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F3CE56] font-semibold text-sm flex items-center gap-2 transition-colors">
              <Heart className="w-4 h-4" /> DONATE
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

// --- PÁGINA INICIAL (HOME) ---
function Home() {
  const [isPlayingHero, setIsPlayingHero] = useState(false); 
  const heroVideoId = "wvFRN2nX7WM"; 

  return (
    <div>
      <section className="relative w-full max-w-7xl mx-auto px-4 py-8">
        <div className="relative w-full aspect-video bg-[#121212] rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(0,212,255,0.1)] group">
          {isPlayingHero ? (
            <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&rel=0`} title="Hero Video" frameBorder="0" allowFullScreen></iframe>
          ) : (
            <div className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center" onClick={() => setIsPlayingHero(true)}>
              <img src={`https://img.youtube.com/vi/${heroVideoId}/maxresdefault.jpg`} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
              <div className="relative z-10 flex flex-col items-center gap-3 group-hover:scale-110 transition-transform">
                <div className="bg-red-600 text-white rounded-full p-5 shadow-[0_0_20px_rgba(220,38,38,0.6)] group-hover:bg-red-500 transition-colors">
                  <Play className="w-12 h-12 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">The Crow and the Throne</h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">A fully AI-generated Dark Fantasy cinematic journey. This 15-minute epic project explores the limits of visual storytelling, lighting consistency, and oppressive worldbuilding.</p>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-sm text-gray-500 italic">Enjoyed the work? Consider supporting the creation of more free content.</p>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#D4AF37] text-black hover:bg-[#F3CE56] px-8 py-3 rounded-full font-bold text-lg mx-auto w-fit">
              <Coffee className="w-5 h-5" fill="black" /> SUPPORT THE CREATOR
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-4"><div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div></div>

      <div className="max-w-7xl mx-auto px-4 pb-12 space-y-12">
        {CATEGORIES.map(category => {
          const categoryVideos = VIDEOS.filter(v => v.categoryId === category.id);
          if (categoryVideos.length === 0) return null;
          const CategoryIcon = category.icon;
          return (
            <section key={category.id} className="relative">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CategoryIcon className="w-5 h-5 text-[#00D4FF]" /> {category.name}
              </h2>
              <div className="flex flex-wrap gap-6 pb-4">
                {categoryVideos.map(video => (
                  <div key={video.id} className={`shrink-0 flex flex-col group ${video.aspect === '9/16' ? 'w-48' : 'w-72 md:w-80'}`}>
                    <div className={`relative w-full rounded-lg overflow-hidden bg-[#121212] border border-gray-800 group-hover:border-[#00D4FF]/50 transition-colors ${video.aspect === '9/16' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-mono rounded">{video.duration}</div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {category.id === 'shorts' ? (
                          <button onClick={() => window.open(`https://www.youtube.com/shorts/${video.id}`, '_blank')} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2">
                            <Play className="w-4 h-4" fill="currentColor" /> WATCH
                          </button>
                        ) : (
                          // LÊ O SLUG AQUI
                          <Link to={`/video/${video.slug}`} className="bg-[#00D4FF] hover:bg-[#66e5ff] text-black px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all">
                            WATCH AND VIEW PROMPT
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-white font-medium text-sm line-clamp-2">{video.title}</h3>
                      {category.id !== 'shorts' && (
                        // E LÊ O SLUG AQUI
                        <Link to={`/video/${video.slug}`} className="mt-2 text-[#00D4FF] hover:text-white text-xs font-semibold tracking-wide flex items-center gap-1 transition-all hover:translate-x-1">
                          WATCH AND VIEW PROMPT <ArrowLeft className="w-3 h-3 rotate-180" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

// --- PÁGINA DO VÍDEO INDIVIDUAL ---
function VideoView() {
  const { videoId } = useParams();
  // LÊ O SLUG NA BARRA DE ENDEREÇOS
  const video = VIDEOS.find(v => v.slug === videoId);
  const [copied, setCopied] = useState(false);

  if (!video) return <div className="text-white text-center py-20">Video not found.</div>;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 w-full animate-fade-in">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Portfolio
      </Link>
      <div className={`relative mx-auto bg-[#121212] rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-8 ${video.aspect === '9/16' ? 'max-w-md aspect-[9/16]' : 'w-full aspect-video'}`}>
        <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`} title={video.title} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{video.title}</h1>
            <span className="inline-block px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-xs text-gray-300">{CATEGORIES.find(c => c.id === video.categoryId)?.name}</span>
          </div>
          <div className="bg-[#121212] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <span className="text-sm font-semibold text-gray-300">RAW PROMPT</span>
              <button onClick={() => handleCopy(video.prompt)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'bg-[#00D4FF]/10 text-[#00D4FF]'}`}>
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'COPIED!' : 'COPY PROMPT'}
              </button>
            </div>
            <div className="p-5 text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">{video.prompt}</div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#D4AF37] mb-4 border-b border-gray-800 pb-2">Deductive Prompt Analysis</h3>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed bg-[#121212]/50 p-6 rounded-xl border border-gray-800/50 whitespace-pre-wrap">{video.analysis}</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-[#121212] to-black border border-gray-800 rounded-xl p-6 text-center shadow-xl">
            <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">Support the Project</h4>
            <p className="text-sm text-gray-400 mb-6">If this prompt saved you hours of testing, consider buying me a coffee.</p>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-black hover:bg-[#F3CE56] px-4 py-3 rounded-lg font-bold">
              $1 OR MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- PÁGINA DA LISTA DO GLOSSÁRIO ---
function GlossaryList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 w-full animate-fade-in">
      <div className="text-center mb-16 mt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cinematic <span className="text-[#00D4FF]">Glossary</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">A technical guide to the vocabulary used to command AI video models.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {GLOSSARY_TERMS.map((item) => (
          <div key={item.id} className="bg-[#121212] border border-gray-800 rounded-xl p-8 shadow-lg hover:border-gray-600 transition-all flex flex-col h-full group">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-4">{item.term}</h2>
              <span className="inline-block px-3 py-1 mb-6 bg-gray-900 border border-gray-700 rounded-full text-xs font-semibold text-[#D4AF37]">{item.category}</span>
              <p className="text-gray-400 leading-relaxed mb-8 text-base">{item.definition}</p>
            </div>
            <div className="pt-6 border-t border-gray-800 mt-auto">
              <Link to={`/glossary/${item.id}`} className="flex items-center gap-2 text-[#00D4FF] hover:text-white text-sm font-bold tracking-widest transition-all hover:translate-x-2 w-fit">
                READ FULL ARTICLE <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors font-semibold">
          <ArrowLeft className="w-5 h-5" /> Back to Video Portfolio
        </Link>
      </div>
    </div>
  );
}

// --- PÁGINA DO ARTIGO INDIVIDUAL DO BLOG ---
function ArticleView() {
  const { articleId } = useParams();
  const article = GLOSSARY_TERMS.find(a => a.id === articleId);

  if (!article) return <div className="text-white text-center py-20">Article not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 w-full animate-fade-in">
      <Link to="/glossary" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D4FF] mb-10 transition-colors font-semibold tracking-wide">
        <ArrowLeft className="w-5 h-5" /> Back to Glossary
      </Link>
      <article className="bg-[#121212] border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
        <header className="mb-10 border-b border-gray-800 pb-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 bg-gray-900 border border-gray-700 rounded-full text-sm font-bold text-[#D4AF37] tracking-widest">
            {article.category.toUpperCase()}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{article.term}</h1>
          <p className="text-xl text-gray-400 italic font-light max-w-2xl mx-auto">"{article.definition}"</p>
        </header>
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {article.fullArticle.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 bg-black/60 border border-[#00D4FF]/30 rounded-xl p-8 shadow-[0_0_20px_rgba(0,212,255,0.05)]">
          <h4 className="text-[#00D4FF] text-sm font-bold tracking-widest mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> ACTIONABLE PROMPT ENGINEERING TIP
          </h4>
          <p className="text-gray-300 font-mono text-lg bg-black/50 p-4 rounded-lg border border-gray-800">{article.promptTip}</p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm mb-4">Did this article help you improve your AI generations?</p>
          <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#D4AF37] text-black hover:bg-[#F3CE56] px-8 py-3 rounded-full font-bold text-lg">
            <Coffee className="w-5 h-5" fill="black" /> SUPPORT SYNTHVISUALS
          </a>
        </div>
      </article>
    </div>
  );
}
