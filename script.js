// Project Data
const sections = {
    hakkimda: {
        year: '',
        title: '',
        description: ''
    },
    meb: {
        year: '2018',
        title: 'MEB Uluslar Arası Hızlı Çizgi İzleyen Robot Yarışması',
        description: '2017-2018 yılları arasında lise eğitimimi aldığım İnönü MTAL\'de aktif görev aldım. Araç yazılımı, sensör seçimi ve çeşitli teknik konularda katkı sağladım. Bu süreçte takımımız yarışmayı 4. sırada tamamladı.'
    },
    tubitak: {
        year: '2021',
        title: 'TÜBİTAK-2242',
        description: 'TÜBİTAK 2242 Yarışması\'nda İmalat ve Otomotiv kategorisinde takım olarak beşincilik elde ettik. Projede Bluetooth ile Arduino tabanlı kontrol sistemi geliştirdim, mekanizma tasarımı ve sensör entegrasyonu gerçekleştirdim. Parçaların 3D baskısını yaparak tavana monte edilen raylı sistem üzerinde hareket edebilen, mutfaklarda kullanılmak üzere yardımcı robot kol prototipi geliştirdik.'
    },
    robotaksi2023: {
        year: '2023',
        title: 'Robotaksi Yarışması',
        description: '2023 Robotaksi Binek Otonom Araç Yarışması\'nda ekibimizle 3. olarak En İyi Takım Ruhu ödülünü kazandık. Bu projede ben aracın elektronik kart tasarımı, elektrik sistemi ve gömülü sistem geliştirme lerinden sorumluydum; sensör ve aktüatörlerin entegrasyonu ile aracın güvenli ve verimli çalışmasını sağladım.'
    },
    robotaksi2024: {
        year: '2024',
        title: 'Robotaksi Yarışması',
        description: '2024 yılında Robotaksi projesinde takım kaptanı olarak önceki aracımızı hem elektriksel hem mekanik olarak baştan tasarlayıp geliştirilmesinde bulundum, üzerine ikinci bir araç daha ürettik. Projede gömülü sistem yazılımı, elektronik kart tasarımı ve takım organizasyonu görevlerini üstlendim ve mekanik çalışmalara da katkı sağladım. Ayrıca Baykar, T.C. Gençlik ve Spor Bakanlığı, Uzay Spor, Ensar Kalıp, Mesan Elektrik ve Düzce Belediyesi ile görüşmeler yaparak sponsorluk anlaşmalarını sağladım.'
    },
    robotaksi2025: {
        year: '2025',
        title: 'Robotaksi Yarışması',
        description: '2025 yılında Robotaksi projesinde hem mekanik çalışmalara destek sağladım hem de elektrik ekibinde görev aldım; bu süreçte yeni bir araç tasarlayıp geliştirdik. Araç tasarımında Cybertack\'tan esinlenerek yola çıktık ve projede gömülü sistem yazılımı, elektronik kart tasarımı görevlerini yürüttüm.'
    },
    robotkol: {
        year: '2023-2024',
        title: 'Robot Kol',
        description: 'Sonel Yazılım firmasında bir yıl boyunca, KOSGEB destekli robot kol projesi kapsamında, robot kol prototipi üretimi ve gömülü sistem kodlarının geliştirilmesi alanlarında çalıştım.'
    },
    plcatolyesi: {
        year: '2024',
        title: 'PLC Atölyesi',
        description: 'Düzce Üniversitesi Mekatronik Mühendisliği bölümüne kazandırılan PLC Atölyesi için PLC deney setleri, FESTO deney standları ve sıvı seviye kontrol mekanizması üzerinde hem PLC programlama hem de mekanik tasarım ve montaj çalışmalarında aktif olarak görev aldım.'
    },
    egitmenlik: {
        year: '2023-2025',
        title: 'Eğitmenlik',
        description: 'T3 Vakfı Deneyap Atölyelerinde ileri Robotik, Nesnelerin İnterneti ve Elektronik Programlama, Nano Teknoloji, Tasarım ve Üretim, Uçan ve Otonom Araçlar alanlarında eğitmenlik yaptım.'
    },
    scada: {
        year: '2025',
        title: 'SCADA Projesi',
        description: 'SCADA dersinin uygulama ödevi olarak, kargo otomasyonu konusunu seçtim. Bu otomasyonun amacı, gelen kargoları boyutlandırarak uygun bölmelere ayırmak ve aynı zamanda gelen kargo sayısını kaydederek depo kontrolünü sağlamaktır. Bu işlemler için Siemens S7-1200 CPU 1214C DC/DC/DC modeli ile analog çıkışları kontrol etmek amacıyla SM 1231 AI 4x13BIT modülünü tercih ettim.'
    },
    clawgraber: {
        year: '2025',
        title: 'Claw Graber',
        description: 'Tersine Mühendislik metotlarını uygulayarak görseldekileri mekanizma olan \'Claw Graber\' tasarladım.'
    },
    bitirme: {
        year: '2025',
        title: 'Bitirme Projesi',
        description: 'TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında yürütücülüğünü üstlendiğim ve aynı zamanda bitirme projem olan "Üniversite Ortamlarında Hava Savunma Sistemleri Geliştirilebilir mi?" başlıklı araştırma projem, TÜBİTAK tarafından desteklenmeye hak kazanmıştır. Projede, Raspberry Pi tabanlı görüntü işleme sistemleri kullanarak gerçek zamanlı hedef tespiti ve anlık müdahale algoritmaları geliştirdim. Ayrıca proje kapsamında sensör entegrasyonu, veri işleme, otomatik kontrol sistemleri ve tek bir donanım platformu üzerinde tüm yazılım-mekanik entegrasyonu sağlanmıştır. Bu çalışma, hem savunma sistemleri simulasyonları hem de üniversite ortamında uygulanabilir prototip tasarımı açısından önemli bir deneyim kazandırmıştır.'
    }
};

// Event Listeners
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionKey = link.dataset.section;
        showSection(sectionKey);
        document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        if (window.innerWidth <= 900) {
            toggleSidebar();
        }
    });
});

// Initial Active
window.addEventListener('load', () => {
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
});

function showSection(key) {
    const section = sections[key];
    if (key === 'hakkimda') {
        document.getElementById('project-detail').classList.add('hidden');
        document.getElementById('hakkimda').scrollIntoView({ behavior: 'smooth' });
    } else {
        document.getElementById('project-year').textContent = section.year;
        document.getElementById('project-content').innerHTML = `
            <h2>${section.title}</h2>
            <p>${section.description}</p>
        `;
        document.getElementById('project-detail').classList.remove('hidden');
        document.getElementById('project-detail').scrollIntoView({ behavior: 'smooth' });
    }
}

function closeSection() {
    document.getElementById('project-detail').classList.add('hidden');
    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
    document.getElementById('hakkimda').scrollIntoView({ behavior: 'smooth' });
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
