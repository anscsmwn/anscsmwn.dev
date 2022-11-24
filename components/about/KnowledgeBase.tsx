import {
  SiAdobephotoshop,
  SiBootstrap,
  SiCodeigniter,
  SiCplusplus,
  SiEslint,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGraphql,
  SiHeroku,
  SiJavascript,
  SiMysql,
  SiNetlify,
  SiNginx,
  SiNotion,
  SiPhp,
  SiPrettier,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVisualstudiocode,
  SiWebpack,
  SiWindows,
  SiYarn,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiVercel,
} from 'react-icons/si';
import { IoLogoPwa } from 'react-icons/io5';
import Link from 'next/link';
import ToolTipIcon from './ToolTipIcon';
const KnowledgeBase = () => {
  const data = [
    {
      title: 'Languages',
      items: [
        { name: 'C++', icon: SiCplusplus },
        { name: 'PHP', icon: SiPhp },
        { name: 'Python', icon: SiPython },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript (Learning)', icon: SiTypescript },
        { name: 'SQL (Relational Database)', icon: SiMysql },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { name: 'Bootstrap', icon: SiBootstrap },
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        {
          name: 'TailwindCSS',
          icon: SiTailwindcss,
        },
        {
          name: 'PWA (Learning)',
          icon: IoLogoPwa,
        },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'CodeIgniter', icon: SiCodeigniter },
        { name: 'MySQL', icon: SiMysql },
        {
          name: 'Node.js',
          icon: SiNodedotjs,
        },
        {
          name: 'MongoDB (Learning)',
          icon: SiMongodb,
        },
        {
          name: 'Express.js (Learning)',
          icon: SiExpress,
        },
      ],
    },
    {
      title: 'Infrastructure',
      items: [
        { name: 'Netlify', icon: SiNetlify },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Heroku', icon: SiHeroku },
      ],
    },
    {
      title: 'Programming tools',
      items: [
        { name: 'Git', icon: SiGit },
        { name: 'Visual Studio Code', icon: SiVisualstudiocode },
        { name: 'Prettier', icon: SiPrettier },
        { name: 'ESLint', icon: SiEslint },
        { name: 'Yarn', icon: SiYarn },
        { name: 'Webpack (Learning)', icon: SiWebpack },
      ],
    },
    {
      title: 'Operating system',
      items: [
        { name: 'Windows', icon: SiWindows },
        { name: 'Ubuntu', icon: SiUbuntu },
      ],
    },
    {
      title: 'Other services/Software',
      items: [
        { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
        { name: 'Github', icon: SiGithub },
        { name: 'Figma', icon: SiFigma },
        { name: 'Notion', icon: SiNotion },
      ],
    },
  ];
  return (
    <section className="mt-5">
      <h2 id="knowledge-base">
        <Link className="text-4xl" href="#knowledge-base">
          Knowledge Base
        </Link>
      </h2>
      <div className="mt-4 text-xl leading-relaxed dark:text-gray-300">
        <p>Several tools that I used (and currently learning how to use it)</p>
        <p className="text-sm">
          <b>Pro tip:</b> hover to see what it means.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {data.map(({ title, items }, key) => (
            <div className="max-w-[250px]" key={key}>
              <h3 className="mb-2 text-xl">{title}</h3>
              <div className="flex flex-wrap gap-4">
                {items.map((item, idx) => (
                  <ToolTipIcon key={idx} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
