export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <p
          className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Ласкаво Просимо у сім'ю!
        </p>
      </div>

      <div
        className="relative flex place-items-center">
        <div className="flex items-center justify-between gap-16 z-10">
          <div className="flex items-center gap-4">
            <img src="https://cdn.discordapp.com/embed/avatars/0.png?size=128" alt="Discord"
                 className="h-14 w-14 rounded-xl" draggable="false"/>
            <div>
              <h1 className="cursor-pointer font-normal text-[#060607] dark:text-white">Discord</h1>
            </div>
          </div>
          <a target="_blank" rel="noopener noreferrer" className="cursor-pointer focus-visible:ring-ring ring-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#248046] px-4 py-2 text-sm font-medium text-[#e9ffec] transition-colors hover:bg-[#1a6334] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
             href="https://discord.gg/WRK9gcFq7n">
            Приєднатись
          </a>
        </div>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        {/*<p*/}
        {/*  className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
        {/*  Ласкаво Просимо у сім'ю!*/}
        {/*</p>*/}
      </div>
    </main>
  );
}
