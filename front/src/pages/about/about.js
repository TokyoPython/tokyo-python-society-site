import { useEffect } from "react";
import { useRouter } from "next/router";

function About() {
  const router = useRouter()

  useEffect(() => {
   // the counter changed 
  }, [router.query.counter])


  return (
    <>
  <h2>Hi</h2>
  <div>About</div>

  Original site template borrowed with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    from <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>

  </>
  );
}

export default About;
