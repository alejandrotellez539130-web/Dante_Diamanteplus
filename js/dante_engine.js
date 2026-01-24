
function calcularOduMaestro(fecha) {
    const f = fecha.toString();
    const claves = Object.keys(ODU_DB);
    // Algoritmo de extracción de 4 bits basado en la fecha
    const indexP1 = parseInt(f.slice(-2)) % 16;
    const indexP2 = parseInt(f.slice(4,6)) % 16;
    return { padre: claves[indexP1], madre: claves[indexP2] };
}
