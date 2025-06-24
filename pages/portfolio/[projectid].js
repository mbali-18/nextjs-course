import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  router.pathname;
  console.log(router.query);

  //send a request to the backend to fetch the project data
  //use router.query.projectid to get the project ID

  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
