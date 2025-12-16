// Languages
const languages = {
    tr: {
        about: 'HAKKIMDA',
        meb: 'MEB YARIŞMASI',
        tubitak: 'TÜBİTAK YARIŞMASI',
        robotaksi2023: 'ROBOTAKSİ 2023',
        robotaksi2024: 'ROBOTAKSİ 2024',
        robotaksi2025: 'ROBOTAKSİ 2025',
        robotkol: 'ROBOT KOL',
        plcatolyesi: 'PLC ATÖLYESİ',
        egitmenlik: 'EĞİTMENLİK',
        scada: 'SCADA',
        clawgraber: 'CLAW GRABBER',
        bitirme: 'BİTİRME PROJESİ',
        cvTitle: 'Özgeçmiş',
        profileTitle: 'Profil',
        profileDesc: 'Elektronik kart tasarımı, gömülü sistem yazılımı ve otomasyon teknolojilerinde deneyimli; takım çalışmasına yatkın ve yenilikçi çözümler üretmeye odaklı bir mekatronik mühendisiyim.',
        educationTitle: 'Eğitim',
        duzceUni: 'Düzce Üniversitesi',
        mechatronics: 'Mekatronik Mühendisliği',
        highSchool: 'İnönü MTAL – Elektrik Teknolojileri<br>2015 – 2019',
        languagesTitle: 'Diller',
        turkish: 'Türkçe',
        english: 'İngilizce (A2)',
        contactTitle: 'İletişim Bilgileri',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',
        personalFeaturesTitle: 'Kişisel Özellikler',
        teamwork: 'Takım çalışması ve liderlik',
        newTech: 'Yeni teknolojileri öğrenme ve uygulama',
        timeMgmt: 'Zaman yönetimi ve planlama',
        workHistoryTitle: 'Çalışma Geçmişi',
        mavili: 'Mavili Elektronik (Stajyer)',
        petkom: 'Petkom Yazılım (Stajyer)',
        pektam: 'Pektam Pano (Stajyer)',
        sunny: 'Sunny Elektronik (Stajyer)',
        orbiba: 'Orbiba Robotics (Stajyer)',
        sonel: 'Sonel Yazılım – Ar-Ge',
        t3: 'T3 Vakfı – Eğitmen',
        skillsTitle: 'Beceriler',
        electronicDesign: 'Elektronik Kart Tasarımı',
        embedded: 'Gömülü Sistem Yazılımı',
        plc: 'PLC / HMI / SCADA',
        '3dModeling': '3D Katı Modelleme',
        certificatesTitle: 'Sertifikalar',
        stm32: 'STM32',
        freertos: 'FreeRTOS',
        altium: 'Altium PCB',
        cProg: 'C Programlama',
        welding: 'Gaz Altı Kaynak (Magwell)',
        close: 'Kapat',
        projects: 'Projeler',
        university: '<strong data-lang-key="duzceUni">Düzce Üniversitesi</strong><br><span data-lang-key="mechatronics">Mekatronik Mühendisliği</span><br>2021 – 2025 | GNO: 3.38'
    },
    en: {
        about: 'ABOUT',
        meb: 'MEB COMPETITION',
        tubitak: 'TÜBİTAK COMPETITION',
        robotaksi2023: 'ROBOTAXI 2023',
        robotaksi2024: 'ROBOTAXI 2024',
        robotaksi2025: 'ROBOTAXI 2025',
        robotkol: 'ROBOT ARM',
        plcatolyesi: 'PLC WORKSHOP',
        egitmenlik: 'INSTRUCTORSHIP',
        scada: 'SCADA',
        clawgraber: 'CLAW GRABBER',
        bitirme: 'GRADUATION PROJECT',
        cvTitle: 'Resume',
        profileTitle: 'Profile',
        profileDesc: 'Experienced in electronic board design, embedded system software, and automation technologies; a mechatronics engineer inclined to teamwork and focused on producing innovative solutions.',
        educationTitle: 'Education',
        duzceUni: 'Düzce University',
        mechatronics: 'Mechatronics Engineering',
        highSchool: 'İnönü MTAL – Electrical Technologies<br>2015 – 2019',
        languagesTitle: 'Languages',
        turkish: 'Turkish',
        english: 'English (A2)',
        contactTitle: 'Contact Information',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',
        personalFeaturesTitle: 'Personal Features',
        teamwork: 'Teamwork and leadership',
        newTech: 'Learning and applying new technologies',
        timeMgmt: 'Time management and planning',
        workHistoryTitle: 'Work History',
        mavili: 'Mavili Electronics (Intern)',
        petkom: 'Petkom Software (Intern)',
        pektam: 'Pektam Panel (Intern)',
        sunny: 'Sunny Electronics (Intern)',
        orbiba: 'Orbiba Robotics (Intern)',
        sonel: 'Sonel Software – R&D',
        t3: 'T3 Foundation – Instructor',
        skillsTitle: 'Skills',
        electronicDesign: 'Electronic Board Design',
        embedded: 'Embedded System Software',
        plc: 'PLC / HMI / SCADA',
        '3dModeling': '3D Solid Modeling',
        certificatesTitle: 'Certificates',
        stm32: 'STM32',
        freertos: 'FreeRTOS',
        altium: 'Altium PCB',
        cProg: 'C Programming',
        welding: 'Gas Metal Arc Welding (Magwell)',
        close: 'Close',
        projects: 'Projects',
        university: '<strong data-lang-key="duzceUni">Düzce University</strong><br><span data-lang-key="mechatronics">Mechatronics Engineering</span><br>2021 – 2025 | GPA: 3.38'
    }
};

