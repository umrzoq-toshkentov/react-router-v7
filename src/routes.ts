import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "./layouts/layout.tsx",
    children: [
      {
        index: true,
        file: "./routes/home.tsx",
      },
      {
        path: "about",
        file: "./routes/about.tsx",
      },
      {
        path: "todos",
        file: "./routes/todos.tsx",
        children: [
          {
            path: ":id",
            file: "./routes/todo.tsx",
          },
        ],
      },
    ],
  },
] satisfies RouteConfig;
