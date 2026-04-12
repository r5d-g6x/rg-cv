import { useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import ModernCV from './components/ModernCV';
import { profileDataFr, profileDataEn } from './data/richard-profile';
import { generateMarkdown } from './utils/markdownGenerator';

function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const profile = lang === 'fr' ? profileDataFr : profileDataEn;

  const handleGenerateMarkdown = () => {
    const markdown = generateMarkdown(profile);
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profile.name.replace(/\s+/g, '_')}_CV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="no-print flex flex-col gap-2 absolute top-4 right-4">
        {/* Language toggle pill — visible on all screen sizes */}
        <div className="flex rounded-full shadow-sm overflow-hidden border border-gray-200 bg-white/90">
          <button
            onClick={() => setLang('fr')}
            title="Passer en français"
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold transition-colors ${
              lang === 'fr'
                ? 'bg-royal-blue text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <span className="fi fi-fr rounded-sm" style={{ width: '1.8em', height: '1.35em' }}></span>
            <span className="hidden md:inline">FR</span>
          </button>
          <button
            onClick={() => setLang('en')}
            title="Switch to English"
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold transition-colors ${
              lang === 'en'
                ? 'bg-royal-blue text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <span className="fi fi-gb rounded-sm" style={{ width: '1.8em', height: '1.35em' }}></span>
            <span className="hidden md:inline">EN</span>
          </button>
        </div>

        {/* Export Markdown — desktop only */}
        <button
          onClick={handleGenerateMarkdown}
          title="Générer Markdown"
          className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-royal-blue hover:text-royal-blue-dark bg-white/70 hover:bg-white rounded-md shadow-sm border"
          aria-label="Générer le CV en Markdown"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h3l2 3 2-3h3v8h-2v-4l-2 3h-2l-2-3v4H6V7z"/>
          </svg>
          <span>Text (MD)</span>
        </button>

        {/* Print — desktop only */}
        <button
          onClick={() => window.print()}
          title="Imprimer"
          className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-royal-blue hover:text-royal-blue-dark bg-white/70 hover:bg-white rounded-md shadow-sm border"
          aria-label="Imprimer le CV"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h1a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-3a3 3 0 0 1 3-3h1Zm2 0h8V5H8v2Zm8 8H8v4h8v-4Zm3-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
          </svg>
          <span>Imprimer</span>
        </button>
      </div>

      <ModernCV profile={profile} lang={lang} />
    </div>
  );
}

export default App;
