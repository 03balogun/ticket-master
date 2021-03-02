<template>
  <div class="input-container">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      class="form-control"
      :aria-label="label"
      :placeholder="placeholder"
      :class="classes"
      :required="required"
      autocomplete="off"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event)"
    />
    <span v-if="hasError || errorMessage.length" class="error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      default() {
        return this.name
      },
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default() {
        return this.label
      },
    },
    classes: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-input';
</style>
