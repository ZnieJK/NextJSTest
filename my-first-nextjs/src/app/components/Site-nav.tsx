'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    {name: 'Home', href: '/'},
    {name: 'Question 1', href: '/Question_1'},
    {name: 'Question 2', href: '/Question_2'},
]


export default function SiteNav() {
    const pathName = usePathname()

    return (
        <ul className="flex space-x-6">
            {navItems.map((item) => (
                <li key={item.href} >
                    <Link
                        href={item.href}
                        className={`hover:underline ${ 
                            pathName === item.href ? 'font-semibold text-black-300' : '' }`}
                            >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    ) 
}