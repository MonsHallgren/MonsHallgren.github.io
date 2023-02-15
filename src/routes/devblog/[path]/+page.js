
 /*@type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../../../lib/posts/${params.path}.svx`);

  const { title } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    
  };
};

