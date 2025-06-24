import { useRouter } from "next/router";
function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // Load data...
    // After fetching data, navigate to the project page
    router.push({
      pathname: "/clients/[id]/project",
      query: { id: router.query.id },
    });
  }

  return (
    <div>
      <h1>The Project Of A Given Client</h1>
      <button onClick={loadProjectHandler}>Load A Project</button>
    </div>
  );
}
export default ClientProjectPage;
