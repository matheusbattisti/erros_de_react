import React from "react";

function CustomButton({ children, className, style }) {
  // Definição de estilos padrão
  const defaultStyle = { backgroundColor: "blue", color: "white" };

  // Combinando estilos padrão com estilos customizados passados por props
  const combinedStyle = { ...defaultStyle, ...style };

  return (
    <button className={className} style={combinedStyle}>
      {children}
    </button>
  );
}

export default CustomButton;
