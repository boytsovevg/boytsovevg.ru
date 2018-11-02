import './app.scss';

import { main } from './pages';

export function app() {
    return `
        <div class="page">
            <main class="main">
                ${main()}
            </main>
        </div>
    `;
}