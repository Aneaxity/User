let mode = "BIG/SMALL";

function toggleMode() {
    mode = mode === "BIG/SMALL" ? "RED/GREEN" : "BIG/SMALL";
    document.getElementById("resultText").innerText = `Mode: ${mode}`;
}

function logout() {
    localStorage.removeItem("role");
    window.location.href = "login.html";
}
