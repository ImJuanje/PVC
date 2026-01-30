 const products = [
      // Interior / rotulación
      { id: 1, name: "PVC blanco interior 3 mm 100x70",  image:'../sources/prod1.jpg',images:["../sources/prod1-1.jpg", "../sources/prod1-2.jpg", "../sources/prod1-3.jpg" ], usage: ["interior", "rotulacion"], thickness: 3, color: "blanco", price: 9.9, tag: "Cartelería interior", recommended: true },
      { id: 2, name: "PVC blanco interior 3 mm 200x100", image:'../sources/prod2.jpg', usage: ["interior", "rotulacion"], thickness: 3, color: "blanco", price: 17.5, tag: "Formato grande", recommended: true },
      { id: 3, name: "PVC espumado blanco 5 mm 100x70",  image:'../sources/prod3.jpg',usage: ["interior", "diy"], thickness: 5, color: "blanco", price: 12.5, tag: "Ligero y fácil de cortar", recommended: true },
      { id: 4, name: "PVC espumado blanco 5 mm 200x100", image:'../sources/prod4.jpg',usage: ["interior", "revestimiento"], thickness: 5, color: "blanco", price: 21.9, tag: "Panel grandes superficies", recommended: false },
      { id: 5, name: "PVC blanco rígido 8 mm 100x70",    image:'../sources/prod5.jpg',usage: ["interior", "revestimiento"], thickness: 8, color: "blanco", price: 19.9, tag: "Mayor rigidez", recommended: true },
      { id: 6, name: "PVC blanco rígido 8 mm 200x100",   image:'../sources/prod6.jpg', usage: ["interior", "revestimiento"], thickness: 8, color: "blanco", price: 34.9, tag: "Paredes de alto tráfico", recommended: false },
      { id: 7, name: "PVC blanco sanitario 3 mm 260x120",image:'../sources/prod7.jpg', usage: ["interior", "revestimiento"], thickness: 3, color: "blanco", price: 29.9, tag: "Clínicas y cocinas", recommended: true },
      { id: 8, name: "PVC blanco sanitario 5 mm 260x120",image:'../sources/prod8.jpg', usage: ["interior", "revestimiento"], thickness: 5, color: "blanco", price: 36.9, tag: "Mayor aislamiento", recommended: false },

      // Exterior / UV
      { id: 9, name: "PVC exterior UV 10 mm 100x70",    image:'../sources/prod9.jpg',usage: ["exterior", "rotulacion"], thickness: 10, color: "blanco", price: 27.9, tag: "Resistente al sol", recommended: true },
      { id: 10, name: "PVC exterior UV 10 mm 200x100",  image:'../sources/prod10.jpg',usage: ["exterior", "rotulacion"], thickness: 10, color: "blanco", price: 48.5, tag: "Carteles grandes", recommended: false },
      { id: 11, name: "PVC exterior UV 8 mm 100x70",    image:'../sources/prod11.jpg',usage: ["exterior"], thickness: 8, color: "blanco", price: 24.9, tag: "Rótulos medianos", recommended: false },
      { id: 12, name: "PVC exterior UV 15 mm 150x100",  image:'../sources/prod12.jpg',usage: ["exterior"], thickness: 15, color: "blanco", price: 59.9, tag: "Alta resistencia", recommended: true },

      // Colores
      { id: 13, name: "PVC color gris 5 mm 100x70",    image:'../sources/prod13.jpg',usage: ["interior", "revestimiento"], thickness: 5, color: "gris", price: 16.9, tag: "Acabado elegante", recommended: true },
      { id: 14, name: "PVC color gris 8 mm 200x100",   image:'../sources/prod14.jpg',usage: ["interior", "revestimiento"], thickness: 8, color: "gris", price: 33.9, tag: "Paredes de alto tránsito", recommended: false },
      { id: 15, name: "PVC antracita 5 mm 100x70",     image:'../sources/prod15.jpg',usage: ["interior", "rotulacion"], thickness: 5, color: "antracita", price: 18.5, tag: "Diseño corporativo", recommended: true },
      { id: 16, name: "PVC antracita 10 mm 200x100",   image:'../sources/prod16.jpg', usage: ["interior", "exterior"], thickness: 10, color: "antracita", price: 42.9, tag: "Interiorismo y fachadas", recommended: false },
      { id: 17, name: "PVC negro 3 mm 100x70",         image:'../sources/prod17.jpg',usage: ["rotulacion", "interior"], thickness: 3, color: "negro", price: 14.2, tag: "Fondos para vinilo", recommended: false },
      { id: 18, name: "PVC negro 5 mm 200x100",        image:'../sources/prod18.jpg',usage: ["rotulacion", "exterior"], thickness: 5, color: "negro", price: 27.9, tag: "Cartelería exterior", recommended: true },
      { id: 19, name: "PVC rojo 3 mm 100x70",          image:'../sources/prod19.jpg',usage: ["rotulacion"], thickness: 3, color: "rojo", price: 15.9, tag: "Señalética", recommended: false },
      { id: 20, name: "PVC azul 3 mm 100x70",          image:'../sources/prod20.jpg',usage: ["rotulacion"], thickness: 3, color: "azul", price: 15.9, tag: "Rótulos corporativos", recommended: false },

      // DIY / bricolaje
      { id: 21, name: "PVC espumado blanco 3 mm pack 4 uds", image:'../sources/prod21.jpg', usage: ["diy", "interior"], thickness: 3, color: "blanco", price: 19.9, tag: "Manualidades y proyectos DIY", recommended: true },
      { id: 22, name: "PVC espumado blanco 5 mm pack 4 uds", image:'../sources/prod22.jpg', usage: ["diy", "interior"], thickness: 5, color: "blanco", price: 24.9, tag: "Maquetas y prototipos", recommended: false },
      { id: 23, name: "PVC espumado blanco 10 mm 50x50",     image:'../sources/prod23.jpg', usage: ["diy"], thickness: 10, color: "blanco", price: 11.9, tag: "Base para proyectos 3D", recommended: false },
      { id: 24, name: "PVC blanco ligero 4 mm 100x50",       image:'../sources/prod24.jpg', usage: ["diy", "interior"], thickness: 4, color: "blanco", price: 10.9, tag: "Pequeños proyectos", recommended: false },

      // Revestimiento paredes
      { id: 25, name: "Panel PVC pared 3 mm 260x50 blanco",  image:'../sources/prod25.jpg', usage: ["revestimiento", "interior"], thickness: 3, color: "blanco", price: 18.9, tag: "Cocinas y baños", recommended: true },
      { id: 26, name: "Panel PVC pared 3 mm 260x50 gris",    image:'../sources/prod26.jpg', usage: ["revestimiento", "interior"], thickness: 3, color: "gris", price: 20.5, tag: "Ambientes modernos", recommended: false },
      { id: 27, name: "Panel PVC pared 5 mm 260x50 blanco",  image:'../sources/prod27.jpg',usage: ["revestimiento", "interior"], thickness: 5, color: "blanco", price: 24.9, tag: "Mayor aislamiento", recommended: true },
      { id: 28, name: "Panel PVC pared 5 mm 260x50 antracita",image:'../sources/prod28.jpg',  usage: ["revestimiento", "interior"], thickness: 5, color: "antracita", price: 27.9, tag: "Acabado premium", recommended: false },

      // Más exterior / especiales
      { id: 29, name: "PVC exterior UV 19 mm 200x100",       image:'../sources/prod29.jpg', usage: ["exterior"], thickness: 19, color: "blanco", price: 79.9, tag: "Rótulos XXL", recommended: false },
      { id: 30, name: "PVC exterior UV 10 mm 100x50 gris",   image:'../sources/prod30.jpg',usage: ["exterior"], thickness: 10, color: "gris", price: 29.9, tag: "Cartelería urbana", recommended: false },
      { id: 31, name: "PVC exterior UV 8 mm 150x100 negro",  image:'../sources/prod31.jpg', usage: ["exterior"], thickness: 8, color: "negro", price: 39.9, tag: "Diseño contrastado", recommended: false },
      { id: 32, name: "PVC exterior UV 10 mm 150x100 azul",  image:'../sources/prod32.jpg', usage: ["exterior"], thickness: 10, color: "azul", price: 41.9, tag: "Imagen corporativa", recommended: false }
    ];
 function getProductIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      return id ? Number(id) : null;
    }

    function renderProductDetail(product) {
      const container = document.getElementById("productDetailContainer");
      const extraSection = document.getElementById("productExtraSection");
      const apps = document.getElementById("productApplications");
      const advice = document.getElementById("productAdvice");

      const uses = product.usage
        .map(u => u.charAt(0).toUpperCase() + u.slice(1))
        .join(" · ");

      container.innerHTML = `
        <div class="product-layout">
          <div class="product-media">
            <div class="product-image"></div>
            <div class="product-mini-info">
              Ref. PVC-${product.id.toString().padStart(4,"0")} · Uso: ${uses}
            </div>
          </div>
          <div class="product-info">
            <h1 class="product-title">${product.name}</h1>
            <p class="product-tagline">${product.tag}</p>

            <div class="product-meta">Grosor: <strong>${product.thickness} mm</strong></div>
            <div class="product-meta">Color: <strong>${product.color}</strong></div>
            <div class="product-meta">Uso recomendado: ${uses}</div>

            <div style="margin-top:8px;">
              ${product.recommended ? '<span class="pill">Recomendado</span>' : ""}
              ${product.thickness >= 10 ? '<span class="pill" style="background:#dcfce7;color:#15803d;">Alta resistencia</span>' : ""}
            </div>

            <div class="product-price-block">
              <div class="product-price-main">${product.price.toFixed(2)} € / unidad</div>
              <div class="product-note">
                IVA no incluido. Precio orientativo para compras online.  
                Para grandes cantidades o cortes a medida, solicita un presupuesto personalizado.
              </div>
            </div>

            <div style="margin-top:18px;">
              <button class="btn-primary" type="button" onclick="window.location.href='index.html#contacto'">
                Pedir presupuesto de este producto
              </button>
              <button class="btn-secondary" type="button" onclick="window.history.back()">
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      `;

      apps.innerHTML = `
        <h2 style="font-size:1.1rem; margin-bottom:8px;">Aplicaciones habituales</h2>
        <p>
          Este modelo de plancha de PVC es adecuado para proyectos donde se necesite un material ligero,
          resistente y fácil de limpiar.
        </p>
        <ul style="margin-top:8px; padding-left:16px;">
          <li>· Instalaciones de ${uses.toLowerCase()} según sus características.</li>
          <li>· Cartelería, revestimiento de paredes, señalética o proyectos DIY, según el grosor y el formato.</li>
          <li>· Uso en interior o exterior según la protección UV del modelo seleccionado.</li>
        </ul>
      `;

      advice.innerHTML = `
        <h2 style="font-size:1.1rem; margin-bottom:8px;">Recomendaciones de uso</h2>
        <p>
          Para cortar esta plancha de PVC se recomienda utilizar herramientas adecuadas (cúter fuerte, sierra de calar
          o mesa de corte) y emplear siempre elementos de protección personal.
        </p>
        <p style="margin-top:8px;">
          Si tienes dudas sobre si este grosor es suficiente para tu proyecto, envíanos las medidas y el uso previsto
          y te haremos una recomendación concreta antes de que compres.
        </p>
      `;

      extraSection.style.display = "block";
    }

    function initProductDetail() {
      const id = getProductIdFromUrl();
      const notFound = document.getElementById("productNotFound");

      if (!id) {
        notFound.style.display = "block";
        return;
      }

      // products viene de products.js
      const product = Array.isArray(window.products)
        ? window.products.find(p => p.id === id)
        : null;

      if (!product) {
        notFound.style.display = "block";
        return;
      }

      renderProductDetail(product);
    }

    initProductDetail();