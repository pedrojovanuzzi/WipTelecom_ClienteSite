import {
    WifiIcon,
    DocumentTextIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
  
  import { FaRobot } from "react-icons/fa";


  const actions = [
    {
      title: 'Fatura',
      href: 'https://wa.me/message/MWHGELKC45WDN1',
      icon: DocumentTextIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
      text: "Solicite seu Boleto"
    },
    {
      title: 'Whatsapp Bot',
      href: 'https://wa.me/message/MWHGELKC45WDN1',
      icon: FaRobot,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      text: "Pagamento Via Pix"
    },
    {
      title: 'Central do Assinante',
      href: 'https://mk.wiptelecomunicacoes.com.br/central/login.hhvm',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      text: "Retire sua Nota Fiscal"
    },
    {
      title: 'Teste de Velocidade',
      href: 'https://www.speedtest.net/',
      icon: WifiIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      text: "Faça o Teste de Velocidade"
    }
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function QuickAccess() {
    return (
      <div className="overflow-hidden bg-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-px w-full sm:w-3/4 place-self-center mb-20">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? '' : '',
              actionIdx === 1 ? '' : '',
              actionIdx === actions.length - 2 ? '' : '',
              actionIdx === actions.length - 1 ? '' : '',
              'group relative bg-gray-900 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white',
                )}
              >
                <action.icon aria-hidden="true" className="size-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold text-gray-400">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-200">
                {action.text}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="size-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    )
  }
  