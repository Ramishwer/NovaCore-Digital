
import { GoogleGenAI } from "@google/genai";

// Initialize AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// State
let currentView = 'home';

// --- Page Rendering Logic ---

const views: Record<string, () => string> = {
  home: () => `
    <section class="hero-section text-center fade-in">
        <div class="container">
            <span class="badge rounded-pill bg-primary-subtle text-primary mb-3 px-3 py-2">✨ Leading the 2024 Tech Shift</span>
            <h1 class="display-1 fw-extrabold mb-4 tracking-tight" style="line-height: 0.9;">Architecting the <br><span class="text-primary">Digital Frontier</span></h1>
            <p class="lead text-muted mx-auto mb-5" style="max-width: 700px;">NovaCore Digital provides end-to-end technology solutions for enterprises ready to lead the next era of industrial innovation.</p>
            <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a href="#contact" class="btn btn-primary btn-lg px-5 shadow">Start Your Project</a>
                <a href="#services" class="btn btn-outline-dark btn-lg px-5">Explore Services</a>
            </div>
            <div class="mt-5 pt-5 opacity-50">
                <p class="small fw-bold text-uppercase tracking-widest mb-4">Trusted by Market Leaders</p>
                <div class="row g-4 justify-content-center align-items-center fw-black fs-4">
                    <div class="col-6 col-md-2">TECHCORP</div>
                    <div class="col-6 col-md-2">SOLARIS</div>
                    <div class="col-6 col-md-2">QUANTUM</div>
                    <div class="col-6 col-md-2">VENTURE</div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 bg-white">
        <div class="container py-5 text-center">
            <h2 class="display-5 fw-bold mb-5">Core Competencies</h2>
            <div class="row g-4 text-start">
                ${renderServiceCard("Digital Transformation", "Modernizing legacy systems and culture.", "🚀")}
                ${renderServiceCard("AI & Automation", "Integrating custom LLMs for operational efficiency.", "🤖")}
                ${renderServiceCard("Cloud Architecture", "Scalable multi-cloud strategies for global reach.", "☁️")}
            </div>
            <div class="mt-5">
                <a href="#services" class="text-primary fw-bold text-decoration-none">View All Services →</a>
            </div>
        </div>
    </section>
  `,
  services: () => `
    <div class="bg-dark py-5 text-center text-white mt-5">
        <div class="container py-5">
            <h1 class="display-4 fw-bold">Expert Services</h1>
            <p class="lead opacity-75">Precision-engineered digital solutions for the modern enterprise.</p>
        </div>
    </div>
    <div class="container py-5 mt-5 fade-in">
        <div class="row g-4">
            ${renderServiceCard("Digital Transformation", "We guide enterprises through complex pivots.", "🚀")}
            ${renderServiceCard("AI & Automation", "LLM integration and process automation.", "🤖")}
            ${renderServiceCard("Cloud Architecture", "Secure, scalable cloud foundations.", "☁️")}
            ${renderServiceCard("Cybersecurity", "Zero-trust architecture for modern threats.", "🛡️")}
            ${renderServiceCard("Data Analytics", "Actionable business intelligence pipelines.", "📊")}
            ${renderServiceCard("IoT Systems", "Connecting physical assets to digital ecosystems.", "🌐")}
        </div>
    </div>
  `,
  advisor: () => `
    <div class="container py-5 mt-5 fade-in">
        <div class="ai-advisor-box shadow-lg">
            <div class="d-flex align-items-center mb-4">
                <div class="spinner-grow spinner-grow-sm text-primary me-2" role="status"></div>
                <span class="text-primary fw-bold small text-uppercase tracking-wider">NovaCore AI Engine</span>
            </div>
            <h2 class="display-5 fw-bold mb-4">Strategic Advisor</h2>
            <p class="text-white-50 mb-5 fs-5">Harness the power of Gemini to solve your most complex business hurdles in seconds.</p>
            
            <div class="mb-4">
                <textarea id="ai-input" class="form-control bg-dark text-white border-secondary" rows="4" placeholder="Describe your business challenge..."></textarea>
            </div>
            <button id="ai-submit" class="btn btn-primary w-100 py-3 fs-5 fw-bold shadow">Generate Recommendation</button>
            
            <div id="ai-result" class="mt-5 d-none">
                <hr class="border-secondary mb-4">
                <h5 class="text-primary text-uppercase small fw-bold mb-3">Strategic Roadmap:</h5>
                <div id="ai-text" class="text-light-50"></div>
            </div>
        </div>
    </div>
  `,
  about: () => `
    <div class="container py-5 mt-5 fade-in">
        <div class="row align-items-center g-5 py-5">
            <div class="col-lg-6">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" class="img-fluid rounded-4 shadow-lg" alt="Office">
            </div>
            <div class="col-lg-6">
                <h2 class="display-5 fw-bold mb-4">Built on Innovation</h2>
                <p class="lead text-muted mb-4">NovaCore Digital emerged from a collective of software engineers dedicated to closing the gap between technology and real outcomes.</p>
                <div class="row g-4">
                    <div class="col-6"><h3 class="fw-bold text-primary mb-0">150+</h3><small>Projects</small></div>
                    <div class="col-6"><h3 class="fw-bold text-primary mb-0">12</h3><small>Global Markets</small></div>
                </div>
            </div>
        </div>
    </div>
  `,
  contact: () => `
    <div class="container py-5 mt-5 fade-in">
        <div class="row g-5">
            <div class="col-lg-5">
                <h2 class="display-5 fw-bold mb-4">Let's Connect</h2>
                <p class="text-muted mb-5">Start your transformation journey today. Our consultants are ready to discuss your unique challenges.</p>
                <div class="d-flex align-items-center mb-4">
                    <div class="bg-primary-subtle text-primary p-3 rounded-circle me-3">📧</div>
                    <div><h6 class="mb-0 fw-bold">Email Us</h6><p class="mb-0 small">contact@novacore.digital</p></div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="card p-4 shadow-sm">
                    <form id="contact-form">
                        <div class="row g-3">
                            <div class="col-md-6"><input type="text" class="form-control py-3" placeholder="Your Name" required></div>
                            <div class="col-md-6"><input type="email" class="form-control py-3" placeholder="Email" required></div>
                            <div class="col-12"><textarea class="form-control py-3" rows="4" placeholder="Your Message" required></textarea></div>
                            <div class="col-12"><button type="submit" class="btn btn-primary btn-lg w-100 py-3">Send Consultation Request</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  `
};

