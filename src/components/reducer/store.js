import { createStore } from 'redux'; // Importer la fonction createStore de Redux

const initialState = {
    counter: 0,
    text: "Coucou",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1, // Mettre à jour le compteur en ajoutant 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1, // Mettre à jour le compteur en soustrayant 1
            };
        case 'CHANGE_TEXT':
            return {
                ...state,
                text: state.text === "Coucou" ? "Changé" : "Coucou", // Changer le texte en fonction de son état actuel ("Coucou" ou "Changé")
            };
        default:
            return state; // Retourner l'état actuel sans modification pour toute autre action
    }
};

// Créer le store Redux en utilisant le rootReducer
const store = createStore(rootReducer);

export default store; // Exporter le store pour pouvoir l'utiliser dans d'autres parties de l'application
