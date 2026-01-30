
    const productsGrid = document.getElementById("productsGrid");
    const productsCount = document.getElementById("productsCount");
    const emptyState = document.getElementById("emptyState");
    const activeFiltersBadge = document.getElementById("activeFiltersBadge");

    const searchInput = document.getElementById("searchInput");
    const thicknessSelect = document.getElementById("thicknessSelect");
    const colorSelect = document.getElementById("colorSelect");
    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    const sortSelect = document.getElementById("sortSelect");
    const clearFiltersBtn = document.getElementById("clearFiltersBtn");
    const usageChipsContainer = document.getElementById("usageChips");

    let activeUsages = new Set();

    function renderProducts(list) {
      productsGrid.innerHTML = "";
      if (!list.length) {
        emptyState.style.display = "block";
        productsCount.textContent = "0 productos";
        return;
      }
      emptyState.style.display = "none";

      list.forEach(prod => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
        <div class="product-thumb">
        <img src="${prod.image}" alt="${prod.name}" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
        </div>
        <div class="product-name">${prod.name}</div>
        <div class="product-meta">Grosor: ${prod.thickness} mm · Color: ${prod.color}</div>
        <div class="product-tags">${prod.tag}</div>
        <div class="product-meta">
            ${prod.usage.map(u => u.charAt(0).toUpperCase() + u.slice(1)).join(" · ")}
        </div>
        <div class="product-price-row">
            <span class="product-price">${prod.price.toFixed(2)} €</span>
            <a class="product-cta" href="producto.html?id=${prod.id}">Ver detalle</a>
        </div>
        `;

        productsGrid.appendChild(card);
      });

      productsCount.textContent = `${list.length} producto${list.length !== 1 ? "s" : ""}`;
    }

    function getActiveFiltersCount() {
      let count = 0;
      if (searchInput.value.trim()) count++;
      if (activeUsages.size) count++;
      if (thicknessSelect.value) count++;
      if (colorSelect.value) count++;
      if (minPrice.value) count++;
      if (maxPrice.value) count++;
      return count;
    }

    function applyFilters() {
      let filtered = [...products];

      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(query) ||
          p.tag.toLowerCase().includes(query) ||
          p.usage.some(u => u.toLowerCase().includes(query))
        );
      }

      if (activeUsages.size > 0) {
        filtered = filtered.filter(p =>
          p.usage.some(u => activeUsages.has(u))
        );
      }

      const thicknessValue = thicknessSelect.value;
      if (thicknessValue) {
        const t = Number(thicknessValue);
        filtered = filtered.filter(p => p.thickness === t);
      }

      const colorValue = colorSelect.value;
      if (colorValue) {
        filtered = filtered.filter(p => p.color === colorValue);
      }

      const min = minPrice.value ? Number(minPrice.value) : null;
      const max = maxPrice.value ? Number(maxPrice.value) : null;
      if (min !== null) {
        filtered = filtered.filter(p => p.price >= min);
      }
      if (max !== null) {
        filtered = filtered.filter(p => p.price <= max);
      }

      const sortValue = sortSelect.value;
      if (sortValue === "precio-asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortValue === "precio-desc") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortValue === "grosor-asc") {
        filtered.sort((a, b) => a.thickness - b.thickness);
      } else if (sortValue === "grosor-desc") {
        filtered.sort((a, b) => b.thickness - a.thickness);
      } else if (sortValue === "recomendado") {
        filtered.sort((a, b) => (b.recommended === true) - (a.recommended === true));
      }

      const filterCount = getActiveFiltersCount();
      if (filterCount > 0) {
        activeFiltersBadge.style.display = "inline-block";
        activeFiltersBadge.textContent = `${filterCount} filtro${filterCount > 1 ? "s" : ""} activo${filterCount > 1 ? "s" : ""}`;
      } else {
        activeFiltersBadge.style.display = "none";
      }

      renderProducts(filtered);
    }

    usageChipsContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      const usage = chip.dataset.usage;
      if (activeUsages.has(usage)) {
        activeUsages.delete(usage);
        chip.classList.remove("active");
      } else {
        activeUsages.add(usage);
        chip.classList.add("active");
      }
      applyFilters();
    });

    [searchInput, thicknessSelect, colorSelect, minPrice, maxPrice, sortSelect].forEach(el => {
      el.addEventListener("input", applyFilters);
      el.addEventListener("change", applyFilters);
    });

    clearFiltersBtn.addEventListener("click", () => {
      searchInput.value = "";
      thicknessSelect.value = "";
      colorSelect.value = "";
      minPrice.value = "";
      maxPrice.value = "";
      sortSelect.value = "recomendado";
      activeUsages.clear();
      document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("active"));
      applyFilters();
    });

    renderProducts(products);