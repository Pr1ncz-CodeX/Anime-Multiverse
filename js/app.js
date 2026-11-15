import { ANIME_DATA } from './data.js';
import { ShaderEngine } from './shaderEngine.js';

// Initialize Persistent WebGL Canvas
const shader = new ShaderEngine('bg-canvas');

// DOM References
const homeView = document.getElementById('home-view');
const universeView = document.getElementById('universe-view');
const gatewaysGrid = document.getElementById('universe-gateways');
const mainLegendsGrid = document.getElementById('main-legends-grid');
const loreContainer = document.getElementById('anime-lore-container');
const specialLegendsGrid = document.getElementById('special-legends-grid');
const toggleSpecialBtn = document.getElementById('toggle-special-btn');
const specialBtnText = document.getElementById('special-btn-text');
const backHomeBtn = document.getElementById('back-home-btn');

// Dossier References
const dossierModal = document.getElementById('dossier-modal');
const dossierContent = document.getElementById('dossier-content');
const closeDossierBtn = document.getElementById('close-dossier-btn');

// Custom Tactical Cursor
const cursor = document.getElementById('custom-cursor');
window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

function setAccentColor(hex) {
  document.documentElement.style.setProperty('--accent', hex);
}

// =====================================================================
// 1. RENDER HOME PAGE (5 UNIVERSE GATEWAYS)
// =====================================================================
function renderHomeGateways() {
  gatewaysGrid.innerHTML = '';

  ANIME_DATA.forEach((anime, index) => {
    const card = document.createElement('div');
    card.className = 'gateway-card';
    card.style.setProperty('--univ-color', anime.themeColor);

    card.innerHTML = `
      <div class="gateway-jp">0${index + 1} // ${anime.jpTitle}</div>
      <div class="gateway-info">
        <h2>${anime.title}</h2>
        <p>${anime.tagline}</p>
      </div>
      <div class="enter-prompt">[ ENTER REALM → ]</div>
    `;

    // Hover: Morph WebGL background to anime's ambient energy
    card.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
      setAccentColor(anime.themeColor);
      shader.setState({
        colorA: anime.themeColor,
        colorB: anime.secondaryColor,
        mode: anime.shaderMode,
        intensity: 0.78
      });
    });

    card.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
      setAccentColor('#00f0ff');
      shader.setState({
        colorA: '#00f0ff',
        colorB: '#090a14',
        mode: 0,
        intensity: 0.65
      });
    });

    // Click: Open Universe Page
    card.addEventListener('click', () => openUniverse(anime));

    gatewaysGrid.appendChild(card);
  });
}

// =====================================================================
// 2. RENDER UNIVERSE PAGE (TIER A -> TIER B -> TIER C)
// =====================================================================
let currentAnime = null;
let isSpecialOpen = false;

function openUniverse(anime) {
  currentAnime = anime;
  isSpecialOpen = false;

  // Update Theme & Shader
  setAccentColor(anime.themeColor);
  shader.setState({
    colorA: anime.themeColor,
    colorB: anime.secondaryColor,
    mode: 0,
    intensity: 0.65
  });

  // Topbar Labels
  document.getElementById('univ-jp-title').textContent = anime.jpTitle;
  document.getElementById('univ-main-title').textContent = anime.title.toUpperCase();
  document.getElementById('active-shader-label').textContent = `${anime.id.toUpperCase()}_AMBIENT`;

  // TIER A: 4 Main Legends Side-by-Side
  mainLegendsGrid.innerHTML = '';
  anime.mainLegends.forEach((char, idx) => {
    const pillar = document.createElement('div');
    pillar.className = 'legend-pillar';
    pillar.style.setProperty('--char-color', char.color);

    const roleClass = char.role.toLowerCase();
    pillar.innerHTML = `
      <div class="pillar-bg-glow"></div>
      <div class="pillar-top">
        <span class="role-pill ${roleClass}">${char.role.toUpperCase()} // 0${idx + 1}</span>
        <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">APEX</span>
      </div>
      <div class="pillar-emblem">${char.name.charAt(0)}</div>
      <div class="pillar-bottom">
        <span class="pillar-epithet">${char.epithet}</span>
        <h3 class="pillar-name">${char.name}</h3>
        <div class="pillar-move">⚡ ${char.signatureMove}</div>
      </div>
    `;

    // HOVER FLEX: Fire character's signature WebGL shader in full background
    pillar.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
      document.getElementById('active-shader-label').textContent = `TECHNIQUE // ${char.name.toUpperCase()}`;
      shader.setState({
        colorA: char.color,
        colorB: anime.secondaryColor,
        mode: char.shaderMode,
        intensity: 0.95
      });
    });

    pillar.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
      document.getElementById('active-shader-label').textContent = `${anime.id.toUpperCase()}_AMBIENT`;
      shader.setState({
        colorA: anime.themeColor,
        colorB: anime.secondaryColor,
        mode: 0,
        intensity: 0.65
      });
    });

    // CLICK: Open Deep-Dive Character Dossier
    pillar.addEventListener('click', () => openDossier(char, anime.title, 'APEX LEGEND'));

    mainLegendsGrid.appendChild(pillar);
  });

  // TIER B: Comprehensive Anime Lore
  loreContainer.innerHTML = `
    <div class="lore-header">
      <h2>${anime.title} — Universe Encyclopedia</h2>
      <div class="lore-meta">${anime.studio} // ERA: ${anime.era}</div>
    </div>
    <div class="lore-grid">
      <div class="lore-box">
        <h3>01 // Origin & Legacy</h3>
        <p>${anime.lore.origin}</p>
      </div>
      <div class="lore-box">
        <h3>02 // Power System Mechanics</h3>
        <p>${anime.lore.powerSystem}</p>
      </div>
      <div class="lore-box">
        <h3>03 // World-Building & Factions</h3>
        <p>${anime.lore.worldBuilding}</p>
      </div>
    </div>
  `;

  // TIER C: Exclusive Special Archive (Zero Overlap)
  specialLegendsGrid.classList.add('collapsed');
  specialBtnText.textContent = `UNLOCK SPECIAL ARCHIVE: ICONIC FIGURES (${anime.specialLegends.length})`;
  document.querySelector('.trigger-icon').textContent = '+';

  specialLegendsGrid.innerHTML = '';
  anime.specialLegends.forEach((char) => {
    const sCard = document.createElement('div');
    sCard.className = 'special-card';
    sCard.style.setProperty('--char-color', char.color);

    const roleClass = char.role.toLowerCase();
    sCard.innerHTML = `
      <span class="role-pill ${roleClass}">${char.role.toUpperCase()} // SPECIAL</span>
      <h4>${char.name}</h4>
      <span class="pillar-epithet">${char.epithet}</span>
      <p style="margin-top: 0.6rem;">⚡ ${char.signatureMove}</p>
    `;

    sCard.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
      shader.setState({
        colorA: char.color,
        colorB: anime.secondaryColor,
        mode: 1,
        intensity: 0.85
      });
    });

    sCard.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
      shader.setState({
        colorA: anime.themeColor,
        colorB: anime.secondaryColor,
        mode: 0,
        intensity: 0.65
      });
    });

    sCard.addEventListener('click', () => openDossier(char, anime.title, 'SPECIAL ARCHIVE'));
    specialLegendsGrid.appendChild(sCard);
  });

  // Switch Views
  homeView.classList.add('hidden');
  homeView.classList.remove('active');
  universeView.classList.remove('hidden');
  universeView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Toggle Special Archive Accordion
