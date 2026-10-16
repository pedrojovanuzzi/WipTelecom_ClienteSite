import { TvIcon, BoltIcon } from '@heroicons/react/24/outline'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'

const whatsapp = (texto: string) =>
  `https://api.whatsapp.com/send/?phone=5514982332963&text=${encodeURIComponent(texto)}&type=phone_number&app_absent=0`

export const WatchTV = () => {
  return (
    <div>
      <NavBar />
      <ServiceHero
        title="Watch TV"
        text="O streaming da Wip: canais, filmes e séries para assistir em qualquer lugar do Brasil, no seu dispositivo."
        features={[
          'Assista na TV, no celular, no tablet ou no computador',
          'Cobrança junto da mensalidade da internet',
          'Grátis para quem assina o plano Turbo',
        ]}
        icon={TvIcon}
        offers={[
          {
            label: 'Adicionar Watch TV ao meu plano por R$ 49,90',
            href: whatsapp('Olá, quero contratar a Watch TV de R$49,90!'),
            icon: TvIcon,
          },
          {
            label: 'Plano Turbo + Watch TV GRÁTIS por R$ 189,90',
            href: whatsapp('Olá, quero contratar o Plano Turbo + Watch TV de R$189,90!'),
            icon: BoltIcon,
          },
        ]}
      />
      <Footer />
    </div>
  )
}

export default WatchTV
