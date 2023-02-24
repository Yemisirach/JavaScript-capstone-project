export const saveData = async (id, username, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rxNE30diDELKZTnvdxYb/comments/?item_id=52859';

  const comments = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });

  const res = comments.text();
  return res;
};

export const getData = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rxNE30diDELKZTnvdxYb/comments/?item_id=52859';

  const idurl = `${url}?item_id=${id}`;
  const response = await fetch(idurl);

  const res = response.json();
  return res;
};
