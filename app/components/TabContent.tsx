import { type ReactNode } from 'react';
import { Content } from '@radix-ui/react-tabs';

interface TabContentProps {
    children: ReactNode;
    value: string;
}

export default function TabContent({ children, value }: TabContentProps) {
    return (
        <Content value={value} className="p-4">
            {children}
        </Content>
    );
}