// Project Data
const sections = {
    tr: {
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
            title: 'Claw Grabber',
            description: 'Tersine Mühendislik metotlarını uygulayarak görseldekileri mekanizma olan \'Claw Grabber\' tasarladım.'
        },
        bitirme: {
            year: '2025',
            title: 'Bitirme Projesi',
            description: 'TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında yürütücülüğünü üstlendiğim ve aynı zamanda bitirme projem olan "Üniversite Ortamlarında Hava Savunma Sistemleri Geliştirilebilir mi?" başlıklı araştırma projem, TÜBİTAK tarafından desteklenmeye hak kazanmıştır. Projede, Raspberry Pi tabanlı görüntü işleme sistemleri kullanarak gerçek zamanlı hedef tespiti ve anlık müdahale algoritmaları geliştirdim. Ayrıca proje kapsamında sensör entegrasyonu, veri işleme, otomatik kontrol sistemleri ve tek bir donanım platformu üzerinde tüm yazılım-mekanik entegrasyonu sağlanmıştır. Bu çalışma, hem savunma sistemleri simulasyonları hem de üniversite ortamında uygulanabilir prototip tasarımı açısından önemli bir deneyim kazandırmıştır.'
        }
    },
    en: {
        hakkimda: {
            year: '',
            title: '',
            description: ''
        },
        meb: {
            year: '2018',
            title: 'MEB International Fast Line Following Robot Competition',
            description: 'Between 2017-2018, I took an active role in İnönü MTAL where I received my high school education. I contributed to vehicle software, sensor selection, and various technical issues. In this process, our team completed the competition in 4th place.'
        },
        tubitak: {
            year: '2021',
            title: 'TÜBİTAK-2242',
            description: 'In the TÜBİTAK 2242 Competition, we achieved fifth place as a team in the Manufacturing and Automotive category. In the project, I developed a Bluetooth and Arduino-based control system, performed mechanism design and sensor integration. By 3D printing the parts, we developed a helper robot arm prototype that can move on a rail system mounted on the ceiling for use in kitchens.'
        },
        robotaksi2023: {
            year: '2023',
            title: 'Robotaxi Competition',
            description: 'In the 2023 Robotaxi Passenger Autonomous Vehicle Competition, our team won the Best Team Spirit award by coming 3rd. In this project, I was responsible for the vehicle\'s electronic board design, electrical system, and embedded system developments; I ensured the safe and efficient operation of the vehicle with the integration of sensors and actuators.'
        },
        robotaksi2024: {
            year: '2024',
            title: 'Robotaxi Competition',
            description: 'In 2024, as the team captain in the Robotaxi project, I was involved in redesigning and developing our previous vehicle both electrically and mechanically, and we produced a second vehicle on top of it. I undertook the tasks of embedded system software, electronic board design, and team organization in the project and also contributed to mechanical works. In addition, I provided sponsorship agreements by meeting with Baykar, T.C. Ministry of Youth and Sports, Uzay Sports, Ensar Mold, Mesan Electric, and Düzce Municipality.'
        },
        robotaksi2025: {
            year: '2025',
            title: 'Robotaxi Competition',
            description: 'In 2025, in the Robotaxi project, I supported mechanical works and took part in the electrical team; in this process, we designed and developed a new vehicle. We set out inspired by Cybertack in the vehicle design and I carried out the tasks of embedded system software and electronic board design in the project.'
        },
        robotkol: {
            year: '2023-2024',
            title: 'Robot Arm',
            description: 'I worked in the fields of robot arm prototype production and development of embedded system codes for a year at Sonel Software company within the scope of the KOSGEB supported robot arm project.'
        },
        plcatolyesi: {
            year: '2024',
            title: 'PLC Workshop',
            description: 'For the PLC Workshop gained to Düzce University Mechatronics Engineering department, I took an active role in both PLC programming and mechanical design and assembly works on PLC experiment sets, FESTO experiment stands, and liquid level control mechanism.'
        },
        egitmenlik: {
            year: '2023-2025',
            title: 'Instructorship',
            description: 'I did instructorship in advanced Robotics, Internet of Things and Electronic Programming, Nano Technology, Design and Production, Flying and Autonomous Vehicles in T3 Foundation Deneyap Workshops.'
        },
        scada: {
            year: '2025',
            title: 'SCADA Project',
            description: 'As the application homework of the SCADA course, I chose the cargo automation topic. The purpose of this automation is to dimension the incoming cargos and separate them to appropriate compartments and at the same time to record the number of incoming cargos to provide depot control. For these operations, I preferred Siemens S7-1200 CPU 1214C DC/DC/DC model and SM 1231 AI 4x13BIT module to control analog outputs.'
        },
        clawgraber: {
            year: '2025',
            title: 'Claw Grabber',
            description: 'By applying reverse engineering methods, I designed the mechanism called \'Claw Grabber\' in the visuals.'
        },
        bitirme: {
            year: '2025',
            title: 'Graduation Project',
            description: 'The research project titled \'Can Air Defense Systems be Developed in University Environments?\' which I undertook the execution of within the scope of TÜBİTAK 2209-A University Students Research Projects Support Program and which is also my graduation project, has been entitled to be supported by TÜBİTAK. In the project, I developed real-time target detection and instant intervention algorithms using Raspberry Pi based image processing systems. In addition, sensor integration, data processing, automatic control systems and all software-mechanical integration on a single hardware platform were provided within the scope of the project. This study has provided an important experience in terms of both defense systems simulations and prototype design that can be applied in university environment.'
        }
    }
};

// Variables
let currentLang = localStorage.getItem('lang') || 'tr';
let currentSectionKey = null;

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

// Initial Setup
window.addEventListener('load', () => {
    setLanguage(currentLang);
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        el.innerHTML = languages[lang][el.dataset.langKey];
    });
    if (currentSectionKey) {
        showSection(currentSectionKey);
    }
}

function showSection(key) {
    currentSectionKey = key === 'hakkimda' ? null : key;
    const section = sections[currentLang][key];
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
    currentSectionKey = null;
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
