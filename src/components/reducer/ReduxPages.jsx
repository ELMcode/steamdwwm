import React from 'react';
import { connect } from 'react-redux'; // Importer la fonction connect de react-redux

const App = ({ counter, text, increment, decrement, changeText }) => {
    return (
        <div>
            <h1>{text} {counter}</h1> {/* Afficher le texte et la valeur du compteur */}
            <button onClick={increment}>Increment</button> {/* Déclencher l'action INCREMENT lorsque le bouton est cliqué */}
            <button onClick={decrement}>Decrement</button> {/* Déclencher l'action DECREMENT lorsque le bouton est cliqué */}
            <button onClick={changeText}>Change Text</button> {/* Déclencher l'action CHANGE_TEXT lorsque le bouton est cliqué */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter, // Extraire la propriété "counter" de l'état global et la mapper à la propriété "counter" du composant
        text: state.text, // Extraire la propriété "text" de l'état global et la mapper à la propriété "text" du composant
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }), // Mapper l'action INCREMENT à la fonction de dispatch "increment"
        decrement: () => dispatch({ type: 'DECREMENT' }), // Mapper l'action DECREMENT à la fonction de dispatch "decrement"
        changeText: () => dispatch({ type: 'CHANGE_TEXT' }), // Mapper l'action CHANGE_TEXT à la fonction de dispatch "changeText"
    };
};

// Connecter le composant App au store Redux en utilisant la fonction connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