toggleSpecialBtn.addEventListener('click', () => {
  isSpecialOpen = !isSpecialOpen;
  if (isSpecialOpen) {
    specialLegendsGrid.classList.remove('collapsed');
    specialBtnText.textContent = `HIDE SPECIAL ARCHIVE (${currentAnime.specialLegends.length})`;
    document.querySelector('.trigger-icon').textContent = '−';
  } else {
    specialLegendsGrid.classList.add('collapsed');
    specialBtnText.textContent = `UNLOCK SPECIAL ARCHIVE: ICONIC FIGURES (${currentAnime.specialLegends.length})`;
    document.querySelector('.trigger-icon').textContent = '+';
  }
});

// Back to Multiverse Hub
backHomeBtn.addEventListener('click', () => {
  universeView.classList.add('hidden');
  universeView.classList.remove('active');
  homeView.classList.remove('hidden');
  homeView.classList.add('active');
  setAccentColor('#00f0ff');
  shader.setState({
    colorA: '#00f0ff',
    colorB: '#090a14',
    mode: 0,
    intensity: 0.65
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
});

// =====================================================================
// 3. VIEW 3: CHARACTER DEEP-DIVE DOSSIER MODAL (ALL 40 LEGENDS)
// =====================================================================
function openDossier(char, animeTitle, tierLabel) {
  dossierModal.style.setProperty('--char-color', char.color);
  const roleClass = char.role.toLowerCase();

  const abilityHTML = char.abilities
    .map((ab) => `<span class="ability-tag">${ab}</span>`)
    .join('');

  dossierContent.innerHTML = `
    <div style="display: flex; gap: 0.6rem; align-items: center; margin-bottom: 0.5rem;">
      <span class="role-pill ${roleClass}">${char.role.toUpperCase()}</span>
      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${animeTitle.toUpperCase()} // ${tierLabel}</span>
    </div>
    <h2 class="dossier-title" style="color: ${char.color};">${char.name}</h2>
    <span class="pillar-epithet" style="font-size: 0.85rem;">${char.epithet}</span>

    <blockquote class="dossier-quote">"${char.quote}"</blockquote>

    <div class="dossier-section">
      <h4>01 // BIOGRAPHY & LORE</h4>
      <p>${char.bio}</p>
    </div>

    <div class="dossier-section">
      <h4>02 // SIGNATURE TECHNIQUE :: ${char.signatureMove.toUpperCase()}</h4>
      <p>${char.moveDetail}</p>
    </div>

    <div class="dossier-section">
      <h4>03 // ARSENAL & TRANSFORMATIONS</h4>
      <div class="ability-tags">${abilityHTML}</div>
    </div>

    <div class="dossier-section">
      <h4>04 // COMBAT TELEMETRY</h4>
      ${renderStatBar('DESTRUCTIVE POWER', char.stats.power, char.color)}
      ${renderStatBar('COMBAT SPEED', char.stats.speed, char.color)}
      ${renderStatBar('BATTLE INTELLECT', char.stats.iq, char.color)}
      ${renderStatBar('SPECIAL / HAX', char.stats.hax, char.color)}
    </div>
  `;

  dossierModal.classList.remove('hidden');
}

function renderStatBar(label, value, color) {
  return `
    <div class="stat-row">
      <div class="stat-label">
        <span>${label}</span>
        <span style="color: ${color};">${value} / 100</span>
      </div>
      <div class="stat-bar-bg">
        <div class="stat-bar-fill" style="width: ${value}%; background: ${color};"></div>
      </div>
    </div>
  `;
}

closeDossierBtn.addEventListener('click', () => {
  dossierModal.classList.add('hidden');
});

dossierModal.addEventListener('click', (e) => {
  if (e.target === dossierModal) {
    dossierModal.classList.add('hidden');
  }
});

// Boot Application
renderHomeGateways();