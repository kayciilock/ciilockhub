async function loadBrands() {
    const container = document.getElementById('brand-container');
    
    try {
        const response = await fetch('json/brands.json');
        const brands = await response.json();

        container.innerHTML = brands.map(brand => `
            <div class="card">
                <div class="brand">
                    <img src="${brand.image}" alt="${brand.heading}">
                </div>
                <h3>${brand.heading}</h3>
                <a href="${brand.link}" class="btn filled">${brand.buttonText}</a>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading brand data:', error);
        container.innerHTML = '<p>Unable to load brands at this time.</p>';
    }
}

loadBrands();