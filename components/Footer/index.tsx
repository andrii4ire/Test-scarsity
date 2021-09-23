const Footer = () => {

    return (
        <footer className="flex-shrink-0 w-full text-xs pb-14 -my-1 mt-5 md:pb-1">
            <div className="w-full p-5">
                <div className="grid grid-cols-1 md:grid-cols-4 w-full lg:w-6/12 xl:w-5/12 p-1 md:divide-x-2 md:divide-white gap-1">
                    <div>
                        <h2>CREATED BY:</h2>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/AndreCronjeTech">
                            <a rel="noopener noreferrer" target="_blank" href='https://github.com/degen-vc/scarcity_frontend'>License</a>
                        </a>
                    </div>
                    <div className="col-span-2">
                        <h2 className="md:ml-4">MAINTAINED BY:</h2>
                        <a className="md:ml-4" target="_blank" rel="noreferrer" href="https://twitter.com/0xchronos">
                            <a rel="noopener noreferrer" target="_blank" href='https://twitter.com/scarcitygold'>@scarcitygold</a>
                        </a>
                    </div>
                    <div>
                        <h2 className="md:ml-4">DESIGNED BY:</h2>
                        <a className="md:ml-4" target="_blank" rel="noreferrer" href="https://www.degen.vc/">
                            <span>Degen VC</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
