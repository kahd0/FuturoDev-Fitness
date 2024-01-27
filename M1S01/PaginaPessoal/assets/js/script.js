document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os botões de navegação
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Seleciona o contêiner dos projetos e todos os projetos individuais
    const projectsWrapper = document.querySelector('.project-card');
    const projects = document.querySelectorAll('.project');

    // Variável para armazenar o índice do projeto atualmente selecionado
    let currentIndex = 0;

    // Função para exibir o projeto com base no índice fornecido
    function showProject(index) {
        currentIndex = index; // Atualiza o índice do projeto atual

        // Itera sobre todos os projetos e adiciona/remova a classe 'selected' conforme necessário
        projects.forEach((project, i) => {
            if (i === currentIndex) {
                project.classList.add('selected'); // Adiciona a classe 'selected' ao projeto atual
            } else {
                project.classList.remove('selected'); // Remove a classe 'selected' dos outros projetos
            }
        });

        // Obtém o projeto atualmente selecionado
        const selectedProject = document.querySelector('.project.selected');

        // Calcula a posição de rolagem para centralizar o projeto selecionado horizontalmente
        const containerWidth = projectsWrapper.offsetWidth;
        const scrollLeft = selectedProject.offsetLeft - (containerWidth - selectedProject.offsetWidth) / 2;

        // Realiza a rolagem suave para a posição calculada
        projectsWrapper.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }

    // Função para exibir o projeto anterior
    function prevProject() {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        showProject(currentIndex);
    }

    // Função para exibir o próximo projeto
    function nextProject() {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        showProject(currentIndex);
    }

    // Adiciona listeners de evento aos botões de navegação
    prevButton.addEventListener('click', prevProject);
    nextButton.addEventListener('click', nextProject);

    // Adiciona listeners de evento a cada projeto individual
    projects.forEach((project, index) => {
        // Listener de evento para clique em um projeto
        project.addEventListener('click', () => {
            showProject(index); // Exibe o projeto clicado
            const projectTitle = project.querySelector('h2').textContent; // Obtém o título do projeto clicado
            alert(`Título do projeto: ${projectTitle}`); // Exibe um alerta com o título do projeto
        });

        // Listener de evento para quando o mouse está sobre um projeto
        project.addEventListener('mouseover', () => {
            showProject(index); // Exibe o projeto quando o mouse está sobre ele
        });
    });

    showProject(currentIndex); // Exibe o primeiro projeto ao carregar a página
});
