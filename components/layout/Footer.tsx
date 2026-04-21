const Footer = () => {
  return (
    <footer className="pb-24 pt-5 text-center font-doodle text-xs sm:text-sm md:pb-3 md:pt-0">
      <span className="font-lato">©</span>
      {new Date().getFullYear()} Annas Casmawan Ahmad. All Rights Reserved.
    </footer>
  );
};

export default Footer;
