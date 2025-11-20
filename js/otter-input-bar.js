(function() {
    const STYLE_ID = 'otter-lite-placeholder-styles';

    function ensureStyles() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .otter-lite-placeholder {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                border: 2px dashed rgba(102, 126, 234, 0.4);
                border-radius: 16px;
                padding: 24px;
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08));
                display: flex;
                gap: 16px;
                align-items: center;
            }
            .otter-lite-placeholder h3 {
                margin: 0 0 8px;
                font-size: 1rem;
            }
            .otter-lite-placeholder p {
                margin: 0;
                color: #4a4a4a;
                font-size: 0.95rem;
                line-height: 1.5;
            }
            .otter-lite-cta {
                margin-left: auto;
                background: #667eea;
                color: #fff;
                border: none;
                border-radius: 999px;
                padding: 10px 18px;
                font-weight: 600;
                cursor: pointer;
                transition: opacity 0.2s ease;
            }
            .otter-lite-cta:hover {
                opacity: 0.85;
            }
            .otter-lite-illustration {
                font-size: 2rem;
            }
        `;
        document.head.appendChild(style);
    }

    class OtterLiteBar {
        constructor(containerId) {
            if (typeof document === 'undefined') return;
            this.container = document.getElementById(containerId);
            if (!this.container) {
                console.warn(`OtterLiteBar: container "${containerId}" not found.`);
                return;
            }
            ensureStyles();
            this.render();
        }

        render() {
            this.container.innerHTML = `
                <div class="otter-lite-placeholder">
                    <div class="otter-lite-illustration" aria-hidden="true">🦦</div>
                    <div>
                        <h3>Otter Lite Bar</h3>
                        <p>This open-source preview shows the shell only. The real conversational builder, AI prompts, and file handling live exclusively at vibeotter.com.</p>
                    </div>
                    <button type="button" class="otter-lite-cta" data-otter-cta>
                        See live version
                    </button>
                </div>
            `;

            const btn = this.container.querySelector('[data-otter-cta]');
            if (btn) {
                btn.addEventListener('click', () => {
                    window.open('https://vibeotter.com', '_blank', 'noopener');
                });
            }
        }
    }

    if (typeof window !== 'undefined') {
        window.OtterLiteBar = OtterLiteBar;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = OtterLiteBar;
    }
})();
