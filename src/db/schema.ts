import {
  ANYONE_CAN,
  type Row,
  boolean,
  createSchema,
  definePermissions,
  string,
  table,
} from "@rocicorp/zero";

const user = table("user")
  .columns({
    id: string(),
    name: string(),
    partner: boolean(),
  })
  .primaryKey("id");

export const schema = createSchema(
  1, // Schema version. See [Schema Migrations](/docs/migrations) for more info.
  {
    tables: [user],
  },
);

export type Schema = typeof schema;
export type User = Row<typeof schema.tables.user>;

export const permissions = definePermissions(schema, () => {
  return {
    user: {
      row: {
        select: ANYONE_CAN,
        insert: ANYONE_CAN,
        update: ANYONE_CAN,
        delete: ANYONE_CAN,
      },
    },
  };
});
