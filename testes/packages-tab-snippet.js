// ============================================
// DADOS DOS PACOTES POR CATEGORIA
// ============================================
//
// Cada categoria tem um array de pacotes.
// Cada pacote segue a mesma estrutura, então
// a função renderPackages() é genérica —
// basta adicionar novas categorias aqui sem
// mexer em mais nada.
//
// highlighted: true  → aplica o estilo dourado "Mais Escolhido"

const packagesData = {
    casamento: [
        {
            name: 'Essencial',
            description: 'Perfeito para casamentos intimistas',
            price: 'R$ 3.000',
            features: [
                '3 horas de captação',
                'Cerimônia e Recepção',
                '2 Câmeras Profissionais',
                '1 Link de Acesso à Nuvem',
            ],
            delivery: '90 dias',
            highlighted: false,
        },
        {
            name: 'Premium',
            description: 'Cobertura completa com trailer',
            price: 'R$ 3.800',
            features: [
                'Cobertura estendida',
                'Cerimônia e Recepção',
                'Trailer em 1 semana',
                '1 Link de Acesso à Nuvem',
                '1 Pen Drive',
            ],
            delivery: '60 dias',
            highlighted: false,
        },
        {
            name: 'Luxo Completo',
            description: 'Experiência cinematográfica total',
            price: 'R$ 5.200',
            features: [
                'Cobertura máxima',
                'Making Off Noiva e Noivo',
                'Pré-Wedding',
                'Cerimônia e Recepção',
                'Drone',
                'Trailer em 1 dia',
                '2 Blu-Ray + 1 Pen Drive',
                'Embalagem Personalizada',
            ],
            delivery: '30 dias',
            highlighted: true,
        },
    ],

    aniversario: [
        {
            name: 'Essencial',
            description: 'Ideal para festas íntimas e comemorações',
            price: 'R$ 1.800',
            features: [
                '2 horas de captação',
                'Festa e Parabéns',
                '2 Câmeras Profissionais',
                '1 Link de Acesso à Nuvem',
            ],
            delivery: '60 dias',
            highlighted: false,
        },
        {
            name: 'Premium',
            description: 'Cobertura ampla com highlights rápido',
            price: 'R$ 2.600',
            features: [
                'Cobertura estendida',
                'Festa, Parabéns e Making Off',
                'Highlights em 1 semana',
                '1 Link de Acesso à Nuvem',
                '1 Pen Drive',
            ],
            delivery: '45 dias',
            highlighted: false,
        },
        {
            name: 'Luxo Completo',
            description: 'A festa completa em memória eterna',
            price: 'R$ 3.800',
            features: [
                'Cobertura máxima',
                'Making Off dos Preparativos',
                'Festa completa',
                'Drone',
                'Highlights em 24h',
                '2 Blu-Ray + 1 Pen Drive',
                'Embalagem Personalizada',
            ],
            delivery: '30 dias',
            highlighted: true,
        },
    ],
};

// ============================================
// FUNÇÃO AUXILIAR: GERAR HTML DE UM CARD
// ============================================

function buildPackageCard(pkg) {
    // Gera a lista de features com o ícone de check
    const checkSVG = `
        <svg class="check-icon" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>`;

    const featuresHTML = pkg.features
        .map(f => `<li>${checkSVG} ${f}</li>`)
        .join('');

    // Classes condicionais para o card destacado
    const cardClass   = pkg.highlighted ? 'package-card package-highlighted card-entering' : 'package-card card-entering';
    const btnClass    = pkg.highlighted ? 'btn btn-package btn-package-highlighted' : 'btn btn-package';
    const badgeHTML   = pkg.highlighted ? '<div class="package-badge">MAIS ESCOLHIDO</div>' : '';

    return `
        <div class="${cardClass}">
            ${badgeHTML}

            <div class="package-header">
                <h3>${pkg.name}</h3>
                <p class="package-description">${pkg.description}</p>
            </div>

            <div class="package-price">
                <span class="price-value">${pkg.price}</span>
            </div>

            <ul class="package-features">
                ${featuresHTML}
            </ul>

            <div class="package-delivery">
                <span>Entrega em <strong>${pkg.delivery}</strong></span>
            </div>

            <button
                class="${btnClass}"
                onclick="openWhatsAppPackage('${pkg.name}')"
            >
                Solicitar Orçamento
            </button>

            <p class="package-validity">Orçamento válido por 30 dias</p>
        </div>
    `;
}

// ============================================
// FUNÇÃO PRINCIPAL: TROCAR CATEGORIA
// ============================================
//
// O que acontece aqui, passo a passo:
//  1. Atualiza o estado visual das abas (active/inactive)
//  2. Busca os pacotes da categoria escolhida no objeto packagesData
//  3. Gera o HTML de cada card via buildPackageCard()
//  4. Injeta tudo no grid de uma vez (innerHTML)
//  5. A classe "card-entering" + @keyframes cardEnter no CSS
//     faz a animação de entrada automaticamente

function switchCategory(category) {
    // — 1. Atualizar abas —
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        const isActive = tab.dataset.category === category;
        tab.classList.toggle('tab-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // — 2 & 3. Gerar HTML dos cards —
    const packages = packagesData[category];
    const cardsHTML = packages.map(buildPackageCard).join('');

    // — 4. Injetar no DOM —
    const grid = document.getElementById('packages-grid');
    grid.innerHTML = cardsHTML;

    // — 5. (A animação dispara automaticamente via CSS) —
}

// ============================================
// INICIALIZAÇÃO: carregar categoria padrão
// ============================================
//
// Chamamos switchCategory('casamento') dentro do
// DOMContentLoaded para garantir que o grid exista
// antes de tentar preenchê-lo.

document.addEventListener('DOMContentLoaded', function () {
    switchCategory('casamento');
});
