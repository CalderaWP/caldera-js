# Name Of Remote Post
Displays a WordPress post.

Notes:
* This component expects a WordPress post as returned by the WordPress REST API. It does not fetch the post.
* This component uses [humanmade/react-oembed-container](https://github.com/humanmade/react-oembed-container) for handling oembeds, HTML, etc.

## Usage

### Import With webpack
`import {RemotePost} from '@calderajs/components';`

### Show Full Content Of Post

The prop `showFullContent`, if set to true, causes the component to display the full post content `post.content.rendered`
```jsx
import {RemotePost} from '@calderajs/components';
<RemotePost 
    post={{}}
    showFullContent={true}
/>

```

### Show Excerpt Only
The prop `showFullContent`, if set to false, which is its default value, causes the component to display the post excerpt - `post.excerpt.rendered`

```jsx
<RemotePost 
    post={{}}
/>

