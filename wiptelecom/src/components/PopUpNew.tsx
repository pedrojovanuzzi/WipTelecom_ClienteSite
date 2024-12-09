import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaWhatsapp } from 'react-icons/fa'

interface PopUpProps {
  setIsClicked: (value: boolean) => void;
}

export default function PopUpNew({setIsClicked}: PopUpProps) {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={() => 
        {
            setOpen(false)
            setIsClicked(false);
        }
    } className="relative z-10">
      <DialogBackdrop
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-8 text-center items-center sm:p-0">
          <DialogPanel
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
          >
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <FaWhatsapp aria-hidden="true" className="size-6 text-green-600" />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  Whatsapp Bot
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Com o Bot você pode solicitar serviços e a mensalidade de forma automática por meio de um atendimento com um robô!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setIsClicked(false);
                }}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entendi
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
