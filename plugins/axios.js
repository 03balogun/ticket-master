export default function ({ $axios, app, redirect, store, $FullStory }) {
  const notify = (text, title = 'Network Error', type = 'error') => {
    if (!process.browser) return;
    app.$notify({ text, title, type });
  };

  $axios.onRequest(async (config) => {
    // Set axios token on each call
    if (
      app.$msal.isAuthenticated() &&
      app.$msal.data &&
      app.$msal.data.accessToken === ''
    ) {
      // When user data is returned with no access token, acquire token before proceeding
      await app.$msal.acquireToken();
      $axios.setToken(app.$msal.data.accessToken, 'Bearer');
    }
    return config;
  });

  $axios.onError((error) => {
    // When the request is a canceled one, abort.
    if ($axios.isCancel(error)) return;

    const { response } = error;
    if (!response) {
      notify(
        'Please check your internet connection and try again. If error persist kindly report'
      );
      return;
    }

    $FullStory.event('sa_api_error', {
      responseURL: response.request.responseURL,
      status: response.request.status,
      statusText: response.request.statusText,
      responseText: response.request.responseText,
    });

    const code = parseInt(response.status);
    if (code === 401) {
      // When Unauthenticated, redirect the user to landing
      notify('You need to be authenticated to continue', 'Session Expired');
      // Set tokenIsExpired state to true
      store.dispatch('authorization/logOut');
      // app.$msal.signOut();
      return redirect('/?action=session-expired');
    }

    if (code === 400) {
      const { errors, message, status } = response.data;

      if (status === false && message) {
        notify(message, 'Validation Error');
      }

      if (errors.length) {
        const formattedErrors = {};
        for (let i = 0; i < errors.length; i++) {
          if (errors[i].fieldName && errors[i].fieldErrors) {
            formattedErrors[errors[i].fieldName] = errors[i].fieldErrors;
          }
        }

        // append the formatted error to the request
        response.data.errors = formattedErrors;

        const flattenErrors = Object.values(formattedErrors).flat(Infinity);
        // loop through the array of errors
        for (let i = 0; i < flattenErrors.length; i += 1) {
          notify(flattenErrors[i], 'Validation Error');
        }
      }
    }

    if (code === 500) {
      const whiteListedUrls = [
        '/api/Loans/metrics/loandistribution',
        '/api/Loans/metrics/totalloans',
        '/api/Loans/metrics/totaldisbursement',
        '/api/Loans/metrics/disbursementtrend',
        '/api/Clients/metrics/totalclients',
      ];
      if (whiteListedUrls.includes(response.config.url)) return;
      notify(
        'Something went wrong from our end, please try again. If error persist kindly report',
        'Server Error'
      );
    }
    // response.data.errors = formattedErrors;
  });

  $axios.onResponse((response) => {
    if (!response.data.status) {
      notify(response.data.message, 'Validation Error');
    }
  });
}
