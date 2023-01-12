import Alpine from "alpinejs";
import { App } from './app'

declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}


Alpine.data('app', App.init)

Alpine.start()