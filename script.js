function openProjects() {
  document.getElementById("projects-overlay").style.display = "flex";
}

function closeProjects() {
  document.getElementById("projects-overlay").style.display = "none";
}

const data = {
  robotaksi: {
    title: "Robotaksi",
    img: "assets/projects/robotaksi.jpg",
    desc: "Otonom araç yarışmaları için geliştirilen elektronik ve gömülü sistemler."
  },
  tubitak: {
    title: "TÜBİTAK",
    img: "assets/projects/tubitak.jpg",
    desc: "Bluetooth kontrollü yardımcı robot kol projesi."
  }
  // diğerlerini aynı şekilde eklersin
};

function openModal(key) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = data[key].title;
  document.getElementById("modal-img").src = data[key].img;
  document.getElementById("modal-desc").innerText = data[key].desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
