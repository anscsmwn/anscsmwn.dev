import {
  SiBootstrap,
  SiChakraui,
  SiCplusplus,
  SiDocker,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJava,
  SiJavascript,
  SiJira,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiPrettier,
  SiPython,
  SiReact,
  SiRedux,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVisualstudiocode,
  SiWindows,
  SiYarn,
  SiExpress,
  SiAdobephotoshop,
} from 'react-icons/si';
import Link from 'next/link';
import ToolTipIcon from './ToolTipIcon';
const KnowledgeBase = () => {
  const data = [
    {
      title: 'Languages',
      items: [
        { name: 'C++', icon: SiCplusplus },
        { name: 'Java', icon: SiJava },
        { name: 'Python', icon: SiPython },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'SQL (Relational Database)', icon: SiMysql },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Svelte', icon: SiSvelte },
        { name: 'TailwindCSS', icon: SiTailwindcss },
        { name: 'Material UI', icon: SiMaterialui },
        { name: 'Chakra UI', icon: SiChakraui },
        { name: 'Bootstrap', icon: SiBootstrap },
        { name: 'Redux', icon: SiRedux },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'SQL', icon: SiMysql },
        { name: 'Supabase', icon: SiSupabase },
        { name: 'Firebase', icon: SiFirebase },
      ],
    },
    {
      title: 'Infrastructure',
      items: [{ name: 'Vercel', icon: SiVercel }],
    },
    {
      title: 'Programming tools',
      items: [
        { name: 'Git', icon: SiGit },
        { name: 'Visual Studio Code', icon: SiVisualstudiocode },
        { name: 'Prettier', icon: SiPrettier },
        { name: 'ESLint', icon: SiEslint },
        { name: 'Yarn', icon: SiYarn },
        { name: 'NPM', icon: SiNpm },
        { name: 'Docker', icon: SiDocker },
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
        { name: 'Photoshop', icon: SiAdobephotoshop },
        { name: 'Github', icon: SiGithub },
        { name: 'Figma', icon: SiFigma },
        { name: 'Notion', icon: SiNotion },
        { name: 'Jira', icon: SiJira },
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
