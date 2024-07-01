/** @type { import ("drizzle-kit").Config } * /*/
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://AI_owner:dAyBg0xuIq6Y@ep-frosty-hall-a2a0mhtj.eu-central-1.aws.neon.tech/contentgen_ai?sslmode=require",
  },
};
