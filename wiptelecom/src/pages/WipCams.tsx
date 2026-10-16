import { VideoCameraIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'

const whatsapp = (texto: string) =>
  `https://api.whatsapp.com/send/?phone=5514982332963&text=${encodeURIComponent(texto)}&type=phone_number&app_absent=0`

export const WipCams = () => {
  return (
    <div>
      <NavBar />
      <ServiceHero
        title="Wip Cams"
        headline="Muito mais segurança para a sua casa ou empresa."
        features={[
          'Gravação em nuvem',
          'Câmeras ao vivo e gravações pelo celular',
          'Aplicativo e portal web do cliente',
          'Mais câmeras conforme o plano de armazenamento',
        ]}
        icon={VideoCameraIcon}
        offers={[
          {
            label: 'Adicionar câmera por R$ 20,00/mês',
            href: whatsapp('Olá, quero contratar o Wip Cams!'),
            icon: PlayCircleIcon,
          },
        ]}
      />
      <Footer />
    </div>
  )
}

export default WipCams
