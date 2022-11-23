interface MainProps {
  className?: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <>
      <main
        id="main-content"
        className={`mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8 ${className}`}
        {...props}
      >
        {children}
      </main>
    </>
  );
};

export default Main;
