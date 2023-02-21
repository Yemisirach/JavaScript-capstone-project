const addScores = async (url) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return result.json();
};

export default addScores;