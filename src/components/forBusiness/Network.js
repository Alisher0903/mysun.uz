import "./network.css";

function Network() {
    return (
        <div className="network">
            <video autoPlay muted loop>
                <source src="https://solara.uz/resources/Network_Connection_Types.mp4" />
            </video>
        </div>
    );
}
export default Network;