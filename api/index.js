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
var import_node3 = require("@remix-run/node"), import_react16 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IVIUW2NE.css";

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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto my-1 aspect-[4/5] max-w-sm rounded-sm  text-base-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-2 my-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/user/${post.user?.username}`, className: "avatar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: post.user?.avatar, alt: "" }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 37,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/user/${post.user?.username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: post.user?.username }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 42,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 41,
        columnNumber: 5
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
            lineNumber: 48,
            columnNumber: 6
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/card.tsx",
          lineNumber: 44,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 35,
      columnNumber: 4
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
        lineNumber: 54,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " pb-4 border-b border-b-neutral", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "flex gap-2 items-center my-1 text-neutral-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react2.Form,
          {
            method: "post",
            encType: "multipart/form-data",
            className: "flex items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "post_id", value: post.id }, void 0, !1, {
                fileName: "app/components/card.tsx",
                lineNumber: 68,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "like", children: post.likes.find((like) => like.user.id === currentUser.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_solid.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
                fileName: "app/components/card.tsx",
                lineNumber: 71,
                columnNumber: 10
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
                fileName: "app/components/card.tsx",
                lineNumber: 73,
                columnNumber: 10
              }, this) }, void 0, !1, {
                fileName: "app/components/card.tsx",
                lineNumber: 69,
                columnNumber: 8
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/card.tsx",
            lineNumber: 63,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => commentInputRef.current?.focus(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ChatBubbleOvalLeftIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 78,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 77,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.PaperAirplaneIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 62,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: [
        post.likes.length,
        " likes"
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 83,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/user/${post.user?.username}`, className: "font-semibold", children: post.user?.username }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 85,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: post.title }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 84,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/post/${post.id}`, className: "text-sm text-gray-400", children: [
        "View all ",
        currentPostComments.length,
        " comments"
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 90,
        columnNumber: 6
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
            lineNumber: 94,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: currentPostComments[comments.length - 1]?.comment.text }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 93,
        columnNumber: 6
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
          lineNumber: 104,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 61,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/card.tsx",
      lineNumber: 60,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/card.tsx",
    lineNumber: 34,
    columnNumber: 3
  }, this);
}

// app/components/navbar.tsx
var import_react4 = require("@remix-run/react"), import_classnames3 = __toESM(require("classnames"));

// app/components/input.tsx
var import_classnames = __toESM(require("classnames")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), InputComponent = ({
  className,
  icon,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "label",
  {
    className: (0, import_classnames.default)(
      {
        "input input-bordered  flex items-center gap-2": props.type !== "hidden" && props.type !== "file"
      },
      props.type !== "file" && className
    ),
    children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "input",
        {
          ...props,
          className: (0, import_classnames.default)(
            {
              grow: props.type !== "hidden" && props.type !== "file",
              "file-input file-input-bordered w-full": props.type === "file"
            },
            props.type === "file" && className
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/input.tsx",
          lineNumber: 22,
          columnNumber: 4
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/input.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
);

// app/components/button.tsx
var import_classnames2 = __toESM(require("classnames")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Button({
  classname,
  children,
  buttonType = "btn-primary" /* Primary */,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      className: (0, import_classnames2.default)("btn btn-sm md:btn-md", buttonType, classname),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/button.tsx",
      lineNumber: 24,
      columnNumber: 3
    },
    this
  );
}

// app/components/navbar.tsx
var import_react5 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Navbar({ user }) {
  let transition = (0, import_react4.useNavigation)(), addingPost = transition.state === "submitting" && transition?.formData?.get("_action") === "addPost", addPostRef = (0, import_react5.useRef)(null);
  return (0, import_react5.useEffect)(() => {
    addPostRef.current?.reset();
  }, [addingPost]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "navbar rounded-md bg-secondary ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/", className: "btn btn-ghost normal-case text-xl", children: "@Connect" }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-none gap-2", children: [
      !user && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { className: "btn btn-ghost", to: "/login", children: "Login" }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { className: "btn btn-ghost", to: "/signup", children: "Signup" }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 27,
        columnNumber: 6
      }, this),
      user && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react4.Form,
        {
          ref: addPostRef,
          className: "flex items-center gap-2",
          method: "post",
          action: "/?index",
          encType: "multipart/form-data",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              InputComponent,
              {
                className: "file-input-sm max-w-52",
                name: "image",
                type: "file",
                accept: "image/png, image/jpeg"
              },
              void 0,
              !1,
              {
                fileName: "app/components/navbar.tsx",
                lineNumber: 44,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              InputComponent,
              {
                className: "input-sm",
                type: "text",
                name: "title",
                placeholder: "Title"
              },
              void 0,
              !1,
              {
                fileName: "app/components/navbar.tsx",
                lineNumber: 50,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Button,
              {
                name: "_action",
                value: "addPost",
                buttonType: "btn-ghost" /* Ghost */,
                children: "Add Post"
              },
              void 0,
              !1,
              {
                fileName: "app/components/navbar.tsx",
                lineNumber: 56,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/navbar.tsx",
          lineNumber: 37,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "dropdown dropdown-end", children: user && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "label",
          {
            tabIndex: 0,
            className: (0, import_classnames3.default)(
              { "btn btn-ghost btn-circle avatar": !0 },
              { "placeholder ": !user.avatar_bucket_id }
            ),
            children: user.avatar_bucket_id ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-10  rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: user?.avatar, loading: "lazy", alt: "Account" }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 76,
              columnNumber: 10
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-neutral-focus text-neutral-content rounded-full w-10 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-lg", children: user?.username?.charAt(0) }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/navbar.tsx",
              lineNumber: 80,
              columnNumber: 10
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 68,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "ul",
          {
            tabIndex: 0,
            className: "mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary text-secondary-content rounded-box w-52",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: `/user/${user.username}`, children: "Profile" }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 92,
                columnNumber: 10
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 91,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/settings", children: "Settings" }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 95,
                columnNumber: 10
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 94,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { method: "post", className: "flex", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "w-full text-start", children: "Logout" }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 99,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 98,
                columnNumber: 10
              }, this) }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 97,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/navbar.tsx",
            lineNumber: 85,
            columnNumber: 8
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 25,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

// app/components/form.tsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), FormComponent = ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, { className: "flex flex-col max-w-md mx-auto gap-2", ...props, children }, void 0, !1, {
  fileName: "app/components/form.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);

// app/components/image.tsx
var import_classnames4 = __toESM(require("classnames")), import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ImageComponent = ({
  className,
  src,
  alt
}) => {
  let [hasLoaded, setHasLoaded] = (0, import_react7.useState)(!1);
  return (0, import_react7.useEffect)(() => {
    setHasLoaded(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className, children: [
    !hasLoaded && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "animate-pulse flex items-center justify-center w-full h-full bg-base-100  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "svg",
      {
        className: "animate-pulse w-10 h-10 text-base-200 ",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 20 18",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { d: "M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "img",
      {
        src,
        className: (0, import_classnames4.default)(
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
var import_solid2 = require("@heroicons/react/24/solid"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), ProfileCard = ({ post }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: `/post/${post.id}`, className: "group relative", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full h-full bg-gray-700 bg-opacity-20 hidden group-hover:flex items-center justify-center z-1 absolute gap-4 inset-0 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex gap-1 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_solid2.HeartIcon, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 10,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-semibold text-lg", children: post.likes.length }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 11,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex gap-1 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_solid2.ChatBubbleOvalLeftIcon, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 14,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "font-semibold text-lg", children: post.comments?.length }, void 0, !1, {
        fileName: "app/components/profile-card.tsx",
        lineNumber: 15,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/profile-card.tsx",
    lineNumber: 8,
    columnNumber: 4
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "img",
    {
      className: "w-full h-full object-center object-cover rounded-md",
      src: post.image,
      alt: post.title
    },
    void 0,
    !1,
    {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 18,
      columnNumber: 4
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/profile-card.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this);

// app/components/post-card.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function PostCard({
  post,
  currentUser,
  comments
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "card card-side bg-base-100 shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "card-body pb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "card-title", children: post.title }, void 0, !1, {
        fileName: "app/components/post-card.tsx",
        lineNumber: 22,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-4 my-6 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: " font-bold capitalize text-sm", children: post.user?.username }, void 0, !1, {
            fileName: "app/components/post-card.tsx",
            lineNumber: 30,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm", children: [
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
var import_react9 = require("@remix-run/react"), import_dayjs2 = __toESM(require("dayjs")), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Comment({
  comment,
  children,
  setComment,
  setParentId,
  isReply
}) {
  let splitComment = "", username = "", newComment = comment.comment.text;
  return isReply && (splitComment = comment.comment.text.split(" ")[0], newComment = comment.comment.text.replace(splitComment, ""), newComment.trimStart(), username = splitComment.replace("@", "")), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex  items-center justify-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Link, { to: `/user/${comment.user.username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: " inline-block max-w-fit", children: comment.user.username }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm text-gray-500", children: (0, import_dayjs2.default)(comment.comment.created_at).fromNow() }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/comment.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ml-9 text-sm flex gap-1", children: [
      isReply && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Link, { className: "font-semibold", to: `/user/${username}`, children: splitComment }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 44,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: newComment }, void 0, !1, {
        fileName: "app/components/comment.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/comment.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
var import_react10 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Replies({
  replies,
  /* supabase, */
  setComment,
  setParentId
}) {
  let [showReplies, setShowReplies] = (0, import_react10.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    replies && replies.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "bg-neutral w-10 h-px" }, void 0, !1, {
        fileName: "app/components/replies.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, {}, void 0, !1, {
      fileName: "app/components/replies.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this),
    showReplies && replies?.map((reply) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "ml-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
var import_outline2 = require("@heroicons/react/24/outline"), import_solid3 = require("@heroicons/react/24/solid"), import_react11 = require("@remix-run/react"), import_dayjs3 = __toESM(require("dayjs")), import_react12 = require("react"), import_relativeTime2 = __toESM(require("dayjs/plugin/relativeTime")), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
import_dayjs3.default.extend(import_relativeTime2.default);
function CommentSection({
  comments,
  post,
  currentUser
}) {
  let [comment, setComment] = (0, import_react12.useState)(""), [parentId, setParentId] = (0, import_react12.useState)(""), commentInputRef = (0, import_react12.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col flex-1 overflow-y-auto max-h-[248px]", children: comments?.filter((comment2) => comment2.parent_comment === null).map((comment2) => {
      let replies = comments?.filter(
        (child) => comment2.comment.id === child.parent_comment?.id
      );
      return console.log(replies), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        Comment,
        {
          isReply: !1,
          setComment,
          setParentId,
          comment: comment2,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "flex gap-2 my-1 text-neutral-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react11.Form, { method: "post", className: "w-7 h-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "post_id", value: post.id }, void 0, !1, {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 61,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { name: "_action", value: "like", children: post.likes.find((like) => like.user.id === currentUser.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_solid3.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
            fileName: "app/components/comment-section.tsx",
            lineNumber: 64,
            columnNumber: 10
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.HeartIcon, { className: "w-7 h-7" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: () => commentInputRef.current?.focus(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.ChatBubbleOvalLeftIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 71,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.PaperAirplaneIcon, { className: "w-7 h-7" }, void 0, !1, {
          fileName: "app/components/comment-section.tsx",
          lineNumber: 75,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
        post.likes.length,
        " likes"
      ] }, void 0, !0, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 77,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs", children: (0, import_dayjs3.default)().diff(post.created_at, "week") > 0 ? (0, import_dayjs3.default)(post.created_at).format("[the] DD MMMM") : (0, import_dayjs3.default)(post.created_at).fromNow() }, void 0, !1, {
        fileName: "app/components/comment-section.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-6 flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
var import_react13 = require("@remix-run/react"), import_react14 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), AddCommentInput = (0, import_react14.forwardRef)(({ commentInput, setCommentInput, parentId, post_id, comments }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
  import_react13.Form,
  {
    onSubmit: () => setCommentInput(""),
    method: "post",
    encType: "multipart/form-data",
    className: "flex",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "parent_id", value: parentId }, void 0, !1, {
        fileName: "app/components/add-comment.tsx",
        lineNumber: 22,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
          lineNumber: 23,
          columnNumber: 4
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "post_id", value: post_id }, void 0, !1, {
        fileName: "app/components/add-comment.tsx",
        lineNumber: 36,
        columnNumber: 4
      }, this),
      commentInput.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "text-sm", name: "_action", value: "comment", children: "Post" }, void 0, !1, {
        fileName: "app/components/add-comment.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {}, void 0, !1, {
        fileName: "app/components/add-comment.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/add-comment.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));

// app/components/footer.tsx
var import_react15 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("footer", { className: "footer footer-center p-10 rounded", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("nav", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { to: "https://www.adamkindberg.com/", className: "link link-hover", children: "Portfolio" }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react15.Link,
        {
          to: "https://adam-kindberg-shop-shopify.vercel.app",
          className: "link link-hover",
          children: "Shopify project"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 6,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid grid-flow-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { to: "https://www.linkedin.com/in/adam-kindberg/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "svg",
        {
          className: "fill-white",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "inherit",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "path",
            {
              d: "M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z",
              fill: "inherit"
            },
            void 0,
            !1,
            {
              fileName: "app/components/footer.tsx",
              lineNumber: 28,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 20,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 19,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { to: "https://github.com/WeeWee", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "svg",
        {
          className: "fill-white",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "inherit",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            "path",
            {
              d: "M12 0C5.374 0 0 5.50883 0 12.3034C0 17.7394 3.438 22.3511 8.207 23.9782C8.806 24.092 9 23.7106 9 23.3866V21.0962C5.662 21.8405 4.967 19.6444 4.967 19.6444C4.421 18.2223 3.634 17.844 3.634 17.844C2.545 17.0801 3.717 17.0965 3.717 17.0965C4.922 17.1827 5.556 18.3648 5.556 18.3648C6.626 20.2452 8.363 19.7018 9.048 19.387C9.155 18.5924 9.466 18.049 9.81 17.7425C7.145 17.4298 4.343 16.3748 4.343 11.6615C4.343 10.3174 4.812 9.22035 5.579 8.35911C5.455 8.04845 5.044 6.79658 5.696 5.10282C5.696 5.10282 6.704 4.77268 8.997 6.36391C9.954 6.09119 10.98 5.95483 12 5.9497C13.02 5.95483 14.047 6.09119 15.006 6.36391C17.297 4.77268 18.303 5.10282 18.303 5.10282C18.956 6.79761 18.545 8.04948 18.421 8.35911C19.191 9.22035 19.656 10.3184 19.656 11.6615C19.656 16.3871 16.849 17.4277 14.177 17.7322C14.607 18.1136 15 18.8621 15 20.0104V23.3866C15 23.7137 15.192 24.0982 15.801 23.9772C20.566 22.348 24 17.7374 24 12.3034C24 5.50883 18.627 0 12 0Z",
              fill: "inherit"
            },
            void 0,
            !1,
            {
              fileName: "app/components/footer.tsx",
              lineNumber: 43,
              columnNumber: 8
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 35,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 34,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/footer.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 17,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("aside", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "@Connect made by Adam Kindberg" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/lib/database.server.ts
var import_auth_helpers_remix = require("@supabase/auth-helpers-remix");
var supabaseUrl = process.env.SUPABASE_URL, supabaseKey = process.env.SUPABASE_API_KEY, supabase = (request, response) => (0, import_auth_helpers_remix.createServerClient)(supabaseUrl, supabaseKey, { request, response }), getPosts = async (request, response, userId) => {
  let { data: postsData, error: postsError } = await supabase(
    request,
    response
  ).from("posts").select(
    `
    id, title, image_bucket_id, image_name, created_at,
    user:users(id, username, avatar_name, avatar_bucket_id),
	likes:post_like(id, user:users!post_like_user_id_fkey(id, username))
  `
  ).order("created_at", { ascending: !1 }).returns();
  if (postsError)
    return console.error(postsError), null;
  let { data: followedUsers, error: followedUsersError } = await supabase(
    request,
    response
  ).from("followers").select("following_id").eq("follower_id", userId), filteredPosts = postsData?.sort((a, b) => {
    let isFollowedA = followedUsers?.some(
      (user) => user.following_id === a.user?.id
    ), isFollowedB = followedUsers?.some(
      (user) => user.following_id === b.user?.id
    );
    return isFollowedA && !isFollowedB ? -1 : !isFollowedA && isFollowedB ? 1 : b?.created_at?.localeCompare(a?.created_at) || 0;
  });
  if (followedUsersError)
    return console.error(followedUsersError), null;
  let postsWithImages = await Promise.all(
    filteredPosts.map(async (post) => {
      let image = getImage(request, response, post), avatar = getAvatar(request, response, post.user), { avatar_name, avatar_bucket_id, ...restUser } = post.user, newUser = { avatar: avatar.data.publicUrl, ...restUser }, { image_name, image_bucket_id, user, ...restPost } = post;
      return { user: newUser, image: image.data.publicUrl, ...restPost };
    })
  );
  return console.log(postsWithImages[0].likes), postsWithImages;
}, getImage = (request, response, post) => supabase(request, response).storage.from(post.image_bucket_id).getPublicUrl(post.image_name), getAvatar = (request, response, user) => supabase(request, response).storage.from(user.avatar_bucket_id).getPublicUrl(user.avatar_name), getComments = async (request, response) => {
  let { data, error } = await supabase(request, response).from("post_comment").select(
    "post_id, comment:comments!post_comment_comment_id_fkey(id,text,created_at), parent_comment:comments!post_comment_parent_comment_id_fkey(id, text, created_at), user:users!post_comment_user_id_fkey(id, username, avatar_name, avatar_bucket_id)"
  );
  return console.log(data), error ? (console.error("get comments ", error), []) : await Promise.all(
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
    "comment:comments!post_comment_comment_id_fkey(id,text,created_at), parent_comment:comments!post_comment_parent_comment_id_fkey(id, text, created_at), user:users!public_post_comment_user_id_fkey(id, username, avatar_name, avatar_bucket_id)"
  ).eq("post_id", post_id);
  return error ? (console.error("comments post id", error), null) : await Promise.all(
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
    return console.error("get user by id error ", error), null;
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
  try {
    let {
      data: { user },
      error
    } = await supabase(request, response).auth.getUser();
    return error ? (console.error("get user error ", error), null) : await getUserById(request, response, user?.id);
  } catch (err) {
    return console.error(err), null;
  }
}, getUserId = async (request, response) => {
  let { data, error } = await supabase(request, response).auth.getSession();
  return error ? (console.error(error), null) : data.session?.user.id;
}, getUserByUsername = async (request, response, username) => {
  let { data, error } = await supabase(request, response).from("users").select("*").eq("username", username).single();
  if (error)
    return console.error("user error username ", error), null;
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
}, Logout = async (request, response) => {
  try {
    return await supabase(request, response).auth.signOut(), (0, import_node2.redirect)("/", { headers: response.headers });
  } catch (err) {
    return console.error(err), null;
  }
}, LoginWPassword = async (request, response, email, password) => {
  try {
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
    return (0, import_node2.redirect)(`/user/${userData?.user.username}`, {
      headers: response.headers
    });
  } catch (err) {
    return console.error(err), null;
  }
}, LoginOAuth = async (request, response, provider) => {
  let { data, error } = await supabase(
    request,
    response
  ).auth.signInWithOAuth({
    provider,
    options: { redirectTo: "http://localhost:3000/auth/callback" }
  });
  return error ? (console.error("login oauth error ", error), (0, import_node2.json)(error)) : (0, import_node2.redirect)(data.url, { headers: response.headers });
};

// app/root.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [{ rel: "stylesheet", href: tailwind_default }]
], loader = async ({ request }) => {
  let response = new Response(), data = await getUser(request, response);
  return (0, import_node3.json)(data, { headers: response.headers });
};
function App() {
  let loaderData = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("html", { lang: "en", "data-theme": "dracula", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react16.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react16.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("body", { className: " md:max-w-5xl mx-auto ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Navbar, { user: loaderData?.user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "min-h-screen mt-4 px-4 md:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react16.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react16.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react16.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 35,
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
var import_node4 = require("@remix-run/node"), import_react17 = require("@remix-run/react");
var import_classnames5 = __toESM(require("classnames")), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let { username } = params, response = new Response(), currentUser = await getUser(request, response);
  if (!currentUser?.user)
    return (0, import_node4.redirect)("/login");
  console.log(username);
  let userData = await getUserByUsername(request, response, username), is_following = await isFollowing(
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
  let { currentUser, user, posts, is_following } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "flex gap-24 ", children: [
      user?.avatar_name ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "img",
        {
          src: user?.avatar,
          alt: user?.username,
          loading: "lazy",
          className: "rounded-full object-cover h-48 w-48"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 85,
          columnNumber: 6
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "avatar placeholder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "bg-neutral-focus text-neutral-content rounded-full w-32 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-4xl capitalize", children: user?.username?.charAt(0) }, void 0, !1, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 94,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 93,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 92,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex gap-4 items-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-2xl ", children: user?.username }, void 0, !1, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 102,
            columnNumber: 7
          }, this),
          currentUser?.id === user?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { className: "btn btn-outline btn-sm", children: "Edit Profile" }, void 0, !1, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 104,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 101,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "font-semibold", children: posts?.length }, void 0, !1, {
              fileName: "app/routes/user.$username.tsx",
              lineNumber: 109,
              columnNumber: 8
            }, this),
            " posts"
          ] }, void 0, !0, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 108,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "font-semibold", children: user?.followers?.length }, void 0, !1, {
              fileName: "app/routes/user.$username.tsx",
              lineNumber: 112,
              columnNumber: 8
            }, this),
            " ",
            "followers"
          ] }, void 0, !0, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 111,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "font-semibold", children: user?.following.length }, void 0, !1, {
              fileName: "app/routes/user.$username.tsx",
              lineNumber: 116,
              columnNumber: 8
            }, this),
            " ",
            "following"
          ] }, void 0, !0, {
            fileName: "app/routes/user.$username.tsx",
            lineNumber: 115,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 107,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "font-semibold capitalize", children: [
          user?.first_name,
          " ",
          user?.last_name
        ] }, void 0, !0, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 120,
          columnNumber: 6
        }, this),
        currentUser?.id !== user?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react17.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "button",
          {
            name: "_action",
            value: is_following ? "unfollow" : "follow",
            className: (0, import_classnames5.default)(
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
            lineNumber: 126,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 125,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/user.$username.tsx",
          lineNumber: 124,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/user.$username.tsx",
        lineNumber: 100,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 83,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "divider" }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 142,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " grid grid-cols-3 gap-4 mx-auto", children: posts && user ? posts?.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ProfileCard, { post }, post.id, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 147,
      columnNumber: 8
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "User could not be found." }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 144,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/user.$username.tsx",
      lineNumber: 143,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user.$username.tsx",
    lineNumber: 82,
    columnNumber: 3
  }, this);
}

// app/routes/auth.callback.tsx
var auth_callback_exports = {};
__export(auth_callback_exports, {
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");
var loader3 = async ({ request }) => {
  let response = new Response(), code = new URL(request.url).searchParams.get("code");
  if (code) {
    await supabase(request, response).auth.exchangeCodeForSession(code);
    let data = await getUser(request, response);
    return (0, import_node5.redirect)(`/user/${data?.user.username}`, {
      headers: response.headers
    });
  }
};

// app/routes/post.$postid.tsx
var post_postid_exports = {};
__export(post_postid_exports, {
  action: () => action2,
  default: () => Post,
  loader: () => loader4,
  meta: () => meta
});
var import_node6 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader4({ request, params }) {
  let { postid } = params, response = new Response(), currentUser = (await getUser(request, response))?.user;
  if (!currentUser)
    return (0, import_node6.redirect)("/login");
  let post = await getPostById(request, response, postid), comments = await getCommentsByPostId(
    request,
    response,
    postid
  );
  return (0, import_node6.json)(
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
  )), (0, import_node6.json)(null, { headers: response.headers });
}
function Post() {
  let { currentUser, post, comments } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: post ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
      lineNumber: 96,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { children: "Post could not be found" }, void 0, !1, {
    fileName: "app/routes/post.$postid.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/post.$postid.tsx",
    lineNumber: 94,
    columnNumber: 3
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  default: () => LogoutRoute
});
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let response = new Response();
  return console.log("logout "), await Logout(request, response);
};
function LogoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action4,
  default: () => Signup
});
var import_react19 = require("@remix-run/react"), import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function action4({ request }) {
  let uploadHandler = (0, import_node7.unstable_createMemoryUploadHandler)(), formData = await (0, import_node7.unstable_parseMultipartFormData)(
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
  let actionData = (0, import_react19.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(FormComponent, { method: "post", encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
        lineNumber: 39,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      InputComponent,
      {
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            className: "w-4 h-4 opacity-70",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("path", { d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 52,
              columnNumber: 8
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 46,
            columnNumber: 7
          },
          this
        ),
        name: "username",
        placeholder: "Username"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/signup.tsx",
        lineNumber: 44,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputComponent, { name: "firstname", placeholder: "First name" }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InputComponent, { name: "lastname", placeholder: "Last name" }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 59,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      InputComponent,
      {
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            className: "w-4 h-4 opacity-70",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("path", { d: "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" }, void 0, !1, {
                fileName: "app/routes/signup.tsx",
                lineNumber: 68,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("path", { d: "M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" }, void 0, !1, {
                fileName: "app/routes/signup.tsx",
                lineNumber: 69,
                columnNumber: 8
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 62,
            columnNumber: 7
          },
          this
        ),
        name: "email",
        type: "email",
        placeholder: "Email"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/signup.tsx",
        lineNumber: 60,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      InputComponent,
      {
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-4 h-4 opacity-70",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 84,
                columnNumber: 8
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 78,
            columnNumber: 7
          },
          this
        ),
        name: "phone",
        type: "tel",
        placeholder: "Phone"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/signup.tsx",
        lineNumber: 76,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      InputComponent,
      {
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            className: "w-4 h-4 opacity-70",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 103,
                columnNumber: 8
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 97,
            columnNumber: 7
          },
          this
        ),
        name: "password",
        type: "password",
        placeholder: "Password"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/signup.tsx",
        lineNumber: 95,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Button, { buttonType: "btn-accent" /* Accent */, children: "Signup" }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 114,
      columnNumber: 5
    }, this),
    actionData?.user?.confirmation_sent_at && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
      "Email Confirmation sent to ",
      actionData?.user.email
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 116,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 38,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action5,
  default: () => Index,
  loader: () => loader5,
  meta: () => meta2
});
var import_node8 = require("@remix-run/node"), import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), meta2 = ({ data }) => [
  {
    title: data.user ? data.posts.length > 0 ? `@Connect | ${data.posts.length} post(s)` : "@Connect | No posts yet" : "@Connect | Login to view posts"
  },
  {
    name: "description",
    content: "Welcome to @Connect, a social media platform built for you."
  }
], loader5 = async ({ request }) => {
  let response = new Response(), data = await getUser(request, response);
  if (!data?.user)
    return (0, import_node8.redirect)("/login");
  let posts = await getPosts(request, response, data.user?.id), comments = await getComments(request, response);
  return { user: data.user, posts, comments };
}, action5 = async ({ request }) => {
  let uploadHandler = (0, import_node8.unstable_createMemoryUploadHandler)(), formData = await (0, import_node8.unstable_parseMultipartFormData)(
    request,
    uploadHandler
  ), _action = formData.get("_action"), response = new Response(), currentUser = await getUser(request, response);
  if (_action === "addPost") {
    let image = formData.get("image"), title = formData.get("title"), userId = await getUserId(request, response);
    return await addPost(request, response, image, title, userId), (0, import_node8.json)(null, { headers: response.headers });
  }
  if (_action === "comment")
    return await addComment(
      request,
      response,
      "test",
      formData.get("post_id"),
      null,
      currentUser?.user.id
    ), (0, import_node8.json)(null, { headers: response.headers });
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
    ), (0, import_node8.json)(null, { headers: response.headers });
};
function Index() {
  let { user, posts, comments } = (0, import_react20.useLoaderData)();
  return console.log(posts), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "grid max-w-lg mx-auto", children: posts && posts.map((post) => post?.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
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
      lineNumber: 113,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", {}, post.id, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 122,
    columnNumber: 19
  }, this)) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 108,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 107,
    columnNumber: 3
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => Login,
  loader: () => loader6
});
var import_react21 = require("@remix-run/react");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function action6({ request }) {
  let formData = await request.formData(), _action = formData.get("_action"), response = new Response();
  if (_action === "email")
    return console.log("email action"), await LoginWPassword(
      request,
      response,
      formData.get("email"),
      formData.get("password")
    );
  if (_action === "google")
    return console.log("google action"), await LoginOAuth(request, response, "google");
}
async function loader6({ request }) {
  return new URL(request.url).searchParams.get("email_confirmed") ? { message: "Email Confirmed, you can now login" } : null;
}
function Login() {
  let error = (0, import_react21.useActionData)(), email_confirmed = (0, import_react21.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(FormComponent, { method: "post", children: [
      email_confirmed && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mx-auto font-bold", children: email_confirmed.message }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 43,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(InputComponent, { type: "hidden", value: "email", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        InputComponent,
        {
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              className: "w-4 h-4 opacity-70",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 54,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 55,
                  columnNumber: 8
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 48,
              columnNumber: 7
            },
            this
          ),
          placeholder: "email",
          name: "email",
          type: "email"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 46,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        InputComponent,
        {
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              className: "w-4 h-4 opacity-70",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 70,
                  columnNumber: 8
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 64,
              columnNumber: 7
            },
            this
          ),
          placeholder: "password",
          name: "password",
          type: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 62,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Button, { buttonType: "btn-accent" /* Accent */, children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 82,
        columnNumber: 5
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mx-auto", children: error.toString() }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 83,
        columnNumber: 14
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, {}, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 83,
        columnNumber: 62
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(FormComponent, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(InputComponent, { type: "hidden", value: "google", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 87,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Button, { buttonType: "btn-ghost" /* Ghost */, children: "Login with Google" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 88,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 86,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 40,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-IYAGNZ7J.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-EHM6QMDP.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-LK2J7O4Y.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OM6XSFCI.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KTXNWLZK.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-MACSBATT.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.callback": { id: "routes/auth.callback", parentId: "root", path: "auth/callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.callback-HTHTBQTT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-C5DQA5JJ.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-KGA3PCO6.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/post.$postid": { id: "routes/post.$postid", parentId: "root", path: "post/:postid", index: void 0, caseSensitive: void 0, module: "/build/routes/post.$postid-2KBUYYGH.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-PRQEQSCU.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user.$username": { id: "routes/user.$username", parentId: "root", path: "user/:username", index: void 0, caseSensitive: void 0, module: "/build/routes/user.$username-QYVXHLX7.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "dd5a52dc", hmr: { runtime: "/build/_shared\\chunk-LK2J7O4Y.js", timestamp: 1713638039093 }, url: "/build/manifest-DD5A52DC.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  "routes/auth.callback": {
    id: "routes/auth.callback",
    parentId: "root",
    path: "auth/callback",
    index: void 0,
    caseSensitive: void 0,
    module: auth_callback_exports
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
