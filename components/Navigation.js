'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const linkStyle = (path) => ({
        fontSize: '48px',
        color: pathname === path ? '#0070f3' : 'inherit',
        fontWeight: pathname === path ? 'bold' : 'normal',
    });

    return (
        <nav>
            <Link href={'/'} style={linkStyle('/')}>
                Home
            </Link>
            <span style={{ fontSize: '48px' }}>&nbsp;|&nbsp;</span>
            <Link href={'/notice'} style={linkStyle('/notice')}>
                Notice
            </Link>
        </nav>
    );
}
