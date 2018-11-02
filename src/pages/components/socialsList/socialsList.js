import './socialsList.scss';

export function socialsList(socials) {
    const socialListItem = social => `
        <li>
            <a title="${social.name}" target="blank" href="${social.link}">${social.name}</a>
        </li>
    `;

    return `
        <div class="socials">
            <ul class="socials__list">
                ${socials
                    .map(socialListItem)
                    .join(',')
                    .replace(/,/g, '')
                }
            </ul>
        </div>
    `
}