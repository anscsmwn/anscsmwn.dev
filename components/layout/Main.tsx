interface MainProps {
  className?: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <>
      <div
        id="main-content"
        className={`mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 md:px-0 md:pt-20 ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Main;
