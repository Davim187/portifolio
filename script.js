
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

let numeroOrdens = 0


const dados = [
    {
        title: "HostDev",
        date: "20/09/2022",
        description: "Projeto: uma página de apresentação de serviços de hospedagem de sites e registro de domínios. O objetivo foi criar uma interface clara e funcional, destacando os principais serviços e informações de forma organizada, utilizando HTML, CSS.",
        tech: ["HTML", "CSS"],
        image: "assets/HostDev.png",
        linkDemo: "https://davim187.github.io/HostDev/",
        linkCode: "https://github.com/Davim187/HostDev",
        numero: ++numeroOrdens
    },
    {
        title: "Calculador de Idade",
        date: "06/10/2022",
        description: "Projeto: um aplicativo que calcula a idade do usuário com base na data de nascimento informada. O objetivo foi criar uma interface simples e intuitiva, aplicando conceitos de HTML, CSS e JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "assets/CalcularImage.png",
        linkDemo: "https://davim187.github.io/Calcular-idade/",
        linkCode: "https://github.com/Davim187/Calcular-idade",
        numero: ++numeroOrdens
    },
    {
        title: "Calcular Media",
        date: "21/10/2022",
        description: "Projeto: uma aplicação que calcula a média de alunos. O objetivo foi criar uma interface simples e intuitiva, aplicando conceitos de HTML, CSS e JavaScript, usando localStorage para armazenamento de dados.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "assets/CalcularMedia.png",
        linkDemo: "https://davim187.github.io/TableAluno/",
        linkCode: "https://github.com/Davim187/TableAluno",
        numero: ++numeroOrdens
    },
    {
        title: "StartSom",
        date: "17/11/2022",
        description: "Projeto: uma plataforma desenvolvida em React voltada para explicações e ensinos sobre violão. A aplicação conta com cadastro e login de usuários, além de uma lista de tarefas para organização do aprendizado.",
        tech: ["JavaScript", "React"],
        image: "assets/startSom.png",
        linkDemo: "https://davim187.github.io/StartSom/",
        linkCode: "https://github.com/Davim187/StartSom",
        numero: ++numeroOrdens
    },
    {
        title: "Mario",
        date: "03/05/2023",
        description: "Projeto: Um jogo simples do Mario, onde o jogador controla o personagem para coletar moedas e evitar obstáculos. Desenvolvido apenas com JavaScript, o jogo oferece uma experiência divertida e interativa.",
        tech: ["JavaScript"],
        image: "assets/Mario.png",
        linkDemo: "https://davim187.github.io/Mario/",
        linkCode: "https://github.com/Davim187/Mario",
        numero: ++numeroOrdens
    },
];

dados.forEach(dado => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${dado.image}" alt="${dado.title}">
        <div class="project-info">
        <h4>${dado.title}</h4>
        <p>${dado.date}.</p>
        <p>
              ${dado.numero}# - ${dado.description}
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

const skill = [
    {
    name: "HTML5",
    class: "bx bxl-html5"
    },
    {
    name: "CSS3",
    class: "bx bxl-css3"
    },
    {
    name: "JavaScript",
    class: "bx bxl-javascript"
    },
    {
    name: "TypeScript",
    class: "bx bxl-typescript"
    },
    {
    name: "React",
    class: "bx bxl-react"
    },
    {
    name: "React Native",
    class: "bx bxl-react"
    },
    {
    name: "Node.js",
    class: "bx bxl-nodejs"
    },
    {
        name: "n8n",
        class: "bx bxl-n8n"
    },
    {
        name: "Php",
        class: "bx bxl-php"
    },
    {
    name: "Git",
    class: "bx bxl-git"
    },
    {
    name: "GitHub",
    class: "bx bxl-github"
    },  
        {
    name: "python",
    class: "bx bxl-python"
    },
]

    const cardContainerSkill = document.getElementById('skills-container');

   skill.forEach((skill) => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.innerHTML = `  
        <i class='${skill.class}'></i>
        <span>${skill.name}</span>
    `;
    cardContainerSkill.appendChild(skillElement);
   }) 

