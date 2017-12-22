
function createHeader (herders) {
  return new Headers(herders);
}

function filterRes (res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.statusText);
  }
}

export async function get (url) {
  const res = await fetch(url, { method: 'GET' });
  const body = await filterRes(res);
  return body;
}

export async function post (url, params) {
  const headers = createHeader({
    'Content-Type': 'application/json'
  });
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers
  });
  const body = await filterRes(res);
  return body;
}

export async function put (url, params) {
  const headers = createHeader({
    'Content-Type': 'application/json'
  });
  const res = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers
  });
  const body = await filterRes(res);
  return body;
}

export async function del (url) {
  const res = await fetch(url, { method: 'DELETE' });
  const body = await filterRes(res);
  return body;
}
