import './businessCard.scss';

import { socialsList } from '../socialsList/socialsList';

export function businessCard(person) {

    return `
        <div class="business-card">
            <header class="business-card__logo">BES</header>

            <div class="business-card__person person">

                <div class="person__primary-info">
                    <p class="person__fullname">${person.fullName}</p>
                    <span class="person__current-position">${person.currentPosition}</span>
                </div>

                <div class="person__contacts contacts">
                    <div class="contacts__personal">
                        <p class="contacts__cell">${person.cell}</p>
                        <span class="contacts__email">${person.email}</span>
                    </div>

                    <div class="contacts__socials socials">
                        ${socialsList(person.socials)}
                        <span class="socials__nickname">
                            ${person.nickname}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
