import { FaGithub } from 'react-icons/fa'
import { BiLogoFacebook } from 'react-icons/bi'
import Icons from '../interfaces/Icon'
import { GrLinkedinOption } from 'react-icons/gr'
import { FiInstagram } from 'react-icons/fi'

export default function getIconsSocial(): Icons[] {
    return [
        {
            name: 'Facebook',
            url: '#',
            image: BiLogoFacebook,
            descriptor: 'Facebook'
        },
        {
            name: 'linkedin',
            url: '#',
            image: GrLinkedinOption,
            descriptor: 'Github'
        },
        {
            name: 'Instagram',
            url: '#',
            image: FiInstagram,
            descriptor: 'Instagram'
        },
        {
            name: 'Github',
            url: '#',
            image: FaGithub,
            descriptor: 'Github'
        },
    ]
}