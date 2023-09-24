import { MdOutlinePhoneAndroid } from "react-icons/md";
import InfoIcon from "../interfaces/InfoIcon";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

export default function infoIconsSocial(): InfoIcon[] {
    return [
        {
            label: 'Phone',
            text: '+55 (11) 9 7135-1731',
            url: '#',
            image: MdOutlinePhoneAndroid,
            description: 'Number Phone'
        },
        {
            label: 'Email',
            text: 'vitoraugustodemattos@gmail.com',
            url: '#',
            image: HiOutlineMailOpen,
            description: 'Contact Email'
        },
        {
            label: 'Location',
            text: 'São Paulo - SP',
            url: '#',
            image: IoLocationOutline,
            description: 'Location'
        }
    ]
}