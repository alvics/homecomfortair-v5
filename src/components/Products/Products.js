import React, { useState, useEffect, useRef, Fragment } from "react";
import Product from "./Product";
import { graphql, useStaticQuery } from "gatsby";

const Products = () => {
  const query = useStaticQuery(graphql`
    { allStrapiProduct(
      filter: { sub_categories: { elemMatch: { title: { ne: "carrier" } } } }
      sort: { price: ASC }
    ) {
      nodes {
        id
        title
        price
        slug
        image { url }
        sub_categories { title }
        cool_capacity
      }
    } }
  `);

  const allProducts = query.allStrapiProduct.nodes;

  const coolingCapacityRanges = [];
  for (let i = 2; i <= 10; i++) coolingCapacityRanges.push({ min: i, max: i + 0.9 });

  const priceRanges = [
    { min: 1000, max: 1299 },
    { min: 1300, max: 1449 },
    { min: 1450, max: 1599 },
    { min: 1600, max: 1899 },
    { min: 1900, max: 2999 },
    { min: 3000, max: 999999 },
  ];

  // ── State ──────────────────────────────────────────────
  const [selectedCategory, setSelectedCategory]               = useState("split");
  const [selectedBrands, setSelectedBrands]                   = useState([]);
  const [selectedCoolingCapacities, setSelectedCoolingCapacities] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges]         = useState([]);
  const [filteredProducts, setFilteredProducts]               = useState([]);
  const [activeSortBrand, setActiveSortBrand]                 = useState("All");
  const [sortOpen, setSortOpen]                               = useState(false);
  const [sidebarOpen, setSidebarOpen]                         = useState(false);
  const [sectionsOpen, setSectionsOpen]                       = useState({ brand: true, kw: false, price: false });

  // ── Refs for sticky sidebar ────────────────────────────
  const shopLayoutRef      = useRef(null);
  const sidebarColumnRef   = useRef(null);
  const sidebarRef         = useRef(null);
  const brandStripAnchor   = useRef(null);
  const brandStripRef      = useRef(null);
  const brandStripSpacer   = useRef(null);

  useEffect(() => {
    const layout  = shopLayoutRef.current;
    const column  = sidebarColumnRef.current;
    const sidebar = sidebarRef.current;
    if (!layout || !column || !sidebar) return;
    const NAV_H = 90;
    const update = () => {
      const colRect    = column.getBoundingClientRect();
      const layoutRect = layout.getBoundingClientRect();
      const sidebarH   = sidebar.offsetHeight;
      const pastTop        = colRect.top <= NAV_H;
      const footerApproach = layoutRect.bottom <= NAV_H + sidebarH;
      if (!pastTop) {
        sidebar.style.position = "relative"; sidebar.style.top = "0";
        sidebar.style.bottom = "auto"; sidebar.style.left = "auto";
        sidebar.style.width = "auto"; sidebar.style.maxHeight = "none";
        sidebar.style.overflowY = "visible";
      } else if (footerApproach) {
        sidebar.style.position = "absolute"; sidebar.style.bottom = "0";
        sidebar.style.top = "auto"; sidebar.style.left = "0";
        sidebar.style.width = `${column.offsetWidth}px`;
        sidebar.style.maxHeight = `calc(100vh - ${NAV_H}px)`;
        sidebar.style.overflowY = "auto";
      } else {
        sidebar.style.position = "fixed"; sidebar.style.top = `${NAV_H}px`;
        sidebar.style.bottom = "auto"; sidebar.style.left = `${colRect.left}px`;
        sidebar.style.width = `${column.offsetWidth}px`;
        sidebar.style.maxHeight = `calc(100vh - ${NAV_H}px)`;
        sidebar.style.overflowY = "auto";
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  // ── Category base pool ─────────────────────────────────
  const categoryProducts = allProducts.filter(p =>
    selectedCategory === "ducted" ? p.slug?.includes("ducted") : !p.slug?.includes("ducted")
  );

  const categoryBrands = Array.from(
    new Set(categoryProducts.flatMap(p => p.sub_categories.map(s => s.title)))
  );

  // ── Mobile brand strip sticky ──────────────────────────
  useEffect(() => {
    const anchor = brandStripAnchor.current;
    const strip  = brandStripRef.current;
    const spacer = brandStripSpacer.current;
    if (!anchor || !strip || !spacer) return;

    const MOBILE_NAV_H = 115;

    const update = () => {
      if (window.innerWidth >= 768) {
        strip.style.position = "relative";
        strip.style.top = "0";
        spacer.style.height = "0";
        return;
      }
      const { top } = anchor.getBoundingClientRect();
      if (top <= MOBILE_NAV_H) {
        spacer.style.height = `${strip.offsetHeight}px`;
        strip.style.position = "fixed";
        strip.style.top      = `${MOBILE_NAV_H}px`;
        strip.style.left     = "0";
        strip.style.right    = "0";
        strip.style.zIndex   = "45";
      } else {
        spacer.style.height  = "0";
        strip.style.position = "relative";
        strip.style.top      = "0";
        strip.style.zIndex   = "auto";
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // ── Handlers ───────────────────────────────────────────
  const handleCategoryChange = cat => {
    setSelectedCategory(cat);
    setSelectedBrands([]);
    setSelectedCoolingCapacities([]);
    setSelectedPriceRanges([]);
    setActiveSortBrand("All");
  };

  const handleBrandFilter = brand =>
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );

  const handleCoolingCapacityFilter = range =>
    setSelectedCoolingCapacities(prev => {
      const idx = prev.findIndex(r => r.min === range.min && r.max === range.max);
      return idx !== -1 ? prev.filter((_, i) => i !== idx) : [...prev, range];
    });

  const handlePriceRangeFilter = range =>
    setSelectedPriceRanges(prev => {
      const idx = prev.findIndex(r => r.min === range.min && r.max === range.max);
      return idx !== -1 ? prev.filter((_, i) => i !== idx) : [...prev, range];
    });

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedCoolingCapacities([]);
    setSelectedPriceRanges([]);
  };

  const toggleSection = key =>
    setSectionsOpen(prev => ({ ...prev, [key]: !prev[key] }));

  const handleSortByBrand = brand => {
    setActiveSortBrand(brand);
    setSortOpen(false);
    setFilteredProducts(
      brand === "All"
        ? categoryProducts
        : categoryProducts.filter(p => p.sub_categories[0].title === brand)
    );
  };

  // ── Filter effect ──────────────────────────────────────
  useEffect(() => {
    let filtered = categoryProducts;
    if (selectedBrands.length > 0)
      filtered = filtered.filter(p => selectedBrands.includes(p.sub_categories[0].title));
    if (selectedCoolingCapacities.length > 0)
      filtered = filtered.filter(p =>
        selectedCoolingCapacities.some(r =>
          parseFloat(p.cool_capacity) >= r.min && parseFloat(p.cool_capacity) <= r.max
        )
      );
    if (selectedPriceRanges.length > 0)
      filtered = filtered.filter(p =>
        selectedPriceRanges.some(r => p.price >= r.min && p.price <= r.max)
      );
    filtered.sort((a, b) => a.price - b.price);
    setFilteredProducts(filtered);
    setActiveSortBrand("All");
  }, [selectedCategory, selectedBrands, selectedCoolingCapacities, selectedPriceRanges]);

  // ── Counts (based on category pool) ───────────────────
  const brandCounts = categoryBrands.reduce((acc, brand) => {
    acc[brand] = categoryProducts.filter(p => p.sub_categories[0].title === brand).length;
    return acc;
  }, {});

  const kwCounts = coolingCapacityRanges.reduce((acc, range) => {
    acc[`${range.min}-${range.max}`] = categoryProducts.filter(p =>
      parseFloat(p.cool_capacity) >= range.min && parseFloat(p.cool_capacity) <= range.max
    ).length;
    return acc;
  }, {});

  const priceCounts = priceRanges.reduce((acc, range) => {
    acc[`${range.min}-${range.max}`] = categoryProducts.filter(p =>
      p.price >= range.min && p.price <= range.max
    ).length;
    return acc;
  }, {});

  const isBrandSelected    = b => selectedBrands.includes(b);
  const isKwSelected       = r => selectedCoolingCapacities.some(s => s.min === r.min && s.max === r.max);
  const isPriceSelected    = r => selectedPriceRanges.some(s => s.min === r.min && s.max === r.max);

  const activeFilterCount =
    selectedBrands.length + selectedCoolingCapacities.length + selectedPriceRanges.length;

  const activeChips = [
    ...selectedBrands.map(b => ({ label: b, onRemove: () => handleBrandFilter(b) })),
    ...selectedCoolingCapacities.map(r => ({ label: `${r.min.toFixed(1)}–${r.max.toFixed(1)} kW`, onRemove: () => handleCoolingCapacityFilter(r) })),
    ...selectedPriceRanges.map(r => ({ label: `$${r.min}–${r.max === 999999 ? "+" : "$" + r.max}`, onRemove: () => handlePriceRangeFilter(r) })),
  ];

  // ── Sub-components ─────────────────────────────────────
  const FilterRow = ({ checked, onChange, label }) => (
    <li>
      <label style={{
        display: "flex", alignItems: "center",
        cursor: "pointer", padding: "7px 10px", borderRadius: 8,
        background: checked ? "#0075C9" : "transparent",
        transition: "background 0.15s",
      }}>
        <input type="checkbox" onChange={onChange} checked={checked} style={{ accentColor: "#fff" }} />
        <span className="shop-checkbox" style={{
          fontSize: 13, fontWeight: checked ? 700 : 500,
          color: checked ? "#fff" : "#374151", textTransform: "capitalize",
        }}>{label}</span>
      </label>
    </li>
  );

  const CollapseSection = ({ title, sectionKey, defaultOpen, noBorder, children }) => {
    const isOpen = sectionsOpen[sectionKey];
    return (
      <div style={{
        paddingBottom: isOpen ? 16 : 0, marginBottom: 16,
        borderBottom: noBorder ? "none" : "1px solid #f1f5f9",
      }}>
        <button
          onClick={() => toggleSection(sectionKey)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            width: "100%", background: "none", border: "none", cursor: "pointer",
            padding: "6px 10px", borderRadius: 8, marginBottom: isOpen ? 8 : 0,
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}>
            {title}
          </span>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {isOpen && children}
      </div>
    );
  };

  // ── Sidebar ────────────────────────────────────────────
  const sidebar = (
    <aside className="sidebar-main" style={{
      background: "#fff", border: "1px solid #e8eef5",
      borderRadius: 16, padding: "20px 12px", borderTop: "3px solid #0075C9",
    }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: activeChips.length ? 10 : 16, padding: "0 10px",
      }}>
        <span style={{ fontSize: 13, fontWeight: 800, color: "#1f2937", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span style={{ background: "#0075C9", color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 20, padding: "1px 7px" }}>
              {activeFilterCount}
            </span>
          )}
        </span>
        {activeFilterCount > 0 && (
          <button onClick={handleClearFilters} style={{ fontSize: 11, fontWeight: 700, color: "#0075C9", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            Clear all
          </button>
        )}
      </div>

      {/* Active chips */}
      {activeChips.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 10px", marginBottom: 16 }}>
          {activeChips.map((chip, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              background: "rgba(0,117,201,0.1)", color: "#0075C9",
              fontSize: 11, fontWeight: 700, borderRadius: 20,
              padding: "3px 10px", textTransform: "capitalize",
            }}>
              {chip.label}
              <button onClick={chip.onRemove} style={{ background: "none", border: "none", cursor: "pointer", color: "#0075C9", padding: 0, lineHeight: 1, fontSize: 14 }}>×</button>
            </span>
          ))}
        </div>
      )}

      {/* Category pills */}
      <div style={{ padding: "0 10px", marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 16 }}>
        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 10 }}>
          Category
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { key: "split", label: "Split System" },
            { key: "ducted", label: "Ducted" },
          ].map(cat => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              data-active={selectedCategory === cat.key}
              className="sidebar-cat-btn"
              style={{
                flex: 1, padding: "8px 6px", borderRadius: 10, border: "none",
                fontSize: 12, fontWeight: 700, cursor: "pointer",
                background: selectedCategory === cat.key ? "#0075C9" : "#f3f4f6",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Brand — always open */}
      <CollapseSection title="Brand" sectionKey="brand">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {categoryBrands.map(brand => (
            <FilterRow
              key={brand}
              checked={isBrandSelected(brand)}
              onChange={() => handleBrandFilter(brand)}
              label={brand}
            />
          ))}
        </ul>
      </CollapseSection>

      {/* kW Range — hidden for ducted */}
      {selectedCategory === "split" && (
        <CollapseSection title="Kilowatt Range" sectionKey="kw">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {coolingCapacityRanges.filter(r => kwCounts[`${r.min}-${r.max}`] > 0).map(range => (
              <FilterRow
                key={`${range.min}-${range.max}`}
                checked={isKwSelected(range)}
                onChange={() => handleCoolingCapacityFilter(range)}
                label={`${range.min.toFixed(1)}–${range.max.toFixed(1)} kW`}
              />
            ))}
          </ul>
        </CollapseSection>
      )}

      {/* Price Range */}
      <CollapseSection title="Price Range" sectionKey="price" noBorder>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {priceRanges.filter(r => priceCounts[`${r.min}-${r.max}`] > 0).map(range => (
            <FilterRow
              key={`${range.min}-${range.max}`}
              checked={isPriceSelected(range)}
              onChange={() => handlePriceRangeFilter(range)}
              label={`$${range.min} – ${range.max === 999999 ? "Above" : "$" + range.max}`}
            />
          ))}
        </ul>
      </CollapseSection>
    </aside>
  );

  // ── Render ─────────────────────────────────────────────
  return (
    <Fragment>
      <div style={{ maxWidth: 1800, margin: "0 auto", padding: "24px 16px 64px" }}>

        {/* Mobile sticky brand strip — anchor marks where it sits in flow */}
        <div ref={brandStripAnchor} className="block md:hidden">
          <div ref={brandStripSpacer} />
          <div ref={brandStripRef} style={{
            background: "#fff", borderBottom: "1px solid #e8eef5",
            padding: "10px 16px",
          }}>
            {/* Category row */}
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {[
                { key: "split",  label: "Split System" },
                { key: "ducted", label: "Ducted" },
              ].map(cat => (
                <button key={cat.key} onClick={() => handleCategoryChange(cat.key)}
                  data-active={selectedCategory === cat.key}
                  className="sidebar-cat-btn"
                  style={{
                  padding: "6px 14px", borderRadius: 20, border: "none",
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                  background: selectedCategory === cat.key ? "#0075C9" : "#f3f4f6",
                  transition: "background 0.15s",
                }}>{cat.label}</button>
              ))}
            </div>
            {/* Brand pills row — horizontally scrollable */}
            <div style={{ position: "relative" }}>
              <div style={{
                display: "flex", gap: 8, overflowX: "auto",
                paddingBottom: 4, scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}>
              <button
                onClick={() => setSelectedBrands([])}
                data-active={selectedBrands.length === 0}
                className="sidebar-cat-btn"
                style={{
                  flexShrink: 0, padding: "6px 14px", borderRadius: 20,
                  border: "1px solid #e8eef5", fontSize: 12, fontWeight: 700,
                  cursor: "pointer", whiteSpace: "nowrap",
                  background: selectedBrands.length === 0 ? "#0075C9" : "#fff",
                  transition: "background 0.15s",
                }}
              >All</button>
              {categoryBrands.map(brand => {
                const active = selectedBrands.includes(brand);
                return (
                  <button key={brand} onClick={() => handleBrandFilter(brand)}
                    data-active={active}
                    className="sidebar-cat-btn"
                    style={{
                    flexShrink: 0, padding: "6px 14px", borderRadius: 20,
                    border: active ? "none" : "1px solid #e8eef5",
                    fontSize: 12, fontWeight: 700, cursor: "pointer",
                    whiteSpace: "nowrap", textTransform: "capitalize",
                    background: active ? "#0075C9" : "#fff",
                    transition: "background 0.15s",
                  }}>{brand}</button>
                );
              })}
              </div>
              {/* Right fade — signals more content to scroll */}
              <div style={{
                position: "absolute", right: 0, top: 0, bottom: 4,
                width: 40, pointerEvents: "none",
                background: "linear-gradient(to right, transparent, #fff)",
              }} />
            </div>
          </div>
        </div>

        {/* Mobile filter toggle */}
        <div className="block md:hidden" style={{ marginBottom: 12 }}>
          <button
            onClick={() => setSidebarOpen(o => !o)}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#fff", border: "1px solid #e8eef5", borderRadius: 10,
              padding: "10px 16px", fontSize: 14, fontWeight: 700, color: "#1f2937", cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
            </svg>
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          {sidebarOpen && <div style={{ marginTop: 12 }}>{sidebar}</div>}
        </div>

        {/* Desktop 2-col grid */}
        <div ref={shopLayoutRef} style={{
          display: "grid", gridTemplateColumns: "260px 1fr",
          gap: 16, alignItems: "start", position: "relative",
        }} className="shop-desktop-layout">

          {/* Sidebar */}
          <div ref={sidebarColumnRef} className="hidden md:block">
            <div ref={sidebarRef} style={{ position: "relative" }}>
              {sidebar}
            </div>
          </div>

          {/* Main */}
          <div>
            {/* Category tabs */}
            <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "2px solid #e8eef5" }}>
              {[
                { key: "split",  label: "Split System", count: allProducts.filter(p => !p.slug?.includes("ducted")).length },
                { key: "ducted", label: "Ducted",        count: allProducts.filter(p => p.slug?.includes("ducted")).length },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => handleCategoryChange(tab.key)}
                  style={{
                    padding: "12px 24px", fontSize: 14, fontWeight: 700,
                    background: "none", border: "none", cursor: "pointer",
                    color: selectedCategory === tab.key ? "#0075C9" : "#6b7280",
                    borderBottom: selectedCategory === tab.key ? "2px solid #0075C9" : "2px solid transparent",
                    marginBottom: "-2px", transition: "color 0.15s, border-color 0.15s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.label}
                  <span style={{
                    marginLeft: 8, fontSize: 11, fontWeight: 600,
                    background: selectedCategory === tab.key ? "rgba(0,117,201,0.1)" : "#f3f4f6",
                    color: selectedCategory === tab.key ? "#0075C9" : "#9ca3af",
                    borderRadius: 20, padding: "2px 8px",
                  }}>{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Google trust strip */}
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#fff", border: "1px solid #e8eef5", borderRadius: 10,
              padding: "10px 14px", marginBottom: 12, width: "fit-content",
            }}>
              <svg viewBox="0 0 24 24" width="18" height="18" style={{ flexShrink: 0 }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC05">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1f2937" }}>5.0</span>
              <span style={{ fontSize: 12, color: "#6b7280", borderLeft: "1px solid #e8eef5", paddingLeft: 10 }}>36 Google Reviews</span>
            </div>

            {/* Toolbar */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 12, marginBottom: 20,
              paddingBottom: 16, borderBottom: "1px solid #e8eef5",
            }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#6b7280" }}>
                <span style={{ color: "#1f2937", fontWeight: 800 }}>{filteredProducts.length}</span> {selectedCategory === "ducted" ? "ducted systems" : "split systems"}
              </p>

              {/* Sort dropdown */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setSortOpen(o => !o)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "#fff", border: "1px solid #e8eef5", borderRadius: 10,
                    padding: "9px 14px", fontSize: 14, fontWeight: 600, color: "#1f2937", cursor: "pointer",
                  }}
                >
                  Sort: <span style={{ color: "#0075C9", textTransform: "capitalize" }}>{activeSortBrand}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {sortOpen && (
                  <div style={{
                    position: "absolute", right: 0, top: "calc(100% + 6px)", zIndex: 50,
                    background: "#fff", border: "1px solid #e8eef5", borderRadius: 12,
                    boxShadow: "0 8px 24px rgba(4,21,33,0.12)", minWidth: 180, padding: 8,
                  }}>
                    {["All", ...categoryBrands].map(brand => (
                      <button key={brand} onClick={() => handleSortByBrand(brand)} style={{
                        display: "block", width: "100%", textAlign: "left",
                        padding: "9px 12px", borderRadius: 8, border: "none",
                        fontSize: 14, fontWeight: activeSortBrand === brand ? 700 : 500,
                        color: activeSortBrand === brand ? "#0075C9" : "#374151",
                        background: activeSortBrand === brand ? "rgba(0,117,201,0.08)" : "transparent",
                        cursor: "pointer", textTransform: "capitalize",
                        borderLeft: activeSortBrand === brand ? "3px solid #0075C9" : "3px solid transparent",
                      }}>
                        {brand === "All" ? "All brands" : brand}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product grid */}
            <div className="product-grid">
              {filteredProducts.map(product => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>


        </div>
      </div>

      {sortOpen && <div onClick={() => setSortOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 40 }} />}
    </Fragment>
  );
};

export default Products;
