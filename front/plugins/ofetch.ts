import { ofetch } from 'ofetch'

export default defineNuxtPlugin(() => {
  globalThis.$fetch = ofetch.create({
    onResponse() {
      console.log('fetch したよ')
    }
  })
})
