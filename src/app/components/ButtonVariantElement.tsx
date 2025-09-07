type ButtonProps = { 
  variant?: "primary" | "secondary" | "danger"; 
  disabled?: boolean; 
  loading?: boolean;  
  children: React.ReactNode;
};

export function ButtonVariantElement({ 
  variant = "primary",
  disabled = false,
  loading = false,
  children,
}: ButtonProps) { 
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200"; 

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = { 
    primary: "bg-blue-600 text-white hover:bg-blue-700", 
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`
        ${baseStyle} 
        ${variants[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {loading ? "Carregando..." : children}
    </button>
  )
};
