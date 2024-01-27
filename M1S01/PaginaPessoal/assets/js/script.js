document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const projectsWrapper = document.querySelector('.project-card');
    const projects = document.querySelectorAll('.project');

    let currentIndex = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            if (i === index) {
                project.classList.add('selected');
            } else {
                project.classList.remove('selected');
            }
        });

        const selectedProject = document.querySelector('.project.selected');
        const containerWidth = projectsWrapper.offsetWidth;
        const scrollLeft = selectedProject.offsetLeft - (containerWidth - selectedProject.offsetWidth) / 2;
        projectsWrapper.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }

    function prevProject() {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        showProject(currentIndex);
    }

    function nextProject() {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        showProject(currentIndex);
    }

    prevButton.addEventListener('click', prevProject);
    nextButton.addEventListener('click', nextProject);

    showProject(currentIndex); // Exibe o primeiro projeto ao carregar a página
});
