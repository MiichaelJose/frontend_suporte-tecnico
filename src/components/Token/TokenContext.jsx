import { createContext, useContext, useEffect, useState } from 'react';

// Criação de um contexto para armazenar o tempo restante do token
const TokenContext = createContext();

// Provedor do contexto que gerencia o tempo restante do token
export const TokenProvider = ({ children }) => {
  const [expiresIn, setExpiresIn] = useState(null);

  useEffect(() => {
    // Substitua esta lógica pela obtenção real do tempo de expiração do token do seu estado global
    const expiresInFromToken = 1707273406; // Exemplo: tempo de expiração em segundos (1 hora)

    setExpiresIn(expiresInFromToken);

    // Configura o intervalo para verificar a expiração do token a cada segundo
    const timer = setInterval(() => {
      setExpiresIn((prevExpiresIn) => (prevExpiresIn > 0 ? prevExpiresIn - 1 : 0));
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  return (
    <TokenContext.Provider value={{ expiresIn }}>
      {children}
    </TokenContext.Provider>
  );
};

// Hook personalizado para acessar o contexto do token
export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken deve ser usado dentro de um TokenProvider');
  }
  return context;
};