const conteudo = [
    {
        date: '02 de jul, 2022',
        title: 'Agora é oficial: o Windows 11 está vindo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
    },
    {
        date: '01 de jul, 2022',
        title: 'Tim Berners-Lee vai leiloar código-fonte da web',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
    },
    {
        date: '30 de jun, 2022',
        title: 'Tem Firefox novo no pedaço e você vai querer migrar',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.'
    },
    {
        date: '29 de jun, 2021',
        title: 'John McAfee, criador do antivírus McAfee, morre',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
    }
]


const mostrarNaTela = document.querySelector('main')
conteudo.forEach(lista => {
    mostrarNaTela.innerHTML += `
    <section class="element-main">
        <div>
            <div class="title-main">
                <p>${lista.date}</p >
                <img src="src/icon-love.svg" alt="icon heart">
            </div>
            <div class="content-main">
                <h2>${lista.title}</h2>
                <p>${lista.content}</p>
            </div>
        </div >
    </section >
    </d >
        `
})

