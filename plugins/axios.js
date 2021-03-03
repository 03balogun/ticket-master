export default function ({ $axios, app }) {
  const notify = (text, title = 'Network Error', type = 'error') => {
    if (!process.browser) return
    app.$notify({ text, title, type })
  }

  $axios.onError((error) => {
    // When the request is a canceled one, abort.
    if ($axios.isCancel(error)) return

    const { response } = error
    if (!response) {
      notify(
        'Please check your internet connection and try again. If error persist kindly report'
      )
      return
    }

    const code = parseInt(response.status)

    if (code === 500) {
      notify(
        'Something went wrong from our end, please try again. If error persist kindly report',
        'Server Error'
      )
    }
  })

  $axios.onResponse((response) => {
    if (!response.data.status) {
      notify(response.data.message, 'Validation Error')
    }
  })
}
