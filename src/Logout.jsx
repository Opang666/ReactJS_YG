const Logout = () => {
    const closeModal = () => {
        console.log("Modal closed");
    };

    const logout = () => {
        console.log("Logged out");
    };

    return (
        <>
            <div className="background-overlay" id="backgroundOverlay"></div>
            <div className="logout-modal" id="logoutModal">
                <span className="close-icon" onClick={closeModal}>&#10006;</span>
                <h2>Are you sure you want to logout?</h2>
                <div className="button-group">
                    <button onClick={logout}>Logout</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </>
    );
};

export default Logout;
