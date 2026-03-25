export function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-4 sm:py-6 ${className}`}>
      {children}
    </section>
  );
}
