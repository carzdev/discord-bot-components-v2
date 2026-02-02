/**
 * ------------------------------------------------------------------
 * DISCORD COMPONENTS V2
 * ------------------------------------------------------------------
 * @author      Carz
 * @github      https://github.com/carzdev
 * @version     2.0.0
 * ------------------------------------------------------------------
 */

export class V2 {
    static Types = {
        ActionRow: 1, 
        Button: 2,
        Container: 6,
        Section: 7,    // Utilisé pour grouper logiciellement
        Separator: 8,
        TextDisplay: 9,
        Media: 10      // L'image en tant que composant, pas embed !
    };

    /**
     * Container Vertical (Stack). C'est la div <div> principale.
     */
    static container({ accentColor = null, components = [], spacing = 0 }) {
        const payload = {
            type: V2.Types.Container,
            components: components,
            spacing: spacing
        };
        // L'accent color n'est utile que si on veut un bord coloré/fond
        if (accentColor) payload.accent_color = accentColor;
        return payload;
    }

    /**
     * Container Horizontal (Row).
     * Astuce: En V2, on simule souvent une Row via une Section ou un Container spécifique.
     * Ici on configure un Container pour agir comme une ligne.
     */
    static row({ components = [], spacing = 1 }) {
        return {
            type: V2.Types.Container, // ou Section selon l'implém finale Discord
            orientation: 1, // 0=Vertical, 1=Horizontal (Feature 2026)
            components: components,
            spacing: spacing
        };
    }

    /**
     * Texte Avancé.
     * @param {string} style - 'paragraph', 'heading', 'subheading', 'caption'
     */
    static text(content, style = 'paragraph') {
        return {
            type: V2.Types.TextDisplay,
            content: content,
            style: style 
        };
    }

    static separator(spacing = 1) {
        return { type: V2.Types.Separator, spacing, divider: true };
    }

    /**
     * Média Atomique.
     * L'image n'est plus cachée dans un embed, elle est un bloc constructible.
     */
    static image(url, description = "Image") {
        return {
            type: V2.Types.Media,
            url: url,
            description: description,
            // On peut forcer un ratio si l'API le permet, sinon default
        };
    }
}