
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_links');
const navButtons = document.querySelectorAll('.navbutton');
let activeSection;



const setActiveSection = (section) => { activeSection = section }

const showPreviousSection = () => {
    const PreviousSection = activeSection.previousElementSibling;
    if (PreviousSection == null) { return } 
    PreviousSection.scrollIntoView()
}

const showNextSection = () => {
    const NextSection = activeSection.nextElementSibling;
    if (NextSection == null) { return } 
    NextSection.scrollIntoView()
}

const keyEventHandler = (keycode) => {
    switch (keycode) {
        case 'ArrowUp':
            showPreviousSection();
            break;
    
        case 'ArrowDown':
            showNextSection();
            break;
        default:
            console.log('wtf?');
    }
}

const activeSectionHandler = (currentSectionId) => {
    navLinks.forEach(link => {
        if (link.dataset.section === currentSectionId) {
            link.classList.add('active');
            return
        }
        link.classList.remove('active')
    })
    navButtons.forEach(button => {
        if (button.dataset.section === currentSectionId) {
            button.classList.add('active');
            return
        }
        button.classList.remove('active')
    })
}

const sectionWatcherCallback = (section, sectionWatcher) => {
    section.forEach(section => {
        if (!section.isIntersecting) {
            return
        }
        activeSectionHandler(section.target.id);
        setActiveSection(section.target)
    })
}

const sectionWatcherOptions = {
    threshold: .6
}

const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)

sections.forEach(section => {
    sectionWatcher.observe(section);
});



window.addEventListener('keydown', (key) => {
    if (key.code === 'ArrowUp') {
        key.preventDefault();
        keyEventHandler(key.code);
    }
    if (key.code === 'ArrowDown') {
        key.preventDefault();
        keyEventHandler(key.code);
    }
})

document.getElementById('hola').addEventListener('click', ()=>{
    window.open('mailto:handemore7@gmail.com');
})
