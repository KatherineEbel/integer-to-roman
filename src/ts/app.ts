import {toRoman} from './toRoman'

interface IApp {
  modalOpen: boolean
  number: null | number
  roman: null | string
  submitForm: () =>  void
  toggleModal: () => void
  clear: () => void
}


export const App = {
  init: (): IApp =>({
    modalOpen: false,
    number: null,
    roman: null,
    submitForm() {
      this.submitting = true
      this.roman = toRoman(Number(this.number))
      this.toggleModal()
    },
    toggleModal() {
      this.modalOpen = !this.modalOpen
    },
    clear() {
      this.modalOpen = false
      this.number = null
      this.roman = null
    },
  })
}
