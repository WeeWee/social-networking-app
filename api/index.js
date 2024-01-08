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
var import_node3 = require("@remix-run/node"), import_react14 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-GUCHVWAM.css";

// app/components/card.tsx
var import_outline = require("@heroicons/react/24/outline"), import_solid = require("@heroicons/react/24/solid");
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_dayjs = __toESM(require("dayjs")), import_relativeTime = __toESM(require("dayjs/plugin/relativeTime")), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
import_dayjs.default.extend(import_relativeTime.default);
function Card({
  post,
  link,
  href,
  currentUser,
  comments
}) {
  let currentPostComments = comments.filter(
    (comment2) => comment2.post_id === post.id
  ), [comment, setComment] = (0, import_react3.useState)(""), commentInputRef = (0, import_react3.useRef)(null);
  return console.log(post.user), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " my-1 aspect-[4/5] max-w-sm rounded-sm  text-base-content    ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-2 my-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/user/${post.user?.username}`, className: "avatar ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: post.user?.avatar, alt: "" }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/user/${post.user?.username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: post.user?.username }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "tooltip tooltip-bottom",
          "data-tip": (0, import_dayjs.default)(post.created_at).format("MMMM, D YYYY"),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400", children: [
            (0, import_dayjs.default)().diff(post.created_at, "week"),
            "w"
          ] }, void 0, !0, {
            fileName: "app/components/card.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/card.tsx",
          lineNumber: 45,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ImageComponent,
      {
        src: post.image,
        className: " mt-3 mb-2 w-full h-full border border-neutral",
        alt: post.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/card.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " pb-4 border-b border-b-neutral", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "flex gap-2 my-1 text-neutral-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "post_id", value: post.id }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "like", children: post.likes.find((like) => like.user.id === currentUser.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/card.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => commentInputRef.current?.focus(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ChatBubbleOvalLeftIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.PaperAirplaneIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: [
        post.likes.length,
        " likes"
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/user/${post.user?.username}`, className: "font-semibold", children: post.user?.username }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: post.title }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/post/${post.id}`, className: "text-sm text-gray-400", children: [
        "View all ",
        currentPostComments.length,
        " comments"
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react2.Link,
          {
            to: `/user/${currentPostComments[comments.length - 1]?.user.username}`,
            className: "font-semibold",
            children: currentPostComments[comments.length - 1]?.user.username
          },
          void 0,
          !1,
          {
            fileName: "app/components/card.tsx",
            lineNumber: 92,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: currentPostComments[comments.length - 1]?.comment.text }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        AddCommentInput,
        {
          ref: commentInputRef,
          commentInput: comment,
          comments,
          parentId: "",
          post_id: post.id,
          setCommentInput: setComment
        },
        void 0,
        !1,
        {
          fileName: "app/components/card.tsx",
          lineNumber: 102,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/card.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/card.tsx",
    lineNumber: 35,
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
  let [hasLoaded, setHasLoaded] = (0, import_react6.useState)(!1);
  return (0, import_react6.useEffect)(() => {
    setHasLoaded(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className, children: [
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
          lineNumber: 28,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/image.tsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/image.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "img",
      {
        src,
        className: (0, import_classnames3.default)(
          { "h-full w-full object-cover": !0 },
          { hidden: !hasLoaded }
        ),
        onLoad: () => setHasLoaded(!0),
        alt
      },
      void 0,
      !1,
      {
        fileName: "app/components/image.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/image.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// app/components/profile-card.tsx
var import_solid2 = require("@heroicons/react/24/solid"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ProfileCard = ({ post }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: `/post/${post.id}`, className: "group relative", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full h-full bg-gray-700 bg-opacity-20 hidden group-hover:flex items-center justify-center z-1 absolute gap-4 inset-0 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex gap-1 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid2.HeartIcon, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-semibold text-lg", children: post.likes.length }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex gap-1 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid2.ChatBubbleOvalLeftIcon, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-semibold text-lg", children: post.comments?.length }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/profile-card.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "img",
    {
      className: "w-full h-full object-center",
      src: post.image,
      alt: post.title
    },
    void 0,
    !1,
    {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 18,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/profile-card.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/components/post-card.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function PostCard({
  post,
  currentUser,
  comments
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "card card-side bg-base-100 shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      ImageComponent,
      {
        className: "max-w-xl max-h-[36rem]",
        src: post.image,
        alt: post.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/post-card.tsx",
        lineNumber: 16,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "card-body pb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "card-title", children: post.title }, void 0, !1, {
        fileName: "app/components/post-card.tsx",
        lineNumber: 22,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex gap-4 my-6 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "img",
          {
            className: "rounded-full w-14 h-14 object-cover",
            src: post.user?.avatar,
            alt: post.user?.username
          },
          void 0,
          !1,
          {
            fileName: "app/components/post-card.tsx",
            lineNumber: 24,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: " font-bold capitalize text-sm", children: post.user?.username }, void 0, !1, {
            fileName: "app/components/post-card.tsx",
            lineNumber: 30,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-sm", children: [
            post.user?.followers?.length,
            " followers"
          ] }, void 0, !0, {
            fileName: "app/components/post-card.tsx",
            lineNumber: 33,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/post-card.tsx",
          lineNumber: 29,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/post-card.tsx",
        lineNumber: 23,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        CommentSection,
        {
          currentUser,
          post,
          comments
        },
        void 0,
        !1,
        {
          fileName: "app/components/post-card.tsx",
          lineNumber: 36,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/post-card.tsx",
      lineNumber: 21,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post-card.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/components/comment.tsx
var import_react8 = require("@remix-run/react"), import_dayjs2 = __toESM(require("dayjs")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Comment({
  comment,
  children,
  setComment,
  setParentId,
  isReply
}) {
  let splitComment = "", username = "", newComment = comment.comment.text;
  return isReply && (splitComment = comment.comment.text.split(" ")[0], newComment = comment.comment.text.replace(splitComment, ""), newComment.trimStart(), username = splitComment.replace("@", "")), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex  items-center justify-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Link, { to: `/user/${comment.user.username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "img",
        {
          className: "w-8 h-8 rounded-full object-cover",
          src: comment.user.avatar
        },
        void 0,
        !1,
        {
          fileName: "app/components/comment.tsx",
          lineNumber: 32,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: " inline-block max-w-fit", children: comment.user.username }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm text-gray-500", children: (0, import_dayjs2.default)(comment.comment.created_at).fromNow() }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/comment.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-9 text-sm flex gap-1", children: [
      isReply && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Link, { className: "font-semibold", to: `/user/${username}`, children: splitComment }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 44,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: newComment }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/comment.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        onClick: () => {
          setComment(`@${comment.user.username}`), setParentId(isReply ? comment.parent_comment.id : comment.comment.id);
        },
        className: "text-sm ",
        children: "reply"
      },
      void 0,
      !1,
      {
        fileName: "app/components/comment.tsx",
        lineNumber: 50,
        columnNumber: 4
      },
      this
    ),
    children
  ] }, void 0, !0, {
    fileName: "app/components/comment.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this);
}

// app/components/replies.tsx
var import_react9 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Replies({
  replies,
  /* supabase, */
  setComment,
  setParentId
}) {
  let [showReplies, setShowReplies] = (0, import_react9.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    replies && replies.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "bg-neutral w-10 h-px" }, void 0, !1, {
        fileName: "app/components/replies.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "button",
        {
          className: "text-sm",
          onClick: () => setShowReplies((prev) => !prev),
          children: showReplies ? "Hide all replies" : `View all ${replies?.length} replies`
        },
        void 0,
        !1,
        {
          fileName: "app/components/replies.tsx",
          lineNumber: 25,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/replies.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, {}, void 0, !1, {
      fileName: "app/components/replies.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this),
    showReplies && replies?.map((reply) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ml-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      Comment,
      {
        isReply: !0,
        setParentId,
        setComment,
        comment: reply
      },
      void 0,
      !1,
      {
        fileName: "app/components/replies.tsx",
        lineNumber: 44,
        columnNumber: 8
      },
      this
    ) }, reply.comment.id, !1, {
      fileName: "app/components/replies.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/replies.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}

// app/components/comment-section.tsx
var import_outline2 = require("@heroicons/react/24/outline"), import_solid3 = require("@heroicons/react/24/solid"), import_react10 = require("@remix-run/react"), import_dayjs3 = __toESM(require("dayjs")), import_react11 = require("react"), import_relativeTime2 = __toESM(require("dayjs/plugin/relativeTime")), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
import_dayjs3.default.extend(import_relativeTime2.default);
function CommentSection({
  comments,
  post,
  currentUser
}) {
  let [comment, setComment] = (0, import_react11.useState)(""), [parentId, setParentId] = (0, import_react11.useState)(""), commentInputRef = (0, import_react11.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col flex-1 overflow-y-auto max-h-[248px]", children: comments?.filter((comment2) => comment2.parent_comment === null).map((comment2) => {
      let replies = comments?.filter(
        (child) => comment2.comment.id === child.parent_comment?.id
      );
      return console.log(replies), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        Comment,
        {
          isReply: !1,
          setComment,
          setParentId,
          comment: comment2,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            Replies,
            {
              setParentId,
              setComment,
              replies
            },
            void 0,
            !1,
            {
              fileName: "app/components/comment-section.tsx",
              lineNumber: 48,
              columnNumber: 10
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ) }, comment2.comment.id, !1, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 41,
        columnNumber: 8
      }, this);
    }) }, void 0, !1, {
      fileName: "app/components/comment-section.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "flex gap-2 my-1 text-neutral-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Form, { method: "post", className: "w-7 h-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "post_id", value: post.id }, void 0, !1, {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 61,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { name: "_action", value: "like", children: post.likes.find((like) => like.user.id === currentUser.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_solid3.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 64,
            columnNumber: 10
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_outline2.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 66,
            columnNumber: 10
          }, this) }, void 0, !1, {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 62,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 60,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { onClick: () => commentInputRef.current?.focus(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_outline2.ChatBubbleOvalLeftIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 71,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_outline2.PaperAirplaneIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 75,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
        post.likes.length,
        " likes"
      ] }, void 0, !0, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 77,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-xs", children: (0, import_dayjs3.default)().diff(post.created_at, "week") > 0 ? (0, import_dayjs3.default)(post.created_at).format("[the] DD MMMM") : (0, import_dayjs3.default)(post.created_at).fromNow() }, void 0, !1, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-6 flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            className: "rounded-full w-9 h-9 object-cover",
            src: currentUser.avatar,
            alt: currentUser.username
          },
          void 0,
          !1,
          {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 84,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          AddCommentInput,
          {
            ref: commentInputRef,
            commentInput: comment,
            setCommentInput: setComment,
            comments,
            parentId,
            post_id: post.id
          },
          void 0,
          !1,
          {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 89,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 83,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/comment-section.tsx",
      lineNumber: 58,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/comment-section.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}

// app/components/add-comment.tsx
var import_react12 = require("@remix-run/react"), import_react13 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), AddCommentInput = (0, import_react13.forwardRef)(({ commentInput, setCommentInput, parentId, post_id, comments }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Form, { onSubmit: () => setCommentInput(""), method: "post", className: "flex", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "parent_id", value: parentId }, void 0, !1, {
    fileName: "app/components/add-comment.tsx",
    lineNumber: 17,
    columnNumber: 4
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    "input",
    {
      ref,
      name: "comment",
      onChange: (e) => setCommentInput(e.target.value),
      value: commentInput,
      type: "text",
      placeholder: comments?.length > 0 ? "Add a comment..." : "Be the first to comment!",
      className: "text-sm bg-inherit focus:border-0 focus:outline-none w-full max-w-xs"
    },
    void 0,
    !1,
    {
      fileName: "app/components/add-comment.tsx",
      lineNumber: 18,
      columnNumber: 4
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "post_id", value: post_id }, void 0, !1, {
    fileName: "app/components/add-comment.tsx",
    lineNumber: 31,
    columnNumber: 4
  }, this),
  commentInput.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { className: "text-sm", name: "_action", value: "comment", children: "Post" }, void 0, !1, {
    fileName: "app/components/add-comment.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, {}, void 0, !1, {
    fileName: "app/components/add-comment.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/add-comment.tsx",
  lineNumber: 16,
  columnNumber: 3
}, this));

// app/lib/database.server.ts
var import_auth_helpers_remix = require("@supabase/auth-helpers-remix");
var supabaseUrl = process.env.SUPABASE_URL, supabaseKey = process.env.SUPABASE_API_KEY, supabase = (request, response) => (0, import_auth_helpers_remix.createServerClient)(supabaseUrl, supabaseKey, { request, response }), getPosts = async (request, response) => {
  let { data, error } = await supabase(request, response).from("posts").select(
    `
    id, title, image_bucket_id, image_name, created_at, 
    user:users(id, username, avatar_name, avatar_bucket_id),
	likes:post_like(id, user:users!post_like_user_id_fkey(id, username))
  `
  ).returns();
  return error ? (console.error(error), null) : await Promise.all(
    data.map(async (post) => {
      let image = getImage(request, response, post), avatar = getAvatar(request, response, post.user), { avatar_name, avatar_bucket_id, ...restUser } = post.user, newUser = { avatar: avatar.data.publicUrl, ...restUser }, { image_name, image_bucket_id, user, ...restPost } = post;
      return { user: newUser, image: image.data.publicUrl, ...restPost };
    })
  );
}, getImage = (request, response, post) => supabase(request, response).storage.from(post.image_bucket_id).getPublicUrl(post.image_name), getAvatar = (request, response, user) => supabase(request, response).storage.from(user.avatar_bucket_id).getPublicUrl(user.avatar_name), getComments = async (request, response) => {
  let { data, error } = await supabase(request, response).from("post_comment").select(
    "post_id, comment:comments!post_comment_comment_id_fkey(id,text,created_at), parent_comment:comments!post_comment_parent_comment_id_fkey(id, text, created_at), user:users!post_comment_user_id_fkey(id, username, avatar_name, avatar_bucket_id)"
  );
  return console.log(data), error ? (console.error("get comments ", error), null) : await Promise.all(
    // @ts-ignore
    data.map(async (comment) => {
      let userAvatar = getAvatar(request, response, comment.user), { avatar_bucket_id, avatar_name, ...restUser } = comment.user;
      return {
        user: { avatar: userAvatar.data.publicUrl, ...restUser },
        parent_comment: comment.parent_comment,
        comment: comment.comment,
        post_id: comment.post_id
      };
    })
  );
}, getPostsByUserId = async (request, response, id) => {
  let { data, error } = await supabase(request, response).from("posts").select(
    "id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username),likes:post_like(id, user:users!post_like_user_id_fkey(id, username, avatar_name, avatar_bucket_id)), comments:post_comment(id)"
  ).eq("user.id", id);
  return error ? (console.error("post by user id ", error), null) : await Promise.all(
    // @ts-ignore
    data.map(async (post) => {
      let image = getImage(request, response, post), { created_at, image_bucket_id, image_name, ...restPost } = post;
      return { ...restPost, image: image.data.publicUrl };
    })
  );
}, getPostById = async (request, response, id) => {
  let {
    data,
    error
  } = await supabase(
    request,
    response
  ).from("posts").select(
    "id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username, avatar_bucket_id, avatar_name), likes:post_like(id, user:users!post_like_user_id_fkey(id, username, avatar_name, avatar_bucket_id))"
  ).eq("id", id).single();
  if (error)
    return console.error("post by id ", error), null;
  let image = getImage(request, response, data), { image_bucket_id, image_name, user, ...restPost } = data;
  return {
    user: (await getUserById(request, response, user?.id))?.user,
    ...restPost,
    image: image.data.publicUrl
  };
}, getCommentsByPostId = async (request, response, post_id) => {
  let { data, error } = await supabase(request, response).from("post_comment").select(
    "comment:comments!post_comment_comment_id_fkey(id,text,created_at), parent_comment:comments!post_comment_parent_comment_id_fkey(id, text, created_at), user:users!post_comment_user_id_fkey(id, username, avatar_name, avatar_bucket_id)"
  ).eq("post_id", post_id);
  return error ? (console.error(error), null) : await Promise.all(
    // @ts-ignore
    data.map(async (comment) => {
      let userAvatar = getAvatar(request, response, comment.user), { avatar_bucket_id, avatar_name, ...restUser } = comment.user;
      return {
        user: { avatar: userAvatar.data.publicUrl, ...restUser },
        parent_comment: comment.parent_comment,
        comment: comment.comment
      };
    })
  );
}, likePost = async (request, response, user_id, post_to_like_id) => {
  if (!await hasLikedPost(
    request,
    response,
    user_id,
    post_to_like_id
  )) {
    let likepost = await supabase(request, response).from("post_like").insert({ user_id, post_id: post_to_like_id }).select();
    likepost.error && console.error("like post ", likepost.error);
  }
  return null;
}, unLikePost = async (request, response, user_id, post_to_remove_id) => {
  let removeLike = await supabase(request, response).from("post_like").delete().eq("user_id", user_id).eq("post_id", post_to_remove_id).select();
  return removeLike.error && console.error("remove like ", removeLike.error), null;
}, hasLikedPost = async (request, response, user_id, liked_post_id) => {
  let isPostLiked = await supabase(request, response).from("post_like").select().eq("user_id", user_id).eq("post_id", liked_post_id);
  return isPostLiked.data && isPostLiked.data.length > 0;
}, followUser = async (request, response, user_id, user_to_follow_id) => {
  let follower = await supabase(request, response).from("followers").insert({ follower_id: user_id, following_id: user_to_follow_id }).select();
  return follower.error && console.error("follow user ", follower.error), null;
}, unfollowUser = async (request, response, user_id, user_to_unfollow_id) => {
  let follower = await supabase(request, response).from("followers").delete().eq("follower_id", user_id).eq("following_id", user_to_unfollow_id).select();
  return follower.error && console.error("unfollow user ", follower.error), null;
}, isFollowing = async (request, response, user_id, target_user_id) => {
  let { data, error } = await supabase(request, response).from("followers").select("*").eq("follower_id", user_id).eq("following_id", target_user_id);
  return error ? (console.error("is following ", error), !1) : data.length > 0;
}, addPost = async (request, response, image, title, user_id) => {
  let { error } = await supabase(request, response).storage.from("images").download(image.name), uploadedImage;
  if (error && (uploadedImage = await supabase(request, response).storage.from("images").upload(image.name, image), uploadedImage.error))
    return console.error(uploadedImage.error), null;
  let finalImagePath = uploadedImage ? uploadedImage.data.path : image.name, post = await supabase(request, response).from("posts").insert({
    title,
    image_bucket_id: "images",
    image_name: finalImagePath,
    user_id
  }).select().single();
  return post.error ? (console.error(post.error), null) : post.data;
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
      emailRedirectTo: (process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/") + "login?email_confirmed=true"
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
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [{ rel: "stylesheet", href: tailwind_default }]
], loader = async ({ request }) => {
  let response = new Response(), data = await getUser(request, response);
  return (0, import_node3.json)(data, { headers: response.headers });
};
function App() {
  let loaderData = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("html", { lang: "en", "data-theme": "dracula", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("body", { className: " md:max-w-5xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Navbar, { user: loaderData?.user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: " mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.LiveReload, {}, void 0, !1, {
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
var import_node4 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_classnames4 = __toESM(require("classnames")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
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
  let { currentUser, user, posts, is_following } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "flex gap-24 ", children: [
      user?.avatar_name ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "avatar placeholder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-neutral-focus text-neutral-content rounded-full w-32 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-4xl capitalize", children: user?.username?.charAt(0) }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-4 items-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-2xl ", children: user?.username }, void 0, !1, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          currentUser?.id === user?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "btn btn-outline btn-sm", children: "Edit Profile" }, void 0, !1, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "font-semibold", children: posts?.length }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "font-semibold", children: user?.followers?.length }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "font-semibold", children: user?.following.length }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "font-semibold capitalize", children: user?.username }, void 0, !1, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        currentUser?.id !== user?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "divider" }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: " grid grid-cols-3 mx-auto", children: posts?.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ProfileCard, { post }, post.id, !1, {
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

// app/routes/post.$postid.tsx
var post_postid_exports = {};
__export(post_postid_exports, {
  action: () => action2,
  default: () => Post,
  loader: () => loader3,
  meta: () => meta
});
var import_node5 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader3({ request, params }) {
  let { postid } = params, response = new Response(), currentUser = (await getUser(request, response))?.user, post = await getPostById(request, response, postid), comments = await getCommentsByPostId(
    request,
    response,
    postid
  );
  return (0, import_node5.json)(
    {
      currentUser,
      post,
      comments,
      supabase_url: process.env.SUPABASE_URL,
      supabase_api_key: process.env.SUPABASE_API_KEY
    },
    { headers: response.headers }
  );
}
async function action2({ request }) {
  let response = new Response(), formData = await request.formData(), _action = formData.get("_action"), parentId = formData.get("parent_id"), comment = formData.get("comment"), currentUser = (await getUser(request, response))?.user;
  return _action === "comment" && await addComment(
    request,
    response,
    comment,
    formData.get("post_id"),
    parentId.length > 0 ? parentId : null,
    currentUser?.id
  ), _action === "like" && (await hasLikedPost(
    request,
    response,
    currentUser?.id,
    formData.get("post_id")
  ) ? await unLikePost(
    request,
    response,
    currentUser?.id,
    formData.get("post_id")
  ) : await likePost(
    request,
    response,
    currentUser?.id,
    formData.get("post_id")
  )), (0, import_node5.json)(null, { headers: response.headers });
}
function Post() {
  let { currentUser, post, comments } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: post ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    PostCard,
    {
      currentUser,
      post,
      comments
    },
    void 0,
    !1,
    {
      fileName: "app/routes/post.$postid.tsx",
      lineNumber: 94,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: "Post could not be found" }, void 0, !1, {
    fileName: "app/routes/post.$postid.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/post.$postid.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  default: () => LogoutRoute
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let response = new Response();
  return await Logout(request, response);
};
function LogoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action4,
  default: () => Signup
});
var import_react17 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function action4({ request }) {
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
  let actionData = (0, import_react17.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(FormComponent, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InputComponent, { name: "username", placeholder: "username" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InputComponent, { name: "firstname", placeholder: "firstname" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InputComponent, { name: "lastname", placeholder: "lastname" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InputComponent, { name: "email", type: "email", placeholder: "email" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(InputComponent, { name: "phone", type: "tel", placeholder: "phone" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { children: "Signup" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    actionData?.user?.confirmation_sent_at && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
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
  action: () => action5,
  default: () => Index,
  loader: () => loader4,
  meta: () => meta2
});
var import_node7 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
], loader4 = async ({ request }) => {
  let response = new Response(), posts = await getPosts(request, response), comments = await getComments(request, response);
  return { user: (await getUser(request, response))?.user, posts, comments };
}, action5 = async ({ request }) => {
  let uploadHandler = (0, import_node7.unstable_createMemoryUploadHandler)(), formData = await (0, import_node7.unstable_parseMultipartFormData)(
    request,
    uploadHandler
  ), _action = formData.get("_action"), response = new Response(), currentUser = await getUser(request, response);
  if (_action === "add-post") {
    let image = formData.get("image"), title = formData.get("title"), userId = await getUserId(request, response);
    return await addPost(request, response, image, title, userId), (0, import_node7.json)(null, { headers: response.headers });
  }
  if (_action === "comment")
    return await addComment(
      request,
      response,
      "test",
      formData.get("post_id"),
      null,
      currentUser?.user.id
    ), (0, import_node7.json)(null, { headers: response.headers });
  if (_action === "like")
    return await hasLikedPost(
      request,
      response,
      currentUser?.user.id,
      formData.get("post_id")
    ) ? await unLikePost(
      request,
      response,
      currentUser?.user.id,
      formData.get("post_id")
    ) : await likePost(
      request,
      response,
      currentUser?.user.id,
      formData.get("post_id")
    ), (0, import_node7.json)(null, { headers: response.headers });
};
function Index() {
  let { user, posts, comments } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: " ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react18.Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { name: "image", type: "file", accept: "image/png, image/jpeg" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { name: "title" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { name: "_action", value: "add-post", children: "Add Post" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid max-w-lg mx-auto", children: posts && posts.map((post) => post?.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      Card,
      {
        post,
        link: !0,
        href: `/user/${post.user.username}`,
        currentUser: user,
        comments
      },
      post.id,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 109,
        columnNumber: 17
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {}, post.id, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 118,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => Login,
  loader: () => loader5
});
var import_react19 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function action6({ request }) {
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
  let error = (0, import_react19.useActionData)(), email_confirmed = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
    email_confirmed ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: email_confirmed.message }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 26
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, {}, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 61
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FormComponent, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputComponent, { type: "hidden", value: "email", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputComponent, { placeholder: "email", name: "email", type: "email" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: error.toString() }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, {}, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FormComponent, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputComponent, { type: "hidden", value: "google", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { children: "Login w Google" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-WICQOCQ6.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HXSINT44.js", "/build/_shared/chunk-PWKMZAPV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F5OONXVS.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-MP3K22N7.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UMD2WFUA.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-5AZBABV5.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-RXEJJPAU.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/post.$postid": { id: "routes/post.$postid", parentId: "root", path: "post/:postid", index: void 0, caseSensitive: void 0, module: "/build/routes/post.$postid-CBKF6UA2.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-HSHFEM3A.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/user.$username": { id: "routes/user.$username", parentId: "root", path: "user/:username", index: void 0, caseSensitive: void 0, module: "/build/routes/user.$username-YYKR4LQR.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "98601344", hmr: { runtime: "/build/_shared\\chunk-PWKMZAPV.js", timestamp: 1704706013e3 }, url: "/build/manifest-98601344.js" };

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
  "routes/post.$postid": {
    id: "routes/post.$postid",
    parentId: "root",
    path: "post/:postid",
    index: void 0,
    caseSensitive: void 0,
    module: post_postid_exports
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
