function Blog() {
  return (
    <>
        <h2 className="text-xl">TODO</h2>
        <ul className="list-disc px-5">
            <li>Allow markdown files to be placed in /blog</li>
            <li>Render each md file in a way html understands</li>
            <li>Create a navigable table of contents with each markdown file as routes</li>
            <li>Have them render on this page when clicked</li>
        </ul>
    </>
  );
}

export default Blog;
