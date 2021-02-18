const editorReducer = (state, action) => {
    switch (action.type) {
      case "SET_TITULO":
        return {
          ...state,
          titulo: action.text
        };
      case "SET_SINOPSIS":
        return {
          ...state,
          sinopsis: action.text
        };
      case "SET_GENERO":
        return {
          ...state,
          genero: action.text
        };
      case "SET_DURACION":
        return {
          ...state,
          duracion: action.text
        };
      case "SET_IMAGE":
        return {
          ...state,
          image: action.text
        };
      default:
        throw new Error("Unhandled action");
    }
  };
  
  export default editorReducer;