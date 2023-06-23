import ky  from "ky";

const api = ky.create({prefixUrl: "https://exam-76401-default-rtdb.firebaseio.com/"})

export const getData = () => {
  return api.get("cards").json()
}