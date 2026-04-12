import type { FC } from 'react';
import { ProfileData } from '../data/profile';

const LABELS = {
  fr: {
    profile: 'Profil Professionnel',
    experience: 'Expérience Professionnelle',
    education: 'Formation',
    contact: 'Contact',
    devAndLead: 'Compétences Techniques',
    aiDevTools: 'Outils IA de développement',
    tooling: 'Outils & DevOps',
    softSkills: 'Soft Skills',
    languages: 'Langues',
    interests: "Centres d'intérêt",
  },
  en: {
    profile: 'Professional Profile',
    experience: 'Professional Experience',
    education: 'Education',
    contact: 'Contact',
    devAndLead: 'Technical Skills',
    aiDevTools: 'AI Dev Tools',
    tooling: 'Tooling & DevOps',
    softSkills: 'Soft Skills',
    languages: 'Languages',
    interests: 'Interests',
  },
} as const;

interface ModernCVProps {
  profile: ProfileData;
  lang?: 'fr' | 'en';
}

const ModernCV: FC<ModernCVProps> = ({ profile, lang = 'en' }) => {
  const L = LABELS[lang];
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-2xl cv-root">
      <div className="flex flex-col lg:flex-row cv-columns">
        {/* Sidebar */}
        <div className="lg:w-1/3 bg-gray-900 text-white cv-sidebar">
          <div className="p-8">
            {/* Profile Photo */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-royal-blue">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-royal-blue text-white text-3xl font-bold">
                    {initials}
                  </div>
                )}
              </div>
              <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
              <div className="text-royal-blue font-semibold text-lg leading-tight">
                {profile.title}
              </div>
              <div className="text-gray-400 mt-2">{profile.subtitle}</div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-royal-blue border-b border-gray-700 pb-2">
                {L.contact}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope w-5 text-royal-blue"></i>
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-royal-blue transition-colors text-sm"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt w-5 text-royal-blue"></i>
                  <span className="text-sm">{profile.location}</span>
                </div>
                {profile.linkedin && (
                  <div className="flex items-center gap-3">
                    <i className="fab fa-linkedin w-5 text-royal-blue"></i>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-royal-blue transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                  </div>
                )}
                {profile.website && (
                  <div className="flex items-center gap-3">
                    <i className="fas fa-globe w-5 text-royal-blue"></i>
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-royal-blue transition-colors text-sm"
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-royal-blue border-b border-gray-700 pb-2">
                {L.devAndLead}
              </h2>
              <div className="space-y-3">
                {profile.skills.technical.map((skill, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm">{skill.description}</span>
                    <span className="mt-1 inline-block text-xs text-gray-300">
                      {'> '}
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Dev Tools */}
            {profile.skills.aiTools && profile.skills.aiTools.length > 0 && (
              <div className="mb-8 avoid-break">
                <h2 className="text-xl font-bold mb-4 text-royal-blue border-b border-gray-700 pb-2">
                  {L.aiDevTools}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.aiTools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-royal-blue bg-opacity-20 text-royal-blue text-xs rounded border border-royal-blue border-opacity-40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tooling CI/CD */}
            <div className="mb-8 print-break-before after-break-offset avoid-break">
              <h2 className="text-xl font-bold mb-4 text-royal-blue border-b border-gray-700 pb-2">
                {L.tooling}
              </h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-8 avoid-break">
              <h2 className="text-xl font-bold mb-4 text-royal-blue border-b border-gray-700 pb-2">
                {L.softSkills}
              </h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8 avoid-break">
              <h2 className="text-xl font-bold mb-4 text-royal-blue border-b border-gray-700 pb-2">
                {L.languages}
              </h2>
              <div className="space-y-2">
                {profile.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{lang.name}</span>
                    <span className="text-xs px-2 py-1 rounded">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            {profile.interests.length > 0 && (
              <div className="avoid-break">
                <h2 className="text-xl font-bold mb-4 text-royal-blue border-b border-gray-700 pb-2">
                  {L.interests}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-2/3 p-8 cv-main">
          {/* Summary */}
          <section className="mb-12 avoid-break">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-royal-blue pb-2">
              {L.profile}
            </h2>
            <p className="text-gray-700 leading-relaxed">{profile.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-royal-blue pb-2">
              {L.experience}
            </h2>
            <div className="space-y-6">
              {profile.experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`border-l-4 border-royal-blue pl-6 relative avoid-break ${
                    index === 3 ? 'print-break-before after-break-offset' : ''
                  }`}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-royal-blue rounded-full"></div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center gap-3">
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-6 h-6 object-contain rounded bg-white"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      )}
                      <h4 className="text-lg font-medium text-royal-blue">
                        {exp.url || (exp.urls && exp.urls.length > 0) ? (
                          <a
                            href={(exp.url ?? exp.urls?.[0]) as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{exp.period}</p>
                    <div className="text-gray-700 mb-4 leading-relaxed space-y-2">
                      {exp.description.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12 avoid-break">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-royal-blue pb-2">
              {L.education}
            </h2>
            <div className="space-y-6">
              {profile.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-royal-blue pl-6 relative avoid-break"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-royal-blue rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    {edu.logo && (
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="w-6 h-6 object-contain rounded bg-white"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                    <h4 className="text-lg font-medium text-royal-blue">{edu.school}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{edu.period}</p>
                  {edu.description && (
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModernCV;
