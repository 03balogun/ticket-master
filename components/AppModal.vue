<template>
  <div
    v-if="modal.isOpen"
    role="dialog"
    aria-modal="true"
    class="modal"
    tabindex="-1"
    @click.self="close"
  >
    <div class="modal__md" role="document">
      <div class="modal__header">
        <h1 v-if="modal.headerText">
          {{ modal.headerText }}
        </h1>
        <button
          class="close_button"
          title="close modal"
          aria-label="close modal"
          @click="close"
        >
          <CloseIcon />
        </button>
      </div>
      <hr v-if="modal.headerText" />
      <div class="modal__body">
        <component :is="modal.component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '~/assets/images/close-icon.svg?inline'
import AppModalRegister from '~/components/AppModalRegister'
/* eslint-disable nuxt/no-globals-in-created */
export default {
  name: 'AppModal',
  components: { CloseIcon, AppModalRegister },
  computed: {
    modal() {
      return this.$store.getters['modal/getModal']
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener('keydown', this.keyDown)
    }
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyDown)
  },
  methods: {
    close() {
      if (!this.modal.closeable) return
      this.$store.dispatch('modal/setModal', { isOpen: false })
    },
    keyDown(event) {
      if (
        event.key === 'Escape' ||
        event.key === 'Esc' ||
        event.keyCode === 27
      ) {
        this.close()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-modal';
</style>
