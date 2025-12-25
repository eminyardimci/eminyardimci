// ================= DİLLER =================
const languages = {
    tr: {
        about: 'HAKKIMDA', meb: 'ULUSLAR ARASI MEB ROBOT YARIŞMASI', tubitak: 'TÜBİTAK 2242', robotaksi: 'ROBOTAKSİ BİNEK OTONOM ARAÇ YARIŞMASI',
        robotkol: 'KOSGEB DESTEKLİ ROBOT KOL PROJESİ', plcatolyesi: 'PLC-LOJİK ATÖLYESİ ÇALIŞMALARI', egitmenlik: 'T3 VAKFI DENEYAP ATÖLYELERİ – EĞİTMENLİK', scada: 'KARGO OTOMASYONU PROJESİ',
        clawgraber: 'CLAW GRABBER', bitirme: 'BİTİRME PROJESİ (DÜ-HAS)', cvTitle: 'Özgeçmiş', profileTitle: 'Profil',
        profileDesc: 'Elektronik kart tasarımı, gömülü sistem yazılımı ve otomasyon teknolojilerinde deneyimli; takım çalışmasına yatkın ve yenilikçi çözümler üretmeye odaklı bir mekatronik mühendisiyim.',
        educationTitle: 'Eğitim', duzceUni: 'Düzce Üniversitesi', mechatronics: 'Mekatronik Mühendisliği',
        highSchool: 'İnönü MTAL – Elektrik Teknolojileri<br>2015 – 2019', languagesTitle: 'Diller',
        turkish: 'Türkçe', english: 'İngilizce (A2)', contactTitle: 'İletişim Bilgileri',
        personalFeaturesTitle: 'Kişisel Özellikler', teamwork: 'Takım çalışması ve liderlik',
        newTech: 'Yeni teknolojileri öğrenme ve uygulama', timeMgmt: 'Zaman yönetimi ve planlama',
        workHistoryTitle: 'Çalışma Geçmişi', mavili: 'Mavili Elektronik (Stajyer)', petkom: 'Petkom Yazılım (Stajyer)',
        pektam: 'Pektam Pano (Stajyer)', sunny: 'Sunny Elektronik (Stajyer)', orbiba: 'Orbiba Robotics (Stajyer)',
        sonel: 'Sonel Yazılım – Ar-Ge', t3: 'T3 Vakfı – Eğitmen', skillsTitle: 'Beceriler',
        electronicDesign: 'Elektronik Kart Tasarımı', embedded: 'Gömülü Sistem Yazılımı',
        plc: 'PLC / HMI / SCADA', '3dModeling': '3D Katı Modelleme', certificatesTitle: 'Sertifikalar',
        stm32: 'STM32', freertos: 'FreeRTOS', altium: 'Altium PCB', cProg: 'C Programlama',
        welding: 'Gaz Altı Kaynak (Magwell)', close: 'Kapat', projects: 'Projeler',
        university: '<strong>Düzce Üniversitesi</strong><br>Mekatronik Mühendisliği<br>2021 – 2025 | GNO: 3.38',
        galleryTitle: 'Proje Resimleri',
        viewImages: '<i class="fas fa-images"></i> Resimleri Gör'
    },
    en: {
        about: 'ABOUT', meb: 'INTERNATIONAL MEB ROBOT COMPETITION', tubitak: 'TÜBİTAK 2242', robotaksi: 'ROBOTAXI PASSENGER AUTONOMOUS VEHICLE COMPETITION',
        robotkol: 'KOSGEB SUPPORTED ROBOT ARM PROJECT', plcatolyesi: 'PLC-LOGIC WORKSHOP STUDIES', egitmenlik: 'T3 FOUNDATION DENEYAP WORKSHOPS – INSTRUCTORSHIP', scada: 'CARGO AUTOMATION PROJECT',
        clawgraber: 'CLAW GRABBER', bitirme: 'GRADUATION PROJECT (DÜ-HAS)', cvTitle: 'Resume', profileTitle: 'Profile',
        profileDesc: 'Experienced in electronic board design, embedded system software, and automation technologies; a mechatronics engineer inclined to teamwork and focused on producing innovative solutions.',
        educationTitle: 'Education', duzceUni: 'Düzce University', mechatronics: 'Mechatronics Engineering',
        highSchool: 'İnönü MTAL – Electrical Technologies<br>2015 – 2019', languagesTitle: 'Languages',
        turkish: 'Turkish', english: 'English (A2)', contactTitle: 'Contact Information',
        personalFeaturesTitle: 'Personal Features', teamwork: 'Teamwork and leadership',
        newTech: 'Learning and applying new technologies', timeMgmt: 'Time management and planning',
        workHistoryTitle: 'Work History', mavili: 'Mavili Electronics (Intern)', petkom: 'Petkom Software (Intern)',
        pektam: 'Pektam Panel (Intern)', sunny: 'Sunny Electronics (Intern)', orbiba: 'Orbiba Robotics (Intern)',
        sonel: 'Sonel Software – R&D', t3: 'T3 Foundation – Instructor', skillsTitle: 'Skills',
        electronicDesign: 'Electronic Board Design', embedded: 'Embedded System Software',
        plc: 'PLC / HMI / SCADA', '3dModeling': '3D Solid Modeling', certificatesTitle: 'Certificates',
        stm32: 'STM32', freertos: 'FreeRTOS', altium: 'Altium PCB', cProg: 'C Programming',
        welding: 'Gas Metal Arc Welding (Magwell)', close: 'Close', projects: 'Projects',
        university: '<strong>Düzce University</strong><br>Mechatronics Engineering<br>2021 – 2025 | GPA: 3.38',
        galleryTitle: 'Project Images',
        viewImages: '<i class="fas fa-images"></i> View Images'
    }
};
// ================= PROJE VERİLERİ =================
// ================= PROJE VERİLERİ =================
const sections = {
    tr: {
        hakkimda: { year: '', title: '', description: '', images: [] },
        meb: { 
            year: '2017-2018', 
            title: 'Uluslar Arası MEB Robot Yarışması', 
            description: '2017–2018 yıllarında Sivas’ta düzenlenen 18. MEB Uluslararası Robot Yarışması “Hızlı Çizgi İzleyen” kategorisine katıldım.<br>Robotun siyah zemin üzerindeki beyaz çizgiyi otonom olarak en kısa sürede ve minimum hatayla takip etmesi hedeflendi.<br>Bu projede elektronik komponent seçimi, çizgi sensörlerinin belirlenmesi ve yerleşimi, motor sürücü devresi ile gömülü yazılımın geliştirilmesi görevlerini üstlendim.', 
            images: ['assets/projects/meb.png'] 
        },
        tubitak: { 
            year: '2021', 
            title: 'TÜBİTAK 2242', 
            description: 'TÜBİTAK 2242 Yarışması İmalat ve Otomotiv kategorisinde takım olarak beşincilik elde ettik.<br>Projede Bluetooth haberleşme altyapısına sahip Arduino tabanlı kontrol sistemi geliştirilmiş, mekanizma tasarımı yapılmış ve gerekli sensör entegrasyonları gerçekleştirilmiştir.<br>Tasarlanan parçalar 3D baskı yöntemiyle üretilmiş ve sistem, tavana monte edilen raylı yapı üzerinde hareket edebilecek şekilde tasarlanmıştır.<br>Projenin temel amacı; dar alanlarda yer kaybını en aza indirerek, raylı sistem üzerinde yük kaldırma ve çeşitli yardımcı işleri gerçekleştirebilen modüler bir robot kol prototipi geliştirmektir.', 
            images: ['assets/projects/2242-1.png', 'assets/projects/2242-2.png'] 
        },
        robotaksi: { 
            year: '2023-2025', 
            title: 'Robotaksi Binek Otonom Araç Yarışması', 
            description: 'Robotaksi Binek Otonom Araç Yarışması’nın amacı; otonom sürüş kabiliyetlerine sahip, güvenli, verimli ve gerçek şehir senaryolarını simüle edebilen binek araçların tasarlanması ve geliştirilmesidir. Yarışma kapsamında ekipler; algılama, karar verme, kontrol ve araç entegrasyonu gibi disiplinlerde yetkinliklerini ortaya koymaktadır.<br><br>2023 yılında Robotaksi Binek Otonom Araç Yarışması’nda ekibimizle 3.’lük elde ederek En İyi Takım Ruhu ödülünü kazandık. Bu projede aracın elektronik kart tasarımı, elektrik sistemi ve gömülü sistem geliştirmelerinden sorumluydum; sensör ve aktüatör entegrasyonlarını gerçekleştirerek aracın güvenli ve verimli çalışmasını sağladım.<br><br>2024 yılında takım kaptanı olarak, önceki aracımızı hem elektriksel hem de mekanik açıdan baştan tasarlayıp geliştirdik ve buna ek olarak ikinci bir araç ürettik. Projede gömülü sistem yazılımı, elektronik kart tasarımı ve takım organizasyonu görevlerini üstlendim; mekanik çalışmalara da aktif katkı sağladım. Ayrıca Baykar, T.C. Gençlik ve Spor Bakanlığı, Uzay Spor, Ensar Kalıp, Mesan Elektrik ve Düzce Belediyesi ile sponsorluk görüşmeleri yaparak destek sağladım.<br><br>2025 yılında, önceki yıllarda edinilen deneyimler doğrultusunda geliştirilen yeni araç projesinde elektrik ekibinde aktif görev aldım ve mekanik çalışmalara destek sağladım. Bu süreçte Cybertruck tasarım yaklaşımından esinlenilen yeni bir araç tasarlandı; projede gömülü sistem yazılımı ve elektronik kart tasarımı görevlerini yürüttüm.', 
            images: [
                'assets/projects/robo1.png',
                'assets/projects/robo2.png',
                'assets/projects/robo.png',
                'assets/projects/robo4.png',
                'assets/projects/robo5.png',
                'assets/projects/robo6.png'
            ] 
        },
        robotkol: { 
            year: '2023-2024', 
            title: 'KOSGEB Destekli Robot Kol Projesi', 
            description: 'Sonel Yazılım firmasında bir yıl boyunca, KOSGEB destekli bir proje kapsamında ERP entegreli robot kol geliştirilmesinde görev aldım. Proje kapsamında, üretilen parçalar görüntü işleme yöntemleriyle kalite kontrol analizine tabi tutulmuş, uygun bulunan ürünler otomatik olarak algılanarak ERP sistemine stok ve üretim bilgileriyle kaydedilmiş, hatalı ürünler ise yeniden üretim sürecine yönlendirilmiştir.<br>Bu projede robot kol prototipinin üretimi, motor kontrol sistemleri ve gömülü sistem donanım–yazılım geliştirme görevlerinden sorumluydum. Geliştirilen sistem, üretim sürecinde insan müdahalesini azaltarak otomatik kalite kontrol ve stok yönetimi sağlamayı hedeflemiştir.', 
            images: ['assets/projects/kosgeb.png', 'assets/projects/kosgeb2.png'] 
        },
        plcatolyesi: { 
            year: '2024', 
            title: 'PLC-Lojik Atölyesi Çalışmaları', 
            description: 'Düzce Üniversitesi Mekatronik Mühendisliği bölümüne kazandırılan PLC Atölyesi kapsamında; PLC deney setleri, FESTO endüstriyel deney standları ve sıvı seviye kontrol mekanizması üzerinde PLC programlama çalışmalarında aktif olarak görev aldım.<br>Bu çalışmaların yanı sıra, PLC’den bağımsız olarak kullanılan lojik kapı deney setlerinin bakım, onarım ve yenileme süreçlerinde yer aldım. Mevcut deney setlerinde bulunan bozulmuş LED’ler, lojik kapı entegreleri ve dirençler tespit edilerek değiştirilmiş, bağlantılar ve lehimler elden geçirilmiş ve setlerin elektriksel sağlamlık ve fonksiyon kontrolleri gerçekleştirilmiştir. Yapılan çalışmalar sonucunda deney setleri, dijital mantık konularının uygulamalı olarak sorunsuz şekilde işlenebileceği hale getirilmiştir.<br>Gerçekleştirilen bu çalışmalar, öğrencilerin temel elektronik ve dijital mantık prensiplerini güvenli ve doğru şekilde öğrenmelerini sağlamayı amaçlamıştır.', 
            images: ['assets/projects/plc-lojik1.png', 'assets/projects/plc-lojik3.png', 'assets/projects/plc-lojik2.png'] 
        },
        egitmenlik: { 
            year: '2023-2025', 
            title: 'T3 Vakfı Deneyap Atölyeleri – Eğitmenlik', 
            description: 'T3 Vakfı Deneyap Teknoloji Atölyeleri’nde, Robotik ve Kodlama, Elektronik Programlama ve Nesnelerin İnterneti (IoT), İleri Robotik, Nanoteknoloji ve Tasarım ve Üretim alanlarında eğitmenlik yaptım. Deneyap Atölyeleri, öğrencilerin 36 aylık proje temelli eğitim programı kapsamında bu teknoloji alanlarında hem teorik bilgi hem de uygulamalı deneyim kazanmalarını amaçlayan bir eğitim modelidir.<br>Bu süreçte öğrencilerle yürüttüğüm eğitimlerde robotik sistemlerin temel prensipleri, sensör ve aktüatör kullanımı, algoritma tabanlı çözüm geliştirme yöntemleri, mikrodenetleyici programlama ve gömülü sistem entegrasyonu konularına odaklandım. Elektronik programlama ve IoT derslerinde DENEYAP Kart gibi donanımlar aracılığıyla giriş seviyesinden ileri seviye çözümlere kadar elektronik devre elemanlarının kullanımı, sensör verilerinin işlenmesi ve kablosuz iletişim temelli prototiplerin geliştirilmesi üzerine uygulamalı çalışmalar yaptırdım.<br>Robotik ve İleri Robotik içerikli eğitimlerimde, öğrencilere mobil robot tasarımı, kontrol mantıkları, robot kinematiği ve proje geliştirme süreçlerini uygulamalı olarak anlattım; takım tabanlı proje üretimlerine rehberlik ettim. Nanoteknoloji ve Tasarım ve Üretim alanlarında ise öğrencilerin üretim odaklı düşünme ve problem çözme becerilerini geliştirmek için 3D tasarım araçları, 3D yazıcılar ve çeşitli prototipleme ekipmanlarıyla çalıştık. Eğitimler süresince öğrencilerin proje geliştirme, takım çalışması ve kritik düşünme becerilerini artırmak amacıyla teknik rehberlik sağladım ve çıktıları değerlendirdim.', 
            images: ['assets/projects/eğitmen1.png', 'assets/projects/eğitmen2.png']
        },
        scada: { 
            year: '2025', 
            title: 'Kargo Otomasyonu Projesi', 
            description: 'SCADA dersi kapsamında verilen uygulama ödevi için kargo otomasyonu konusunu seçtim. Geliştirilen otomasyon sisteminin amacı; gelen kargoların boyutlarının ölçülerek sınıflandırılması, uygun bölmelere yönlendirilmesi ve aynı zamanda kargo sayısının kaydedilerek depo kontrolünün sağlanmasıdır.<br>Bu kapsamda sistem kontrolü için Siemens S7-1200 CPU 1214C DC/DC/DC modeli PLC kullanıldı. Kargo boyutlandırma sürecinde sensörlerden alınan analog verilerin işlenebilmesi amacıyla SM 1231 AI 4x13 Bit analog giriş modülü tercih edildi. PLC programı TIA Portal ortamında geliştirilmiş, sistemin görselleştirilmesi ve test edilmesi amacıyla otomasyon süreci Factory I/O kullanılarak simüle edilmiştir. PLC–SCADA entegrasyonu ile sistemin izlenmesi, kontrol edilmesi ve raporlanması sağlanmıştır.', 
            images: ['assets/projects/factro.png', 'assets/projects/facto.png', 'assets/projects/factoryio.png'] 
        },
        clawgraber: { 
            year: '2025', 
            title: 'Claw Grabber', 
            description: 'Mevcut görsel ve referans tasarımlar incelenerek tersine mühendislik metotları uygulanmış, bu doğrultuda mekanik yapıya sahip bir Claw Grabber mekanizması tasarlanmıştır.', 
            images: ['assets/projects/claw.png'] 
        },
        bitirme: { 
            year: '2025', 
            title: 'Bitirme Projesi (DÜ-HAS)', 
            description: 'TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında destek almaya hak kazanan ve yürütücülüğünü üstlendiğim, aynı zamanda bitirme projem olan “Üniversite Ortamlarında Hava Savunma Sistemleri Geliştirilebilir mi?” başlıklı araştırma projesi, TÜBİTAK tarafından maddi ve akademik olarak desteklenmiştir.<br>Proje kapsamında Raspberry Pi tabanlı görüntü işleme sistemleri kullanılarak gerçek zamanlı hedef tespiti ve anlık müdahale algoritmaları geliştirilmiştir. Ayrıca sensör entegrasyonu, veri işleme ve otomatik kontrol yaklaşımları ele alınmış; tüm yazılım ve mekanik bileşenlerin tek bir donanım platformu üzerinde entegre şekilde çalışması sağlanmıştır.<br>Bu çalışma, savunma sistemleri simülasyonları ile üniversite ortamında uygulanabilir prototip geliştirme açısından önemli bir mühendislik ve araştırma deneyimi kazandırmıştır.', 
            images: ['assets/projects/bitirme.png', 'assets/projects/bitirme2.png']
        }
    },
    en: {
        hakkimda: { year: '', title: '', description: '', images: [] },
        meb: { year: '2017-2018', title: 'International MEB Robot Competition', description: 'In 2017–2018, I participated in the 18th MEB International Robot Competition held in Sivas in the "Fast Line Follower" category.<br>The goal was for the robot to autonomously follow the white line on a black surface in the shortest time with minimal error.<br>In this project, I was responsible for selecting electronic components, determining and placing line sensors, motor driver circuit, and developing embedded software.', images: ['assets/projects/meb.jpg'] },
        tubitak: { year: '2021', title: 'TÜBİTAK 2242', description: 'In the TÜBİTAK 2242 Competition Manufacturing and Automotive category, we achieved fifth place as a team.<br>In the project, a Bluetooth communication infrastructure with Arduino-based control system was developed, mechanism design was made, and necessary sensor integrations were performed.<br>The designed parts were produced using 3D printing method, and the system was designed to move on a rail structure mounted on the ceiling.<br>The main purpose of the project is to develop a modular robot arm prototype that can perform lifting loads and various auxiliary tasks on a rail system by minimizing space loss in narrow areas.', images: ['assets/projects/2242-1.jpg', 'assets/projects/2242-2.jpg'] },
        robotaksi: { year: '2023-2025', title: 'Robotaxi Passenger Autonomous Vehicle Competition', description: 'The purpose of the Robotaxi Passenger Autonomous Vehicle Competition is to design and develop passenger vehicles with autonomous driving capabilities, safe, efficient, and capable of simulating real city scenarios. Within the scope of the competition, teams demonstrate their competencies in disciplines such as perception, decision-making, control, and vehicle integration.<br><br>In 2023, in the Robotaxi Passenger Autonomous Vehicle Competition, our team achieved 3rd place and won the Best Team Spirit award. In this project, I was responsible for the vehicle\\\'s electronic board design, electrical system, and embedded system developments; I ensured the safe and efficient operation of the vehicle by performing sensor and actuator integrations.<br><br>In 2024, as the team captain, we redesigned and developed our previous vehicle from scratch both electrically and mechanically, and in addition, we produced a second vehicle. In the project, I undertook the tasks of embedded system software, electronic board design, and team organization; I also actively contributed to mechanical works. In addition, I provided support by conducting sponsorship negotiations with Baykar, T.C. Ministry of Youth and Sports, Uzay Sports, Ensar Mold, Mesan Electric, and Düzce Municipality.<br><br>In 2025, in the new vehicle project developed in line with the experiences gained in previous years, I took an active role in the electrical team and supported mechanical works. In this process, a new vehicle inspired by the Cybertruck design approach was designed; in the project, I carried out the tasks of embedded system software and electronic board design.', images: ['assets/projects/robo1.jpg','assets/projects/robo2.jpg','assets/projects/robo3.jpg','assets/projects/robo4.jpg','assets/projects/robo5.jpg','assets/projects/robo6.jpg'] },
        robotkol: { year: '2023-2024', title: 'KOSGEB Supported Robot Arm Project', description: 'For a year at Sonel Software company, I took part in the development of an ERP-integrated robot arm within the scope of a KOSGEB supported project. Within the scope of the project, the produced parts were subjected to quality control analysis with image processing methods, suitable products were automatically detected and recorded in the ERP system with stock and production information, and defective products were redirected to the re-production process.<br>In this project, I was responsible for the production of the robot arm prototype, motor control systems, and embedded system hardware-software development tasks. The developed system aims to reduce human intervention in the production process and provide automatic quality control and stock management.', images: ['assets/projects/kosgeb1.jpg', 'assets/projects/kosgeb2.jpg'] },
        plcatolyesi: { year: '2024', title: 'PLC-Logic Workshop Studies', description: 'Within the scope of the PLC Workshop gained to Düzce University Mechatronics Engineering department; I took an active role in PLC programming studies on PLC experiment sets, FESTO industrial experiment stands, and liquid level control mechanism.<br>In addition to these studies, I took part in the maintenance, repair, and renewal processes of logic gate experiment sets used independently of PLC. Defective LEDs, logic gate integrated circuits, and resistors in the existing experiment sets were detected and replaced, connections and solders were overhauled, and the sets\\\' electrical robustness and function controls were performed. As a result of the studies, the experiment sets were brought to a state where digital logic topics can be applied smoothly.<br>These realized studies aim to enable students to learn basic electronics and digital logic principles safely and correctly.', images: ['assets/projects/plc-lojik1.jpg', 'assets/projects/plc-lojik2.jpg'] },
        egitmenlik: { year: '2023-2025', title: 'T3 Foundation Deneyap Workshops – Instructorship', description: 'At T3 Foundation Deneyap Technology Workshops, I did instructorship in Robotics and Coding, Electronic Programming and Internet of Things (IoT), Advanced Robotics, Nanotechnology, and Design and Production areas. Deneyap Workshops is an education model aiming for students to gain both theoretical knowledge and practical experience in these technology areas within a 36-month project-based education program.<br>In the trainings I conducted with students in this process, I focused on the basic principles of robotic systems, sensor and actuator usage, algorithm-based solution development methods, microcontroller programming, and embedded system integration topics. In electronic programming and IoT courses, through hardware like DENEYAP Card, I had applied studies from entry level to advanced level solutions on the use of electronic circuit elements, processing of sensor data, and development of wireless communication-based prototypes.<br>In my Robotics and Advanced Robotics content trainings, I explained mobile robot design, control logics, robot kinematics, and project development processes to students in an applied way; I guided team-based project productions. In Nanotechnology and Design and Production areas, we worked with 3D design tools, 3D printers, and various prototyping equipment to develop students\\\' production-oriented thinking and problem-solving skills. Throughout the trainings, I provided technical guidance and evaluated outputs to increase students\\\' project development, teamwork, and critical thinking skills.', images: ['assets/projects/eğitmen1.jpg', 'assets/projects/eğitmen2.jpg'] },
        scada: { year: '2025', title: 'Cargo Automation Project', description: 'For the application assignment given within the scope of the SCADA course, I chose the cargo automation topic. The purpose of the developed automation system is to measure and classify the dimensions of incoming cargos, direct them to appropriate compartments, and at the same time record the number of cargos to provide depot control.<br>Within this scope, Siemens S7-1200 CPU 1214C DC/DC/DC model PLC was used for system control. SM 1231 AI 4x13 Bit analog input module was preferred to process analog data received from sensors in the cargo sizing process. The PLC program was developed in TIA Portal environment, and the automation process was simulated using Factory I/O for the visualization and testing of the system. With PLC-SCADA integration, monitoring, control, and reporting of the system were provided.', images: ['assets/projects/factro.jpg', 'assets/projects/factoryio.jpg'] },
        clawgraber: { year: '2025', title: 'Claw Grabber', description: 'By examining existing visuals and reference designs, reverse engineering methods were applied, and accordingly, a Claw Grabber mechanism with a mechanical structure was designed.', images: ['assets/projects/claw.jpg'] },
        bitirme: { year: '2025', title: 'Graduation Project (DÜ-HAS)', description: 'The research project titled "Can Air Defense Systems be Developed in University Environments?" which has been entitled to receive support within the scope of TÜBİTAK 2209-A University Students Research Projects Support Program, which I undertook the execution of, and which is also my graduation project, has been supported financially and academically by TÜBİTAK.<br>Within the scope of the project, real-time target detection and instant intervention algorithms were developed using Raspberry Pi-based image processing systems. In addition, sensor integration, data processing, and automatic control approaches were addressed; the integrated operation of all software and mechanical components on a single hardware platform was ensured.<br>This study has provided an important engineering and research experience in terms of defense systems simulations and prototype development that can be applied in university environment.', images: ['assets/projects/bitirme.jpg', 'assets/projects/bitirme2.jpg'] }
    }
};

