var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WIUWJGUL.css";

// app/components/card.tsx
var import_outline = require("@heroicons/react/24/outline");
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Card({ post }) {
  let [showComments, setShowComments] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card lg:card-side max-w-lg  lg:max-w-2xl lg:max-h-[600px] bg-base-100 shadow-xl card-compact ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ImageComponent,
      {
        src: post.image,
        className: "w-full h-full max-w-[256px] lg:max-w-[336px]",
        alt: post.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/card.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "card-title flex gap-2 my-1 text-neutral-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.HeartIcon, { className: "w-8 h-8" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "comment", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "post_id", value: post.id }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ChatBubbleOvalLeftIcon, { className: "w-8 h-8" }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/card.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.PaperAirplaneIcon, { className: "w-8 h-8" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg font-semibold mr-1", children: post?.user && post.user[0].username }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        post.title
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => setShowComments(!0), children: "Show Comments..." }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        showComments && post?.comments?.map((comment) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: comment.comment.text }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 45,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: comment.user.username }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 46,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: comment.comment.created_at }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/card.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this) }, comment.comment.id, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/card.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/navbar.tsx
var import_react4 = require("@remix-run/react"), import_classnames = __toESM(require("classnames")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Navbar({ user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "navbar rounded-md bg-secondary text-secondary-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/", className: "btn btn-ghost normal-case text-xl", children: "Home" }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-none gap-2", children: [
      !user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/login", children: "Login" }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/signup", children: "Signup" }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown dropdown-end", children: user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "label",
          {
            tabIndex: 0,
            className: (0, import_classnames.default)(
              { "btn btn-ghost btn-circle avatar": !0 },
              { "placeholder ": !user.avatar_bucket_id }
            ),
            children: user.avatar_bucket_id ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-10  rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: user?.avatar, loading: "lazy", alt: "Account" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 33,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 32,
              columnNumber: 19
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-neutral-focus text-neutral-content rounded-full w-10 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-lg", children: user?.username?.charAt(0) }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 36,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 24,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "ul",
          {
            tabIndex: 0,
            className: "mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary text-secondary-content rounded-box w-52",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: `/user/${user.username}`, children: "Profile" }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 48,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 47,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/settings", children: "Settings" }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 51,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 50,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { children: "Logout" }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 55,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 54,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 53,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 41,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/form.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), FormComponent = ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { className: "flex flex-col max-w-sm mx-auto gap-2", ...props, children }, void 0, !1, {
  fileName: "app/components/form.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this);

// app/components/input.tsx
var import_classnames2 = __toESM(require("classnames")), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), InputComponent = ({
  classname,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: (0, import_classnames2.default)("border rounded-sm", classname), ...props }, void 0, !1, {
  fileName: "app/components/input.tsx",
  lineNumber: 9,
  columnNumber: 10
}, this);

// app/components/image.tsx
var import_classnames3 = __toESM(require("classnames")), import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), ImageComponent = ({
  className,
  src,
  alt
}) => {
  let [hasLoaded, setHasLoaded] = (0, import_react6.useState)(!1), [imgSrc, setImgSrc] = (0, import_react6.useState)(src);
  return (0, import_react6.useEffect)(() => {
    let img = new Image();
    img.src = src, img.onload = () => {
      setImgSrc(src), setHasLoaded(!0);
    };
  }, [src]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className, children: [
    !hasLoaded && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "animate-pulse flex items-center justify-center w-full h-full bg-base-100  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "svg",
      {
        className: "animate-pulse w-10 h-10 text-base-200 ",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 20 18",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" }, void 0, !1, {
          fileName: "app/components/image.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/image.tsx",
        lineNumber: 27,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/image.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "img",
      {
        src: imgSrc,
        className: (0, import_classnames3.default)(
          { "h-full w-full object-cover aspect-[4/5]": !0 },
          { hidden: !hasLoaded }
        ),
        alt
      },
      void 0,
      !1,
      {
        fileName: "app/components/image.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/image.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};

// app/components/profile-card.tsx
var import_solid = require("@heroicons/react/24/solid"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ProfileCard = ({ post }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  import_react7.Link,
  {
    to: `/post/${post.id}`,
    className: "card bg-base-100 group shadow-xl relative rounded-box overflow-hidden",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("figure", { className: "group-hover:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ImageComponent, { src: post.image, alt: post.title }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hidden group-hover:flex gap-8 justify-center items-center absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid.HeartIcon, { className: "w-10 h-10" }, void 0, !1, {
            fileName: "app/components/profile-card.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "295 k" }, void 0, !1, {
            fileName: "app/components/profile-card.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/profile-card.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid.ChatBubbleOvalLeftIcon, { className: "w-10 h-10" }, void 0, !1, {
            fileName: "app/components/profile-card.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "1 k" }, void 0, !1, {
            fileName: "app/components/profile-card.tsx",
            lineNumber: 22,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/profile-card.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/profile-card.tsx",
    lineNumber: 8,
    columnNumber: 5
  },
  this
);

// app/lib/database.server.ts
var import_auth_helpers_remix = require("@supabase/auth-helpers-remix"), supabaseUrl = process.env.SUPABASE_URL, supabaseKey = process.env.SUPABASE_API_KEY, supabase = (request, response) => (0, import_auth_helpers_remix.createServerClient)(supabaseUrl, supabaseKey, { request, response }), getPosts = async (request, response) => {
  let { data, error } = await supabase(request, response).from("posts").select("id, title, image_bucket_id, image_name, user:users(id, username)");
  return error ? (console.error(error), null) : await Promise.all(
    data.map(async (post) => {
      let image = getImage(
        request,
        response,
        post.image_bucket_id,
        post.image_name
      );
      return { ...post, image: image.data.publicUrl };
    })
  );
}, getImage = (request, response, image_bucket_id, image_name) => supabase(request, response).storage.from(image_bucket_id).getPublicUrl(image_name), getAvatar = (request, response, user) => supabase(request, response).storage.from(user.avatar_bucket_id).getPublicUrl(user.avatar_name), getPostsByUserId = async (request, response, id) => {
  let { data, error } = await supabase(request, response).from("posts").select(
    "id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username), comments:post_comment(comment:comments!post_comment_comment_id_fkey(id,text,created_at),parent_comment:comments!post_comment_parent_comment_id_fkey(id,text,created_at), user:users!post_comment_user_id_fkey(id, username))"
  ).eq("user.id", id);
  return error ? (console.error(error), null) : await Promise.all(
    // @ts-ignore
    data.map(async (post) => {
      let image = getImage(
        request,
        response,
        post.image_bucket_id,
        post.image_name
      ), { created_at, image_bucket_id, image_name, ...restPost } = post;
      return console.log(post.comments), { ...restPost, image: image.data.publicUrl };
    })
  );
}, getPostById = async (request, response, id) => {
  let { data, error } = await supabase(request, response).from("posts").select(
    "id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username), comments:post_comment(comment:comments!post_comment_comment_id_fkey(id,text,created_at),parent_comment:comments!post_comment_parent_comment_id_fkey(id,text,created_at), user:users!post_comment_user_id_fkey(id, username))"
  ).eq("id", id).single();
  if (error)
    return console.error("postId err", error), null;
  let { image_name, image_bucket_id, ...post } = data, image = getImage(request, response, image_bucket_id, image_name).data.publicUrl;
  return { ...post, image };
}, followUser = async (request, response, user_id, user_to_follow_id) => {
  let follower = await supabase(request, response).from("followers").insert({ follower_id: user_id, following_id: user_to_follow_id }).select();
  return follower.error && console.error(follower.error), null;
}, unfollowUser = async (request, response, user_id, user_to_unfollow_id) => {
  let follower = await supabase(request, response).from("followers").delete().eq("follower_id", user_id).eq("following_id", user_to_unfollow_id).select();
  return follower.error && console.error(follower.error), null;
}, isFollowing = async (request, response, user_id, target_user_id) => {
  let { data, error } = await supabase(request, response).from("followers").select("*").eq("follower_id", user_id).eq("following_id", target_user_id);
  return error ? (console.error(error), !1) : data.length > 0;
}, addPost = async (request, response, image, title, user_id) => {
  let { error } = await supabase(request, response).storage.from("images").download(image.name), uploadedImage;
  if (error && (uploadedImage = await supabase(request, response).storage.from("images").upload(image.name, image), uploadedImage.error))
    return console.error(uploadedImage.error), null;
  let finalImagePath = uploadedImage ? uploadedImage.data.path : image.name, post = await supabase(request, response).from("posts").insert({
    title,
    image_bucket_id: "images",
    image_name: finalImagePath
  }).select().single();
  return post.error ? (console.error(post.error), null) : (await supabase(request, response).from("post_user").insert({ user_id, post_id: post.data.id }), post.data);
}, addComment = async (request, response, text, post_id, parent_comment_id, user_id) => {
  let { data, error } = await supabase(request, response).from("comments").insert({ text }).select("id").single();
  return (error || (await supabase(request, response).from("post_comment").insert({ post_id, comment_id: data.id, parent_comment_id, user_id }).select().single()).error) && console.error(error), null;
};

// app/lib/auth.server.ts
var import_node2 = require("@remix-run/node");
var getUserById = async (request, response, id) => {
  let { data, error } = await supabase(request, response).from("users").select("*").eq("id", id).single();
  if (error)
    return console.error(error), null;
  let followersData = await supabase(request, response).from("followers").select("id, user:users!followers_follower_id_fkey(*)").eq("following_id", id), followingData = await supabase(request, response).from("followers").select("id, user:users!followers_following_id_fkey(*)").eq("follower_id", id);
  if (followersData.error)
    return console.error(followersData.error), null;
  if (followingData.error)
    return console.error(followingData.error), null;
  let avatar = getAvatar(request, response, data), posts = await getPostsByUserId(request, response, data?.id);
  return {
    user: {
      ...data,
      following: followingData.data,
      followers: followersData.data,
      avatar: avatar.data.publicUrl
    },
    posts
  };
}, getUser = async (request, response) => {
  let { data, error } = await supabase(request, response).auth.getSession();
  return error ? (console.error(error), null) : await getUserById(request, response, data.session?.user.id);
}, getUserId = async (request, response) => {
  let { data, error } = await supabase(request, response).auth.getSession();
  return error ? (console.error(error), null) : data.session?.user.id;
}, getUserByUsername = async (request, response, username) => {
  let { data, error } = await supabase(request, response).from("users").select("*").eq("username", username).single();
  if (error)
    return console.error("user error ", error), null;
  let followersData = await supabase(request, response).from("followers").select("user:users!followers_follower_id_fkey(*)").eq("following_id", data?.id), followingData = await supabase(request, response).from("followers").select("user:users!followers_following_id_fkey(*)").eq("follower_id", data?.id);
  if (followersData.error)
    return console.error(followersData.error), null;
  if (followingData.error)
    return console.error(followingData.error), null;
  let avatar = getAvatar(request, response, data), posts = await getPostsByUserId(request, response, data?.id);
  return {
    user: {
      ...data,
      following: followingData.data,
      followers: followersData.data,
      avatar: avatar.data.publicUrl
    },
    posts
  };
}, signUp = async (request, response, email, password, phone, username, first_name, last_name, image) => {
  let uploadedAvatar = await supabase(request, response).storage.from("avatars").upload(image.name, image);
  if (uploadedAvatar.error)
    return console.error("upload avatar ", uploadedAvatar.error), null;
  let { data, error } = await supabase(request, response).auth.signUp({
    email,
    password,
    phone,
    options: {
      data: {
        username,
        first_name,
        last_name,
        avatar_bucket_id: "avatars",
        avatar_name: uploadedAvatar.data.path
      },
      emailRedirectTo: "http://localhost:3000/login?email_confirmed=true"
    }
  });
  return error ? (console.error("signup error ", error), null) : (0, import_node2.json)(
    { user: data.user, session: data.session },
    { headers: response.headers }
  );
}, Logout = async (request, response) => (await supabase(request, response).auth.signOut(), (0, import_node2.redirect)("/", { headers: response.headers })), LoginWPassword = async (request, response, email, password) => {
  let { data, error } = await supabase(
    request,
    response
  ).auth.signInWithPassword({
    email,
    password
  });
  if (error)
    return console.error(error), (0, import_node2.json)(error.message);
  let userData = await getUserById(request, response, data.user.id);
  return (0, import_node2.redirect)(`/user/${userData?.user.id}`, { headers: response.headers });
}, LoginOAuth = async (request, response, provider) => {
  let { error } = await supabase(request, response).auth.signInWithOAuth({
    provider,
    options: { redirectTo: "http://localhost:3000/auth/callback" }
  });
  return error ? (console.error(error), (0, import_node2.json)(error)) : null;
};

// app/root.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [{ rel: "stylesheet", href: tailwind_default }]
], loader = async ({ request }) => {
  let response = new Response(), data = await getUser(request, response);
  return (0, import_node3.json)(data, { headers: response.headers });
};
function App() {
  let loaderData = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", "data-theme": "dracula", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { className: " md:max-w-5xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Navbar, { user: loaderData?.user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: " mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/user.$username.tsx
var user_username_exports = {};
__export(user_username_exports, {
  action: () => action,
  default: () => User,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_classnames4 = __toESM(require("classnames")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let { username } = params, response = new Response(), userData = await getUserByUsername(request, response, username), currentUser = await getUser(request, response), is_following = await isFollowing(
    request,
    response,
    currentUser?.user.id,
    userData?.user.id
  );
  return (0, import_node4.json)(
    {
      currentUser: currentUser?.user,
      is_following,
      user: userData?.user,
      posts: userData?.posts
    },
    { headers: response.headers }
  );
}, action = async ({ request, params }) => {
  let { username } = params, response = new Response(), currentUser = await getUser(request, response), userToFollow = await getUserByUsername(request, response, username), formData = await request.formData(), _action = formData.get("_action");
  return console.log(_action), _action === "follow" && await followUser(
    request,
    response,
    currentUser?.user.id,
    userToFollow?.user.id
  ), _action === "unfollow" && await unfollowUser(
    request,
    response,
    currentUser?.user.id,
    userToFollow?.user.id
  ), _action === "comment" && await addComment(
    request,
    response,
    "test",
    formData.get("post_id"),
    null,
    currentUser?.user.id
  ), (0, import_node4.json)(null, { headers: response.headers });
};
function User() {
  let { currentUser, user, posts, is_following } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "flex gap-24 ", children: [
      user?.avatar_name ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "img",
        {
          src: user?.avatar,
          alt: user?.username,
          loading: "lazy",
          className: "rounded-full h-48 w-48"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 82,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "avatar placeholder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-neutral-focus text-neutral-content rounded-full w-32 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-4xl capitalize", children: user?.username?.charAt(0) }, void 0, !1, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 91,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-4 items-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-2xl ", children: user?.username }, void 0, !1, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          currentUser?.id === user?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "btn btn-outline btn-sm", children: "Edit Profile" }, void 0, !1, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "font-semibold", children: posts?.length }, void 0, !1, {
              fileName: "app/routes/user.$username.tsx",
              lineNumber: 106,
              columnNumber: 15
            }, this),
            " posts"
          ] }, void 0, !0, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "font-semibold", children: user?.followers?.length }, void 0, !1, {
              fileName: "app/routes/user.$username.tsx",
              lineNumber: 109,
              columnNumber: 15
            }, this),
            " ",
            "followers"
          ] }, void 0, !0, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "font-semibold", children: user?.following.length }, void 0, !1, {
              fileName: "app/routes/user.$username.tsx",
              lineNumber: 113,
              columnNumber: 15
            }, this),
            " ",
            "following"
          ] }, void 0, !0, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "font-semibold capitalize", children: user?.username }, void 0, !1, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        currentUser?.id !== user?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            name: "_action",
            value: is_following ? "unfollow" : "follow",
            className: (0, import_classnames4.default)(
              { "rounded-md px-4 p-2  text-white": !0 },
              { "bg-blue-400": !is_following },
              { "bg-red-400": is_following }
            ),
            children: is_following ? "Unfollow" : "Follow"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 121,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "divider" }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: " grid grid-cols-3 mx-auto", children: posts?.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ProfileCard, { post }, post.id, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user.$username.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/post.$id.tsx
