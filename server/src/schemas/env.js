export const envSchema = {
  type: "object",
  required: [
    "MONGODB_URL",
    "UNKEY_API_ID",
    "UNKEY_ROOT_KEY",
    "GITHUB_CLIENT_ID",
    "GITHUB_CLIENT_SECRET",
    "BASE_URL",
  ],
  properties: {
    MONGODB_URL: { type: "string" },
    UNKEY_API_ID: { type: "string" },
    UNKEY_ROOT_KEY: { type: "string" },
    GITHUB_CLIENT_ID: { type: "string" },
    GITHUB_CLIENT_SECRET: { type: "string" },
    BASE_URL: { type: "string" },
  },
};
