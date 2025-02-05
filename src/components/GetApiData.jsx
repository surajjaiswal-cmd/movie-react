export let getApiData = async () => {
  let api =
    `https://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=titanic&page=1`;
  try {
    let res = await fetch(api);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//  we can directly export a function also and we can fetch api without using ussEffect by using a router hook {useLoaderData}
