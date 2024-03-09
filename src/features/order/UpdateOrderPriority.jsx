import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateOrderPriority({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority order</Button>
    </fetcher.Form>
  );
}

export default UpdateOrderPriority;

export async function action({ request, params }) {
  console.log("update");
  return null;
}
