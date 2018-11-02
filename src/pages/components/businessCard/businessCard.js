import './businessCard.scss';

import { socialsList } from '..';

export function businessCard() {

    const person = {
        fullName: 'Evgeniy Boytsov',
        currentPosition: 'Front-end developer',
        cell: '+79535371277',
        email: 'evgeniy.boytsov@gmail.com'
    }

    const socials = [
        {
            name: 'github',
            link: 'https://github.com/boytsovevg',
            nickName: 'boytsovevg',
            icon: ''
        },
        {
            name: 'stackoverflow',
            link: 'https://stackoverflow.com/users/6131743/evgeniy-boytsov?tab=profile',
            nickName: 'boytsovevg',
            icon: ''
        },
        {
            name: 'linkedIn',
            link: 'https://www.linkedin.com/in/boytsovevg/',
            nickName: 'boytsovevg',
            icon: ''
        },
    ];

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
                        <p class="contacts__email">${person.email}</p>
                    </div>

                    <div class="contacts__socials">
                        ${socialsList(socials)}
                    </div>
                </div>
            </div>
        </div>
    `;
}
