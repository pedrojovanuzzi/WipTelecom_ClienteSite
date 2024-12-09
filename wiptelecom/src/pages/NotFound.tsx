export default function NotFound() {
    return (
        <main className="grid h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-500">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-200 sm:text-7xl">
              Página não encontrada
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Desculpe mas essa página não existe
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Voltar para Página Principal
              </a>
            </div>
          </div>
        </main>
    )
  }
  