const aiData = [
    { name: "GLM-5 / ChatGLM", url: "https://chatglm.cn/", type: "Gratis", situations: ["Programación", "Oficina"], desc: "IA líder en ingeniería de agentes, codificación y creación de presentaciones PPT automáticas.", popularity: 85 },
    { name: "Qwen / W.ai", url: "https://qwenlm.ai/", type: "Gratis", situations: ["Creatividad", "Audio"], desc: "El modelo más potente de Alibaba para video creativo y edición de imágenes por capas.", popularity: 82 },
    { name: "Hailuo AI (Minimax)", url: "https://hailuoai.com/", type: "Gratis", situations: ["Creatividad", "Audio"], desc: "Generación de video hiperrealista y la mejor tecnología de audio gratuita del mercado.", popularity: 88 },
    { name: "Meta AI", url: "https://meta.ai/", type: "Gratis", situations: ["Creatividad"], desc: "La IA más accesible para el día a día y generación rápida de imágenes en redes sociales.", popularity: 92 },
    { name: "Bigar AI", url: "https://bigar.ai/", type: "Gratis", situations: ["Privacidad", "Creatividad"], desc: "Generación de imagen y video sin cuentas, con herramientas de mejora de calidad (upscale).", popularity: 75 },
    { name: "HuggingChat", url: "https://huggingface.co/chat", type: "Gratis", situations: ["Programación", "Investigación"], desc: "El laboratorio donde pruebas los modelos de Meta, Mistral y otros antes que nadie.", popularity: 80 },
    { name: "Pinokio", url: "https://pinokio.computer/", type: "Gratis", situations: ["Privacidad", "Programación"], desc: "Navegador que instala modelos en tu PC para uso 100% privado y offline.", popularity: 78 },
    { name: "ChatGPT (OpenAI)", url: "https://chatgpt.com/", type: "Freemium", situations: ["Copywriting", "Oficina", "Creatividad"], desc: "El 'camaleón digital'; ideal como socio de pensamiento y para lluvia de ideas inversa.", popularity: 100 },
    { name: "Claude (Anthropic)", url: "https://claude.ai/", type: "Freemium", situations: ["Copywriting", "Análisis de Docs"], desc: "La mejor para analizar documentos extensos (libros, contratos) con gran precisión.", popularity: 98 },
    { name: "Gemini (Google)", url: "https://gemini.google.com/", type: "Freemium", situations: ["Oficina", "Análisis de Docs"], desc: "La mejor IA logística; conecta tus datos personales de Google para planificar tu vida.", popularity: 95 },
    { name: "Manus AI", url: "https://manus.im/", type: "Freemium", situations: ["Investigación", "Oficina"], desc: "No solo te dice cómo hacer las cosas, sino que navega y ejecuta flujos de trabajo completos.", popularity: 87 },
    { name: "Microsoft Copilot", url: "https://copilot.microsoft.com/", type: "Freemium", situations: ["Oficina", "Copywriting"], desc: "El motor de la oficina; resume reuniones de Teams y crea diapositivas desde textos.", popularity: 94 },
    { name: "Perplexity", url: "https://perplexity.ai/", type: "Freemium", situations: ["Investigación", "Análisis de Docs"], desc: "El sustituto del buscador tradicional; respuestas redactadas con enlaces a la fuente original.", popularity: 96 },
    { name: "Mistral Le Chat", url: "https://chat.mistral.ai/", type: "Freemium", situations: ["Privacidad", "Oficina"], desc: "IA francesa de alto rendimiento, ideal para empresas que cuidan la ubicación de sus datos.", popularity: 84 },
    { name: "Grok", url: "https://x.com/i/grok", type: "Freemium", situations: ["Investigación", "Copywriting"], desc: "La IA con menos filtros, ideal para monitorear crisis y noticias de última hora.", popularity: 90 },
    { name: "NotebookLM", url: "https://notebooklm.google.com/", type: "Freemium", situations: ["Análisis de Docs", "Investigación", "Audio"], desc: "Crea una 'fuente de verdad' privada subiendo tus PDFs; ideal para estudiantes.", popularity: 93 },
    { name: "Leonardo.ai", url: "https://leonardo.ai/", type: "Freemium", situations: ["Creatividad"], desc: "La herramienta definitiva para diseñadores que necesitan control total sobre la imagen.", popularity: 91 },
    { name: "Canva AI", url: "https://canva.com/", type: "Freemium", situations: ["Creatividad", "Oficina"], desc: "Ideal para emprendedores que necesitan posts y presentaciones de alta calidad rápido.", popularity: 97 },
    { name: "Phind", url: "https://phind.com/", type: "Freemium", situations: ["Programación"], desc: "Rastrea documentación oficial en tiempo real para dar soluciones de código que funcionan.", popularity: 83 },
    { name: "ElevenLabs", url: "https://elevenlabs.io/es", type: "Freemium", situations: ["Audio", "Creatividad"], desc: "La tecnología más avanzada para doblaje profesional y síntesis de voz emocional.", popularity: 99 },
    { name: "OpenRouter", url: "https://openrouter.ai/", type: "Freemium", situations: ["Programación", "Oficina", "Creatividad"], desc: "Interfaz unificada para acceder instantáneamente a Claude, GPT-4o y Llama3.", popularity: 86 },
    { name: "DeepSeek", url: "https://chat.deepseek.com/", type: "Gratis", situations: ["Programación", "Análisis de Docs"], desc: "Superior en matemáticas y código. IA diseñada para resolver problemas técnicos complejos y programación avanzada.", popularity: 89 },
    { name: "Google Stitch", url: "https://stitch.withgoogle.com/", type: "Gratis", situations: ["Creatividad", "Oficina"], desc: "Agente de diseño que crea interfaces y sitios web multipágina; su 'modo 3x' genera tres alternativas simultáneas.", popularity: 72 },
    { name: "Sora 2 (vía YouArt)", url: "https://youart.ai/", type: "Freemium", situations: ["Creatividad"], desc: "Escenas con complejidad física y animación de fotogramas específicos con alta fidelidad cinematográfica.", popularity: 85 },
    { name: "Google Mixboard", url: "https://labs/mixboard/welcome", type: "Gratis", situations: ["Creatividad", "Oficina"], desc: "Tablero infinito para fusionar imágenes y texto, transformando 'moodboards' en presentaciones estructuradas.", popularity: 70 },
    { name: "Arena AI", url: "https://arena.ai/", type: "Freemium", situations: ["Investigación", "Programación"], desc: "Agregador que permite usar modelos como Kimi K2.5 Thinking con límites de uso mucho más amplios.", popularity: 74 },
    { name: "Kimi (Moonshot AI)", url: "https://kimi.moonshot.cn/", type: "Gratis", situations: ["Oficina", "Investigación"], desc: "Genera simultáneamente la web, el Excel financiero y documentos legales para ecosistemas de proyectos.", popularity: 76 },
    { name: "Wan 2.1 (One 2.6)", url: "https://wanvideo.com/", type: "Gratis", situations: ["Creatividad"], desc: "Modelo de vídeo diseñado para mantener a un mismo personaje idéntico a través de diferentes tomas.", popularity: 73 },
    { name: "Hunyuan 3.0", url: "https://huggingface.co/spaces/Tencent/Hunyuan-Instruct-Pix2Pix", type: "Gratis", situations: ["Creatividad"], desc: "Permite cambiar elementos (ropa, clima, entorno) en fotos reales mediante lenguaje natural.", popularity: 71 },
    { name: "Dreamina (SeaDream)", url: "https://www.capcut.com/ai-tool/dreamina", type: "Freemium", situations: ["Creatividad"], desc: "In-painting de alta precisión para imágenes 2K y vídeo sin alterar el resto del diseño original.", popularity: 77 },
    { name: "Clipwise", url: "https://clipwise.ai/", type: "Freemium", situations: ["Creatividad", "Audio"], desc: "Crea vídeos completos con guion, música y clips optimizados para contenidos extensos.", popularity: 79 },
    { name: "Google AI Studio", url: "https://aistudio.google.com/", type: "Gratis", situations: ["Programación", "Investigación"], desc: "Plataforma para desarrolladores que permite ajustar parámetros técnicos y experimentar con modelos de Google.", popularity: 81 },
    { name: "Google AI Test Kitchen", url: "https://labs.google/fx", type: "Gratis", situations: ["Creatividad", "Audio"], desc: "Laboratorio experimental para interactuar con innovaciones en música (MusicFX), texto y video.", popularity: 68 },
    { name: "Perchance", url: "https://perchance.org/ai-character-generator", type: "Gratis", situations: ["Creatividad"], desc: "Plataforma de código abierto para la creación de generadores de texto e imágenes con comunidad flexible.", popularity: 69 },
    { name: "Pi (Inflection AI)", url: "https://pi.ai/", type: "Gratis", situations: ["Investigación"], desc: "IA conversacional diseñada para ser un confidente personal con tono humano y escucha activa.", popularity: 82 }
];

