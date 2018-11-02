import { businessCard } from '../components';

import githubLogo from '../../assets/svg/github.svg';
import liLogo from '../../assets/svg/linkedin.svg';
import soLogo from '../../assets/svg/stackoverflow.svg';


export function main() {
    const logos = {
        github: {
            logo: githubLogo,
            size: {
                width: 25,
                height: 25
            }
        },
        stackoverflow: {
            logo: soLogo,
            size: {
                width: 30,
                height: 30
            }
        },
        linkedin: {
            logo: liLogo,
            size: {
                width: 25,
                height: 25
            }
        }
    }

    const person = {
        fullName: 'Evgeniy Boytsov',
        currentPosition: 'Front-end developer',
        nickname: 'boytsovevg',
        cell: '+79535371277',
        email: 'evgeniy.boytsov@gmail.com',
        socials: [
            {
                name: 'github',
                link: 'https://github.com/boytsovevg',
                icon: logos['github']
            },
            {
                name: 'stackoverflow',
                link: 'https://stackoverflow.com/users/6131743/evgeniy-boytsov?tab=profile',
                icon: logos['stackoverflow']
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/boytsovevg/',
                icon: logos['linkedin']
            },
        ]
    }

    return `
        ${businessCard(person)}
    `;
}