export default function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-barlow text-lg leading-8 text-secondary'>{children}</p>
  );
}
