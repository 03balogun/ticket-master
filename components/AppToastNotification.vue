<template>
  <notifications class="toast__wrapper">
    <template slot="body" slot-scope="props">
      <div>
        <div class="toast" :class="`toast--${props.item.type || 'info'}`">
          <button
            class="toast__close-btn"
            aria-label="close notification"
            title="close notification"
            @click="props.close"
          >
            <close />
          </button>
          <div class="toast__icon">
            <component :is="props.item.type || 'info'" />
          </div>
          <div class="toast__content">
            <strong class="d-block mb-5">
              {{ props.item.title }}
            </strong>
            <span>
              {{ props.item.text }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
import close from '~/assets/images/close.svg?inline'
import success from '~/assets/images/success.svg?inline'
import error from '~/assets/images/error.svg?inline'
import warning from '~/assets/images/warning.svg?inline'
import info from '~/assets/images/info.svg?inline'

export default {
  name: 'AppToastNotification',
  components: {
    success,
    close,
    error,
    warning,
    info,
  },
}
</script>

<style lang="scss" scoped>
.toast {
  min-height: 71px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 13px;
  position: relative;
  margin-bottom: 10px !important;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.306764));

  &__wrapper {
    position: fixed !important;
    top: 120px !important;
    right: 2% !important;
    width: 372px !important;
    z-index: 100;
  }

  &__close-btn {
    position: absolute;
    right: 18px;
    top: 10px;
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  &__icon {
    margin-right: 10px;
  }
  &__content {
    strong {
      text-transform: capitalize;
      font-size: 0.875rem;
    }
    span {
      font-size: 0.875rem;
    }
  }

  &--success {
    background: #e1fee3;
    color: $green;
  }
  &--error {
    background: #fff1f2;
    color: $red;
  }
  &--info {
    background: #eaf2ff;
    color: #377ff7;
  }
  &--warning {
    background: #fff9e0;
    color: #d4b011;
  }
}
@media (max-width: 768px) {
  .toast__wrapper {
    top: 10% !important;
    right: 0 !important;
    width: 100% !important;
  }
}
</style>
