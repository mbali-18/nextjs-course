import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>The Project Page For A Specific Project For A Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
