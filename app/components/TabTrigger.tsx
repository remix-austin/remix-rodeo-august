import { type ReactNode } from 'react';
import { Trigger } from '@radix-ui/react-tabs';

interface TabTriggerProps {
    children: ReactNode;
    isActive: boolean;
    value: string;
}

export default function TabTrigger({
    children,
    isActive,
    value
}: TabTriggerProps) {
    return (
        <Trigger
            value={value}
            className={`${
                isActive ? 'bg-green-600' : 'hover:bg-green-800 bg-gray-900'
            } px-4 py-2 border-zinc-700 border-t-2 border-r-2 border-l-2 rounded-tl-lg rounded-tr-lg`}
        >
            {children}
        </Trigger>
    );
}