var post_id_exports = {};
__export(post_id_exports, {
  default: () => Post,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  let { id } = params, response = new Response(), post = await getPostById(request, response, id);
  return (0, import_node5.json)({ post }, { headers: response.headers });
}
function Post() {
  let { post } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto w-max h-max", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { post }, void 0, !1, {
    fileName: "app/routes/post.$id.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/post.$id.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  default: () => LogoutRoute
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let response = new Response();
  return await Logout(request, response);
};
function LogoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action3,
  default: () => Signup
});
var import_react11 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function action3({ request }) {
  let uploadHandler = (0, import_node6.unstable_createMemoryUploadHandler)(), formData = await (0, import_node6.unstable_parseMultipartFormData)(
    request,
    uploadHandler
  ), response = new Response();
  return await signUp(
    request,
    response,
    formData.get("email"),
    formData.get("password"),
    formData.get("phone"),
    formData.get("username"),
    formData.get("firstname"),
    formData.get("lastname"),
    formData.get("image")
  );
}
function Signup() {
  let actionData = (0, import_react11.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FormComponent, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        InputComponent,
        {
          name: "image",
          type: "file",
          accept: "image/png, image/jpeg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(InputComponent, { name: "username", placeholder: "username" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(InputComponent, { name: "firstname", placeholder: "firstname" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(InputComponent, { name: "lastname", placeholder: "lastname" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(InputComponent, { name: "email", type: "email", placeholder: "email" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(InputComponent, { name: "phone", type: "tel", placeholder: "phone" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        InputComponent,
        {
          name: "password",
          type: "password",
          placeholder: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { children: "Signup" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    actionData?.user?.confirmation_sent_at && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
      "Email Confirmation sent to ",
      actionData?.user.email
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action4,
  default: () => Index,
  loader: () => loader4,
  meta: () => meta
});
var import_node7 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
], loader4 = async ({ request }) => {
  let response = new Response();
  return await getPosts(request, response);
}, action4 = async ({ request }) => {
  let uploadHandler = (0, import_node7.unstable_createMemoryUploadHandler)(), formData = await (0, import_node7.unstable_parseMultipartFormData)(
    request,
    uploadHandler
  ), _action = formData.get("_action"), response = new Response(), currentUser = await getUser(request, response);
  if (_action === "add-post") {
    let image = formData.get("image"), title = formData.get("title"), userId = await getUserId(request, response);
    return await addPost(request, response, image, title, userId), (0, import_node7.json)(null, { headers: response.headers });
  }
  _action === "comment" && await addComment(
    request,
    response,
    "test",
    formData.get("post_id"),
    null,
    currentUser?.user.id
  );
};
function Index() {
  let posts = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: " ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { name: "image", type: "file", accept: "image/png, image/jpeg" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { name: "title" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { children: "Add Post" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid max-w-xl mx-auto", children: posts && posts.map((post) => post?.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: `/user/${post?.user[0].username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Card, { post }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 19
    }, this) }, post.id, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 72,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  default: () => Login,
  loader: () => loader5
});
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function action5({ request }) {
  let formData = await request.formData(), _action = formData.get("_action"), response = new Response();
  if (_action === "email")
    return await LoginWPassword(
      request,
      response,
      formData.get("email"),
      formData.get("password")
    );
  if (_action === "google")
    return await LoginOAuth(request, response, "google");
}
async function loader5({ request }) {
  return new URL(request.url).searchParams.get("email_confirmed") ? { message: "Email Confirmed!" } : null;
}
function Login() {
  let error = (0, import_react13.useActionData)(), email_confirmed = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
    email_confirmed ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: email_confirmed.message }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 26
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, {}, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 61
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FormComponent, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(InputComponent, { type: "hidden", value: "email", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(InputComponent, { placeholder: "email", name: "email", type: "email" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        InputComponent,
        {
          placeholder: "password",
          name: "password",
          type: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: error.toString() }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, {}, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FormComponent, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(InputComponent, { type: "hidden", value: "google", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { children: "Login w Google" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WICQOCQ6.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HXSINT44.js", "/build/_shared/chunk-PWKMZAPV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4XBRZXYL.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-TC27VHTO.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-J5V43HGR.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-Y4UVWW34.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-RXEJJPAU.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/post.$id": { id: "routes/post.$id", parentId: "root", path: "post/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/post.$id-V6R6RF4U.js", imports: ["/build/_shared/chunk-QZBLPBDB.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-OPE4QQEH.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/user.$username": { id: "routes/user.$username", parentId: "root", path: "user/:username", index: void 0, caseSensitive: void 0, module: "/build/routes/user.$username-GPEVDXLL.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "4e16f11b", hmr: { runtime: "/build/_shared\\chunk-PWKMZAPV.js", timestamp: 1699725599019 }, url: "/build/manifest-4E16F11B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/user.$username": {
    id: "routes/user.$username",
    parentId: "root",
    path: "user/:username",
    index: void 0,
    caseSensitive: void 0,
    module: user_username_exports
  },
  "routes/post.$id": {
    id: "routes/post.$id",
    parentId: "root",
    path: "post/:id",
    index: void 0,
    caseSensitive: void 0,
    module: post_id_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
