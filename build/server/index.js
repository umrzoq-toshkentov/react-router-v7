import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, Meta, Links, ScrollRestoration, Scripts, Outlet } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function Layout$1({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "UTF-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /* @__PURE__ */ jsx("title", {
        children: "React Router SSR"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function Root() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout: Layout$1,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
function Layout() {
  return /* @__PURE__ */ jsxs("div", {
    children: ["Layout", /* @__PURE__ */ jsx(Outlet, {})]
  });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout
}, Symbol.toStringTag, { value: "Module" }));
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx("div", {
    children: "Home"
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const about = withComponentProps(function About() {
  return /* @__PURE__ */ jsx("div", {
    children: "About"
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const todos = withComponentProps(function Todos() {
  return /* @__PURE__ */ jsx("div", {
    children: "Todos"
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: todos
}, Symbol.toStringTag, { value: "Module" }));
const todo = withComponentProps(function Todo() {
  return /* @__PURE__ */ jsx("div", {
    children: "Todo"
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: todo
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DH8XnD-6.js", "imports": ["/assets/chunk-W3HZJLUQ-tD6k6YFA.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CwMyNZe7.js", "imports": ["/assets/chunk-W3HZJLUQ-tD6k6YFA.js", "/assets/with-props-D3pvg7z8.js"], "css": ["/assets/root-kQJbKSsj.css"] }, "layouts/layout": { "id": "layouts/layout", "parentId": "root", "path": "/", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/layout-wOfLop9f.js", "imports": ["/assets/chunk-W3HZJLUQ-tD6k6YFA.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "layouts/layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-DHCPw2av.js", "imports": ["/assets/with-props-D3pvg7z8.js", "/assets/chunk-W3HZJLUQ-tD6k6YFA.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "layouts/layout", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-68SG-eG3.js", "imports": ["/assets/with-props-D3pvg7z8.js", "/assets/chunk-W3HZJLUQ-tD6k6YFA.js"], "css": [] }, "routes/todos": { "id": "routes/todos", "parentId": "layouts/layout", "path": "todos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/todos-DmnZQVWR.js", "imports": ["/assets/with-props-D3pvg7z8.js", "/assets/chunk-W3HZJLUQ-tD6k6YFA.js"], "css": [] }, "routes/todo": { "id": "routes/todo", "parentId": "routes/todos", "path": ":id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/todo-Cpj-9gza.js", "imports": ["/assets/with-props-D3pvg7z8.js", "/assets/chunk-W3HZJLUQ-tD6k6YFA.js"], "css": [] } }, "url": "/assets/manifest-a929a9d5.js", "version": "a929a9d5" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "layouts/layout": {
    id: "layouts/layout",
    parentId: "root",
    path: "/",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "layouts/layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "layouts/layout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/todos": {
    id: "routes/todos",
    parentId: "layouts/layout",
    path: "todos",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/todo": {
    id: "routes/todo",
    parentId: "routes/todos",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