// ... (els, blurOverlay vs. aynı kalır)

// load ve toggleDarkMode güncellenmiş hali:
window.addEventListener('load', () => {
    setLanguage(currentLang, false);
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        els.body.classList.add('dark-mode');
        els.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        els.body.classList.remove('dark-mode');
        els.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
});

function toggleDarkMode() {
    els.body.classList.toggle('dark-mode');
    if (els.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        els.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        localStorage.removeItem('darkMode');
        els.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}
const els = {
    navLinks: document.querySelectorAll('.nav-link'),
    projectDetail: document.getElementById('project-detail'),
    projectYear: document.getElementById('project-year'),
    projectContent: document.getElementById('project-content'),
    hakkimda: document.getElementById('hakkimda'),
    languageToggle: document.getElementById('language-toggle'),
    darkModeToggle: document.getElementById('dark-mode-toggle'),
    sidebar: document.querySelector('.sidebar'),
    projectCloseBtn: document.getElementById('project-close-btn'),
    projectsBtn: document.querySelector('.projects-btn'),
    imagesButton: document.getElementById('images-button'),
    galleryModal: document.getElementById('gallery-modal'),
    galleryCarousel: document.getElementById('gallery-carousel'),
    galleryCloseBtn: document.getElementById('gallery-close-btn'),
    body: document.body
};
// Blur overlay'ı JS ile ekle
const blurOverlay = document.createElement('div');
blurOverlay.classList.add('blur-overlay');
document.body.appendChild(blurOverlay);
let currentLang = localStorage.getItem('lang') || 'tr';
let currentSectionKey = null;
let isTransitioning = false;
els.sidebar.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-link');
    if (!link) return;
    e.preventDefault();
    const key = link.dataset.section;
    if (currentSectionKey === key && key !== 'hakkimda') return;
    showSection(key);
    els.navLinks.forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    if (window.innerWidth <= 900) toggleSidebar();
});
els.languageToggle.addEventListener('click', () => {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
});
els.projectCloseBtn.addEventListener('click', closeSection);
els.galleryCloseBtn.addEventListener('click', closeGallery);
els.projectsBtn.addEventListener('click', toggleSidebar);
els.darkModeToggle.addEventListener('click', toggleDarkMode);
window.addEventListener('load', () => {
    setLanguage(currentLang, false);
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        els.body.classList.add('dark-mode');
        els.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        els.body.classList.remove('dark-mode');
        els.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
});
function setLanguage(lang, reRender = true) {
    if (lang === currentLang) return;
    console.log('Dil değiştiriliyor: ' + lang); // Test log
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (languages[lang][key]) el.innerHTML = languages[lang][key];
    });
    els.languageToggle.textContent = lang === 'tr' ? 'EN' : 'TR';
    // Her zaman açık modal'ı yeniden render et (sorunu çözer)
    if (currentSectionKey && currentSectionKey !== 'hakkimda') {
        console.log('Açık proje yeniden render ediliyor: ' + currentSectionKey); // Test log
        showSection(currentSectionKey);
    }
}
function showSection(key) {
    if (isTransitioning) return;
    isTransitioning = true;
    currentSectionKey = key === 'hakkimda' ? null : key;
    if (key === 'hakkimda') {
        closeProject();
        scrollTo(els.hakkimda);
    } else {
        const section = sections[currentLang][key];
        els.projectYear.textContent = section.year;
        els.projectContent.innerHTML = `<h2>${section.title}</h2><p>${section.description}</p>`;
        els.projectDetail.classList.remove('hidden');
        blurOverlay.classList.add('active');
        requestAnimationFrame(() => {
            els.projectDetail.classList.add('visible');
            scrollTo(els.projectDetail);
        });
        // Resim buton eventi
        els.imagesButton.onclick = () => openGallery(section.images);
    }
    setTimeout(() => isTransitioning = false, 600);
}
function closeProject() {
    els.projectDetail.classList.remove('visible');
    blurOverlay.classList.remove('active');
    setTimeout(() => {
        els.projectDetail.classList.add('hidden');
        els.projectYear.textContent = '';
        els.projectContent.innerHTML = '';
    }, 600);
}
function closeSection() {
    if (isTransitioning) return;
    closeProject();
    els.navLinks.forEach(a => a.classList.remove('active'));
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
    scrollTo(els.hakkimda);
    currentSectionKey = null;
}
function openGallery(images) {
    els.galleryCarousel.innerHTML = '';
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        els.galleryCarousel.appendChild(img);
    });
    els.galleryModal.classList.remove('hidden');
    requestAnimationFrame(() => {
        els.galleryModal.classList.add('visible');
    });
}
function closeGallery() {
    els.galleryModal.classList.remove('visible');
    setTimeout(() => {
        els.galleryModal.classList.add('hidden');
        els.galleryCarousel.innerHTML = '';
    }, 600);
}
function scrollTo(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function toggleSidebar() {
    els.sidebar.classList.toggle('active');
}
function toggleDarkMode() {
    els.body.classList.toggle('dark-mode');
    if (els.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        els.darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        localStorage.removeItem('darkMode');
        els.darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}
