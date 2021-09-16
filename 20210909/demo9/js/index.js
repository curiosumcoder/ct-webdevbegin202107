
document.addEventListener('DOMContentLoaded', event => {
    console.log('DOM ready!');

    fFilter.addEventListener('submit', async event => {
        event.preventDefault();

        console.log('filtering ...');

        const filter = iFilter.value;

        if (filter !== '') {
            // Fetch API (Promises API)
            // Solicitud asincrónica de recurso
            const dataRequest = await fetch('json/data.json');
            const dataJson = await dataRequest.json();
            //console.log(dataJson);
            const products = dataJson.products;
            //console.log(products);

            let filtered = products.filter(p => p.productName.toLowerCase().indexOf(
                filter.toLowerCase()) !== -1);
            console.log(filtered);

            if (filtered.length > 0) {
                // Se procede a crear el HTML
                results.innerHTML = '';
                filtered.forEach(p => {
                        const li = document.createElement('li');
                        //li.innerHTML = p.productName;

                        let pr = document.createElement('p');
                        pr.innerHTML = p.productName;
                        pr.innerHTML += `<br/><small>${p.category.categoryName}</small>`;
                        li.appendChild(pr);

                        let pr2 = document.createElement('p');
                        pr2.innerText = `$ ${p.unitPrice}`;
                        li.appendChild(pr2);

                        results.appendChild(li);
                });
            }
        }
    });
});