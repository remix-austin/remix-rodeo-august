import { type ReactNode } from 'react';

interface HeadingProps {
    as?: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}

export default function Heading({ as = 'h2', children }: HeadingProps) {
    const Component = as;
    const fontSize =
        as === 'h1' ? 'text-5xl' : as === 'h2' ? 'text-2xl' : 'text-lg';

    return (
        <Component className={`font-bold ${fontSize} mb-4`}>
            {children}
        </Component>
    );
}
