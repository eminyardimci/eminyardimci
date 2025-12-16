// Cache'lenmiş DOM elemanları
const elements = {
    navLinks: document.querySelectorAll('.nav-link'),
    projectDetail: document.getElementById('project-detail'),
    projectYear: document.getElementById('project-year'),
    projectContent: document.getElementById('project-content'),
    hakkimda: document.getElementById('hakkimda'),
    languageToggle: document.getElementById('language-toggle'),
    sidebar: document.querySelector('.sidebar'),
    body: document.body
};

// Dil ve bölüm durumu
let currentLang = localStorage.getItem('lang') || 'tr';
let currentSectionKey = null;
let isTransitioning = false; // Tekrarlanan geçiş önleme

// Event Delegation: Tüm nav-link'ler için tek listener
document.querySelector('.sidebar').addEventListener('click', (e) => {
    const link = e.target.closest('.nav-link');
    if (!link) return;

    e.preventDefault();
    const sectionKey = link.dataset.section;

    // Aynı bölüme tekrar tıklanırsa hiçbir şey yapma
    if (currentSectionKey === sectionKey && sectionKey !== 'hakkimda') return;

    showSection(sectionKey);

    // Aktif sınıf yönetimi
    elements.navLinks.forEach(a => a.classList.remove('active'));
    link.classList.add('active');

    // Mobil: sidebar'ı kapat
    if (window.innerWidth <= 900) {
        toggleSidebar();
    }
});

// Dil değiştirme
elements.languageToggle.addEventListener('click', toggleLanguage);

// Sayfa yüklendiğinde başlangıç ayarları
window.addEventListener('load', () => {
    setLanguage(currentLang, false); // false: tekrar render etme
    elements.navLinks.forEach(link => {
        if (link.dataset.section === 'hakkimda') link.classList.add('active');
    });
});

// Dil değiştirme fonksiyonu - optimize edilmiş
function setLanguage(lang, reRenderSection = true) {
    if (lang === currentLang) return; // Aynı dilse işlem yapma

    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Tüm data-lang-key elemanlarını tek seferde güncelle
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        const text = languages[lang][key];
        if (text) el.innerHTML = text;
    });

    elements.languageToggle.textContent = lang === 'tr' ? 'EN' : 'TR';

    // Eğer bir proje açıksa içeriğini yeniden render et
    if (reRenderSection && currentSectionKey && currentSectionKey !== 'hakkimda') {
        showSection(currentSectionKey);
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
}

// Bölüm gösterme - yüksek performanslı
function showSection(key) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentSectionKey = key === 'hakkimda' ? null : key;

    if (key === 'hakkimda') {
        closeProjectDetail();
        scrollToElement(elements.hakkimda);
    } else {
        const section = sections[currentLang][key];
        elements.projectYear.textContent = section.year;
        elements.projectContent.innerHTML = `<h2>${section.title}</h2><p>${section.description}</p>`;

        // Önce visible yap, sonra hidden kaldır
        elements.projectDetail.classList.remove('hidden');
        requestAnimationFrame(() => {
            elements.projectDetail.classList.add('visible');
            elements.body.classList.add('project-open');
            scrollToElement(elements.projectDetail);
        });
    }

    setTimeout(() => isTransitioning = false, 500);
}

function closeProjectDetail() {
    elements.projectDetail.classList.remove('visible');
    elements.body.classList.remove('project-open');

    setTimeout(() => {
        elements.projectDetail.classList.add('hidden');
    }, 400);
}

function closeSection() {
    if (isTransitioning) return;
    closeProjectDetail();

    elements.navLinks.forEach(a => a.classList.remove('active'));
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');

    scrollToElement(elements.hakkimda);
    currentSectionKey = null;
}

// Smooth scroll ama performans dostu
function scrollToElement(el) {
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Mobil sidebar toggle
function toggleSidebar() {
    elements.sidebar.classList.toggle('active');
}
