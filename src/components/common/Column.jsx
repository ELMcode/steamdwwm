export default function Column({components}) {
    const gridStyle = {
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
    }

    return (
        <div style={gridStyle}>
            {components}
        </div>
    );
}