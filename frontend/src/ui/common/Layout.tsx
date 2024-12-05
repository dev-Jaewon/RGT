type LayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={`flex justify-center min-h-screen overflow-hidden max-h-screen ${
        className || ""
      }`}
    >
      <div className="flex flex-col max-w-[600px] flex-1 bg-[#f5f5f5]">
        {children}
      </div>
    </div>
  );
};
