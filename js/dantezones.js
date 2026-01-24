
function analizarZona(texto) {
    const t = texto ? texto.toLowerCase() : "";
    if(!t) return { zona: "VACÍO", color: "#888", jefe: "Nadie" };
    // Lógica de detección por palabras clave
    if(t.match(/feliz|bien|amor|gracias|luz|fiesta|hedonismo/)) return { zona: "CREDULIDAD", color: "#ff00ff", jefe: "Dionisio" };
    if(t.match(/dios|poder|yo|mando|dinero|oro|diamante/)) return { zona: "EGO", color: "#00d4ff", jefe: "Zeus" };
    if(t.match(/triste|miedo|duda|no se|mal|dolor|oscuridad/)) return { zona: "IGNORANCIA", color: "#00ff41", jefe: "Tezcatlipoca" };
    return { zona: "NEUTRAL", color: "#f1c40f", jefe: "Virgilio" };
}
