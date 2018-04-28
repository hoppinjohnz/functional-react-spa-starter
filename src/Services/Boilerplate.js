export default {
  get_random_gif_url: async () => {
    const result = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=hLVoUFSJu1tKAgV9tl3a4vMVFBxImLQ5`
    ).then(response => response.json());

    return result.data.images.original.url;
  }
};
