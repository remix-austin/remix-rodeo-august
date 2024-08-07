import { useState } from 'react';
import type { MetaFunction } from '@remix-run/node';
import * as Tabs from '@radix-ui/react-tabs';

import Heading from '~/components/Heading';
import LinkList from '~/components/LinkList';
import TabContent from '~/components/TabContent';
import TabTrigger from '~/components/TabTrigger';

export const meta: MetaFunction = () => {
    return [
        { title: 'Remix Rodeo | August 2024' },
        { name: 'description', content: 'Welcome to Remix Rodeo August 2024' }
    ];
};

export default function Index() {
    const [activeTab, setActiveTab] = useState('stacksTab');

    return (
        <div className="container mx-auto pt-8 space-y-2 px-4 lg:px-0">
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
                        items={[
                            {
                                href: 'https://remix.run/docs/en/main/route/loader',
                                label: 'Loaders'
                            },
                            {
                                href: 'https://remix.run/docs/en/main/route/action',
                                label: 'Actions'
                            },
                            {
                                href: 'https://remix.run/docs/en/main/route/form',
                                label: 'Form'
                            },
                            {
                                href: 'https://remix.run/docs/en/main/hooks/use-fetcher',
                                label: 'Fetchers'
                            },
                            {
                                href: 'https://remix.run/docs/en/main/file-conventions/routes',
                                label: 'Nested routes'
                            },
                            {
                                href: 'https://remix.run/docs/en/main/discussion/progressive-enhancement',
                                label: 'Progressive enhancement'
                            },
                            {
                                href: 'https://remix.run/docs/en/main/discussion/pending-ui',
                                label: 'Optimistic UI'
                            }
                        ]}
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
                    <Heading>Real world examples (non-Remix)</Heading>
                    <LinkList
                        items={[
                            {
                                label: 'Cookie Clicker',
                                href: 'https://cookieclicker.ee/'
                            },
                            {
                                label: 'OGame',
                                href: 'https://en.wikipedia.org/wiki/OGame'
                            },
                            {
                                label: 'Puzzles',
                                href: 'https://puzzlegarage.com/'
                            },
                            {
                                label: 'Wordle',
                                href: 'https://www.nytimes.com/games/wordle/index.html'
                            },
                            {
                                label: 'Escape room',
                                href: 'https://cuadventures.com/at-home'
                            },
                            {
                                label: 'Quizzes (Buzzfeed)',
                                href: 'https://www.buzzfeed.com/quizzes'
                            }
                        ]}
                    />
                </div>
            </div>
            <Heading>Resources</Heading>
            <Tabs.Root
                defaultValue="stacksTab"
                onValueChange={(value) => setActiveTab(value)}
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
                <TabContent value="remixTab">
                    <LinkList
                        items={[
                            {
                                label: 'Remix Docs',
                                href: 'https://remix.run/docs'
                            },
                            {
                                label: 'Remix Youtube Playlists',
                                href: 'https://www.youtube.com/@Remix-Run/playlists'
                            },
                            {
                                label: 'SPA Mode Guide',
                                href: 'https://remix.run/future/spa-mode'
                            }
                        ]}
                    />
                </TabContent>
                <TabContent value="librariesTab">
                    <Heading>Gaming</Heading>
                    <LinkList
                        items={[
                            {
                                label: 'Pixi JS',
                                href: 'https://github.com/pixijs/pixijs'
                            },
                            {
                                label: 'Phaser',
                                href: 'https://github.com/phaserjs/phaser'
                            },
                            {
                                label: 'Kaboom',
                                href: 'https://github.com/replit/kaboom'
                            },
                            {
                                label: 'More game engines...',
                                href: 'https://github.com/collections/javascript-game-engines'
                            }
                        ]}
                    />
                </TabContent>
                <TabContent value="stacksTab">
                    <p className="mb-2">
                        {`Wanna use Tailwind? It's baked into the default template
                    when you run `}
                        <code className="bg-gray-600 text-white py-1 px-2 rounded-lg text-sm">
                            npx create-remix@latest
                        </code>{' '}
                        or use a prebuilt stack:
                    </p>
                    <LinkList
                        items={[
                            {
                                label: 'Indie stack',
                                href: 'https://github.com/remix-run/indie-stack'
                            },
                            {
                                label: 'Blues stack',
                                href: 'https://github.com/remix-run/blues-stack'
                            },
                            {
                                label: 'PartyKit starter',
                                href: 'https://github.com/partykit/remix-starter'
                            },
                            {
                                label: 'More stacks (GitHub)...',
                                href: 'https://github.com/topics/remix-stack'
                            }
                        ]}
                    />
                </TabContent>
                <TabContent value="databasesTab">
                    <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            <p className="mb-2">
                                <strong>{`ORMs`}</strong>
                            </p>
                            <LinkList
                                className="mb-4"
                                items={[
                                    {
                                        label: 'Prisma',
                                        href: 'https://github.com/topics/remix-stack'
                                    },
                                    {
                                        label: 'Drizzle',
                                        href: 'https://orm.drizzle.team/docs/overview'
                                    },
                                    {
                                        label: 'Sequelize',
                                        href: 'https://sequelize.org/'
                                    },
                                    {
                                        label: 'TypeORM',
                                        href: 'https://typeorm.io/'
                                    }
                                ]}
                            />
                        </div>
                        <div className="col-span-2">
                            <p className="mb-2">
                                <strong>{`Hosts`}</strong>
                            </p>
                            <LinkList
                                className="mb-4"
                                items={[
                                    {
                                        label: 'Fly.io',
                                        href: 'https://fly.io/docs/'
                                    },
                                    {
                                        label: 'Render',
                                        href: 'https://render.com/'
                                    },
                                    {
                                        label: 'Koyeb',
                                        href: 'https://www.koyeb.com/'
                                    },
                                    {
                                        label: 'Heroku',
                                        href: 'https://www.heroku.com/'
                                    }
                                ]}
                            />
                        </div>
                        <div className="col-span-2">
                            <p className="mb-2">
                                <strong>{`Services`}</strong>
                            </p>
                            <LinkList
                                className="mb-4"
                                items={[
                                    {
                                        label: 'Neon DB',
                                        href: 'https://neon.tech/'
                                    },
                                    {
                                        label: 'Supabase',
                                        href: 'https://supabase.com/'
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </TabContent>
                <TabContent value="tutorialsTab">
                    <LinkList
                        items={[
                            {
                                label: 'Relational databases (Prisma docs)',
                                href: 'https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql'
                            },
                            {
                                label: 'Build A Fullstack App with Remix, Prisma & MongoDB (use first half as foundation for game)',
                                href: 'https://www.prisma.io/blog/fullstack-remix-prisma-mongodb-1-7D0BfTXBmB6r'
                            },
                            {
                                label: 'Remix on Netlify',
                                href: 'https://docs.netlify.com/frameworks/remix/'
                            },
                            {
                                label: 'Connect a Remix application to Neon',
                                href: 'https://neon.tech/docs/guides/remix'
                            },
                            {
                                label: 'Cloudflare & Remix',
                                href: 'https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/'
                            },
                            {
                                label: 'Deploy a Remix App (Render)',
                                href: 'https://docs.render.com/deploy-remix'
                            }
                        ]}
                    />
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
