import React from 'react';

const Button = ({ children, variant = 'primary', onClick, type = 'button', href }) => {
  const baseStyle = "inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 cursor-pointer text-center";
  
  const variants = {
    primary: "bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-dark)] hover:shadow-[0_0_20px_var(--accent-glow)]",
    secondary: "bg-[var(--bg-card)] border border-[var(--text-muted)] text-[var(--text-main)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    glow: "bg-[var(--accent)] text-[var(--bg-dark)] hover:bg-[var(--accent-hover)] hover:shadow-[0_0_25px_var(--accent-glow)]"
  };

  const className = `${baseStyle} ${variants[variant]}`;

  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;