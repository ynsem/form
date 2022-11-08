const BASE_URL = 'https://reqbin.com/echo/post/json'

const headers: HeadersInit = {
  'Content-Type': 'application/json; charset=utf-8',
  'X-Requested-With': 'XMLHttpRequest',
}

export const postRequest = <T,>(payload: T): Promise<Response> => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  })
}