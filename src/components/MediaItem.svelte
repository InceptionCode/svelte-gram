<script>
  export let src;
  export let alt;
  export let caption;
  export let feed;
  export let mediaType = "image";
</script>

{#if src && mediaType === 'image'}
  <figure>
    <img {src} {alt} style="width:100%" />
    <figcaption>{caption}</figcaption>
  </figure>
{:else if src && mediaType != 'image'}
  <figure>
    <video width="320" height="240" controls muted autoplay>
      <source {src} type="video/mp4" />
      Trouble loading content.
    </video>
    <figcaption>{caption}</figcaption>
  </figure>
{:else}
  <h3>Could not load content</h3>
{/if}
