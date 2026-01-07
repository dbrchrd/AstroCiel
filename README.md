# Astro Ciel

**Astro Ciel** est une application météo moderne, élégante et réactive, construite avec [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/) et l’API [OpenWeatherMap](https://openweathermap.org/api). Elle permet de consulter la météo en temps réel pour n’importe quelle ville dans le monde, avec une interface intuitive.

<!--  ![Astro Ciel Screenshot](https://TODO)  -->

---

## 🌟 Fonctionnalités

- **Recherche instantanée** : Trouvez une ville en quelques caractères, avec suggestions et drapeaux des pays.
- **Affichage complet** : Température, ressenti, humidité, vent, pression, probabilité de pluie, lever/coucher du soleil.
- **Prévisions détaillées** : Météo horaire pour les 24 prochaines heures et prévisions sur 4 jours.
- **Design immersif** : Interface en verre dépoli (glassmorphism), interface entièrement responsive (mobile/desktop).
- **Expérience utilisateur optimisée** : Scroll horizontal tactile, affichage des données en français, icônes météo dynamiques.

---

## 🛠 Technologie

| Outil/Technologie | Version/Rôle |
|-------------------|-------------|
| [Astro](https://astro.build/) | Framework principal (v5) |
| [Tailwind CSS](https://tailwindcss.com/) | Styling (v4) |
| [OpenWeatherMap API](https://openweathermap.org/api) | Données météo |
| [Cloudflare Pages](https://pages.cloudflare.com/) | Hébergement (adapter Cloudflare) |
| TypeScript | Typage et configuration |

---

## 🚀 Installation

### Prérequis

- **Runtime JS/TS** : Bun, Node.js (v18 ou supérieur) ou Deno
- **Gestionnaire de dépendances** : Bun, pnpm, npm ou yarn.
- Un **compte [OpenWeatherMap](https://openweathermap.org/)** (pour obtenir une clé API)

### Étapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/dbrchrd/astrociel.git
   cd astrociel
   ```
2. **Installer les dépendances**
   ```bash
   bun install
   ```
3. **Configurer l’API**
   - Créez un fichier `.env` à la racine du projet.
   - Ajoutez votre clé OpenWeatherMap :
   ```bash
   OPENWEATHER_API_KEY=votre_cle_api
   ```
4. **Lancer en développement**
   ```bash
   bun --env-file=.env dev --host
   ```
   L’application sera disponible sur [http://localhost:3000](http://localhost:3000).
5. **Builder pour la production**
   ```bash
   bun run build
   ```
6. **Prévisualiser le build**
   ```bash
   bun run preview
   ```

## 📂 Structure du projet
   ```text
   astrociel/
   ├── src/
   │   ├── pages/          # Pages et endpoints API
   │   ├── layouts/        # Layout principal
   │   ├── styles/         # Styles globaux (Tailwind)
   ├── astro.config.mjs    # Configuration Astro
   ├── package.json
   ├── tsconfig.json
   ├── .env
   └── README.md
   ```

Créé avec ❤️ par dbrchrd
