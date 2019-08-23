<script>
  export let icon = {};
  export let width = "50";
  export let height = "50";
</script>

<!-- {
    "tag": "svg",
    "attributes": {
      "data-prefix": "fa",
      "data-icon": "user",
      "class": "svg-inline--fa fa-user fa-w-16",
      "role": "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    },
    "children": [
      {
        "tag": "path",
        "attributes": {
          "fill": "currentColor",
          "d": "M96…112z"
        }
      }
    ]
  } -->
<svg
  version="1.1"
  baseProfile="full"
  data-prefix={icon.attributes.dataPrefix}
  data-icon={icon.attributes.dataIcon}
  {width}
  {height}
  xmlns="http://www.w3.org/2000/svg"
  viewBox={icon.attributes.viewBox}
  role={icon.attributes.role}
  class={icon.attributes.class}>
  <path
    fill={icon.children[0].attributes.fill}
    d={icon.children[0].attributes.d} />
</svg>
