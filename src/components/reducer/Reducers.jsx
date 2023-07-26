// Définir l'état initial pour le reducer
// initialState, si vous en avez besoin
const initialState = {
    data: [],         // Un tableau vide pour stocker les données
    loading: false,   // Indicateur pour le chargement (true/false)
    error: null,      // Contiendra une erreur en cas d'échec du chargement des données, sinon null
};

// Le reducer
const yourReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            // Cas où le chargement des données est un succès
            return {
                ...state,                   // Copier tout l'état actuel
                data: action.payload,       // Remplacer les données par celles provenant de l'action (action.payload)
                loading: false,             // Mettre loading à false, car le chargement est terminé
                error: null,                // Réinitialiser l'erreur à null, car il n'y a pas d'erreur
            };
        case 'FETCH_DATA_ERROR':
            // Cas où le chargement des données échoue
            return {
                ...state,                   // Copier tout l'état actuel
                data: [],                   // Vider les données, car il y a eu une erreur
                loading: false,             // Mettre loading à false, car le chargement est terminé (même en cas d'erreur)
                error: action.payload,      // Stocker l'erreur provenant de l'action (action.payload)
            };
        // Autres cas pour gérer d'autres actions si nécessaire

        default:
            return state; // Retourner l'état actuel sans modification pour toute autre action
    }
};

export default yourReducer; // Exporter le reducer pour pouvoir l'utiliser dans le store Redux