const grid = document.getElementById('ai-grid');
let activeFilters = { payment: 'all', situation: 'all', sort: 'name' };

// Rendering engine
// Rendering engine with Intersection Observer for performance
function renderCards() {
    grid.innerHTML = '';

    // Filtering logic
    let filteredData = aiData.filter(ai => {
        const paymentMatch = activeFilters.payment === 'all' || ai.type === activeFilters.payment;
        const situationMatch = activeFilters.situation === 'all' || ai.situations.includes(activeFilters.situation);
        return paymentMatch && situationMatch;
    });

    // Sorting logic
    if (activeFilters.sort === 'name') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (activeFilters.sort === 'popularity') {
        filteredData.sort((a, b) => b.popularity - a.popularity);
    }

    if (filteredData.length === 0) {
        grid.innerHTML = `<div style="color: var(--text-secondary); padding: 2rem;">No se encontraron modelos para estos filtros.</div>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    // Intersection Observer to trigger animations only when cards are visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index in current viewport batch
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    filteredData.forEach((ai, index) => {
        const aElement = document.createElement('a');
        aElement.href = ai.url;
        aElement.target = "_blank";
        aElement.classList.add('ai-card');
        aElement.style.setProperty('--index', index % 10); // Batching animations

        const tagsHtml = ai.situations.map(s => `<span class="tag">${s}</span>`).join('');
        const typeClass = ai.type.toLowerCase();

        aElement.innerHTML = `
            <div class="card-header">
                <span class="ai-name">${ai.name}</span>
                <span class="ai-model ${typeClass}">${ai.type}</span>
            </div>
            <p class="ai-desc">${ai.desc}</p>
            <div class="ai-tags">
                ${tagsHtml}
            </div>
            <div class="ai-action">
                Ir a probar! <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
        `;

        fragment.appendChild(aElement);
        observer.observe(aElement);
    });

    grid.appendChild(fragment);
}

// Interactivity handlers
document.querySelectorAll('.chip').forEach(button => {
    // Touch-optimized event listeners (click handles both touch taps and mouse clicks smoothly)
    button.addEventListener('click', (e) => {
        const btn = e.target;
        const type = btn.getAttribute('data-type');
        const filter = btn.getAttribute('data-filter');

        // Update active class
        document.querySelectorAll(`.chip[data-type="${type}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update state & render
        activeFilters[type] = filter;
        renderCards();
    });
});

// Advanced mouse hover glowing interaction (Hardware accelerated via CSS variables)
grid.addEventListener("mousemove", e => {
    for (const card of grid.getElementsByClassName("ai-card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
});

// Update last updated text
function updateLastUpdated() {
    const lastUpdateDate = new Date("2026-02-23T18:56:00"); // Based on RTF revision time
    const now = new Date();
    const diffMs = now - lastUpdateDate;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    let text = '';
    if (diffDays > 0) {
        text = `Actualizado hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    } else if (diffHours > 0) {
        text = `Actualizado hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
    } else {
        text = `Actualizado hace ${diffMins} ${diffMins === 1 ? 'minuto' : 'minutos'}`;
    }

    const element = document.getElementById('update-clock');
    if (element) element.innerText = text;
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    updateLastUpdated();

    // Update clock every minute
    setInterval(updateLastUpdated, 60000);

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Check saved preference or system preference (defaults to dark mode otherwise)
    if (savedTheme === 'light' || (!savedTheme && prefersLightMode)) {
        document.body.classList.add('light-theme');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});
