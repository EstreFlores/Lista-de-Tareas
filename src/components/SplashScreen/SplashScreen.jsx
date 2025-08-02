import React from 'react';
import { SplashContainer, SplashTitle, SplashSubtitle } from "./SplashScreen.style";

const SplashScreen = () => {
  return (
    <SplashContainer>
      <SplashTitle>✨ Bienvenida, Estrella ✨</SplashTitle>
      <SplashSubtitle>Tu lista de tareas está cargando...</SplashSubtitle>
    </SplashContainer>
  );
};

export default SplashScreen;
