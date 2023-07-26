export default function Grid({ size, components }) {
    // Calculer la largeur des composants en fonction du nombre de colonnes dans la grille
    const width = ((80 - 4 - (2 * (size - 1))) / size);

    // Compteur pour suivre l'index des composants
    let i = 0;

    // Style pour la grille
    const gridStyle = {
        paddingLeft: "2vw",
        paddingRight: "2vw",
        width: "80vw",
        paddingTop: "2vw",
        paddingBottom: "2vw",
        backgroundColor: "#2a3442",
        marginLeft: "auto",
        marginRight: "auto",
        display: "grid",
    };

    // Tableau pour stocker les composants dans l'ordre approprié pour la grille
    const table = [];

    // Fonction pour placer les composants dans le tableau "table"
    const placeComponents = () => {
        for (const componentsKey in components) {
            table.push(
                // Ajouter chaque composant dans une div avec le style de placement dans la grille
                <div style={{
                    width: width + "vw",
                    gridColumn: i + 1 - (5 * (Math.ceil((i + 1) / size) - 1)), // Calculer la position de la colonne en fonction de l'index i
                    gridRow: Math.ceil((i + 1) / size), // Calculer la position de la ligne en fonction de l'index i
                    marginTop: "2vw",
                    marginBottom: "2vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "grid",
                    alignItems: "center",
                }}>
                    {components[i]} {/* Afficher le composant à l'index i */}
                </div>
            );
            i++;
            console.log("I: " + i); // Afficher l'index i dans la console
        }
    };

    // Appeler la fonction pour placer les composants dans le tableau
    placeComponents();

    // Afficher la grille avec les composants placés dans l'ordre approprié
    return (
        <div style={gridStyle}>
            {
                table.map((item) => (
                    <>
                        {item}
                    </>
                ))
            }
        </div>
    );
}
