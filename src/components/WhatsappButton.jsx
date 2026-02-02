export default function WhatsappButton({
  href = 'https://wa.me/34600000000',
  children = 'Reparar',
  variant = 'primary',
  className = '',
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    px-4 py-2 rounded-lg
    text-sm font-medium
    transition-all duration-300
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-yellow-200 to-yellow-400
      text-gray-900
      shadow-sm
      hover:from-yellow-300 hover:to-yellow-500
      hover:shadow-md
    `,
    soft: `
      bg-yellow-100 text-gray-800
      border border-yellow-200
      hover:bg-yellow-200
    `,
    outline: `
      border border-yellow-400
      text-yellow-600
      hover:bg-yellow-400 hover:text-black
    `,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
