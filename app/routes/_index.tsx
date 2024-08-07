import { useState } from 'react';
import { type MetaFunction } from '@remix-run/node';
import * as Tabs from '@radix-ui/react-tabs';
import { useLoaderData } from '@remix-run/react';

import Heading from '~/components/Heading';
import LinkList from '~/components/LinkList';
import TabContent from '~/components/TabContent';
import TabTrigger from '~/components/TabTrigger';
import allThemLinks from '~/utils/data.json';

export const meta: MetaFunction = () => {
    return [
        { title: 'Remix Rodeo | August 2024' },
        { name: 'description', content: 'Welcome to Remix Rodeo August 2024' }
    ];
};

export async function clientLoader() {
    return allThemLinks;
}

export default function Index() {
    const data = useLoaderData<typeof clientLoader>();
    const [activeTab, setActiveTab] = useState('stacksTab');
    const handleOnValueChange = (value: string) => setActiveTab(value);

    return (
        <div className="container mx-auto pt-8 space-y-2 px-4">
            <header className="mb-8">
                <Heading as="h1">🎮 Remix Rodeo 👾</Heading>
                <Heading>August 2024</Heading>
            </header>
            <div className="md:grid md:grid-cols-2 gap-2">
                <div>
                    <Heading>Prompt</Heading>
                    <p>{`Build a game that uses Remix's key features:`}</p>
                    <LinkList
                        className="mt-2 mb-4"
                        items={data.remixFeaturesLinks}
                    />
                    <p>{`Try storing the player's score. Post everyones game stats. Create a gamer profile. Store it all in a database. Make a live interactive game. Build as much as you can as fast as you can.`}</p>
                </div>
                <div>
                    <Heading>Game ideas</Heading>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li>
                            Drawing game - One player draws a word, and others
                            guess what it is (similar to Pictionary).
                        </li>
                        <li>
                            Word game - Players form words from a set of
                            letters, similar to Scrabble or Boggle.
                        </li>
                        <li>
                            Endless Runner - Players control a character that
                            runs automatically, jumping and dodging obstacles.
                        </li>
                        <li>
                            Platformer Game - Players navigate a character
                            through levels filled with obstacles and enemies.
                        </li>
                        <li>
                            Resource Management Game - Players manage resources
                            to build and expand a city or civilization.
                        </li>
                    </ul>
                    <Heading>Inspiration (non-Remix)</Heading>
                    <LinkList items={data.realWorldExamplesLinks} />
                </div>
            </div>
            <Heading>Resources</Heading>
            <Tabs.Root
                defaultValue="stacksTab"
                onValueChange={handleOnValueChange}
            >
                <Tabs.List
                    aria-label="Extra materials tab list"
                    className="px-2 space-x-1 border-b-2 border-zinc-700"
                >
                    <TabTrigger
                        value="stacksTab"
                        isActive={activeTab === 'stacksTab'}
                    >
                        Stacks / Boilerplate
                    </TabTrigger>
                    <TabTrigger
                        value="remixTab"
                        isActive={activeTab === 'remixTab'}
                    >
                        Remix
                    </TabTrigger>
                    <TabTrigger
                        value="librariesTab"
                        isActive={activeTab === 'librariesTab'}
                    >
                        Libraries
                    </TabTrigger>
                    <TabTrigger
                        value="databasesTab"
                        isActive={activeTab === 'databasesTab'}
                    >
                        Databases
                    </TabTrigger>
                    <TabTrigger
                        value="tutorialsTab"
                        isActive={activeTab === 'tutorialsTab'}
                    >
                        Tutorials
                    </TabTrigger>
                    <TabTrigger
                        value="extrasTab"
                        isActive={activeTab === 'extrasTab'}
                    >
                        Extras
                    </TabTrigger>
                </Tabs.List>
                <TabContent value="stacksTab">
                    <p className="mb-2">
                        {`Wanna use Tailwind? It's baked into the default template
                                when you run `}
                        <code className="bg-gray-600 text-white py-1 px-2 rounded-lg text-sm">
                            npx create-remix@latest
                        </code>{' '}
                        or use a prebuilt stack:
                    </p>
                    <LinkList items={data.stacksLinks} />
                </TabContent>
                <TabContent value="remixTab">
                    <LinkList items={data.remixLinks} />
                </TabContent>
                <TabContent value="librariesTab">
                    <Heading>Gaming</Heading>
                    <LinkList items={data.gameLibraryLinks} />
                </TabContent>
                <TabContent value="databasesTab">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            <p className="mb-2">
                                <strong>{`ORMs`}</strong>
                            </p>
                            <LinkList className="mb-4" items={data.ORMLinks} />
                        </div>
                        <div className="col-span-2">
                            <p className="mb-2">
                                <strong>{`Hosts`}</strong>
                            </p>
                            <LinkList
                                className="mb-4"
                                items={data.hostsLinks}
                            />
                        </div>
                        <div className="col-span-2">
                            <p className="mb-2">
                                <strong>{`Services`}</strong>
                            </p>
                            <LinkList
                                className="mb-4"
                                items={data.servicesLinks}
                            />
                        </div>
                    </div>
                </TabContent>
                <TabContent value="tutorialsTab">
                    <LinkList items={data.tutorialsLinks} />
                </TabContent>
                <TabContent value="extrasTab">
                    <iframe
                        src="https://giphy.com/embed/hqTguNdEoA1ooYxeog"
                        width="480"
                        height="480"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen
                        title="Gamer dog"
                    ></iframe>
                </TabContent>
            </Tabs.Root>
        </div>
    );
}
