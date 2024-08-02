import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("output", {
  id: serial("number").primaryKey(),
  form: varchar("dataform").notNull(),
  response: text("AIresponse").notNull(),
  created: varchar("created").notNull(),
  at: varchar("at").notNull(),
});
