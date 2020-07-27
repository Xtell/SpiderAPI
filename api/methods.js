async function makeRequest(method, endPoint, headers = {}, data = {}) {
  const baseUrl = "https://waleraspider.ml/api/";
  let response = await fetch(baseUrl + endPoint, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
  return response
    // .then((response) => {
    //   return response;
    // })
    // .catch((error) => {
    //   return error;
    // });
}

export async function getUserToken(nickName, password) {
  let data = {
    NickName: nickName,
    Password: password,
  };
  return await makeRequest("POST", "Authentication/token", {}, data)
    // .then((response) => {
    //   return response;
    // })
    // .catch((error) => {
    //   return error;
    // });
}
export async function createUser()