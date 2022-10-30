import { useRouter } from "next/router";

function About() {
  const router = useRouter()

  console.log(router)


  return (
    <>
      <div>This is the about page. We don't really need this I guess.</div>

    Original site template borrowed with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    from <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>

  </>
  );
}

export default About;
