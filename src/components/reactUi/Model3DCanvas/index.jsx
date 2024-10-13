import React, { useEffect, useRef } from "react";

import initThreeJS from "../../../utils/initModelCanvas";

const Model3DCanvas = ({ className }) => {
  const canvasRef = useRef(null);
  // const [currentModel, setCurrentModel] = React.useState(initialModel);

  // Función que inicializa o actualiza el canvas
  const initializeCanvas = () => {
    console.log('CUANTAS VECES ENTRO')
    const canvas = canvasRef.current;
    const cleanup = initThreeJS(canvas);

    // Retornar una función de limpieza cuando el componente se desmonte o se actualice
    return () => cleanup();
  };

  // Inicialización inicial
  useEffect(() => {
    return initializeCanvas();
  }, []);

  //   // Suscripción al cambio de tema
  //   useEffect(() => {
  //     const unsubscribe = topicHalloweenStore.subscribe((newTopic) => {
  //       setCurrentModel(newTopic);
  //       initializeCanvas(); // Actualizar canvas cuando cambie el tema
  //     });
  //     return () => unsubscribe();
  //   }, [currentModel]);

  return <canvas className={className} ref={canvasRef}></canvas>;
};

export default Model3DCanvas;
