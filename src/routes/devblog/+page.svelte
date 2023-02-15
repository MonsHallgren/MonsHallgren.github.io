<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<article>
  <h1>Blog</h1>
  
  <ul>
    {#each data.posts as post}
    <p>{"/devblog/" + post.path}</p>
      <li>
        <h2>
          <a href={"/devblog/" + post.path}>

            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>
</article>
