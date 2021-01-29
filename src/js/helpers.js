import { async } from 'q';

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  } catch (err) {
    alert(err);
  }
};
