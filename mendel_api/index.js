class API {
  static setAuthToken = authToken => {
    _authToken = authToken
  }

  static getAuthToken = () => _authToken

  static login(token) {
    return fetch(`${api}/login/firebase`, {
      method: 'POST',
      body: token,
      headers: createHeaders({ 'Content-Type': 'text/plain' }, false)
    }).then(async response => {
      if (response.status !== 200) {
        throw new Error('Login response not valid')
      }

      const { authToken, user } = await response.json()
      if (!authToken) {
        throw new Error(
            'Login could not be completed. Mendel Auth Token is missing.'
        )
      }
      console.info(user)
      API.setAuthToken(authToken)
      return { authToken, user }
    })
  }

  static registerUser({ token, firstname, lastname }) {
    return API.login(token).then(() => {
      return fetch(`${api}/accounts`, {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname }),
        headers: createHeaders()
      })
    })
  }

  static getContacts(accountId) {
    return fetch(`${api}/accounts/${accountId}/contacts`, {
      method: 'GET',
      headers: createHeaders()
    })
  }

  static updateUser({ accountId, contactId, data }) {
    return fetch(`${api}/accounts/${accountId}/contacts/${contactId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: createHeaders()
    })
  }

  static registerPush({ token }) {
    // TODO
    return Promise.resolve()
  }
}