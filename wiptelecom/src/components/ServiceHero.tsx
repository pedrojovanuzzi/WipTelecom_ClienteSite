import { ComponentType, SVGProps } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

type Icon = ComponentType<SVGProps<SVGSVGElement>>

export type ServiceOffer = {
  label: string
  href: string
  icon: Icon
}

type Props = {
  title: string
  headline?: string
  text?: string
  features?: string[]
  offers: ServiceOffer[]
  icon: Icon
}

export default function ServiceHero({ title, headline, text, features, offers, icon: HeroIcon }: Props) {
  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          {headline ? <p className="mt-4 text-2xl text-white sm:text-3xl">{headline}</p> : null}
          {text ? <p className="mt-4 text-lg/8 text-gray-300">{text}</p> : null}
          {features ? (
            <ul role="list" className="mt-6 space-y-2 text-base/7 text-gray-300">
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-10 space-y-4">
            {offers.map((offer) => (
              <a
                key={offer.label}
                href={offer.href}
                className="flex items-center justify-center gap-x-3 rounded-md bg-gradient-to-r from-teal-500 to-indigo-600 px-4 py-3 text-center text-sm/6 font-semibold text-white shadow-sm hover:opacity-90"
              >
                <offer.icon aria-hidden="true" className="size-5 flex-none" />
                {offer.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex size-72 items-center justify-center rounded-full ring-2 ring-white/70 ring-offset-[24px] ring-offset-gray-900 sm:size-96">
            <div className="flex size-56 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-indigo-600 sm:size-72">
              <HeroIcon aria-hidden="true" className="size-28 text-white sm:size-36" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
