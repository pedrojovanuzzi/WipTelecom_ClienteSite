import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Existem planos com velocidades maiores?",
    answer: "Sim, possuímos planos com velocidade dedicada, entre em contato conosco para saber mais detalhes.",
  },
  {
    question: "Qual o prazo de fidelidade?",
    answer: "Nossos planos possuem período de fidelidade de apenas 12 meses.",
  },
  {
    question: "O roteador Wi-Fi está incluso?",
    answer: "Sim, em todos nossos planos o roteador Wi-Fi está incluso em comodato.",
  },
  {
    question: "Como posso ser atendido?",
    answer: "Para pagamentos online, contamos com atendimento 24h via Chat Bot: (14)99656-1608 Atendemos pelo WhatsApp (14)98233-2963, das 8h às 18h, para suporte técnico e financeiro.  Após as 18h até as 20h, auxiliamos com soluções simples de conexão, casos não resolvidos são encaminhados para visita técnica em dia útil.",
  },
  {
    question: "Como faço para retirar meu boleto?",
    answer: "Pix ou Boleto: Retire você mesmo seu boleto ou Pix via WhatsApp em nosso Bot (14) 99656-1608, de forma simples e descomplicada. \n Loja Física: Caso prefira, visite nossa loja para a impressão de seus boletos e tê-los em mãos.",
  },
  {
    question: "Consigo fazer meu cadastro sem ir até a empresa?",
    answer: "Sim! Faça seu cadastro e assinatura pelo Chat Bot e seja nosso cliente sem sair de casa.",
  },
]

export default function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Perguntas frequentes</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
