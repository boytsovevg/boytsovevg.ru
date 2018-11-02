import './socialsList.scss';

export function socialsList(socials) {
    const socialListItem = ({name, link, icon}) => `
        <li>
            <a title="${name}" target="blank" href="${link}">
                <img width="${icon.size.width}" height="${icon.size.height}" src="${icon.logo}" alt="${name}">
            </a>
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