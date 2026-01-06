import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// Current Active View State
let activeView = 'home';

// --- Components (Template Literals) ---

const components = {
  serviceCard: (title: string, desc: string, icon: string) => `
    <div class="col-md-4">
        <div class="card h-100 p-5 shadow-sm">
            <div class="service-icon">${icon}</div>
            <h4 class="fw-bold mb-3">${title}</h4>
            <p class="text-muted leading-relaxed">${desc}</p>
        </div>
    </div>
  `,
  pageHeader: (title: string, subtitle: string) => `
    <div class="page-header">
        <div class="container fade-in">
            <h1 class="display-3 fw-extrabold mb-4">${title}</h1>
            <p class="lead opacity-75 mx-auto" style="max-width: 700px;">${subtitle}</p>
        </div>
    </div>
  `
};

// --- View Definitions ---

const views: Record<string, () => string> = {
  home: () => `
    <section class="hero-section fade-in">
        <div class="container text-center">
            <span class="badge rounded-pill bg-primary-subtle text-primary mb-4 px-3 py-2 fw-bold">✨ Leading the 2024 Tech Shift</span>
            <h1 class="display-1 fw-extrabold mb-4 tracking-tighter" style="line-height: 0.85;">
                Architecting the <br>
                <span class="text-primary">Digital Frontier</span>
            </h1>
            <p class="lead text-muted mx-auto mb-5 px-3" style="max-width: 800px; font-size: 1.35rem;">
                NovaCore provides high-performance technology solutions for enterprises ready to lead the next era of industrial innovation.
            </p>
            <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a href="#contact" class="btn btn-primary btn-lg">Start Your Project</a>
                <a href="#services" class="btn btn-outline-dark btn-lg px-5">Explore Services</a>
            </div>
            
            <div class="mt-5 pt-5 opacity-40">
                <p class="small fw-bold text-uppercase tracking-widest mb-4">Trusted by Industry Titans</p>
                <div class="row g-4 justify-content-center align-items-center fs-3 fw-black">
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
                ${components.serviceCard("Digital Transformation", "We modernize legacy systems with minimal disruption to your operations.", "🚀")}
                ${components.serviceCard("AI & Automation", "Integrating custom LLMs to drastically reduce operational friction.", "🤖")}
                ${components.serviceCard("Cloud Architecture", "Scalable, secure foundations for your global digital infrastructure.", "☁️")}
            </div>
            <div class="mt-5 pt-4">
                <a href="#services" class="text-primary fw-bold text-decoration-none fs-5">View All Services →</a>
            </div>
        </div>
    </section>

    <section class="py-5 bg-light border-top">
        <div class="container py-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" class="img-fluid rounded-4 shadow-lg" alt="Team">
                </div>
                <div class="col-lg-6">
                    <h2 class="display-5 fw-bold mb-4">Why NovaCore?</h2>
                    <p class="text-muted fs-5 mb-4">We don't just deliver code. We deliver strategic competitive advantages that help you outpace the market.</p>
                    <ul class="list-unstyled d-grid gap-3 fs-5">
                        <li>✅ <strong>98%</strong> Success Rate on Projects</li>
                        <li>✅ <strong>24/7</strong> Enterprise-Level Support</li>
                        <li>✅ <strong>100%</strong> In-House Expert Engineering</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  `,

  services: () => `
    ${components.pageHeader("Expert Solutions", "Tailored technological mastery designed to solve your most complex operational challenges.")}
    <div class="container py-5 mt-5 fade-in">
        <div class="row g-4">
            ${components.serviceCard("Cybersecurity", "Zero-trust architecture and real-time threat detection.", "🛡️")}
            ${components.serviceCard("Data Analytics", "Transforming raw data into actionable business intelligence.", "📊")}
            ${components.serviceCard("IoT Systems", "Connecting physical assets to cloud-based monitoring ecosystems.", "🌐")}
            ${components.serviceCard("Digital Transformation", "Legacy modernization and agile pivot strategies.", "🚀")}
            ${components.serviceCard("AI & Automation", "Custom neural networks and process automation.", "🤖")}
            ${components.serviceCard("Cloud Architecture", "Multi-cloud optimization and serverless scaling.", "☁️")}
        </div>
    </div>
  `,

  advisor: () => `
    ${components.pageHeader("Strategic AI Advisor", "Direct access to our Gemini-powered strategic engine for immediate business guidance.")}
    <div class="container py-5 mt-n5 fade-in">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="ai-card shadow-2xl">
                    <div class="d-flex align-items-center mb-4">
                        <span class="badge bg-primary me-3">AI ACTIVE</span>
                        <h3 class="mb-0 fw-bold">Strategic Insight Generator</h3>
                    </div>
                    <p class="text-white-50 mb-5 fs-5">Describe a challenge your company is currently facing. Our AI will analyze it and provide a high-level strategic roadmap.</p>
                    
                    <div class="mb-4">
                        <textarea id="ai-input" class="form-control bg-dark text-white border-secondary fs-5" rows="5" placeholder="e.g. Our retail company is losing market share to digital competitors. How do we pivot effectively?"></textarea>
                    </div>
                    <button id="ai-submit" class="btn btn-primary btn-lg w-100 py-3 shadow-lg fs-4 fw-bold">Generate Strategy</button>
                    
                    <div id="ai-result" class="mt-5 d-none">
                        <div class="p-4 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-10">
                            <h5 class="text-primary fw-bold mb-3 uppercase tracking-widest small">RECOMMENDED ROADMAP:</h5>
                            <div id="ai-text" class="text-light leading-relaxed fs-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,

  about: () => `
    ${components.pageHeader("Our Story", "A collective of engineers and strategists building the future of industrial technology.")}
    <div class="container py-5 mt-5 fade-in">
        <div class="row g-5 align-items-center mb-5">
            <div class="col-lg-6">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" class="img-fluid rounded-4 shadow-lg" alt="Office">
            </div>
            <div class="col-lg-6">
                <h2 class="display-5 fw-bold mb-4">Founded on Excellence</h2>
                <p class="fs-5 text-muted mb-4">Since 2018, NovaCore has been at the forefront of the digital revolution. We started in a small lab in San Francisco and have grown into a global leader in enterprise engineering.</p>
                <div class="row g-4 mt-2">
                    <div class="col-6">
                        <div class="h1 fw-black text-primary mb-0">150+</div>
                        <p class="text-muted">Global Clients</p>
                    </div>
                    <div class="col-6">
                        <div class="h1 fw-black text-primary mb-0">12</div>
                        <p class="text-muted">Innovation Hubs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,

  contact: () => `
    ${components.pageHeader("Connect With Us", "Ready to start your transformation? Our consultants are standing by.")}
    <div class="container py-5 mt-5 fade-in">
        <div class="row g-5 justify-content-center">
            <div class="col-lg-8">
                <div class="card p-5 shadow">
                    <form id="contact-form">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Full Name</label>
                                <input type="text" class="form-control form-control-lg border-light-subtle" placeholder="Julian Vance" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Work Email</label>
                                <input type="email" class="form-control form-control-lg border-light-subtle" placeholder="name@company.com" required>
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-bold">Message</label>
                                <textarea class="form-control form-control-lg border-light-subtle" rows="6" placeholder="How can we help you?" required></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-lg w-100 py-3">Send Inquiry</button>
                            </div>
                        </div>
                    </form>
                    <div id="contact-success" class="d-none text-center py-5">
                        <div class="fs-1 mb-3">✅</div>
                        <h3 class="fw-bold">Inquiry Sent</h3>
                        <p class="text-muted">A senior strategist will contact you within 24 hours.</p>
                        <button onclick="location.reload()" class="btn btn-link">Send another message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
};

// --- App Controller ---

function navigate() {
  const hash = window.location.hash.replace('#', '') || 'home';
  activeView = hash;
  
  const content = document.getElementById('page-content');
  if (content && views[hash]) {
    content.innerHTML = views[hash]();
    window.scrollTo({ top: 0, behavior: 'instant' });
    attachPageEvents();
    updateNavigationUI();
  }
}

function updateNavigationUI() {
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHash = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', linkHash === activeView);
  });
  
  // Close mobile menu on navigate
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse);
    bsCollapse.hide();
  }
}

function attachPageEvents() {
  // AI Advisor Submission
  const aiSubmit = document.getElementById('ai-submit');
  if (aiSubmit) {
    aiSubmit.onclick = async () => {
      const input = (document.getElementById('ai-input') as HTMLTextAreaElement).value;
      if (!input.trim()) return;

      const btn = aiSubmit as HTMLButtonElement;
      const originalText = btn.innerText;
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Computing Strategy...`;

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `You are a top-tier business consultant. Give a bulleted strategic roadmap for this problem: "${input}". Be specific and professional. Max 200 words.`,
          config: { temperature: 0.7 }
        });
        
        const resultDiv = document.getElementById('ai-result');
        const textDiv = document.getElementById('ai-text');
        if (resultDiv && textDiv) {
          resultDiv.classList.remove('d-none');
          textDiv.innerHTML = response.text?.replace(/\n/g, '<br>') || "Analysis complete. Recommendation ready.";
          resultDiv.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (err) {
        alert("Our strategic engine is currently at capacity. Please try again shortly.");
      } finally {
        btn.disabled = false;
        btn.innerText = originalText;
      }
    };
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.onsubmit = (e) => {
      e.preventDefault();
      contactForm.classList.add('d-none');
      document.getElementById('contact-success')?.classList.remove('d-none');
    };
  }
}

// Sticky Header Observer
window.onscroll = () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
};

// Initial Load
window.onhashchange = navigate;
navigate();