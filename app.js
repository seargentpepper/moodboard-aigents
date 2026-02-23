const aiData = [
    { name: "GLM-5 / ChatGLM", url: "https://chatglm.cn/", type: "Gratis", situations: ["Programación", "Oficina"], desc: "Automatización de agentes y generación de código avanzada. Destaca en la creación autónoma de presentaciones y estructuración de datos." },
    { name: "Qwen / W.ai", url: "https://qwenlm.ai/", type: "Gratis", situations: ["Creatividad", "Audio"], desc: "Motor multimodal de Alibaba. Sobresale en la transformación de audio a vídeo, ofreciendo capacidades excepcionales para edición y diseño generativo." },
    { name: "DeepSeek (R1)", url: "https://deepseek.com/", type: "Gratis", situations: ["Programación", "Análisis de Docs"], desc: "Especializado en razonamiento profundo. Analiza múltiples rutas lógicas y ofrece resultados precisos en matemáticas, programación y lógica estructurada." },
    { name: "Hailuo AI", url: "https://hailuoai.com/", type: "Gratis", situations: ["Creatividad", "Audio"], desc: "Clonación y síntesis vocal fotorrealista. Genera vídeo de alta fidelidad a partir de texto y produce locuciones casi indistinguibles de una voz humana." },
    { name: "Meta AI", url: "https://meta.ai/", type: "Gratis", situations: ["Creatividad"], desc: "Asistente ubicuo integrado en el ecosistema Meta. Permite consultas en tiempo real y generación instantánea de imágenes conversacionales." },
    { name: "Bigar AI", url: "https://bigar.ai/", type: "Gratis", situations: ["Privacidad", "Creatividad"], desc: "Generación visual y escalado de imágenes (upscale) con un enfoque estricto en la privacidad. Funciona sin necesidad de registro." },
    { name: "HuggingChat", url: "https://huggingface.co/chat", type: "Gratis", situations: ["Programación", "Investigación"], desc: "Plataforma abierta y experimental. Proporciona acceso temprano a los modelos open source más recientes de la comunidad, como los de Mistral y Meta." },
    { name: "Pinokio", url: "https://pinokio.computer/", type: "Gratis", situations: ["Privacidad", "Programación"], desc: "Navegador de inteligencia artificial local. Instala y ejecuta modelos complejos directamente en tu hardware para garantizar privacidad absoluta y uso offline." },
    { name: "ChatGPT", url: "https://chatgpt.com/", type: "Freemium", situations: ["Copywriting", "Oficina", "Creatividad"], desc: "El estándar de la industria. Ofrece una multimodalidad robusta, interpretación visual en tiempo real y una versatilidad sin igual para cualquier tarea general." },
    { name: "Claude", url: "https://claude.ai/", type: "Freemium", situations: ["Copywriting", "Análisis de Docs"], desc: "Elegancia narrativa y precisión documental. Su gran ventana de contexto lo hace inigualable para el análisis exhaustivo de libros y documentos extensos." },
    { name: "Gemini", url: "https://gemini.google.com/", type: "Freemium", situations: ["Oficina", "Análisis de Docs"], desc: "Integración nativa con Google Workspace. Analiza y extrae insights de tu correo, documentos y almacenamiento en la nube con eficacia logística." },
    { name: "Manus AI", url: "https://manus.im/", type: "Freemium", situations: ["Investigación", "Oficina"], desc: "Agente de ejecución directa. No solo sugiere acciones, sino que navega la web interactivamente y completa flujos de trabajo de forma autónoma." },
    { name: "Copilot", url: "https://copilot.microsoft.com/", type: "Freemium", situations: ["Oficina", "Copywriting"], desc: "El motor de productividad corporativa de Microsoft. Vinculado directamente a Excel, Word y Teams para transformar reuniones y análisis de datos en entregables." },
    { name: "Perplexity", url: "https://perplexity.ai/", type: "Freemium", situations: ["Investigación", "Análisis de Docs"], desc: "Motor de respuestas basado en IA. Reemplaza la búsqueda tradicional consolidando información verificable con citas directas y referencias en tiempo real." },
    { name: "Mistral Le Chat", url: "https://chatmistral.ai/", type: "Freemium", situations: ["Privacidad", "Oficina"], desc: "Soberanía de datos y eficiencia. Modelo europeo de alto rendimiento, optimizado para entornos corporativos que exigen confidencialidad estricta." },
    { name: "Grok", url: "https://x.com/i/grok", type: "Freemium", situations: ["Investigación", "Copywriting"], desc: "Contexto hiperlocal y en tiempo real. Analiza las tendencias de la red X sin filtros, ideal para el monitoreo de noticias de última hora y sentimiento social." },
    { name: "NotebookLM", url: "https://notebooklm.google.com/", type: "Gratis", situations: ["Análisis de Docs", "Investigación", "Audio"], desc: "Tu asistente personal de investigación. Sistematiza tus documentos para convertirlos en fuentes de verdad consultables y genera podcasts didácticos automáticos." },
    { name: "Leonardo.ai", url: "https://leonardo.ai/", type: "Freemium", situations: ["Creatividad"], desc: "Suite de diseño generativo profesional. Proporciona un control granular sobre el arte conceptual, permitiendo la consistencia absoluta en creación de personajes." },
    { name: "Canva AI", url: "https://canva.com/", type: "Freemium", situations: ["Creatividad", "Oficina"], desc: "Diseño automatizado para emprendedores. Genera identidades visuales, presentaciones y composiciones de marketing listas para publicar con un par de clics." },
    { name: "Phind", url: "https://phind.com/", type: "Freemium", situations: ["Programación"], desc: "Motor de búsqueda especializado para desarrolladores. Interroga repositorios y documentación técnica actual para devolver fragmentos de código precisos." },
    { name: "ElevenLabs", url: "https://elevenlabs.io/es", type: "Freemium", situations: ["Audio", "Creatividad"], desc: "El líder indiscutible en síntesis y clonación de voz. Permite doblar vídeos preservando la entonación y la emoción original con calidad de estudio." },
    { name: "OpenRouter", url: "https://openrouter.ai/", type: "Freemium", situations: ["Programación", "Oficina", "Creatividad"], desc: "Agregador de APIs e interfaz unificada. Accede instantáneamente a modelos como Claude 3.5, GPT-4o y Llama 3 desde un solo lugar para optimizar tus prompts." }
];

