const appId = '1FVG3z1ZGOPObI1xBCiY';
const getComments = async (id) => {
  const urlComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=item${id}`;

  const res = await fetch(urlComments);
  const result = await res.json();
  return result;
};

const postComments = async (id, username, comments) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username,
        comments,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = response.text();
  return data;
};
export { getComments, postComments };
