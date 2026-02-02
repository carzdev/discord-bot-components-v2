# 🚀 Discord Bot V2 Architecture (Layout Engine)

![Discord.js](https://img.shields.io/badge/Discord.js-v14.19%2B-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![CarzDev](https://img.shields.io/badge/Code_By-Carz-FF0055?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

> **L'architecture de référence pour les nouveaux "Components V2" de Discord (2026).**

Ce projet n'est pas juste un bot, c'est un **Moteur de Layout**. Il remplace les anciens Embeds (limités et rigides) par la nouvelle structure **Container-based** de Discord, permettant des designs complexes : colonnes, grilles, typographie sémantique et médias atomiques.

---

## 📑 Sommaire

1. [Pourquoi la V2 ?](#-pourquoi-passer-à-la-v2-)
2. [Installation Rapide](#-installation-rapide)
3. [Documentation API (ComponentFactory)](#-documentation-complète-componentfactory)
4. [Guide de Customisation](#-ce-que-vous-pouvez-modifier)
5. [Comment utiliser ce code dans VOTRE bot ?](#-intégrer-ce-moteur-dans-un-autre-bot)
6. [Dépannage](#-faq--dépannage)

---

## 💎 Pourquoi passer à la V2 ?

| Feature | Embeds Classiques (V1) | **Components V2 (Ce Repo)** |
| :--- | :--- | :--- |
| **Structure** | Rigide (Titre, Desc, Footer) | **Flexible** (Empilement infini de blocs) |
| **Images** | Fixes (Thumbnail/Main) | **Atomiques** (Placez-les où vous voulez) |
| **Nesting** | Impossible | **Oui** (Container dans Container dans Container...) |
| **Texte** | Markdown basique | **Sémantique** (Heading, Caption, Paragraph) |
| **Layout** | Vertical uniquement | **Hybride** (Vertical & Horizontal/Row) |

---

## ⚡ Installation Rapide

Ce repo inclut des scripts d'automatisation pour Windows.

1. **Cloner le projet**
   ```bash
   git clone https://github.com/carzdev/discord-bot-components-v2.git

   cd discord-bot-components-v2

