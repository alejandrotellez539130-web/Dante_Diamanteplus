
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnAction');
    const inputSeed = document.getElementById('seed');
    const inputMood = document.getElementById('mood');

    function ejecutarSistema() {
        const box = document.querySelector('.terminal-box');
        const output = document.getElementById('console-output');
        const fecha = inputSeed.value;
        const mood = inputMood.value;

        if(fecha.length !== 8) {
            output.style.display = "block";
            output.className = "error-msg";
            output.innerText = "❌ ERROR: La fecha debe ser YYYYMMDD (8 dígitos).";
            return;
        }

        const resultadoOdu = calcularOduMaestro(fecha);
        const analisis = analizarZona(mood);
        const d1 = ODU_DB[resultadoOdu.padre];
        const d2 = ODU_DB[resultadoOdu.madre];

        // Aplicar estética de zona
        box.style.borderColor = analisis.color;
        box.style.boxShadow = `0 0 25px ${analisis.color}40`;
        output.style.display = "block";
        output.style.color = analisis.color;
        output.style.borderColor = analisis.color;

        output.innerHTML = `
[VIRGILIO]: Sistema Diamante Operativo.
🆔 ODU: ${resultadoOdu.padre} - ${resultadoOdu.madre}
💾 BIN: ${d1.b} :: ${d2.b}
📍 ESTADO: ZONA ${analisis.zona}
⚠️ JEFE: ${analisis.jefe}
-------------------------------
MENSAJE: ${d1.v} en la superficie, ${d2.d} en la sombra.
        `.trim();
    }

    btn.addEventListener('click', ejecutarSistema);
});
