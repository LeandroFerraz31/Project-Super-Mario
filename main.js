// Selecionando elementos principais
const headerNavLinks = document.querySelectorAll('.header-nav a');
const mainContainer = document.querySelector('.main-container');
const list = document.getElementById('service-list');
const buttonShowAll = document.querySelector('.show-all');

// Dados dos serviços
const menuService = [
	{
		name: 'Reparos de Vazamentos',
		price: 150,
		src: './img/servise.png',
		description:
			'Reparo de vazamentos em torneiras e conexões. Inclui a primeira hora de serviço. R$ 80,00 por hora adicional para serviços mais complexos.',
	},
	{
		name: 'Desentupimento de Esgotos',
		price: 180,
		src: './img/servise.png',
		description:
			'Desobstrução de ralos e pias. Para desentupimentos mais complexos, como vasos sanitários, o preço inicial é de R$ 220,00. Desentupimento de tubulações principais a partir de R$ 350,00.',
	},
	{
		name: 'Instalação de Eletrodomésticos',
		price: 250,
		src: './img/servise.png',
		description:
			'Instalação de máquinas de lavar roupa e lava-louças, com conexões básicas incluídas. Instalação de geladeiras com dispensadores de água/gelo a partir de R$ 200,00.',
	},
	{
		name: 'Renovação de Banheiros',
		price: 3000,
		src: './img/servise.png',
		description:
			'Reforma básica de banheiros, incluindo troca de sanitário, pia e chuveiro. Para uma reforma completa, o preço inicial é de R$ 6.000,00.',
	},
	{
		name: 'Instalação de Sistemas de Água Quente',
		price: 450,
		src: './img/servise.png',
		description:
			'Montagem de aquecedores de água elétricos. Instalação de sistemas de aquecimento a gás a partir de R$ 600,00 e sistemas de energia solar a partir de R$ 4.500,00.',
	},
	{
		name: 'Consultoria em Projetos de Encanamento',
		price: 150,
		src: './img/servise.png',
		description:
			'Visita técnica e avaliação de projetos de encanamento. Cobrado por hora. Desenvolvimento de projetos completos a partir de R$ 1.000,00.',
	},
];

// Função para exibir todos os serviços na página
function showAllServices() {
	list.innerHTML = '';
	// biome-ignore lint/complexity/noForEach: <explanation>
	menuService.forEach((service) => {
		const li = document.createElement('li');
		li.classList.add('service-item'); // Adiciona classe para melhor controle no CSS
		li.innerHTML = `
            <img src="${service.src}" class="service-image" alt="${service.name}" />
            <div class="service-details">
                <p class="service-name">${service.name}</p>
                <p class="item-price">R$ ${service.price.toFixed(2)}</p>
                <p class="service-description">${service.description}</p>
            </div>
        `;
		list.appendChild(li);
	});
}

// Adicionar evento de clique para mostrar todos os serviços ao carregar a página
window.addEventListener('load', showAllServices);

// Função para mostrar a página de serviços
function showServicesPage() {
	// Esconder a seção principal (Home)
	mainContainer.style.display = 'none';

	// Mostrar a lista de serviços
	list.style.display = 'block';

	// Atualizar o conteúdo da lista de serviços
	showAllServices();
}

// Função para mostrar a página inicial (Home)
function showHomePage() {
	// Mostrar a seção principal (Home)
	mainContainer.style.display = 'flex';

	// Esconder a lista de serviços
	list.style.display = 'none';
}

// Adicionar eventos de clique para navegar entre as páginas
headerNavLinks[0].addEventListener('click', showHomePage); // Home
headerNavLinks[1].addEventListener('click', showServicesPage); // Nosso Serviços
headerNavLinks[2].addEventListener('click', showHomePage); // Fale Conosco

// Mostrar a página inicial por padrão ao carregar a página
showHomePage();