const grid = document.getElementById('ai-grid');
let activeFilters = { payment: 'all', situation: 'all' };

// Rendering engine
function renderCards() {
    grid.innerHTML = '';

    // Filtering logic (prioritize fast performance using standard JS)
    const filteredData = aiData.filter(ai => {
        const paymentMatch = activeFilters.payment === 'all' || ai.type === activeFilters.payment;
        const situationMatch = activeFilters.situation === 'all' || ai.situations.includes(activeFilters.situation);
        return paymentMatch && situationMatch;
    });

    if (filteredData.length === 0) {
        grid.innerHTML = `<div style="color: var(--text-secondary); padding: 2rem;">No se encontraron modelos para estos filtros.</div>`;
        return;
    }

    // Creating Document Fragment for fast DOM insertion
    const fragment = document.createDocumentFragment();

    filteredData.forEach((ai, index) => {
        const aElement = document.createElement('a');
        aElement.href = ai.url;
        aElement.target = "_blank";
        aElement.classList.add('ai-card');

        // Fast animation delay based on index for cascade effect
        aElement.style.animationDelay = `${index * 0.05}s`;

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
                Ir a probrar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
        `;

        fragment.appendChild(aElement);

        // Use Intersection Observer or requestAnimationFrame to make it visible
        requestAnimationFrame(() => {
            aElement.classList.add('visible');
        });
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

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    renderCards();

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
