import { useNavigate } from 'react-router'
import { TvIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Watch TV',
    description: 'Canais, filmes e séries no seu dispositivo, onde você estiver. Grátis no plano Turbo.',
    href: '/watch-tv',
    icon: TvIcon,
  },
  {
    name: 'Wip Cams',
    description: 'Monitoramento com gravação em nuvem. Veja suas câmeras ao vivo pelo celular.',
    href: '/wip-cams',
    icon: VideoCameraIcon,
  },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <div id="servicos" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Nossos Serviços</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Muito mais que internet
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Entretenimento e segurança para a sua casa ou empresa, direto na sua mensalidade.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-12 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center text-center">
              <div className="flex size-36 items-center justify-center rounded-full ring-2 ring-white/80 ring-offset-8 ring-offset-gray-900">
                <div className="flex size-24 items-center justify-center rounded-full bg-white">
                  <service.icon aria-hidden="true" className="size-12 text-gray-900" />
                </div>
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white">{service.name}</h3>
              <p className="mt-3 max-w-xs text-base/7 text-gray-300">{service.description}</p>
              <button
                onClick={() => navigate(service.href)}
                className="mt-6 rounded-md bg-indigo-500 px-8 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400"
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
