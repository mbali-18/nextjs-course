import { useRouter } from "next/router";
function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project Of A Given Client</h1>
      <p>This is the client project page content.</p>
    </div>
  );
}
export default ClientProjectPage;
