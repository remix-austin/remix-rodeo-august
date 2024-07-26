import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix SPA' },
        { name: 'description', content: 'Welcome to Remix (SPA Mode)!' }
    ];
};

export default function Index() {
    return (
        <>
            <h1 className="font-bold text-4xl">Remix Rodeo</h1>
            <h2 className="font-bold text-2xl">August</h2>
        </>
    );
}
