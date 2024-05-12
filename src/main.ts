import Swiper from "swiper";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

interface CardData {
  name: string;
  role: string;
  text: string;
  imageSrc: string;
}

async function fetchCards(): Promise<CardData[]> {
  return [
    {
      name: "Laura Silva",
      role: "Gerente de Marketing",
      text: "Comprometida em criar estratégias de marketing inovadoras que impulsionem nossa marca a novas alturas.",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1677553953991-53f96b04fe72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Carlos Martins",
      role: "Desenvolvedor Sênior",
      text: "Especializado em desenvolvimento front-end e apaixonado por tecnologias web modernas.",
      imageSrc:
        "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mariana Costa",
      role: "Diretora Financeira",
      text: "Focada em otimizar os processos financeiros para garantir eficiência e crescimento sustentável.",
      imageSrc:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ricardo Gomes",
      role: "Especialista em Recursos Humanos",
      text: "Ajudando a construir uma cultura empresarial que atrai e mantém talentos excepcionais.",
      imageSrc:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SFIlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Beatriz Pereira",
      role: "Chefe de Operações",
      text: "Dedicada a melhorar as operações diárias para aumentar a produtividade e eficácia.",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661589856899-6dd0871f9db6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9wZXJhdGlvbnMlMjBtYW5hZ2VyJTIwZmVtYWxlfGVufDB8fDB8fHww",
    },
    {
      name: "Antônio Neto",
      role: "Consultor de TI",
      text: "Provendo soluções de TI que ajudam a resolver os desafios mais complexos da empresa.",
      imageSrc:
        "https://images.unsplash.com/photo-1553484771-898ed465e931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3BlcmF0aW9ucyUyMG1hbmFnZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];
}

document.addEventListener("DOMContentLoaded", async () => {
  const cards = await fetchCards();
  const swiperWrapper = document.querySelector("#mySwiper");

  if (swiperWrapper) {
    cards.forEach((card) => {
      const slide = document.createElement("swiper-slide");
      slide.className = "swiper-slide rounded-xl";
      slide.innerHTML = `
      <div class="max-w-sm  mx-auto overflow-hidden">
        <div class="flex flex-col items-center p-4">
            <img class="w-16 h-16 rounded-full mr-4" src="${card.imageSrc}" alt="${card.name}">
            <div class="flex flex-col">
                <p class="text-lg font-semibold text-gray-900">${card.name}</p>
                <p class="text-sm text-gray-500">${card.role}</p>
                <p class="text-sm text-gray-800 mt-2">${card.text}</p>
            </div>
        </div>
      </div>
  
        `;
      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper here if it depends on the slides being added
    const swiper = new Swiper("#mySwiper", {
      modules: [FreeMode, Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      freeMode: true,
    });

    swiper.update(); // Update swiper to recognize the newly added slides
  } else {
    console.error("Swiper wrapper not found!");
  }
});

////////////////////////////////////FORMULARIO//////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm") as HTMLFormElement; // Type assertion here

  if (form) {
    // Checking if the form is not null
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      fetch("YOUR_BACKEND_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Formulário enviado com sucesso!");
        })
        .catch((error) => {
          console.log(data);
          console.error("Error:", error);
          alert("Erro ao enviar formulário!");
        });
    });
  } else {
    console.error("Form element not found");
  }
});
