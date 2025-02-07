import { add } from "@repo/math/add";

export default function Page() {
  return (
    <div>
      <h1>Welcome to Fast Things</h1>
      <p>10 + 5 = {add(10, 5)}</p>
    </div>
  );
}
