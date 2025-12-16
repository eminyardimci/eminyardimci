let currentLang = "tr";

const content = {
    tr: {
        title: "Mekatronik Mühendisi",
        aboutTitle: "Hakkımda",
        aboutText: "Elektronik kart tasarımı, gömülü sistem yazılımı ve otomasyon teknolojilerinde deneyimli bir mekatronik mühendisiyim.",
        projectsTitle: "Projeler",
        contactTitle: "İletişim",

        robotaksi: "Otonom araç yarışmaları için elektronik kart tasarımı, gömülü sistem yazılımı ve sensör entegrasyonu.",
        tubitak: "Bluetooth tabanlı kontrol sistemi ve mekanik tasarım.",
        robotkol: "KOSGEB destekli robot kol projesi, prototip ve yazılım geliştirme."
    },
    en: {
        title: "Mechatronics Engineer",
        aboutTitle: "About Me",
        aboutText: "Mechatronics engineer experienced in PCB design, embedded systems and automation technologies.",
        projectsTitle: "Projects",
        contactTitle: "Contact",

        robotaksi: "Autonomous vehicle project involving PCB design, embedded software and sensor integration.",
        tubitak: "Bluetooth-based control system and mechanical design.",
        robotkol: "KOSGEB-supported robotic arm project with embedded software development."
    }
};

const projectDetails = {
    robotaksi: {
        tech: ["STM32", "CAN Bus", "ROS", "PCB Design", "Sensor Fusion"],
        image: "assets/projects/robotaksi.jpg",
        tr: {
            title: "Robotaksi Projesi",
            description: "2023–2025 yılları arasında otonom araç yarışmaları kapsamında elektronik kart tasarımı, gömülü sistem yazılımı ve takım kaptanlığı görevlerini üstlendim."
        },
        en: {
            title: "Robotaxi Project",
            description: "Between 2023 and 2025, I worked on autonomous vehicle platforms focusing on PCB design and embedded software."
        }
    },
    tubitak: {
        tech: ["Arduino", "Bluetooth", "3D Printing"],
        image: "assets/projects/tubitak.jpg",
        tr: {
            title: "TÜBİTAK 2242",
            description: "Yardımcı robot kol projesi kapsamında mekanik tasarım, kontrol sistemi ve prototip geliştirme."
        },
        en: {
            title: "TUBITAK 2242",
            description: "Robotic assistant arm project involving mechanical design and control systems."
        }
    },
    robotkol: {
        tech: ["Embedded C", "Motor Control", "Prototyping"],
        image: "assets/projects/robotkol.jpg",
        tr: {
            title: "Robot Kol Projesi",
            description: "KOSGEB destekli robot kol projesinde gömülü sistem yazılımı ve prototip üretimi."
        },
        en: {
            title: "Robotic Arm Project",
            description: "KOSGEB-supported robotic arm project focusing on embedded systems and prototyping."
        }
    }
};

function setLang(lang) {
    currentLang = lang;
    document.getElementById("title").innerText = content[lang].title;
    document.getElementById("about-title").innerText = content[lang].aboutTitle;
    document.getElementById("about-text").innerText = content[lang].aboutText;
    document.getElementById("projects-title").innerText = content[lang].projectsTitle;
    document.getElementById("contact-title").innerText = content[lang].contactTitle;
    document.getElementById("robotaksi-text").innerText = content[lang].robotaksi;
    document.getElementById("tubitak-text").innerText = content[lang].tubitak;
    document.getElementById("robotkol-text").innerText = content[lang].robotkol;
}

function openModal(project) {
    const data = projectDetails[project];
    document.getElementById("modal-title").innerText = data[currentLang].title;
    document.getElementById("modal-description").innerText = data[currentLang].description;
    document.getElementById("modal-image").src = data.image;

    const techList = document.getElementById("modal-tech");
    techList.innerHTML = "";
    data.tech.forEach(t => {
        const li = document.createElement("li");
        li.innerText = t;
        techList.appendChild(li);
    });

    document.getElementById("project-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("project-modal").style.display = "none";
}

setLang("tr");
