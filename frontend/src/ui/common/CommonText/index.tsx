type CommonTextProps = {
  text: string;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const CommonText = ({ text, className, ...props }: CommonTextProps) => {
  return (
    <p
      className={`flex justify-center items-center ${className || ""}`}
      {...props}
    >
      {text}
    </p>
  );
};
