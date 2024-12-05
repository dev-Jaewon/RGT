export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[600px] flex-1">{children}</div>
    </div>
  );
};
