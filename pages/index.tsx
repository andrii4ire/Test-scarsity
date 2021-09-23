import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import useRarity from '../hooks/useRarity'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { CLASSES_IMAGES } from '../constants/classes'

export default function Home(): JSX.Element {
    const { summon } = useRarity()

    async function summonClass(_class?: string) {
        await toast.promise(summon(_class), {
            loading: <b>Summoning character</b>,
            success: <b>Success</b>,
            error: <b>Failed</b>,
        })
    }

    return (
        <div className="w-full z-10">
            <div>
                <div className="hero-bg w-full z-0" />
                <div className="classes-bg w-full z-0" />
            </div>
            <div className="w-full mt-24 lg:mt-48 rounded-b-3xl">
                <div className="lg:11/12 xl:w-9/12 mx-auto">
                    <div className="text-center col-span-3 w-full">
                        <h1 className="uppercase text-3xl md:text-3xl xl:text-6xl">SCARCITY ADVENTURE</h1>
                        <p className="text-sm m-3">An Adventure NFT-Based Game on Polygon based on Dungeons and Dragons</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center mx-auto w-full text-center  mt-10 lg:mt-28">
                    <a href="#mint">
                        <ChevronDoubleDownIcon className="animate-bounce h-16 mx-2" />
                    </a>
                </div>
            </div>
            <div id="mint" />
            <div className="w-full mt-48 rounded-b-3xl text-center">
                <h1 className="uppercase text-3xl md:text-3xl xl:text-6xl">MINT A CLASS</h1>
                <button className="animate-bounce h-6" onClick={async () => await summonClass()}>
                    <div className="flex flex-row w-full mx-auto text-center justify-center my-10">
                        <ChevronDoubleDownIcon className="w-6 h-6 mx-2" />
                        <span>Click here to mint random classes</span>
                        <ChevronDoubleDownIcon className="w-6 h-6 mx-2" />
                    </div>
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-16 mx-auto w-full lg:w-3/4 gap-10">
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('1')}>
                        <div className="mx-auto">{CLASSES_IMAGES['1']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">barbarian</span>
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('2')}>
                        <div className="mx-auto">{CLASSES_IMAGES['2']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">bard</span>{' '}
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('3')}>
                        <div className="mx-auto">{CLASSES_IMAGES['3']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">cleric</span>{' '}
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('4')}>
                        <div className="mx-auto">{CLASSES_IMAGES['4']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">druid</span>{' '}
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-12 lg:mt-16 mx-auto w-full lg:w-3/4 gap-10">
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('5')}>
                        <div className="mx-auto">{CLASSES_IMAGES['5']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">fighter</span>{' '}
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('6')}>
                        <div className="mx-auto">{CLASSES_IMAGES['6']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">monk</span>{' '}
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('7')}>
                        <div className="mx-auto">{CLASSES_IMAGES['7']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">paladin</span>{' '}
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('8')}>
                        <div className="mx-auto">{CLASSES_IMAGES['8']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">ranger</span>{' '}
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-12 lg:mt-16 mx-auto w-full lg:w-3/4 gap-10">
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('9')}>
                        <div className="mx-auto">{CLASSES_IMAGES['9']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">rogue</span>{' '}
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('10')}>
                        <div className="mx-auto">{CLASSES_IMAGES['10']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">sorcerer</span>{' '}
                        </div>
                    </button>
                    <button className="hover:animate-pulse" onClick={async () => await summonClass('11')}>
                        <div className="mx-auto">{CLASSES_IMAGES['11']}</div>
                        <div className="mt-4 w-48 mx-auto border-2 border-white rounded-3xl">
                            <span className="py-2 px-4 uppercase">wizard</span>{' '}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
