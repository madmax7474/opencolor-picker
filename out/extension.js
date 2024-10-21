"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    let disposable = vscode.commands.registerCommand('opencolor-picker.openColorPickerWebView', () => {
        const panel = vscode.window.createWebviewPanel('colorPicker', // Identificatore del webview
        'Opencolor Picker', // Titolo della finestra
        vscode.ViewColumn.One, // Posizione del WebView
        {
            enableScripts: true, // Abilitiamo gli script nella webview
        });
        // Definiamo l'HTML da mostrare nel WebView
        const htmlContent = `
        <html>
        <head>
            <style>
                body {
                    font-family: sans-serif;
                    margin: 0;
                    padding: 10px;
                }
                .color-section {
                    margin-bottom: 30px;
                }
                h2 {
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .color-container {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr); /* 5 colonne uguali */
                    gap: 20px;
                }
                .color-box-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .color-box {
                    width: 100%;
                    height: 30px; /* Rettangoli più bassi */
                    border-radius: 5px;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                }
                .color-box:hover {
                    transform: scale(1.05);
                }
                .color-label, .color-value {
                    font-size: 14px;
                    margin-top: 5px;
                    text-align: center;
                    color: white; /* Colore bianco */
                }
                .color-value {
                    font-size: 14px;
                    letter-spacing: 1px;
                }
            </style>
        </head>
        <body>
            <!-- Sezione GRAY -->
            <div class="color-section">
                <h2 style="color: #868e96;">GRAY</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'GRAY 0', value: '#f8f9fa' },
            { label: 'GRAY 1', value: '#f1f3f5' },
            { label: 'GRAY 2', value: '#e9ecef' },
            { label: 'GRAY 3', value: '#dee2e6' },
            { label: 'GRAY 4', value: '#ced4da' },
            { label: 'GRAY 5', value: '#adb5bd' },
            { label: 'GRAY 6', value: '#868e96' },
            { label: 'GRAY 7', value: '#495057' },
            { label: 'GRAY 8', value: '#343a40' },
            { label: 'GRAY 9', value: '#212529' }
        ])}
                </div>
            </div>

            <!-- Sezione RED -->
            <div class="color-section">
                <h2 style="color: #ff0000;">RED</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'RED 0', value: '#fff5f5' },
            { label: 'RED 1', value: '#ffe3e3' },
            { label: 'RED 2', value: '#ffc9c9' },
            { label: 'RED 3', value: '#ffa8a8' },
            { label: 'RED 4', value: '#ff8787' },
            { label: 'RED 5', value: '#ff6b6b' },
            { label: 'RED 6', value: '#fa5252' },
            { label: 'RED 7', value: '#f03e3e' },
            { label: 'RED 8', value: '#e03131' },
            { label: 'RED 9', value: '#c92a2a' }
        ])}
                </div>
            </div>

            <!-- Sezione PINK -->
            <div class="color-section">
                <h2 style="color: #ff69b4;">PINK</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'PINK 0', value: '#fff0f6' },
            { label: 'PINK 1', value: '#ffdeeb' },
            { label: 'PINK 2', value: '#fcc2d7' },
            { label: 'PINK 3', value: '#faa2c1' },
            { label: 'PINK 4', value: '#f783ac' },
            { label: 'PINK 5', value: '#f06595' },
            { label: 'PINK 6', value: '#e64980' },
            { label: 'PINK 7', value: '#d6336c' },
            { label: 'PINK 8', value: '#c2255c' },
            { label: 'PINK 9', value: '#a61e4d' }
        ])}
                </div>
            </div>

            <!-- Sezione GRAPE -->
            <div class="color-section">
                <h2 style="color: #be4bdb;">GRAPE</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'GRAPE 0', value: '#f8f0fc' },
            { label: 'GRAPE 1', value: '#f3d9fa' },
            { label: 'GRAPE 2', value: '#eebefa' },
            { label: 'GRAPE 3', value: '#e599f7' },
            { label: 'GRAPE 4', value: '#da77f2' },
            { label: 'GRAPE 5', value: '#cc5de8' },
            { label: 'GRAPE 6', value: '#be4bdb' },
            { label: 'GRAPE 7', value: '#ae3ec9' },
            { label: 'GRAPE 8', value: '#9c36b5' },
            { label: 'GRAPE 9', value: '#862e9c' }
        ])}
                </div>
            </div>

            <!-- Sezione VIOLET -->
            <div class="color-section">
                <h2 style="color: #7950f2;">VIOLET</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'VIOLET 0', value: '#f3f0ff' },
            { label: 'VIOLET 1', value: '#e5dbff' },
            { label: 'VIOLET 2', value: '#d0bfff' },
            { label: 'VIOLET 3', value: '#b197fc' },
            { label: 'VIOLET 4', value: '#9775fa' },
            { label: 'VIOLET 5', value: '#845ef7' },
            { label: 'VIOLET 6', value: '#7950f2' },
            { label: 'VIOLET 7', value: '#7048e8' },
            { label: 'VIOLET 8', value: '#6741d9' },
            { label: 'VIOLET 9', value: '#5f3dc4' }
        ])}
                </div>
            </div>

            <!-- Sezione INDIGO -->
            <div class="color-section">
                <h2 style="color: #4c6ef5;">INDIGO</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'INDIGO 0', value: '#edf2ff' },
            { label: 'INDIGO 1', value: '#dbe4ff' },
            { label: 'INDIGO 2', value: '#bac8ff' },
            { label: 'INDIGO 3', value: '#91a7ff' },
            { label: 'INDIGO 4', value: '#748ffc' },
            { label: 'INDIGO 5', value: '#5c7cfa' },
            { label: 'INDIGO 6', value: '#4c6ef5' },
            { label: 'INDIGO 7', value: '#4263eb' },
            { label: 'INDIGO 8', value: '#3b5bdb' },
            { label: 'INDIGO 9', value: '#364fc7' }
        ])}
                </div>
            </div>

            <!-- Sezione BLUE -->
            <div class="color-section">
                <h2 style="color: #228be6;">BLUE</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'BLUE 0', value: '#e7f5ff' },
            { label: 'BLUE 1', value: '#d0ebff' },
            { label: 'BLUE 2', value: '#a5d8ff' },
            { label: 'BLUE 3', value: '#74c0fc' },
            { label: 'BLUE 4', value: '#4dabf7' },
            { label: 'BLUE 5', value: '#339af0' },
            { label: 'BLUE 6', value: '#228be6' },
            { label: 'BLUE 7', value: '#1c7ed6' },
            { label: 'BLUE 8', value: '#1971c2' },
            { label: 'BLUE 9', value: '#1864ab' }
        ])}
                </div>
            </div>

            <!-- Sezione CYAN -->
            <div class="color-section">
                <h2 style="color: #15aabf;">CYAN</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'CYAN 0', value: '#e3fafc' },
            { label: 'CYAN 1', value: '#c5f6fa' },
            { label: 'CYAN 2', value: '#99e9f2' },
            { label: 'CYAN 3', value: '#66d9e8' },
            { label: 'CYAN 4', value: '#3bc9db' },
            { label: 'CYAN 5', value: '#22b8cf' },
            { label: 'CYAN 6', value: '#15aabf' },
            { label: 'CYAN 7', value: '#1098ad' },
            { label: 'CYAN 8', value: '#0c8599' },
            { label: 'CYAN 9', value: '#0b7285' }
        ])}
                </div>
            </div>

            <!-- Sezione TEAL -->
            <div class="color-section">
                <h2 style="color: #12b886;">TEAL</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'TEAL 0', value: '#e6fcf5' },
            { label: 'TEAL 1', value: '#c3fae8' },
            { label: 'TEAL 2', value: '#96f2d7' },
            { label: 'TEAL 3', value: '#63e6be' },
            { label: 'TEAL 4', value: '#38d9a9' },
            { label: 'TEAL 5', value: '#20c997' },
            { label: 'TEAL 6', value: '#12b886' },
            { label: 'TEAL 7', value: '#0ca678' },
            { label: 'TEAL 8', value: '#099268' },
            { label: 'TEAL 9', value: '#087f5b' }
        ])}
                </div>
            </div>

            <!-- Sezione GREEN -->
            <div class="color-section">
                <h2 style="color: #198754;">GREEN</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'GREEN 0', value: '#ebfbee' },
            { label: 'GREEN 1', value: '#d3f9d8' },
            { label: 'GREEN 2', value: '#b2f2bb' },
            { label: 'GREEN 3', value: '#8ce99a' },
            { label: 'GREEN 4', value: '#69db7c' },
            { label: 'GREEN 5', value: '#51cf66' },
            { label: 'GREEN 6', value: '#40c057' },
            { label: 'GREEN 7', value: '#37b24d' },
            { label: 'GREEN 8', value: '#2f9e44' },
            { label: 'GREEN 9', value: '#2b8a3e' }
        ])}
                </div>
            </div>

            <!-- Sezione LIME -->
            <div class="color-section">
                <h2 style="color: #82c91e;">LIME</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'LIME 0', value: '#f4fce3' },
            { label: 'LIME 1', value: '#e9fac8' },
            { label: 'LIME 2', value: '#d8f5a2' },
            { label: 'LIME 3', value: '#c0eb75' },
            { label: 'LIME 4', value: '#a9e34b' },
            { label: 'LIME 5', value: '#94d82d' },
            { label: 'LIME 6', value: '#82c91e' },
            { label: 'LIME 7', value: '#74b816' },
            { label: 'LIME 8', value: '#66a80f' },
            { label: 'LIME 9', value: '#5c940d' }
        ])}
                </div>
            </div>

            <!-- Sezione YELLOW -->
            <div class="color-section">
                <h2 style="color: #ffc107;">YELLOW</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'YELLOW 0', value: '#fff9db' },
            { label: 'YELLOW 1', value: '#fff3bf' },
            { label: 'YELLOW 2', value: '#ffec99' },
            { label: 'YELLOW 3', value: '#ffe066' },
            { label: 'YELLOW 4', value: '#ffd43b' },
            { label: 'YELLOW 5', value: '#fcc419' },
            { label: 'YELLOW 6', value: '#fab005' },
            { label: 'YELLOW 7', value: '#f59f00' },
            { label: 'YELLOW 8', value: '#f08c00' },
            { label: 'YELLOW 9', value: '#e67700' }
        ])}
                </div>
            </div>

            <!-- Sezione ORANGE -->
            <div class="color-section">
                <h2 style="color: #fd7e14;">ORANGE</h2>
                <div class="color-container">
                    ${generateColorBoxes([
            { label: 'ORANGE 0', value: '#fff4e6' },
            { label: 'ORANGE 1', value: '#ffe8cc' },
            { label: 'ORANGE 2', value: '#ffd8a8' },
            { label: 'ORANGE 3', value: '#ffc078' },
            { label: 'ORANGE 4', value: '#ffa94d' },
            { label: 'ORANGE 5', value: '#ff922b' },
            { label: 'ORANGE 6', value: '#fd7e14' },
            { label: 'ORANGE 7', value: '#f76707' },
            { label: 'ORANGE 8', value: '#e8590c' },
            { label: 'ORANGE 9', value: '#d9480f' }
        ])}
                </div>
            </div>

        </body>
        <script>
            // Aggiungi gli eventi di click sui colori
            document.querySelectorAll('.color-box').forEach(box => {
                box.addEventListener('click', () => {
                    const color = box.getAttribute('data-color');
                    navigator.clipboard.writeText(color)
                        .then(() => alert('Colore copiato: ' + color))
                        .catch(err => console.error('Errore durante la copia:', err));
                });
            });
        </script>
        </html>
        `;
        // Impostiamo il contenuto del webview
        panel.webview.html = htmlContent;
    });
    context.subscriptions.push(disposable);
}
// Funzione per generare i quadrati di colore
function generateColorBoxes(colors) {
    return colors.map(color => `
        <div class="color-box-wrapper">
            <div class="color-box" style="background-color: ${color.value}" data-color="${color.value}"></div>
            <div class="color-label">${color.label}</div>
            <div class="color-value">${color.value}</div>
        </div>
    `).join('');
}
//# sourceMappingURL=extension.js.map