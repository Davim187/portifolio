
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.typing-text', {
        strings: ['Desenvolvedor Full-Stack', 'Especialista em Aplicações Web', 'Automatizador com n8n', 'Entusiasta de Tecnologia'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});


const cardContainer = document.getElementById('projects-container');

const dados = [
    {
        title: "HostDev",
        date: "20/09/2022",
        description: "Página de apresentação de serviços de hospedagem de sites e registros de domínios.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "assets/HostDev.png",
        linkDemo: "https://davim187.github.io/HostDev/",
        linkCode: "https://github.com/Davim187/HostDev"
    },
    {
        title: "Portfólio",
        date: "10/10/2023",
        description: "Meu portfólio pessoal, onde apresento meus projetos e habilidades.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "assets/CalcularImage.png",
        linkDemo: "https://davim187.github.io/HostDev/",
        linkCode: "https://github.com/Davim187/HostDev"
    },
    {
        title: "Projeto n8n",
        date: "15/11/2023",
        description: "Automatização de tarefas utilizando n8n para melhorar a eficiência.",
        tech: ["n8n", "JavaScript"],
        image: "assets/Mario.png",
        linkDemo: "https://davim187.github.io/HostDev/",
        linkCode: "https://github.com/Davim187/HostDev"
    },
    {
        title: "Projeto n8n",
        date: "15/11/2023",
        description: "Automatização de tarefas utilizando n8n para melhorar a eficiência.",
        tech: ["n8n", "JavaScript"],
        image: "images/n8n.png",
        linkDemo: "https://davim187.github.io/HostDev/",
        linkCode: "https://github.com/Davim187/HostDev"
    },
];

dados.forEach(dado => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${dado.image}" alt="${dado.title}">
        <div class="project-info">
        <h4>${dado.title}</h4>
        <p>${dado.date} - Primeiro Projeto.</p>
        <p>
              Pagina de apresentação de serviços de hospedagem de sites e encontros de donminios.
            </p>
            <div class="tech-tags">
              <span>${dado.tech.join('</span><span>')}</span>
            </div>
            <div class="project-links">
              <a href="${dado.linkDemo}" target="_blank"
                ><i class="bx bx-link-external"></i> Demo</a
              >
              <a href="${dado.linkCode}" target="_blank"
                ><i class="bx bxl-github"></i> Código</a
              >
            </div>
    `;
    cardContainer.appendChild(card);
});