function renderServiceCard(title: string, desc: string, icon: string) {
  return `
    <div class="col-md-4">
        <div class="card h-100 p-4">
            <div class="fs-1 mb-3">${icon}</div>
            <h4 class="fw-bold">${title}</h4>
            <p class="text-muted mb-0">${desc}</p>
        </div>
    </div>
  `;
}

// --- Controller Logic ---

function renderPage() {
  const hash = window.location.hash.replace('#', '') || 'home';
  currentView = hash;
  
  const content = document.getElementById('page-content');
  if (content) {
    content.innerHTML = views[hash] ? views[hash]() : views['home']();
    window.scrollTo(0, 0);
    attachEvents();
    updateNav();
  }
}

function updateNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentView}`);
  });
}

function attachEvents() {
  // AI Advisor logic
  const aiBtn = document.getElementById('ai-submit');
  if (aiBtn) {
    aiBtn.addEventListener('click', async () => {
      const input = (document.getElementById('ai-input') as HTMLTextAreaElement).value;
      if (!input.trim()) return;

      const btn = aiBtn as HTMLButtonElement;
      const resultDiv = document.getElementById('ai-result');
      const resultText = document.getElementById('ai-text');
      
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Processing Strategy...`;

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Provide a concise strategic recommendation for: "${input}". Use professional language.`,
        });
        
        if (resultDiv && resultText) {
          resultDiv.classList.remove('d-none');
          resultText.innerHTML = response.text || "No advice available.";
        }
      } catch (e) {
        alert("Advisor service temporarily unavailable.");
      } finally {
        btn.disabled = false;
        btn.innerText = "Generate Recommendation";
      }
    });
  }

  // Contact form logic
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.innerHTML = `
        <div class="text-center py-5">
            <h3 class="fw-bold">Message Sent!</h3>
            <p class="text-muted">One of our consultants will reach out soon.</p>
        </div>
      `;
    });
  }
}

// Global Nav Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Init
window.addEventListener('hashchange', renderPage);
renderPage();
