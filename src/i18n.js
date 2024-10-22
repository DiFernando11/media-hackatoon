import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      uploadContainerMedia:
        "¡No te detengas! Sube tu imagen para continuar la diversión.",
      titleGalery: "Tu galeria",
      Calavera: "Calavera",
      Zombie: "Zombi",
      Fantasma: "Fantasma",
      Vampiro: "Vampiro",
      Bruja: "Bruja",
      Lobo: "Hombre Lobo",
      Momia: "Momia",
      Calabaza: "Calabaza",
      Araña: "Araña",
      back: "Regresar",
      ulploadImage: "Sube tu imagen",
      rotateModel: "¡Rota tu modelo 3D",
      followCursor: "!Deja que tu modelo siga el cursor!",
      changeLanguage: "Cambiar Idioma",
      actionBackgroundImage: "Agrega una imagen de fondo",
      actionCustomizeBg: "Personaliza tu fondo",
      actionFavoriteMask: "Elige tu mascara favorita",
      actionPersonalizedInv: "Crea una invitacion personalizada",
      selectBgImage: "Selecciona una imagen de fondo predeterminada.",
      selectYourImage: "Selecciona tu propia imagen.",
      uploadBgImage: "Subir imagen de fondo",
      generateBg: "Generate background",
      generateCustomBg: "Generar fondo personalizado",
      replaceFaceDescr:
        "Nuestra IA escoge una mascara para ti, segun el topico elegido, asegurate que se pueda identifcar un rostro en la imagen.",
      invitedFriends: "Invita a tus amigos a tu fiesta de halloween.",
      textHeaderCreated: "Invitacion a mi fiesta de halloween",
      textBodyCreated: "Obligatorio traer disfraz",
      textFooterCreated: "Dia 31 de Octubre, no faltes",
      validTittle:
        "El título no puede tener menos de 8 ni más de 40 caracteres.",
      bodyValid:
        "El cuerpo no puede tener menos de 8 ni más de 120 caracteres.",
      validFooter:
        "La información adicional no puede tener menos de 8 ni más de 60 caracteres.",
      validFontSize:
        "El tamaño de la fuente no puede ser menor de 8px ni mayor a 400px.",
      createInvitation: "Crear invitacion",
      errorsValid: "Tienes errores en tu formulario",
      labelTittle: "Escribe un titulo",
      phTittle: "Te invito a mi fiesta...",
      numberPh: "Define the size...",
      downloadImage: "Descargar imagen",
      shareImage: "Compartir imagen",
      modalErrorShare:
        "La funcion de compartir imagen no esta disponible en este momento, prueba en otro navegador.",
      close: "cerrar",
      writeTypeBg:
        "Escribe el tipo de fondo que deseas y nuestra IA lo hara para ti.",
      alertOnlyIngles:
        "Actualmente, nuestra IA solo puede procesar texto en ingles.",
      validationMaxium:
        "Haz alcanzado el limite de caracteres posibles para enviar a nuestra IA.",
      phWritBg: "Describe claramente lo que necesitas.",
      createdMask: "Crear mascara",
      numberPh: "Define el tamaño...",
      phBodyCreated: "Obligatorio traer disfraz...",
      labelBody: "Cuentales tu asunto",
      addBody: "Agregar cuerpo",
      deletedBody: "Eliminar cuerpo",
      moreInfoFooter: "Dales mas informacion",
      phFooter: "Dia: 31 de Octubre...",
      addFooter: "Agregar cuerpo",
      deletedFooter: "Eliminar asunto adicional",
      troubleTransform: "We're having trouble transforming your image.",
      tryAgain:
        "Intenta cambiando de imagen o intentalo mas tarde, explora con otras funcionalidades que tenemos para ti",
      continueEditing:
        "¡Hey, dejaste tu imagen a medias! ¿Quieres seguir editándola?",
      continueEditingButton: "Seguir editando la imagen",
      noContinueEditing: "No, ya terminé",
      editBg: "Editar fondo"
    },
  },
  en: {
    translation: {
      uploadContainerMedia:
        "Don't stop! Upload your image to continue the fun.",
      titleGalery: "Your gallery",
      Calavera: "Skull",
      Zombie: "Zombie",
      Fantasma: "Ghost",
      Vampiro: "Vampire",
      Bruja: "Witch",
      Lobo: "Werewolf",
      Momia: "Mummy",
      Calabaza: "Pumpkin",
      Araña: "Spider",
      back: "Back",
      ulploadImage: "Upload your image",
      rotateModel: "Rotate your 3D model",
      followCursor: "Let your model follow the cursor!",
      changeLanguage: "Change Language",
      actionBackgroundImage: "Add a background image",
      actionCustomizeBg: "Customize your background",
      actionFavoriteMask: "Choose your favorite mask",
      actionPersonalizedInv: "Create a personalized invitation",
      selectBgImage: "Select a default background image.",
      selectYourImage: "Select your own image.",
      uploadBgImage: "Upload background image",
      generateBg: "Generate background",
      generateCustomBg: "Generate custom background",
      replaceFaceDescr:
        "Our AI chooses a mask for you, based on the chosen topic, making sure a face can be identified in the image.",
      invitedFriends: "Invite your friends to your Halloween party.",
      textHeaderCreated: "Invitation to my Halloween party",
      textBodyCreated: "Mandatory to bring a costume",
      textFooterCreated: "October 31st, don't miss it",
      validTittle:
        "The title cannot be less than 8 or more than 40 characters.",
      bodyValid: "The body cannot be less than 8 or more than 120 characters.",
      validFooter:
        "Additional information cannot be less than 8 or more than 60 characters.",
      validFontSize:
        "The font size cannot be smaller than 8px or larger than 400px.",
      createInvitation: "create invitation",
      errorsValid: "You have errors in your form",
      labelTittle: "Write a title",
      phTittle: "I invite you to my party...",
      numberPh: "Define the size...",
      downloadImage: "Download image",
      shareImage: "Share image",
      modalErrorShare:
        "The image sharing feature is not available at this time, please try another browser.",
      close: "close",
      writeTypeBg:
        "Type the type of background you want and our AI will do it for you.",
      alertOnlyIngles: "Currently, our AI can only process English text.",
      validationMaxium:
        "You have reached the limit of possible characters to send to our AI.",
      phWritBg: "Clearly describe what you need.",
      createdMask: "Create mask",
      phBodyCreated: "Mandatory to bring a costume...",
      labelBody: "Tell them your business",
      addBody: "Add body",
      deletedBody: "Delete body",
      moreInfoFooter: "Give them more information",
      phFooter: "Day: October 31st...",
      addFooter: "Add additional subject",
      deletedFooter: "Delete additional subject",
      troubleTransform: "We're having trouble transforming your image.",
      tryAgain:
        "Try changing the image or try again later, explore other features we have for you",
      continueEditing:
        "Hey, you left your image half-finished! Do you want to continue editing it?",
      continueEditingButton: "Continue editing the image",
      noContinueEditing: "No, I'm done.",
      editBg: "Edit background"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma por defecto
  fallbackLng: "en", // Idioma si el seleccionado no está disponible
  interpolation: {
    escapeValue: false, // React ya hace el escape de las variables
  },
});

export default i18n;
