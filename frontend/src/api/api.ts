const url = "http://localhost:4000/email"

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject({res})
}

export const getData = (email: string, number: number): Promise<any> => {

  return fetch(url, {
    method: "POST",
    body: JSON.stringify({ email, number }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(checkResponse)
    .catch(err => console.log(err))
}
