import { Unkey } from "@unkey/api";
import "dotenv/config";

const unkeyClient = new Unkey({
  rootKey: process.env.UNKEY_ROOT_KEY,
});

export default unkeyClient;
