interface LinkListItemProps {
    label: string;
    href: string;
}

interface LinkListProps {
    items: LinkListItemProps[];
    className?: string;
}

export const LINK_CLASSNAME = 'text-green-400';

export const LinkList = ({ className, items }: LinkListProps) => {
    return (
        <ul className={`list-disc list-inside ${className}`}>
            {items.map((link) => (
                <li key={link.href}>
                    <a
                        target="_blank"
                        href={link.href}
                        rel="noreferrer"
                        className={LINK_CLASSNAME}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};
