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
var import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VIDNYIGZ.css";

// app/components/card.tsx
var import_outline = require("@heroicons/react/24/outline");
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Card({
  post,
  profilePage
}) {
  let [showComments, setShowComments] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " aspect-[4/5] max-w-sm rounded-sm border text-base-content  border-neutral  ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ImageComponent,
      {
        src: post.image,
        className: "w-full h-full",
        alt: post.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/card.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "flex gap-2 my-1 text-neutral-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.HeartIcon, { className: "w-8 h-8" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { name: "_action", value: "comment", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "post_id", value: post.id }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ChatBubbleOvalLeftIcon, { className: "w-8 h-8" }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/card.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.PaperAirplaneIcon, { className: "w-8 h-8" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      !profilePage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-lg font-semibold", children: post?.user && post.user[0].username }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: post.title }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => setShowComments(!0), children: "Show Comments..." }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        showComments && post?.comments?.map((comment) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: comment.comment.text }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: comment.user.username }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: comment.comment.created_at }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/card.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this) }, comment.comment.id, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/card.tsx",
    lineNumber: 21,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className, children: [
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
          lineNumber: 26,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/image.tsx",
        lineNumber: 19,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/image.tsx",
      lineNumber: 18,
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
        lineNumber: 30,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/image.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/components/profile-card.tsx
var import_solid = require("@heroicons/react/24/solid"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ProfileCard = ({ post }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "card bg-base-100 shadow-xl image-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("figure", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ImageComponent, { src: post.image, alt: post.title }, void 0, !1, {
    fileName: "app/components/profile-card.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/profile-card.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid.HeartIcon, { className: "w-10 h-10" }, void 0, !1, {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "295 k" }, void 0, !1, {
      fileName: "app/components/profile-card.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/profile-card.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/profile-card.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/profile-card.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/lib/database.server.ts
var import_auth_helpers_remix = require("@supabase/auth-helpers-remix"), supabaseUrl = process.env.SUPABASE_URL, supabaseKey = process.env.SUPABASE_API_KEY, supabase = (request, response) => (0, import_auth_helpers_remix.createServerClient)(supabaseUrl, supabaseKey, { request, response }), getPosts = async (request, response) => {
  let { data, error } = await supabase(request, response).from("posts").select("id, title, image_bucket_id, image_name, user:users(id, username)");
  return error ? (console.error(error), null) : await Promise.all(
    data.map(async (post) => {
      let image = getImage(request, response, post);
      return { ...post, image: image.data.publicUrl };
    })
  );
}, getImage = (request, response, post) => supabase(request, response).storage.from(post.image_bucket_id).getPublicUrl(post.image_name), getAvatar = (request, response, user) => supabase(request, response).storage.from(user.avatar_bucket_id).getPublicUrl(user.avatar_name), getPostsByUserId = async (request, response, id) => {
  let { data, error } = await supabase(request, response).from("posts").select(
    "id, title, image_name, image_bucket_id, created_at, user:users!inner(id, username), comments:post_comment(comment:comments!post_comment_comment_id_fkey(id,text,created_at),parent_comment:comments!post_comment_parent_comment_id_fkey(id,text,created_at), user:users!post_comment_user_id_fkey(id, username))"
  ).eq("user.id", id);
  return error ? (console.error(error), null) : await Promise.all(
    // @ts-ignore
    data.map(async (post) => {
      let image = getImage(request, response, post), { created_at, image_bucket_id, image_name, ...restPost } = post;
      return console.log(...oo_oo("229202945_0", post.comments)), { ...restPost, image: image.data.publicUrl };
    })
  );
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
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4b60(){var _0x196f76=['current','noFunctions','console','symbol','609173cQQurh','_setNodeExpandableState','_treeNodePropertiesBeforeFullValue','replace','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','timeStamp','getPrototypeOf','serialize','location','_Symbol','_blacklistedProperty','hasOwnProperty','8NMdrok','_disposeWebsocket','_reconnectTimeout','unknown','stack','_console_ninja_session','positiveInfinity','then','_addObjectProperty','Number','process','concat','path','WebSocket','nodeModules','...','Set','valueOf','reduceLimits','root_exp_id','cappedProps','_console_ninja','allStrLength','autoExpandMaxDepth','_connectAttemptCount','pathToFileURL','[object\\x20Array]','catch','_addProperty','bigint','parent','_regExpToString','time','capped','error','parse','message','pop','array','sort','_isPrimitiveWrapperType','557826VquQio','substr','timeEnd','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','1.0.0','root_exp','1698651862890','_ws','_numberRegExp','_addLoadNode','funcName','_p_name','length','string','versions','method','isArray','getter','null','node','_sortProps','next.js','_setNodePermissions','_socket','set','getOwnPropertyDescriptor','autoExpandLimit','_setNodeLabel','coverage','hits','isExpressionToEvaluate','level','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','6292896zxURhf','_isPrimitiveType','remix','boolean','get','setter','forEach','_getOwnPropertyDescriptor','_connectToHostNow','_dateToString','_cleanNode','nan','stringify','_connected','global','close','function','trace','56858','POSITIVE_INFINITY','send','disabledTrace','_consoleNinjaAllowedToStart','','split','_capIfString','env','onmessage','NEXT_RUNTIME','test','url','log','7oZkYbW','now','ws/index.js','145321zbkwEb','8122230HcAhpi','275vwHfCG','_webSocketErrorDocsLink','totalStrLength','getWebSocketClass','_WebSocket','_HTMLAllCollection','','toLowerCase','value','127.0.0.1','object','10023096PEmEDI','dockerizedApp','_treeNodePropertiesAfterFullValue','count','onclose','_inBrowser','_allowedToSend','hrtime','expId','number','_addFunctionsNode','toString','_processTreeNodeResult','ws://','match','strLength','join','Buffer','_keyStrRegExp','host','unshift','_p_','_isSet','_quotedRegExp','push',["localhost","127.0.0.1","example.cypress.io","5CD9244GQ6","192.168.1.80"],'unref','performance','indexOf','_getOwnPropertyNames','undefined','_attemptToReconnectShortly','_undefined','port','_connecting','_hasSetOnItsPath','_isMap','map','[object\\x20Map]','data','props','autoExpandPropertyCount','depth','_p_length','sortProps','onerror','name','defineProperty','_objectToString','resolveGetters','onopen','elapsed','_additionalMetadata','edge','_maxConnectAttemptCount','autoExpand','getOwnPropertySymbols','includes','Error','_setNodeQueryPath','reload','elements','Symbol','index','Map','_sendErrorMessage','warn','_setNodeExpressionPath','prototype','String','hostname','_WebSocketClass','type','date','_allowedToConnectOnSend','_type','1360mgMCzb','51112cLVaCj','HTMLAllCollection','stackTraceLimit','expressionsToEvaluate','Boolean','slice','_isNegativeZero','_setNodeId','perf_hooks','_property','getOwnPropertyNames','_propertyName','call','readyState','nuxt','constructor','autoExpandPreviousObjects'];_0x4b60=function(){return _0x196f76;};return _0x4b60();}var _0x40415b=_0x20e3;(function(_0x5b2c0d,_0x3b4a5e){var _0x11c9ad=_0x20e3,_0x44a48b=_0x5b2c0d();while(!![]){try{var _0x495357=parseInt(_0x11c9ad(0xf5))/0x1+-parseInt(_0x11c9ad(0x101))/0x2*(-parseInt(_0x11c9ad(0x12a))/0x3)+-parseInt(_0x11c9ad(0xe0))/0x4*(-parseInt(_0x11c9ad(0x88))/0x5)+-parseInt(_0x11c9ad(0x14b))/0x6+parseInt(_0x11c9ad(0x83))/0x7*(-parseInt(_0x11c9ad(0x93))/0x8)+-parseInt(_0x11c9ad(0x87))/0x9+parseInt(_0x11c9ad(0xdf))/0xa*(parseInt(_0x11c9ad(0x86))/0xb);if(_0x495357===_0x3b4a5e)break;else _0x44a48b['push'](_0x44a48b['shift']());}catch(_0x412b79){_0x44a48b['push'](_0x44a48b['shift']());}}}(_0x4b60,0x9e43e));function _0x20e3(_0x49e479,_0x4c553c){var _0x4b6028=_0x4b60();return _0x20e3=function(_0x20e32e,_0x505f84){_0x20e32e=_0x20e32e-0x6b;var _0xb84ac8=_0x4b6028[_0x20e32e];return _0xb84ac8;},_0x20e3(_0x49e479,_0x4c553c);}var j=Object['create'],H=Object[_0x40415b(0xc2)],G=Object[_0x40415b(0x143)],ee=Object['getOwnPropertyNames'],te=Object[_0x40415b(0xfb)],ne=Object[_0x40415b(0xd7)][_0x40415b(0x100)],re=(_0x778885,_0x376950,_0x1ec5f8,_0x4e2808)=>{var _0x1ac875=_0x40415b;if(_0x376950&&typeof _0x376950=='object'||typeof _0x376950==_0x1ac875(0x73)){for(let _0x38fcd4 of ee(_0x376950))!ne[_0x1ac875(0xec)](_0x778885,_0x38fcd4)&&_0x38fcd4!==_0x1ec5f8&&H(_0x778885,_0x38fcd4,{'get':()=>_0x376950[_0x38fcd4],'enumerable':!(_0x4e2808=G(_0x376950,_0x38fcd4))||_0x4e2808['enumerable']});}return _0x778885;},x=(_0x31f025,_0x437417,_0x87b55f)=>(_0x87b55f=_0x31f025!=null?j(te(_0x31f025)):{},re(_0x437417||!_0x31f025||!_0x31f025['__es'+'Module']?H(_0x87b55f,'default',{'value':_0x31f025,'enumerable':!0x0}):_0x87b55f,_0x31f025)),X=class{constructor(_0x36440a,_0x5b04fc,_0x7fc8a,_0xf16e27,_0x3c2068){var _0x5063d1=_0x40415b;this[_0x5063d1(0x71)]=_0x36440a,this[_0x5063d1(0xa6)]=_0x5b04fc,this['port']=_0x7fc8a,this[_0x5063d1(0x10f)]=_0xf16e27,this[_0x5063d1(0x94)]=_0x3c2068,this[_0x5063d1(0x99)]=!0x0,this[_0x5063d1(0xdd)]=!0x0,this[_0x5063d1(0x70)]=!0x1,this[_0x5063d1(0xb5)]=!0x1,this['_inNextEdge']=_0x36440a[_0x5063d1(0x10b)]?.[_0x5063d1(0x7d)]?.[_0x5063d1(0x7f)]===_0x5063d1(0xc8),this['_inBrowser']=!this[_0x5063d1(0x71)][_0x5063d1(0x10b)]?.['versions']?.[_0x5063d1(0x13d)]&&!this['_inNextEdge'],this[_0x5063d1(0xda)]=null,this[_0x5063d1(0x119)]=0x0,this[_0x5063d1(0xc9)]=0x14,this[_0x5063d1(0x89)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this['_inBrowser']?_0x5063d1(0x14a):_0x5063d1(0xf9))+this['_webSocketErrorDocsLink'];}async[_0x40415b(0x8b)](){var _0x5189ef=_0x40415b;if(this[_0x5189ef(0xda)])return this[_0x5189ef(0xda)];let _0x1ad85d;if(this[_0x5189ef(0x98)]||this['_inNextEdge'])_0x1ad85d=this[_0x5189ef(0x71)][_0x5189ef(0x10e)];else{if(this[_0x5189ef(0x71)][_0x5189ef(0x10b)]?.[_0x5189ef(0x8c)])_0x1ad85d=this['global'][_0x5189ef(0x10b)]?.[_0x5189ef(0x8c)];else try{let _0x20504a=await import(_0x5189ef(0x10d));_0x1ad85d=(await import((await import(_0x5189ef(0x81)))[_0x5189ef(0x11a)](_0x20504a[_0x5189ef(0xa3)](this[_0x5189ef(0x10f)],_0x5189ef(0x85)))['toString']()))['default'];}catch{try{_0x1ad85d=require(require('path')[_0x5189ef(0xa3)](this[_0x5189ef(0x10f)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x5189ef(0xda)]=_0x1ad85d,_0x1ad85d;}[_0x40415b(0x6b)](){var _0x17ea5b=_0x40415b;this['_connecting']||this['_connected']||this['_connectAttemptCount']>=this[_0x17ea5b(0xc9)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x17ea5b(0x131)]=new Promise((_0x231b5c,_0x296a72)=>{var _0x2ce99e=_0x17ea5b;this[_0x2ce99e(0x8b)]()[_0x2ce99e(0x108)](_0x31e338=>{var _0x4a8719=_0x2ce99e;let _0x4cf85c=new _0x31e338(_0x4a8719(0xa0)+(!this['_inBrowser']&&this[_0x4a8719(0x94)]?'gateway.docker.internal':this[_0x4a8719(0xa6)])+':'+this[_0x4a8719(0xb4)]);_0x4cf85c[_0x4a8719(0xc0)]=()=>{var _0x5aae9b=_0x4a8719;this[_0x5aae9b(0x99)]=!0x1,this['_disposeWebsocket'](_0x4cf85c),this['_attemptToReconnectShortly'](),_0x296a72(new Error('logger\\x20websocket\\x20error'));},_0x4cf85c['onopen']=()=>{var _0x1ed07d=_0x4a8719;this['_inBrowser']||_0x4cf85c[_0x1ed07d(0x141)]&&_0x4cf85c[_0x1ed07d(0x141)][_0x1ed07d(0xad)]&&_0x4cf85c[_0x1ed07d(0x141)][_0x1ed07d(0xad)](),_0x231b5c(_0x4cf85c);},_0x4cf85c[_0x4a8719(0x97)]=()=>{var _0x29ad5a=_0x4a8719;this[_0x29ad5a(0xdd)]=!0x0,this[_0x29ad5a(0x102)](_0x4cf85c),this[_0x29ad5a(0xb2)]();},_0x4cf85c[_0x4a8719(0x7e)]=_0x5779a6=>{var _0x5518ba=_0x4a8719;try{_0x5779a6&&_0x5779a6['data']&&this['_inBrowser']&&JSON[_0x5518ba(0x124)](_0x5779a6[_0x5518ba(0xba)])[_0x5518ba(0x139)]===_0x5518ba(0xcf)&&this[_0x5518ba(0x71)][_0x5518ba(0xfd)][_0x5518ba(0xcf)]();}catch{}};})[_0x2ce99e(0x108)](_0x34e299=>(this[_0x2ce99e(0x70)]=!0x0,this[_0x2ce99e(0xb5)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x2ce99e(0x119)]=0x0,_0x34e299))[_0x2ce99e(0x11c)](_0x513b46=>(this[_0x2ce99e(0x70)]=!0x1,this[_0x2ce99e(0xb5)]=!0x1,console[_0x2ce99e(0xd5)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x296a72(new Error(_0x2ce99e(0x12d)+(_0x513b46&&_0x513b46[_0x2ce99e(0x125)])))));}));}[_0x40415b(0x102)](_0x41867d){var _0xf2c3e=_0x40415b;this[_0xf2c3e(0x70)]=!0x1,this[_0xf2c3e(0xb5)]=!0x1;try{_0x41867d['onclose']=null,_0x41867d[_0xf2c3e(0xc0)]=null,_0x41867d[_0xf2c3e(0xc5)]=null;}catch{}try{_0x41867d[_0xf2c3e(0xed)]<0x2&&_0x41867d[_0xf2c3e(0x72)]();}catch{}}[_0x40415b(0xb2)](){var _0x39d4ee=_0x40415b;clearTimeout(this[_0x39d4ee(0x103)]),!(this['_connectAttemptCount']>=this[_0x39d4ee(0xc9)])&&(this[_0x39d4ee(0x103)]=setTimeout(()=>{var _0x58ff05=_0x39d4ee;this[_0x58ff05(0x70)]||this[_0x58ff05(0xb5)]||(this[_0x58ff05(0x6b)](),this[_0x58ff05(0x131)]?.[_0x58ff05(0x11c)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x39d4ee(0x103)]['unref']&&this[_0x39d4ee(0x103)]['unref']());}async[_0x40415b(0x77)](_0x188a27){var _0x1e9159=_0x40415b;try{if(!this[_0x1e9159(0x99)])return;this[_0x1e9159(0xdd)]&&this[_0x1e9159(0x6b)](),(await this[_0x1e9159(0x131)])['send'](JSON[_0x1e9159(0x6f)](_0x188a27));}catch(_0x1d15cb){console[_0x1e9159(0xd5)](this[_0x1e9159(0xd4)]+':\\x20'+(_0x1d15cb&&_0x1d15cb[_0x1e9159(0x125)])),this[_0x1e9159(0x99)]=!0x1,this[_0x1e9159(0xb2)]();}}};function b(_0x2ef3cc,_0x4a69c3,_0x1a1173,_0x1a0f67,_0x59c00d,_0x2c1510){var _0x44b4eb=_0x40415b;let _0x27d642=_0x1a1173[_0x44b4eb(0x7b)](',')[_0x44b4eb(0xb8)](_0x4afd24=>{var _0xcdfa54=_0x44b4eb;try{_0x2ef3cc[_0xcdfa54(0x106)]||((_0x59c00d===_0xcdfa54(0x13f)||_0x59c00d===_0xcdfa54(0x14d)||_0x59c00d==='astro')&&(_0x59c00d+=!_0x2ef3cc[_0xcdfa54(0x10b)]?.['versions']?.['node']&&_0x2ef3cc[_0xcdfa54(0x10b)]?.[_0xcdfa54(0x7d)]?.[_0xcdfa54(0x7f)]!==_0xcdfa54(0xc8)?'\\x20browser':'\\x20server'),_0x2ef3cc[_0xcdfa54(0x106)]={'id':+new Date(),'tool':_0x59c00d});let _0x175a68=new X(_0x2ef3cc,_0x4a69c3,_0x4afd24,_0x1a0f67,_0x2c1510);return _0x175a68['send']['bind'](_0x175a68);}catch(_0x41c0e8){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x41c0e8&&_0x41c0e8[_0xcdfa54(0x125)]),()=>{};}});return _0x2aac68=>_0x27d642[_0x44b4eb(0x151)](_0x3ca368=>_0x3ca368(_0x2aac68));}function W(_0x3d3739){var _0x35859c=_0x40415b;let _0x4a9e8a=function(_0xaaa4d2,_0x301da6){return _0x301da6-_0xaaa4d2;},_0x588820;if(_0x3d3739[_0x35859c(0xae)])_0x588820=function(){var _0x5ec935=_0x35859c;return _0x3d3739[_0x5ec935(0xae)]['now']();};else{if(_0x3d3739[_0x35859c(0x10b)]&&_0x3d3739[_0x35859c(0x10b)]['hrtime']&&_0x3d3739['process']?.[_0x35859c(0x7d)]?.[_0x35859c(0x7f)]!==_0x35859c(0xc8))_0x588820=function(){var _0x23387c=_0x35859c;return _0x3d3739[_0x23387c(0x10b)][_0x23387c(0x9a)]();},_0x4a9e8a=function(_0x207667,_0x17106c){return 0x3e8*(_0x17106c[0x0]-_0x207667[0x0])+(_0x17106c[0x1]-_0x207667[0x1])/0xf4240;};else try{let {performance:_0x53da7e}=require(_0x35859c(0xe8));_0x588820=function(){return _0x53da7e['now']();};}catch{_0x588820=function(){return+new Date();};}}return{'elapsed':_0x4a9e8a,'timeStamp':_0x588820,'now':()=>Date[_0x35859c(0x84)]()};}function J(_0x162065,_0x23c759,_0x2d2911){var _0xbad7fb=_0x40415b;if(_0x162065[_0xbad7fb(0x79)]!==void 0x0)return _0x162065['_consoleNinjaAllowedToStart'];let _0x2bf15a=_0x162065[_0xbad7fb(0x10b)]?.[_0xbad7fb(0x138)]?.[_0xbad7fb(0x13d)]||_0x162065['process']?.['env']?.[_0xbad7fb(0x7f)]===_0xbad7fb(0xc8);return _0x2bf15a&&_0x2d2911===_0xbad7fb(0xee)?_0x162065[_0xbad7fb(0x79)]=!0x1:_0x162065[_0xbad7fb(0x79)]=_0x2bf15a||!_0x23c759||_0x162065[_0xbad7fb(0xfd)]?.['hostname']&&_0x23c759[_0xbad7fb(0xcc)](_0x162065[_0xbad7fb(0xfd)][_0xbad7fb(0xd9)]),_0x162065[_0xbad7fb(0x79)];}function Y(_0x59f420,_0x187f00,_0x332c05,_0x42bea6){var _0x5e4536=_0x40415b;_0x59f420=_0x59f420,_0x187f00=_0x187f00,_0x332c05=_0x332c05,_0x42bea6=_0x42bea6;let _0x53b9a3=W(_0x59f420),_0x150150=_0x53b9a3[_0x5e4536(0xc6)],_0x376512=_0x53b9a3[_0x5e4536(0xfa)];class _0x3b9973{constructor(){var _0x5d89da=_0x5e4536;this[_0x5d89da(0xa5)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5d89da(0x132)]=/^(0|[1-9][0-9]*)$/,this[_0x5d89da(0xaa)]=/'([^\\\\']|\\\\')*'/,this[_0x5d89da(0xb3)]=_0x59f420[_0x5d89da(0xb1)],this['_HTMLAllCollection']=_0x59f420[_0x5d89da(0xe1)],this[_0x5d89da(0x152)]=Object[_0x5d89da(0x143)],this['_getOwnPropertyNames']=Object[_0x5d89da(0xea)],this[_0x5d89da(0xfe)]=_0x59f420[_0x5d89da(0xd1)],this[_0x5d89da(0x120)]=RegExp[_0x5d89da(0xd7)]['toString'],this['_dateToString']=Date['prototype']['toString'];}[_0x5e4536(0xfc)](_0x538a98,_0x3a5f1b,_0x3458e4,_0x512db2){var _0x53c68c=_0x5e4536,_0x2ecfec=this,_0x588f86=_0x3458e4[_0x53c68c(0xca)];function _0x2f9ca4(_0x18f361,_0x547fff,_0x57634c){var _0x58d432=_0x53c68c;_0x547fff[_0x58d432(0xdb)]=_0x58d432(0x104),_0x547fff[_0x58d432(0x123)]=_0x18f361['message'],_0x5bdfe9=_0x57634c[_0x58d432(0x13d)]['current'],_0x57634c['node'][_0x58d432(0xf1)]=_0x547fff,_0x2ecfec[_0x58d432(0xf7)](_0x547fff,_0x57634c);}try{_0x3458e4[_0x53c68c(0x149)]++,_0x3458e4['autoExpand']&&_0x3458e4[_0x53c68c(0xf0)][_0x53c68c(0xab)](_0x3a5f1b);var _0x508204,_0x3a69da,_0x2b7da5,_0x26db58,_0x97db10=[],_0x5c5724=[],_0x448e3a,_0x92c91f=this[_0x53c68c(0xde)](_0x3a5f1b),_0x199e4a=_0x92c91f==='array',_0x340375=!0x1,_0x37e860=_0x92c91f===_0x53c68c(0x73),_0x489933=this['_isPrimitiveType'](_0x92c91f),_0x27fc75=this[_0x53c68c(0x129)](_0x92c91f),_0xe8da08=_0x489933||_0x27fc75,_0xe09379={},_0x5d300d=0x0,_0x2b3628=!0x1,_0x5bdfe9,_0xf3f6dc=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3458e4['depth']){if(_0x199e4a){if(_0x3a69da=_0x3a5f1b['length'],_0x3a69da>_0x3458e4['elements']){for(_0x2b7da5=0x0,_0x26db58=_0x3458e4['elements'],_0x508204=_0x2b7da5;_0x508204<_0x26db58;_0x508204++)_0x5c5724['push'](_0x2ecfec[_0x53c68c(0x11d)](_0x97db10,_0x3a5f1b,_0x92c91f,_0x508204,_0x3458e4));_0x538a98['cappedElements']=!0x0;}else{for(_0x2b7da5=0x0,_0x26db58=_0x3a69da,_0x508204=_0x2b7da5;_0x508204<_0x26db58;_0x508204++)_0x5c5724[_0x53c68c(0xab)](_0x2ecfec[_0x53c68c(0x11d)](_0x97db10,_0x3a5f1b,_0x92c91f,_0x508204,_0x3458e4));}_0x3458e4[_0x53c68c(0xbc)]+=_0x5c5724[_0x53c68c(0x136)];}if(!(_0x92c91f===_0x53c68c(0x13c)||_0x92c91f===_0x53c68c(0xb1))&&!_0x489933&&_0x92c91f!==_0x53c68c(0xd8)&&_0x92c91f!==_0x53c68c(0xa4)&&_0x92c91f!==_0x53c68c(0x11e)){var _0x5d75d6=_0x512db2[_0x53c68c(0xbb)]||_0x3458e4[_0x53c68c(0xbb)];if(this[_0x53c68c(0xa9)](_0x3a5f1b)?(_0x508204=0x0,_0x3a5f1b['forEach'](function(_0x580b73){var _0x5897cf=_0x53c68c;if(_0x5d300d++,_0x3458e4[_0x5897cf(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;return;}if(!_0x3458e4['isExpressionToEvaluate']&&_0x3458e4[_0x5897cf(0xca)]&&_0x3458e4[_0x5897cf(0xbc)]>_0x3458e4[_0x5897cf(0x144)]){_0x2b3628=!0x0;return;}_0x5c5724[_0x5897cf(0xab)](_0x2ecfec[_0x5897cf(0x11d)](_0x97db10,_0x3a5f1b,_0x5897cf(0x111),_0x508204++,_0x3458e4,function(_0x4df36d){return function(){return _0x4df36d;};}(_0x580b73)));})):this['_isMap'](_0x3a5f1b)&&_0x3a5f1b['forEach'](function(_0x40f558,_0x49685f){var _0x5bde0f=_0x53c68c;if(_0x5d300d++,_0x3458e4[_0x5bde0f(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;return;}if(!_0x3458e4[_0x5bde0f(0x148)]&&_0x3458e4[_0x5bde0f(0xca)]&&_0x3458e4[_0x5bde0f(0xbc)]>_0x3458e4[_0x5bde0f(0x144)]){_0x2b3628=!0x0;return;}var _0x2a024c=_0x49685f['toString']();_0x2a024c['length']>0x64&&(_0x2a024c=_0x2a024c[_0x5bde0f(0xe5)](0x0,0x64)+_0x5bde0f(0x110)),_0x5c5724['push'](_0x2ecfec['_addProperty'](_0x97db10,_0x3a5f1b,_0x5bde0f(0xd3),_0x2a024c,_0x3458e4,function(_0x3f9861){return function(){return _0x3f9861;};}(_0x40f558)));}),!_0x340375){try{for(_0x448e3a in _0x3a5f1b)if(!(_0x199e4a&&_0xf3f6dc[_0x53c68c(0x80)](_0x448e3a))&&!this[_0x53c68c(0xff)](_0x3a5f1b,_0x448e3a,_0x3458e4)){if(_0x5d300d++,_0x3458e4[_0x53c68c(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;break;}if(!_0x3458e4[_0x53c68c(0x148)]&&_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4['autoExpandPropertyCount']>_0x3458e4[_0x53c68c(0x144)]){_0x2b3628=!0x0;break;}_0x5c5724['push'](_0x2ecfec['_addObjectProperty'](_0x97db10,_0xe09379,_0x3a5f1b,_0x92c91f,_0x448e3a,_0x3458e4));}}catch{}if(_0xe09379[_0x53c68c(0xbe)]=!0x0,_0x37e860&&(_0xe09379[_0x53c68c(0x135)]=!0x0),!_0x2b3628){var _0x259ac2=[][_0x53c68c(0x10c)](this[_0x53c68c(0xb0)](_0x3a5f1b))[_0x53c68c(0x10c)](this['_getOwnPropertySymbols'](_0x3a5f1b));for(_0x508204=0x0,_0x3a69da=_0x259ac2[_0x53c68c(0x136)];_0x508204<_0x3a69da;_0x508204++)if(_0x448e3a=_0x259ac2[_0x508204],!(_0x199e4a&&_0xf3f6dc[_0x53c68c(0x80)](_0x448e3a['toString']()))&&!this[_0x53c68c(0xff)](_0x3a5f1b,_0x448e3a,_0x3458e4)&&!_0xe09379[_0x53c68c(0xa8)+_0x448e3a['toString']()]){if(_0x5d300d++,_0x3458e4[_0x53c68c(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;break;}if(!_0x3458e4[_0x53c68c(0x148)]&&_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4['autoExpandPropertyCount']>_0x3458e4[_0x53c68c(0x144)]){_0x2b3628=!0x0;break;}_0x5c5724[_0x53c68c(0xab)](_0x2ecfec[_0x53c68c(0x109)](_0x97db10,_0xe09379,_0x3a5f1b,_0x92c91f,_0x448e3a,_0x3458e4));}}}}}if(_0x538a98['type']=_0x92c91f,_0xe8da08?(_0x538a98['value']=_0x3a5f1b[_0x53c68c(0x112)](),this[_0x53c68c(0x7c)](_0x92c91f,_0x538a98,_0x3458e4,_0x512db2)):_0x92c91f===_0x53c68c(0xdc)?_0x538a98[_0x53c68c(0x90)]=this[_0x53c68c(0x6c)][_0x53c68c(0xec)](_0x3a5f1b):_0x92c91f===_0x53c68c(0x11e)?_0x538a98[_0x53c68c(0x90)]=_0x3a5f1b['toString']():_0x92c91f==='RegExp'?_0x538a98[_0x53c68c(0x90)]=this['_regExpToString']['call'](_0x3a5f1b):_0x92c91f===_0x53c68c(0xf4)&&this['_Symbol']?_0x538a98[_0x53c68c(0x90)]=this[_0x53c68c(0xfe)][_0x53c68c(0xd7)][_0x53c68c(0x9e)][_0x53c68c(0xec)](_0x3a5f1b):!_0x3458e4['depth']&&!(_0x92c91f===_0x53c68c(0x13c)||_0x92c91f===_0x53c68c(0xb1))&&(delete _0x538a98[_0x53c68c(0x90)],_0x538a98[_0x53c68c(0x122)]=!0x0),_0x2b3628&&(_0x538a98[_0x53c68c(0x115)]=!0x0),_0x5bdfe9=_0x3458e4[_0x53c68c(0x13d)]['current'],_0x3458e4[_0x53c68c(0x13d)][_0x53c68c(0xf1)]=_0x538a98,this['_treeNodePropertiesBeforeFullValue'](_0x538a98,_0x3458e4),_0x5c5724['length']){for(_0x508204=0x0,_0x3a69da=_0x5c5724['length'];_0x508204<_0x3a69da;_0x508204++)_0x5c5724[_0x508204](_0x508204);}_0x97db10['length']&&(_0x538a98[_0x53c68c(0xbb)]=_0x97db10);}catch(_0x14580a){_0x2f9ca4(_0x14580a,_0x538a98,_0x3458e4);}return this[_0x53c68c(0xc7)](_0x3a5f1b,_0x538a98),this[_0x53c68c(0x95)](_0x538a98,_0x3458e4),_0x3458e4[_0x53c68c(0x13d)][_0x53c68c(0xf1)]=_0x5bdfe9,_0x3458e4[_0x53c68c(0x149)]--,_0x3458e4[_0x53c68c(0xca)]=_0x588f86,_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4[_0x53c68c(0xf0)][_0x53c68c(0x126)](),_0x538a98;}['_getOwnPropertySymbols'](_0x25bdbb){var _0x5993f8=_0x5e4536;return Object[_0x5993f8(0xcb)]?Object[_0x5993f8(0xcb)](_0x25bdbb):[];}['_isSet'](_0x46a5f7){var _0x1cd231=_0x5e4536;return!!(_0x46a5f7&&_0x59f420[_0x1cd231(0x111)]&&this['_objectToString'](_0x46a5f7)==='[object\\x20Set]'&&_0x46a5f7[_0x1cd231(0x151)]);}['_blacklistedProperty'](_0x2d4c66,_0x5a9dd5,_0x376420){var _0x5e5392=_0x5e4536;return _0x376420['noFunctions']?typeof _0x2d4c66[_0x5a9dd5]==_0x5e5392(0x73):!0x1;}['_type'](_0x2bbe33){var _0xb850e8=_0x5e4536,_0x1689f3='';return _0x1689f3=typeof _0x2bbe33,_0x1689f3===_0xb850e8(0x92)?this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20Array]'?_0x1689f3='array':this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20Date]'?_0x1689f3=_0xb850e8(0xdc):this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20BigInt]'?_0x1689f3=_0xb850e8(0x11e):_0x2bbe33===null?_0x1689f3=_0xb850e8(0x13c):_0x2bbe33[_0xb850e8(0xef)]&&(_0x1689f3=_0x2bbe33[_0xb850e8(0xef)][_0xb850e8(0xc1)]||_0x1689f3):_0x1689f3===_0xb850e8(0xb1)&&this[_0xb850e8(0x8d)]&&_0x2bbe33 instanceof this[_0xb850e8(0x8d)]&&(_0x1689f3=_0xb850e8(0xe1)),_0x1689f3;}[_0x5e4536(0xc3)](_0x5dd4b0){var _0x1632ad=_0x5e4536;return Object[_0x1632ad(0xd7)]['toString'][_0x1632ad(0xec)](_0x5dd4b0);}['_isPrimitiveType'](_0x1f5a22){var _0x3dee54=_0x5e4536;return _0x1f5a22===_0x3dee54(0x14e)||_0x1f5a22===_0x3dee54(0x137)||_0x1f5a22===_0x3dee54(0x9c);}['_isPrimitiveWrapperType'](_0x4586a0){var _0x40e278=_0x5e4536;return _0x4586a0===_0x40e278(0xe4)||_0x4586a0===_0x40e278(0xd8)||_0x4586a0===_0x40e278(0x10a);}[_0x5e4536(0x11d)](_0xe4027,_0x3cdb7a,_0x54a03a,_0xc38f3c,_0x2d9806,_0x35eae9){var _0x3aac20=this;return function(_0x13ded6){var _0x36766e=_0x20e3,_0x1ce93a=_0x2d9806['node'][_0x36766e(0xf1)],_0x557935=_0x2d9806['node']['index'],_0x38730b=_0x2d9806[_0x36766e(0x13d)]['parent'];_0x2d9806['node'][_0x36766e(0x11f)]=_0x1ce93a,_0x2d9806[_0x36766e(0x13d)]['index']=typeof _0xc38f3c=='number'?_0xc38f3c:_0x13ded6,_0xe4027[_0x36766e(0xab)](_0x3aac20['_property'](_0x3cdb7a,_0x54a03a,_0xc38f3c,_0x2d9806,_0x35eae9)),_0x2d9806['node'][_0x36766e(0x11f)]=_0x38730b,_0x2d9806[_0x36766e(0x13d)]['index']=_0x557935;};}[_0x5e4536(0x109)](_0x206818,_0x2fa3d1,_0x4a693e,_0x110a3a,_0x2a75ed,_0x35a66c,_0x296548){var _0x15ed0a=_0x5e4536,_0x5ce9b2=this;return _0x2fa3d1[_0x15ed0a(0xa8)+_0x2a75ed[_0x15ed0a(0x9e)]()]=!0x0,function(_0x2d064d){var _0x1dfd28=_0x15ed0a,_0x49845f=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xf1)],_0x10138b=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)],_0x95a110=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)];_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)]=_0x49845f,_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)]=_0x2d064d,_0x206818['push'](_0x5ce9b2[_0x1dfd28(0xe9)](_0x4a693e,_0x110a3a,_0x2a75ed,_0x35a66c,_0x296548)),_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)]=_0x95a110,_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)]=_0x10138b;};}[_0x5e4536(0xe9)](_0x704d65,_0x3bfada,_0x20bf0e,_0xeaf73d,_0x1364ce){var _0x32ff7f=_0x5e4536,_0x5b199d=this;_0x1364ce||(_0x1364ce=function(_0x349eaa,_0x321bf8){return _0x349eaa[_0x321bf8];});var _0x17302b=_0x20bf0e[_0x32ff7f(0x9e)](),_0x243f44=_0xeaf73d[_0x32ff7f(0xe3)]||{},_0x4b7b20=_0xeaf73d[_0x32ff7f(0xbd)],_0xa4413a=_0xeaf73d[_0x32ff7f(0x148)];try{var _0x53d4d8=this[_0x32ff7f(0xb7)](_0x704d65),_0x772690=_0x17302b;_0x53d4d8&&_0x772690[0x0]==='\\x27'&&(_0x772690=_0x772690['substr'](0x1,_0x772690['length']-0x2));var _0x11d7ca=_0xeaf73d[_0x32ff7f(0xe3)]=_0x243f44[_0x32ff7f(0xa8)+_0x772690];_0x11d7ca&&(_0xeaf73d['depth']=_0xeaf73d[_0x32ff7f(0xbd)]+0x1),_0xeaf73d[_0x32ff7f(0x148)]=!!_0x11d7ca;var _0x413db1=typeof _0x20bf0e==_0x32ff7f(0xf4),_0x2f2c56={'name':_0x413db1||_0x53d4d8?_0x17302b:this['_propertyName'](_0x17302b)};if(_0x413db1&&(_0x2f2c56[_0x32ff7f(0xf4)]=!0x0),!(_0x3bfada==='array'||_0x3bfada===_0x32ff7f(0xcd))){var _0x16ee46=this[_0x32ff7f(0x152)](_0x704d65,_0x20bf0e);if(_0x16ee46&&(_0x16ee46[_0x32ff7f(0x142)]&&(_0x2f2c56[_0x32ff7f(0x150)]=!0x0),_0x16ee46[_0x32ff7f(0x14f)]&&!_0x11d7ca&&!_0xeaf73d[_0x32ff7f(0xc4)]))return _0x2f2c56[_0x32ff7f(0x13b)]=!0x0,this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d),_0x2f2c56;}var _0x5b10c1;try{_0x5b10c1=_0x1364ce(_0x704d65,_0x20bf0e);}catch(_0x305588){return _0x2f2c56={'name':_0x17302b,'type':'unknown','error':_0x305588[_0x32ff7f(0x125)]},this['_processTreeNodeResult'](_0x2f2c56,_0xeaf73d),_0x2f2c56;}var _0x438b29=this[_0x32ff7f(0xde)](_0x5b10c1),_0x320df6=this[_0x32ff7f(0x14c)](_0x438b29);if(_0x2f2c56[_0x32ff7f(0xdb)]=_0x438b29,_0x320df6)this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d,_0x5b10c1,function(){var _0x3ca8c8=_0x32ff7f;_0x2f2c56[_0x3ca8c8(0x90)]=_0x5b10c1[_0x3ca8c8(0x112)](),!_0x11d7ca&&_0x5b199d[_0x3ca8c8(0x7c)](_0x438b29,_0x2f2c56,_0xeaf73d,{});});else{var _0x24d613=_0xeaf73d[_0x32ff7f(0xca)]&&_0xeaf73d[_0x32ff7f(0x149)]<_0xeaf73d[_0x32ff7f(0x118)]&&_0xeaf73d[_0x32ff7f(0xf0)][_0x32ff7f(0xaf)](_0x5b10c1)<0x0&&_0x438b29!=='function'&&_0xeaf73d[_0x32ff7f(0xbc)]<_0xeaf73d['autoExpandLimit'];_0x24d613||_0xeaf73d['level']<_0x4b7b20||_0x11d7ca?(this[_0x32ff7f(0xfc)](_0x2f2c56,_0x5b10c1,_0xeaf73d,_0x11d7ca||{}),this[_0x32ff7f(0xc7)](_0x5b10c1,_0x2f2c56)):this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d,_0x5b10c1,function(){var _0x1b0798=_0x32ff7f;_0x438b29===_0x1b0798(0x13c)||_0x438b29===_0x1b0798(0xb1)||(delete _0x2f2c56[_0x1b0798(0x90)],_0x2f2c56[_0x1b0798(0x122)]=!0x0);});}return _0x2f2c56;}finally{_0xeaf73d['expressionsToEvaluate']=_0x243f44,_0xeaf73d[_0x32ff7f(0xbd)]=_0x4b7b20,_0xeaf73d['isExpressionToEvaluate']=_0xa4413a;}}[_0x5e4536(0x7c)](_0xb536a2,_0x2db91d,_0x51b067,_0xba2856){var _0x109452=_0x5e4536,_0x5de578=_0xba2856['strLength']||_0x51b067[_0x109452(0xa2)];if((_0xb536a2===_0x109452(0x137)||_0xb536a2===_0x109452(0xd8))&&_0x2db91d[_0x109452(0x90)]){let _0x2c3611=_0x2db91d[_0x109452(0x90)][_0x109452(0x136)];_0x51b067[_0x109452(0x117)]+=_0x2c3611,_0x51b067[_0x109452(0x117)]>_0x51b067[_0x109452(0x8a)]?(_0x2db91d[_0x109452(0x122)]='',delete _0x2db91d['value']):_0x2c3611>_0x5de578&&(_0x2db91d[_0x109452(0x122)]=_0x2db91d[_0x109452(0x90)][_0x109452(0x12b)](0x0,_0x5de578),delete _0x2db91d[_0x109452(0x90)]);}}['_isMap'](_0x51eead){var _0x238a60=_0x5e4536;return!!(_0x51eead&&_0x59f420[_0x238a60(0xd3)]&&this[_0x238a60(0xc3)](_0x51eead)===_0x238a60(0xb9)&&_0x51eead['forEach']);}[_0x5e4536(0xeb)](_0x365158){var _0x4218fa=_0x5e4536;if(_0x365158['match'](/^\\d+$/))return _0x365158;var _0x2bcf77;try{_0x2bcf77=JSON[_0x4218fa(0x6f)](''+_0x365158);}catch{_0x2bcf77='\\x22'+this[_0x4218fa(0xc3)](_0x365158)+'\\x22';}return _0x2bcf77[_0x4218fa(0xa1)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x2bcf77=_0x2bcf77[_0x4218fa(0x12b)](0x1,_0x2bcf77[_0x4218fa(0x136)]-0x2):_0x2bcf77=_0x2bcf77[_0x4218fa(0xf8)](/'/g,'\\x5c\\x27')[_0x4218fa(0xf8)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x2bcf77;}['_processTreeNodeResult'](_0x3baede,_0x5d8960,_0x2f812e,_0x5c898d){var _0x53d175=_0x5e4536;this['_treeNodePropertiesBeforeFullValue'](_0x3baede,_0x5d8960),_0x5c898d&&_0x5c898d(),this[_0x53d175(0xc7)](_0x2f812e,_0x3baede),this['_treeNodePropertiesAfterFullValue'](_0x3baede,_0x5d8960);}['_treeNodePropertiesBeforeFullValue'](_0x2c7139,_0x1ccbe1){var _0x33d856=_0x5e4536;this[_0x33d856(0xe7)](_0x2c7139,_0x1ccbe1),this[_0x33d856(0xce)](_0x2c7139,_0x1ccbe1),this[_0x33d856(0xd6)](_0x2c7139,_0x1ccbe1),this['_setNodePermissions'](_0x2c7139,_0x1ccbe1);}[_0x5e4536(0xe7)](_0xbbbc64,_0x576727){}['_setNodeQueryPath'](_0x2ef019,_0x6bdaa7){}['_setNodeLabel'](_0x4e653b,_0x18ec71){}['_isUndefined'](_0x2304ca){return _0x2304ca===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x12c9a4,_0x1eca4b){var _0x87d4fc=_0x5e4536;this[_0x87d4fc(0x145)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0xf6)](_0x12c9a4),_0x1eca4b['sortProps']&&this['_sortProps'](_0x12c9a4),this[_0x87d4fc(0x9d)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0x133)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0x6d)](_0x12c9a4);}['_additionalMetadata'](_0x46f001,_0x48d304){var _0x312fe7=_0x5e4536;let _0x444c4d;try{_0x59f420['console']&&(_0x444c4d=_0x59f420[_0x312fe7(0xf3)][_0x312fe7(0x123)],_0x59f420[_0x312fe7(0xf3)]['error']=function(){}),_0x46f001&&typeof _0x46f001['length']==_0x312fe7(0x9c)&&(_0x48d304['length']=_0x46f001[_0x312fe7(0x136)]);}catch{}finally{_0x444c4d&&(_0x59f420[_0x312fe7(0xf3)][_0x312fe7(0x123)]=_0x444c4d);}if(_0x48d304[_0x312fe7(0xdb)]===_0x312fe7(0x9c)||_0x48d304[_0x312fe7(0xdb)]==='Number'){if(isNaN(_0x48d304['value']))_0x48d304[_0x312fe7(0x6e)]=!0x0,delete _0x48d304[_0x312fe7(0x90)];else switch(_0x48d304[_0x312fe7(0x90)]){case Number[_0x312fe7(0x76)]:_0x48d304[_0x312fe7(0x107)]=!0x0,delete _0x48d304[_0x312fe7(0x90)];break;case Number['NEGATIVE_INFINITY']:_0x48d304['negativeInfinity']=!0x0,delete _0x48d304[_0x312fe7(0x90)];break;case 0x0:this[_0x312fe7(0xe6)](_0x48d304[_0x312fe7(0x90)])&&(_0x48d304['negativeZero']=!0x0);break;}}else _0x48d304[_0x312fe7(0xdb)]===_0x312fe7(0x73)&&typeof _0x46f001[_0x312fe7(0xc1)]==_0x312fe7(0x137)&&_0x46f001[_0x312fe7(0xc1)]&&_0x48d304['name']&&_0x46f001[_0x312fe7(0xc1)]!==_0x48d304[_0x312fe7(0xc1)]&&(_0x48d304[_0x312fe7(0x134)]=_0x46f001[_0x312fe7(0xc1)]);}[_0x5e4536(0xe6)](_0xea8dd4){return 0x1/_0xea8dd4===Number['NEGATIVE_INFINITY'];}[_0x5e4536(0x13e)](_0x8c64a1){var _0x21f19d=_0x5e4536;!_0x8c64a1[_0x21f19d(0xbb)]||!_0x8c64a1['props']['length']||_0x8c64a1['type']===_0x21f19d(0x127)||_0x8c64a1[_0x21f19d(0xdb)]===_0x21f19d(0xd3)||_0x8c64a1[_0x21f19d(0xdb)]===_0x21f19d(0x111)||_0x8c64a1['props'][_0x21f19d(0x128)](function(_0x5e2f8b,_0x226a5b){var _0x2d5732=_0x21f19d,_0x4da0fc=_0x5e2f8b[_0x2d5732(0xc1)][_0x2d5732(0x8f)](),_0x29afb7=_0x226a5b[_0x2d5732(0xc1)]['toLowerCase']();return _0x4da0fc<_0x29afb7?-0x1:_0x4da0fc>_0x29afb7?0x1:0x0;});}['_addFunctionsNode'](_0x3fbedf,_0x27c343){var _0x8cc86e=_0x5e4536;if(!(_0x27c343[_0x8cc86e(0xf2)]||!_0x3fbedf[_0x8cc86e(0xbb)]||!_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0x136)])){for(var _0x31fc60=[],_0x32f0f6=[],_0x180ca1=0x0,_0x54a446=_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0x136)];_0x180ca1<_0x54a446;_0x180ca1++){var _0x2c3adc=_0x3fbedf[_0x8cc86e(0xbb)][_0x180ca1];_0x2c3adc[_0x8cc86e(0xdb)]==='function'?_0x31fc60[_0x8cc86e(0xab)](_0x2c3adc):_0x32f0f6['push'](_0x2c3adc);}if(!(!_0x32f0f6[_0x8cc86e(0x136)]||_0x31fc60['length']<=0x1)){_0x3fbedf['props']=_0x32f0f6;var _0x526a94={'functionsNode':!0x0,'props':_0x31fc60};this[_0x8cc86e(0xe7)](_0x526a94,_0x27c343),this[_0x8cc86e(0x145)](_0x526a94,_0x27c343),this[_0x8cc86e(0xf6)](_0x526a94),this[_0x8cc86e(0x140)](_0x526a94,_0x27c343),_0x526a94['id']+='\\x20f',_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0xa7)](_0x526a94);}}}['_addLoadNode'](_0x2cd35c,_0x3c2256){}[_0x5e4536(0xf6)](_0x5071a6){}['_isArray'](_0x201500){var _0x59e4d0=_0x5e4536;return Array[_0x59e4d0(0x13a)](_0x201500)||typeof _0x201500==_0x59e4d0(0x92)&&this[_0x59e4d0(0xc3)](_0x201500)===_0x59e4d0(0x11b);}[_0x5e4536(0x140)](_0x3f2c0a,_0x7450b9){}['_cleanNode'](_0x2e62ee){var _0x43cee3=_0x5e4536;delete _0x2e62ee['_hasSymbolPropertyOnItsPath'],delete _0x2e62ee[_0x43cee3(0xb6)],delete _0x2e62ee['_hasMapOnItsPath'];}['_setNodeExpressionPath'](_0x6525a9,_0x40549){}}let _0x5a92e0=new _0x3b9973(),_0x1d487d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x14fde1={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x40b2e7(_0x5130bb,_0x498a31,_0xbe04b7,_0x3de39f,_0x4121eb,_0x551e16){var _0x2a0f0b=_0x5e4536;let _0x16c88b,_0x243190;try{_0x243190=_0x376512(),_0x16c88b=_0x332c05[_0x498a31],!_0x16c88b||_0x243190-_0x16c88b['ts']>0x1f4&&_0x16c88b['count']&&_0x16c88b[_0x2a0f0b(0x121)]/_0x16c88b[_0x2a0f0b(0x96)]<0x64?(_0x332c05[_0x498a31]=_0x16c88b={'count':0x0,'time':0x0,'ts':_0x243190},_0x332c05[_0x2a0f0b(0x147)]={}):_0x243190-_0x332c05[_0x2a0f0b(0x147)]['ts']>0x32&&_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]&&_0x332c05['hits'][_0x2a0f0b(0x121)]/_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]<0x64&&(_0x332c05[_0x2a0f0b(0x147)]={});let _0x2d2538=[],_0x423652=_0x16c88b[_0x2a0f0b(0x113)]||_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x113)]?_0x14fde1:_0x1d487d,_0x53cd5b=_0x5a350e=>{var _0x52ca0f=_0x2a0f0b;let _0x1664a3={};return _0x1664a3['props']=_0x5a350e[_0x52ca0f(0xbb)],_0x1664a3[_0x52ca0f(0xd0)]=_0x5a350e[_0x52ca0f(0xd0)],_0x1664a3[_0x52ca0f(0xa2)]=_0x5a350e[_0x52ca0f(0xa2)],_0x1664a3[_0x52ca0f(0x8a)]=_0x5a350e[_0x52ca0f(0x8a)],_0x1664a3['autoExpandLimit']=_0x5a350e['autoExpandLimit'],_0x1664a3[_0x52ca0f(0x118)]=_0x5a350e[_0x52ca0f(0x118)],_0x1664a3[_0x52ca0f(0xbf)]=!0x1,_0x1664a3[_0x52ca0f(0xf2)]=!_0x187f00,_0x1664a3[_0x52ca0f(0xbd)]=0x1,_0x1664a3[_0x52ca0f(0x149)]=0x0,_0x1664a3[_0x52ca0f(0x9b)]=_0x52ca0f(0x114),_0x1664a3['rootExpression']=_0x52ca0f(0x12f),_0x1664a3['autoExpand']=!0x0,_0x1664a3['autoExpandPreviousObjects']=[],_0x1664a3[_0x52ca0f(0xbc)]=0x0,_0x1664a3[_0x52ca0f(0xc4)]=!0x0,_0x1664a3[_0x52ca0f(0x117)]=0x0,_0x1664a3[_0x52ca0f(0x13d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1664a3;};for(var _0x35cfbf=0x0;_0x35cfbf<_0x4121eb[_0x2a0f0b(0x136)];_0x35cfbf++)_0x2d2538[_0x2a0f0b(0xab)](_0x5a92e0[_0x2a0f0b(0xfc)]({'timeNode':_0x5130bb==='time'||void 0x0},_0x4121eb[_0x35cfbf],_0x53cd5b(_0x423652),{}));if(_0x5130bb===_0x2a0f0b(0x74)){let _0x414286=Error[_0x2a0f0b(0xe2)];try{Error[_0x2a0f0b(0xe2)]=0x1/0x0,_0x2d2538['push'](_0x5a92e0['serialize']({'stackNode':!0x0},new Error()[_0x2a0f0b(0x105)],_0x53cd5b(_0x423652),{'strLength':0x1/0x0}));}finally{Error[_0x2a0f0b(0xe2)]=_0x414286;}}return{'method':_0x2a0f0b(0x82),'version':_0x42bea6,'args':[{'ts':_0xbe04b7,'session':_0x3de39f,'args':_0x2d2538,'id':_0x498a31,'context':_0x551e16}]};}catch(_0x220553){return{'method':_0x2a0f0b(0x82),'version':_0x42bea6,'args':[{'ts':_0xbe04b7,'session':_0x3de39f,'args':[{'type':'unknown','error':_0x220553&&_0x220553[_0x2a0f0b(0x125)]}],'id':_0x498a31,'context':_0x551e16}]};}finally{try{if(_0x16c88b&&_0x243190){let _0x5ba0ff=_0x376512();_0x16c88b['count']++,_0x16c88b[_0x2a0f0b(0x121)]+=_0x150150(_0x243190,_0x5ba0ff),_0x16c88b['ts']=_0x5ba0ff,_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]++,_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x121)]+=_0x150150(_0x243190,_0x5ba0ff),_0x332c05[_0x2a0f0b(0x147)]['ts']=_0x5ba0ff,(_0x16c88b['count']>0x32||_0x16c88b[_0x2a0f0b(0x121)]>0x64)&&(_0x16c88b[_0x2a0f0b(0x113)]=!0x0),(_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]>0x3e8||_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x121)]>0x12c)&&(_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x113)]=!0x0);}}catch{}}}return _0x40b2e7;}((_0x1736d1,_0x121bc3,_0x97b8d5,_0x555de5,_0x29646c,_0x33a8db,_0x27feac,_0x2310b,_0x2e77ad,_0x4c8059)=>{var _0x4cbce5=_0x40415b;if(_0x1736d1['_console_ninja'])return _0x1736d1[_0x4cbce5(0x116)];if(!J(_0x1736d1,_0x2310b,_0x29646c))return _0x1736d1[_0x4cbce5(0x116)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1736d1['_console_ninja'];let _0x151cd0=W(_0x1736d1),_0xef5bf9=_0x151cd0[_0x4cbce5(0xc6)],_0x1688fe=_0x151cd0['timeStamp'],_0x4f14e6=_0x151cd0[_0x4cbce5(0x84)],_0x1baceb={'hits':{},'ts':{}},_0x314e00=Y(_0x1736d1,_0x2e77ad,_0x1baceb,_0x33a8db),_0x24315a=_0x5715b2=>{_0x1baceb['ts'][_0x5715b2]=_0x1688fe();},_0x44ac7c=(_0x505b4b,_0x42578e)=>{var _0x339ca0=_0x4cbce5;let _0xc4bb15=_0x1baceb['ts'][_0x42578e];if(delete _0x1baceb['ts'][_0x42578e],_0xc4bb15){let _0x5a72a8=_0xef5bf9(_0xc4bb15,_0x1688fe());_0x30913b(_0x314e00(_0x339ca0(0x121),_0x505b4b,_0x4f14e6(),_0x42b2e6,[_0x5a72a8],_0x42578e));}},_0xf224fe=_0x1dd9a3=>_0x2f9a6d=>{var _0x33fb3d=_0x4cbce5;try{_0x24315a(_0x2f9a6d),_0x1dd9a3(_0x2f9a6d);}finally{_0x1736d1['console'][_0x33fb3d(0x121)]=_0x1dd9a3;}},_0x37a34e=_0x4d8f53=>_0x62c773=>{var _0x2bb2f8=_0x4cbce5;try{let [_0x2138fe,_0x2665b0]=_0x62c773['split'](':logPointId:');_0x44ac7c(_0x2665b0,_0x2138fe),_0x4d8f53(_0x2138fe);}finally{_0x1736d1[_0x2bb2f8(0xf3)][_0x2bb2f8(0x12c)]=_0x4d8f53;}};_0x1736d1[_0x4cbce5(0x116)]={'consoleLog':(_0x5c1676,_0x1fc79d)=>{var _0xaa988d=_0x4cbce5;_0x1736d1[_0xaa988d(0xf3)]['log']['name']!=='disabledLog'&&_0x30913b(_0x314e00(_0xaa988d(0x82),_0x5c1676,_0x4f14e6(),_0x42b2e6,_0x1fc79d));},'consoleTrace':(_0x19003f,_0xdf40de)=>{var _0x46ecdb=_0x4cbce5;_0x1736d1['console'][_0x46ecdb(0x82)][_0x46ecdb(0xc1)]!==_0x46ecdb(0x78)&&_0x30913b(_0x314e00(_0x46ecdb(0x74),_0x19003f,_0x4f14e6(),_0x42b2e6,_0xdf40de));},'consoleTime':()=>{var _0x32a4f3=_0x4cbce5;_0x1736d1[_0x32a4f3(0xf3)]['time']=_0xf224fe(_0x1736d1['console'][_0x32a4f3(0x121)]);},'consoleTimeEnd':()=>{var _0xcc7eae=_0x4cbce5;_0x1736d1[_0xcc7eae(0xf3)][_0xcc7eae(0x12c)]=_0x37a34e(_0x1736d1[_0xcc7eae(0xf3)][_0xcc7eae(0x12c)]);},'autoLog':(_0x52a395,_0xa2c9f3)=>{var _0x46acf6=_0x4cbce5;_0x30913b(_0x314e00(_0x46acf6(0x82),_0xa2c9f3,_0x4f14e6(),_0x42b2e6,[_0x52a395]));},'autoLogMany':(_0xb1c044,_0x31827c)=>{var _0xe19820=_0x4cbce5;_0x30913b(_0x314e00(_0xe19820(0x82),_0xb1c044,_0x4f14e6(),_0x42b2e6,_0x31827c));},'autoTrace':(_0x2502c8,_0x141673)=>{var _0x13b592=_0x4cbce5;_0x30913b(_0x314e00(_0x13b592(0x74),_0x141673,_0x4f14e6(),_0x42b2e6,[_0x2502c8]));},'autoTraceMany':(_0x3dcf65,_0x54d89d)=>{_0x30913b(_0x314e00('trace',_0x3dcf65,_0x4f14e6(),_0x42b2e6,_0x54d89d));},'autoTime':(_0x2cdd34,_0x5e0404,_0x318624)=>{_0x24315a(_0x318624);},'autoTimeEnd':(_0x12728b,_0x47f3f3,_0x2acb07)=>{_0x44ac7c(_0x47f3f3,_0x2acb07);},'coverage':_0x214d75=>{var _0x47fb9e=_0x4cbce5;_0x30913b({'method':_0x47fb9e(0x146),'version':_0x33a8db,'args':[{'id':_0x214d75}]});}};let _0x30913b=b(_0x1736d1,_0x121bc3,_0x97b8d5,_0x555de5,_0x29646c,_0x4c8059),_0x42b2e6=_0x1736d1[_0x4cbce5(0x106)];return _0x1736d1[_0x4cbce5(0x116)];})(globalThis,_0x40415b(0x91),_0x40415b(0x75),"c:\\\\Users\\\\Administrat\xF6r\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.241\\\\node_modules",'remix',_0x40415b(0x12e),_0x40415b(0x130),_0x40415b(0xac),_0x40415b(0x7a),_0x40415b(0x8e));`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
}

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
  let loaderData = (0, import_react7.useLoaderData)();
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Links, {}, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: " mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
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
var import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
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
  return console.log(...oo_oo2("672826186_0", _action)), _action === "follow" && await followUser(
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
  let { currentUser, user, posts, is_following } = (0, import_react8.useLoaderData)();
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
        currentUser?.id !== user?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
function oo_cm2() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4b60(){var _0x196f76=['current','noFunctions','console','symbol','609173cQQurh','_setNodeExpandableState','_treeNodePropertiesBeforeFullValue','replace','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','timeStamp','getPrototypeOf','serialize','location','_Symbol','_blacklistedProperty','hasOwnProperty','8NMdrok','_disposeWebsocket','_reconnectTimeout','unknown','stack','_console_ninja_session','positiveInfinity','then','_addObjectProperty','Number','process','concat','path','WebSocket','nodeModules','...','Set','valueOf','reduceLimits','root_exp_id','cappedProps','_console_ninja','allStrLength','autoExpandMaxDepth','_connectAttemptCount','pathToFileURL','[object\\x20Array]','catch','_addProperty','bigint','parent','_regExpToString','time','capped','error','parse','message','pop','array','sort','_isPrimitiveWrapperType','557826VquQio','substr','timeEnd','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','1.0.0','root_exp','1698651862890','_ws','_numberRegExp','_addLoadNode','funcName','_p_name','length','string','versions','method','isArray','getter','null','node','_sortProps','next.js','_setNodePermissions','_socket','set','getOwnPropertyDescriptor','autoExpandLimit','_setNodeLabel','coverage','hits','isExpressionToEvaluate','level','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','6292896zxURhf','_isPrimitiveType','remix','boolean','get','setter','forEach','_getOwnPropertyDescriptor','_connectToHostNow','_dateToString','_cleanNode','nan','stringify','_connected','global','close','function','trace','56858','POSITIVE_INFINITY','send','disabledTrace','_consoleNinjaAllowedToStart','','split','_capIfString','env','onmessage','NEXT_RUNTIME','test','url','log','7oZkYbW','now','ws/index.js','145321zbkwEb','8122230HcAhpi','275vwHfCG','_webSocketErrorDocsLink','totalStrLength','getWebSocketClass','_WebSocket','_HTMLAllCollection','','toLowerCase','value','127.0.0.1','object','10023096PEmEDI','dockerizedApp','_treeNodePropertiesAfterFullValue','count','onclose','_inBrowser','_allowedToSend','hrtime','expId','number','_addFunctionsNode','toString','_processTreeNodeResult','ws://','match','strLength','join','Buffer','_keyStrRegExp','host','unshift','_p_','_isSet','_quotedRegExp','push',["localhost","127.0.0.1","example.cypress.io","5CD9244GQ6","192.168.1.80"],'unref','performance','indexOf','_getOwnPropertyNames','undefined','_attemptToReconnectShortly','_undefined','port','_connecting','_hasSetOnItsPath','_isMap','map','[object\\x20Map]','data','props','autoExpandPropertyCount','depth','_p_length','sortProps','onerror','name','defineProperty','_objectToString','resolveGetters','onopen','elapsed','_additionalMetadata','edge','_maxConnectAttemptCount','autoExpand','getOwnPropertySymbols','includes','Error','_setNodeQueryPath','reload','elements','Symbol','index','Map','_sendErrorMessage','warn','_setNodeExpressionPath','prototype','String','hostname','_WebSocketClass','type','date','_allowedToConnectOnSend','_type','1360mgMCzb','51112cLVaCj','HTMLAllCollection','stackTraceLimit','expressionsToEvaluate','Boolean','slice','_isNegativeZero','_setNodeId','perf_hooks','_property','getOwnPropertyNames','_propertyName','call','readyState','nuxt','constructor','autoExpandPreviousObjects'];_0x4b60=function(){return _0x196f76;};return _0x4b60();}var _0x40415b=_0x20e3;(function(_0x5b2c0d,_0x3b4a5e){var _0x11c9ad=_0x20e3,_0x44a48b=_0x5b2c0d();while(!![]){try{var _0x495357=parseInt(_0x11c9ad(0xf5))/0x1+-parseInt(_0x11c9ad(0x101))/0x2*(-parseInt(_0x11c9ad(0x12a))/0x3)+-parseInt(_0x11c9ad(0xe0))/0x4*(-parseInt(_0x11c9ad(0x88))/0x5)+-parseInt(_0x11c9ad(0x14b))/0x6+parseInt(_0x11c9ad(0x83))/0x7*(-parseInt(_0x11c9ad(0x93))/0x8)+-parseInt(_0x11c9ad(0x87))/0x9+parseInt(_0x11c9ad(0xdf))/0xa*(parseInt(_0x11c9ad(0x86))/0xb);if(_0x495357===_0x3b4a5e)break;else _0x44a48b['push'](_0x44a48b['shift']());}catch(_0x412b79){_0x44a48b['push'](_0x44a48b['shift']());}}}(_0x4b60,0x9e43e));function _0x20e3(_0x49e479,_0x4c553c){var _0x4b6028=_0x4b60();return _0x20e3=function(_0x20e32e,_0x505f84){_0x20e32e=_0x20e32e-0x6b;var _0xb84ac8=_0x4b6028[_0x20e32e];return _0xb84ac8;},_0x20e3(_0x49e479,_0x4c553c);}var j=Object['create'],H=Object[_0x40415b(0xc2)],G=Object[_0x40415b(0x143)],ee=Object['getOwnPropertyNames'],te=Object[_0x40415b(0xfb)],ne=Object[_0x40415b(0xd7)][_0x40415b(0x100)],re=(_0x778885,_0x376950,_0x1ec5f8,_0x4e2808)=>{var _0x1ac875=_0x40415b;if(_0x376950&&typeof _0x376950=='object'||typeof _0x376950==_0x1ac875(0x73)){for(let _0x38fcd4 of ee(_0x376950))!ne[_0x1ac875(0xec)](_0x778885,_0x38fcd4)&&_0x38fcd4!==_0x1ec5f8&&H(_0x778885,_0x38fcd4,{'get':()=>_0x376950[_0x38fcd4],'enumerable':!(_0x4e2808=G(_0x376950,_0x38fcd4))||_0x4e2808['enumerable']});}return _0x778885;},x=(_0x31f025,_0x437417,_0x87b55f)=>(_0x87b55f=_0x31f025!=null?j(te(_0x31f025)):{},re(_0x437417||!_0x31f025||!_0x31f025['__es'+'Module']?H(_0x87b55f,'default',{'value':_0x31f025,'enumerable':!0x0}):_0x87b55f,_0x31f025)),X=class{constructor(_0x36440a,_0x5b04fc,_0x7fc8a,_0xf16e27,_0x3c2068){var _0x5063d1=_0x40415b;this[_0x5063d1(0x71)]=_0x36440a,this[_0x5063d1(0xa6)]=_0x5b04fc,this['port']=_0x7fc8a,this[_0x5063d1(0x10f)]=_0xf16e27,this[_0x5063d1(0x94)]=_0x3c2068,this[_0x5063d1(0x99)]=!0x0,this[_0x5063d1(0xdd)]=!0x0,this[_0x5063d1(0x70)]=!0x1,this[_0x5063d1(0xb5)]=!0x1,this['_inNextEdge']=_0x36440a[_0x5063d1(0x10b)]?.[_0x5063d1(0x7d)]?.[_0x5063d1(0x7f)]===_0x5063d1(0xc8),this['_inBrowser']=!this[_0x5063d1(0x71)][_0x5063d1(0x10b)]?.['versions']?.[_0x5063d1(0x13d)]&&!this['_inNextEdge'],this[_0x5063d1(0xda)]=null,this[_0x5063d1(0x119)]=0x0,this[_0x5063d1(0xc9)]=0x14,this[_0x5063d1(0x89)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this['_inBrowser']?_0x5063d1(0x14a):_0x5063d1(0xf9))+this['_webSocketErrorDocsLink'];}async[_0x40415b(0x8b)](){var _0x5189ef=_0x40415b;if(this[_0x5189ef(0xda)])return this[_0x5189ef(0xda)];let _0x1ad85d;if(this[_0x5189ef(0x98)]||this['_inNextEdge'])_0x1ad85d=this[_0x5189ef(0x71)][_0x5189ef(0x10e)];else{if(this[_0x5189ef(0x71)][_0x5189ef(0x10b)]?.[_0x5189ef(0x8c)])_0x1ad85d=this['global'][_0x5189ef(0x10b)]?.[_0x5189ef(0x8c)];else try{let _0x20504a=await import(_0x5189ef(0x10d));_0x1ad85d=(await import((await import(_0x5189ef(0x81)))[_0x5189ef(0x11a)](_0x20504a[_0x5189ef(0xa3)](this[_0x5189ef(0x10f)],_0x5189ef(0x85)))['toString']()))['default'];}catch{try{_0x1ad85d=require(require('path')[_0x5189ef(0xa3)](this[_0x5189ef(0x10f)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x5189ef(0xda)]=_0x1ad85d,_0x1ad85d;}[_0x40415b(0x6b)](){var _0x17ea5b=_0x40415b;this['_connecting']||this['_connected']||this['_connectAttemptCount']>=this[_0x17ea5b(0xc9)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x17ea5b(0x131)]=new Promise((_0x231b5c,_0x296a72)=>{var _0x2ce99e=_0x17ea5b;this[_0x2ce99e(0x8b)]()[_0x2ce99e(0x108)](_0x31e338=>{var _0x4a8719=_0x2ce99e;let _0x4cf85c=new _0x31e338(_0x4a8719(0xa0)+(!this['_inBrowser']&&this[_0x4a8719(0x94)]?'gateway.docker.internal':this[_0x4a8719(0xa6)])+':'+this[_0x4a8719(0xb4)]);_0x4cf85c[_0x4a8719(0xc0)]=()=>{var _0x5aae9b=_0x4a8719;this[_0x5aae9b(0x99)]=!0x1,this['_disposeWebsocket'](_0x4cf85c),this['_attemptToReconnectShortly'](),_0x296a72(new Error('logger\\x20websocket\\x20error'));},_0x4cf85c['onopen']=()=>{var _0x1ed07d=_0x4a8719;this['_inBrowser']||_0x4cf85c[_0x1ed07d(0x141)]&&_0x4cf85c[_0x1ed07d(0x141)][_0x1ed07d(0xad)]&&_0x4cf85c[_0x1ed07d(0x141)][_0x1ed07d(0xad)](),_0x231b5c(_0x4cf85c);},_0x4cf85c[_0x4a8719(0x97)]=()=>{var _0x29ad5a=_0x4a8719;this[_0x29ad5a(0xdd)]=!0x0,this[_0x29ad5a(0x102)](_0x4cf85c),this[_0x29ad5a(0xb2)]();},_0x4cf85c[_0x4a8719(0x7e)]=_0x5779a6=>{var _0x5518ba=_0x4a8719;try{_0x5779a6&&_0x5779a6['data']&&this['_inBrowser']&&JSON[_0x5518ba(0x124)](_0x5779a6[_0x5518ba(0xba)])[_0x5518ba(0x139)]===_0x5518ba(0xcf)&&this[_0x5518ba(0x71)][_0x5518ba(0xfd)][_0x5518ba(0xcf)]();}catch{}};})[_0x2ce99e(0x108)](_0x34e299=>(this[_0x2ce99e(0x70)]=!0x0,this[_0x2ce99e(0xb5)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x2ce99e(0x119)]=0x0,_0x34e299))[_0x2ce99e(0x11c)](_0x513b46=>(this[_0x2ce99e(0x70)]=!0x1,this[_0x2ce99e(0xb5)]=!0x1,console[_0x2ce99e(0xd5)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x296a72(new Error(_0x2ce99e(0x12d)+(_0x513b46&&_0x513b46[_0x2ce99e(0x125)])))));}));}[_0x40415b(0x102)](_0x41867d){var _0xf2c3e=_0x40415b;this[_0xf2c3e(0x70)]=!0x1,this[_0xf2c3e(0xb5)]=!0x1;try{_0x41867d['onclose']=null,_0x41867d[_0xf2c3e(0xc0)]=null,_0x41867d[_0xf2c3e(0xc5)]=null;}catch{}try{_0x41867d[_0xf2c3e(0xed)]<0x2&&_0x41867d[_0xf2c3e(0x72)]();}catch{}}[_0x40415b(0xb2)](){var _0x39d4ee=_0x40415b;clearTimeout(this[_0x39d4ee(0x103)]),!(this['_connectAttemptCount']>=this[_0x39d4ee(0xc9)])&&(this[_0x39d4ee(0x103)]=setTimeout(()=>{var _0x58ff05=_0x39d4ee;this[_0x58ff05(0x70)]||this[_0x58ff05(0xb5)]||(this[_0x58ff05(0x6b)](),this[_0x58ff05(0x131)]?.[_0x58ff05(0x11c)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x39d4ee(0x103)]['unref']&&this[_0x39d4ee(0x103)]['unref']());}async[_0x40415b(0x77)](_0x188a27){var _0x1e9159=_0x40415b;try{if(!this[_0x1e9159(0x99)])return;this[_0x1e9159(0xdd)]&&this[_0x1e9159(0x6b)](),(await this[_0x1e9159(0x131)])['send'](JSON[_0x1e9159(0x6f)](_0x188a27));}catch(_0x1d15cb){console[_0x1e9159(0xd5)](this[_0x1e9159(0xd4)]+':\\x20'+(_0x1d15cb&&_0x1d15cb[_0x1e9159(0x125)])),this[_0x1e9159(0x99)]=!0x1,this[_0x1e9159(0xb2)]();}}};function b(_0x2ef3cc,_0x4a69c3,_0x1a1173,_0x1a0f67,_0x59c00d,_0x2c1510){var _0x44b4eb=_0x40415b;let _0x27d642=_0x1a1173[_0x44b4eb(0x7b)](',')[_0x44b4eb(0xb8)](_0x4afd24=>{var _0xcdfa54=_0x44b4eb;try{_0x2ef3cc[_0xcdfa54(0x106)]||((_0x59c00d===_0xcdfa54(0x13f)||_0x59c00d===_0xcdfa54(0x14d)||_0x59c00d==='astro')&&(_0x59c00d+=!_0x2ef3cc[_0xcdfa54(0x10b)]?.['versions']?.['node']&&_0x2ef3cc[_0xcdfa54(0x10b)]?.[_0xcdfa54(0x7d)]?.[_0xcdfa54(0x7f)]!==_0xcdfa54(0xc8)?'\\x20browser':'\\x20server'),_0x2ef3cc[_0xcdfa54(0x106)]={'id':+new Date(),'tool':_0x59c00d});let _0x175a68=new X(_0x2ef3cc,_0x4a69c3,_0x4afd24,_0x1a0f67,_0x2c1510);return _0x175a68['send']['bind'](_0x175a68);}catch(_0x41c0e8){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x41c0e8&&_0x41c0e8[_0xcdfa54(0x125)]),()=>{};}});return _0x2aac68=>_0x27d642[_0x44b4eb(0x151)](_0x3ca368=>_0x3ca368(_0x2aac68));}function W(_0x3d3739){var _0x35859c=_0x40415b;let _0x4a9e8a=function(_0xaaa4d2,_0x301da6){return _0x301da6-_0xaaa4d2;},_0x588820;if(_0x3d3739[_0x35859c(0xae)])_0x588820=function(){var _0x5ec935=_0x35859c;return _0x3d3739[_0x5ec935(0xae)]['now']();};else{if(_0x3d3739[_0x35859c(0x10b)]&&_0x3d3739[_0x35859c(0x10b)]['hrtime']&&_0x3d3739['process']?.[_0x35859c(0x7d)]?.[_0x35859c(0x7f)]!==_0x35859c(0xc8))_0x588820=function(){var _0x23387c=_0x35859c;return _0x3d3739[_0x23387c(0x10b)][_0x23387c(0x9a)]();},_0x4a9e8a=function(_0x207667,_0x17106c){return 0x3e8*(_0x17106c[0x0]-_0x207667[0x0])+(_0x17106c[0x1]-_0x207667[0x1])/0xf4240;};else try{let {performance:_0x53da7e}=require(_0x35859c(0xe8));_0x588820=function(){return _0x53da7e['now']();};}catch{_0x588820=function(){return+new Date();};}}return{'elapsed':_0x4a9e8a,'timeStamp':_0x588820,'now':()=>Date[_0x35859c(0x84)]()};}function J(_0x162065,_0x23c759,_0x2d2911){var _0xbad7fb=_0x40415b;if(_0x162065[_0xbad7fb(0x79)]!==void 0x0)return _0x162065['_consoleNinjaAllowedToStart'];let _0x2bf15a=_0x162065[_0xbad7fb(0x10b)]?.[_0xbad7fb(0x138)]?.[_0xbad7fb(0x13d)]||_0x162065['process']?.['env']?.[_0xbad7fb(0x7f)]===_0xbad7fb(0xc8);return _0x2bf15a&&_0x2d2911===_0xbad7fb(0xee)?_0x162065[_0xbad7fb(0x79)]=!0x1:_0x162065[_0xbad7fb(0x79)]=_0x2bf15a||!_0x23c759||_0x162065[_0xbad7fb(0xfd)]?.['hostname']&&_0x23c759[_0xbad7fb(0xcc)](_0x162065[_0xbad7fb(0xfd)][_0xbad7fb(0xd9)]),_0x162065[_0xbad7fb(0x79)];}function Y(_0x59f420,_0x187f00,_0x332c05,_0x42bea6){var _0x5e4536=_0x40415b;_0x59f420=_0x59f420,_0x187f00=_0x187f00,_0x332c05=_0x332c05,_0x42bea6=_0x42bea6;let _0x53b9a3=W(_0x59f420),_0x150150=_0x53b9a3[_0x5e4536(0xc6)],_0x376512=_0x53b9a3[_0x5e4536(0xfa)];class _0x3b9973{constructor(){var _0x5d89da=_0x5e4536;this[_0x5d89da(0xa5)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5d89da(0x132)]=/^(0|[1-9][0-9]*)$/,this[_0x5d89da(0xaa)]=/'([^\\\\']|\\\\')*'/,this[_0x5d89da(0xb3)]=_0x59f420[_0x5d89da(0xb1)],this['_HTMLAllCollection']=_0x59f420[_0x5d89da(0xe1)],this[_0x5d89da(0x152)]=Object[_0x5d89da(0x143)],this['_getOwnPropertyNames']=Object[_0x5d89da(0xea)],this[_0x5d89da(0xfe)]=_0x59f420[_0x5d89da(0xd1)],this[_0x5d89da(0x120)]=RegExp[_0x5d89da(0xd7)]['toString'],this['_dateToString']=Date['prototype']['toString'];}[_0x5e4536(0xfc)](_0x538a98,_0x3a5f1b,_0x3458e4,_0x512db2){var _0x53c68c=_0x5e4536,_0x2ecfec=this,_0x588f86=_0x3458e4[_0x53c68c(0xca)];function _0x2f9ca4(_0x18f361,_0x547fff,_0x57634c){var _0x58d432=_0x53c68c;_0x547fff[_0x58d432(0xdb)]=_0x58d432(0x104),_0x547fff[_0x58d432(0x123)]=_0x18f361['message'],_0x5bdfe9=_0x57634c[_0x58d432(0x13d)]['current'],_0x57634c['node'][_0x58d432(0xf1)]=_0x547fff,_0x2ecfec[_0x58d432(0xf7)](_0x547fff,_0x57634c);}try{_0x3458e4[_0x53c68c(0x149)]++,_0x3458e4['autoExpand']&&_0x3458e4[_0x53c68c(0xf0)][_0x53c68c(0xab)](_0x3a5f1b);var _0x508204,_0x3a69da,_0x2b7da5,_0x26db58,_0x97db10=[],_0x5c5724=[],_0x448e3a,_0x92c91f=this[_0x53c68c(0xde)](_0x3a5f1b),_0x199e4a=_0x92c91f==='array',_0x340375=!0x1,_0x37e860=_0x92c91f===_0x53c68c(0x73),_0x489933=this['_isPrimitiveType'](_0x92c91f),_0x27fc75=this[_0x53c68c(0x129)](_0x92c91f),_0xe8da08=_0x489933||_0x27fc75,_0xe09379={},_0x5d300d=0x0,_0x2b3628=!0x1,_0x5bdfe9,_0xf3f6dc=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3458e4['depth']){if(_0x199e4a){if(_0x3a69da=_0x3a5f1b['length'],_0x3a69da>_0x3458e4['elements']){for(_0x2b7da5=0x0,_0x26db58=_0x3458e4['elements'],_0x508204=_0x2b7da5;_0x508204<_0x26db58;_0x508204++)_0x5c5724['push'](_0x2ecfec[_0x53c68c(0x11d)](_0x97db10,_0x3a5f1b,_0x92c91f,_0x508204,_0x3458e4));_0x538a98['cappedElements']=!0x0;}else{for(_0x2b7da5=0x0,_0x26db58=_0x3a69da,_0x508204=_0x2b7da5;_0x508204<_0x26db58;_0x508204++)_0x5c5724[_0x53c68c(0xab)](_0x2ecfec[_0x53c68c(0x11d)](_0x97db10,_0x3a5f1b,_0x92c91f,_0x508204,_0x3458e4));}_0x3458e4[_0x53c68c(0xbc)]+=_0x5c5724[_0x53c68c(0x136)];}if(!(_0x92c91f===_0x53c68c(0x13c)||_0x92c91f===_0x53c68c(0xb1))&&!_0x489933&&_0x92c91f!==_0x53c68c(0xd8)&&_0x92c91f!==_0x53c68c(0xa4)&&_0x92c91f!==_0x53c68c(0x11e)){var _0x5d75d6=_0x512db2[_0x53c68c(0xbb)]||_0x3458e4[_0x53c68c(0xbb)];if(this[_0x53c68c(0xa9)](_0x3a5f1b)?(_0x508204=0x0,_0x3a5f1b['forEach'](function(_0x580b73){var _0x5897cf=_0x53c68c;if(_0x5d300d++,_0x3458e4[_0x5897cf(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;return;}if(!_0x3458e4['isExpressionToEvaluate']&&_0x3458e4[_0x5897cf(0xca)]&&_0x3458e4[_0x5897cf(0xbc)]>_0x3458e4[_0x5897cf(0x144)]){_0x2b3628=!0x0;return;}_0x5c5724[_0x5897cf(0xab)](_0x2ecfec[_0x5897cf(0x11d)](_0x97db10,_0x3a5f1b,_0x5897cf(0x111),_0x508204++,_0x3458e4,function(_0x4df36d){return function(){return _0x4df36d;};}(_0x580b73)));})):this['_isMap'](_0x3a5f1b)&&_0x3a5f1b['forEach'](function(_0x40f558,_0x49685f){var _0x5bde0f=_0x53c68c;if(_0x5d300d++,_0x3458e4[_0x5bde0f(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;return;}if(!_0x3458e4[_0x5bde0f(0x148)]&&_0x3458e4[_0x5bde0f(0xca)]&&_0x3458e4[_0x5bde0f(0xbc)]>_0x3458e4[_0x5bde0f(0x144)]){_0x2b3628=!0x0;return;}var _0x2a024c=_0x49685f['toString']();_0x2a024c['length']>0x64&&(_0x2a024c=_0x2a024c[_0x5bde0f(0xe5)](0x0,0x64)+_0x5bde0f(0x110)),_0x5c5724['push'](_0x2ecfec['_addProperty'](_0x97db10,_0x3a5f1b,_0x5bde0f(0xd3),_0x2a024c,_0x3458e4,function(_0x3f9861){return function(){return _0x3f9861;};}(_0x40f558)));}),!_0x340375){try{for(_0x448e3a in _0x3a5f1b)if(!(_0x199e4a&&_0xf3f6dc[_0x53c68c(0x80)](_0x448e3a))&&!this[_0x53c68c(0xff)](_0x3a5f1b,_0x448e3a,_0x3458e4)){if(_0x5d300d++,_0x3458e4[_0x53c68c(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;break;}if(!_0x3458e4[_0x53c68c(0x148)]&&_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4['autoExpandPropertyCount']>_0x3458e4[_0x53c68c(0x144)]){_0x2b3628=!0x0;break;}_0x5c5724['push'](_0x2ecfec['_addObjectProperty'](_0x97db10,_0xe09379,_0x3a5f1b,_0x92c91f,_0x448e3a,_0x3458e4));}}catch{}if(_0xe09379[_0x53c68c(0xbe)]=!0x0,_0x37e860&&(_0xe09379[_0x53c68c(0x135)]=!0x0),!_0x2b3628){var _0x259ac2=[][_0x53c68c(0x10c)](this[_0x53c68c(0xb0)](_0x3a5f1b))[_0x53c68c(0x10c)](this['_getOwnPropertySymbols'](_0x3a5f1b));for(_0x508204=0x0,_0x3a69da=_0x259ac2[_0x53c68c(0x136)];_0x508204<_0x3a69da;_0x508204++)if(_0x448e3a=_0x259ac2[_0x508204],!(_0x199e4a&&_0xf3f6dc[_0x53c68c(0x80)](_0x448e3a['toString']()))&&!this[_0x53c68c(0xff)](_0x3a5f1b,_0x448e3a,_0x3458e4)&&!_0xe09379[_0x53c68c(0xa8)+_0x448e3a['toString']()]){if(_0x5d300d++,_0x3458e4[_0x53c68c(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;break;}if(!_0x3458e4[_0x53c68c(0x148)]&&_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4['autoExpandPropertyCount']>_0x3458e4[_0x53c68c(0x144)]){_0x2b3628=!0x0;break;}_0x5c5724[_0x53c68c(0xab)](_0x2ecfec[_0x53c68c(0x109)](_0x97db10,_0xe09379,_0x3a5f1b,_0x92c91f,_0x448e3a,_0x3458e4));}}}}}if(_0x538a98['type']=_0x92c91f,_0xe8da08?(_0x538a98['value']=_0x3a5f1b[_0x53c68c(0x112)](),this[_0x53c68c(0x7c)](_0x92c91f,_0x538a98,_0x3458e4,_0x512db2)):_0x92c91f===_0x53c68c(0xdc)?_0x538a98[_0x53c68c(0x90)]=this[_0x53c68c(0x6c)][_0x53c68c(0xec)](_0x3a5f1b):_0x92c91f===_0x53c68c(0x11e)?_0x538a98[_0x53c68c(0x90)]=_0x3a5f1b['toString']():_0x92c91f==='RegExp'?_0x538a98[_0x53c68c(0x90)]=this['_regExpToString']['call'](_0x3a5f1b):_0x92c91f===_0x53c68c(0xf4)&&this['_Symbol']?_0x538a98[_0x53c68c(0x90)]=this[_0x53c68c(0xfe)][_0x53c68c(0xd7)][_0x53c68c(0x9e)][_0x53c68c(0xec)](_0x3a5f1b):!_0x3458e4['depth']&&!(_0x92c91f===_0x53c68c(0x13c)||_0x92c91f===_0x53c68c(0xb1))&&(delete _0x538a98[_0x53c68c(0x90)],_0x538a98[_0x53c68c(0x122)]=!0x0),_0x2b3628&&(_0x538a98[_0x53c68c(0x115)]=!0x0),_0x5bdfe9=_0x3458e4[_0x53c68c(0x13d)]['current'],_0x3458e4[_0x53c68c(0x13d)][_0x53c68c(0xf1)]=_0x538a98,this['_treeNodePropertiesBeforeFullValue'](_0x538a98,_0x3458e4),_0x5c5724['length']){for(_0x508204=0x0,_0x3a69da=_0x5c5724['length'];_0x508204<_0x3a69da;_0x508204++)_0x5c5724[_0x508204](_0x508204);}_0x97db10['length']&&(_0x538a98[_0x53c68c(0xbb)]=_0x97db10);}catch(_0x14580a){_0x2f9ca4(_0x14580a,_0x538a98,_0x3458e4);}return this[_0x53c68c(0xc7)](_0x3a5f1b,_0x538a98),this[_0x53c68c(0x95)](_0x538a98,_0x3458e4),_0x3458e4[_0x53c68c(0x13d)][_0x53c68c(0xf1)]=_0x5bdfe9,_0x3458e4[_0x53c68c(0x149)]--,_0x3458e4[_0x53c68c(0xca)]=_0x588f86,_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4[_0x53c68c(0xf0)][_0x53c68c(0x126)](),_0x538a98;}['_getOwnPropertySymbols'](_0x25bdbb){var _0x5993f8=_0x5e4536;return Object[_0x5993f8(0xcb)]?Object[_0x5993f8(0xcb)](_0x25bdbb):[];}['_isSet'](_0x46a5f7){var _0x1cd231=_0x5e4536;return!!(_0x46a5f7&&_0x59f420[_0x1cd231(0x111)]&&this['_objectToString'](_0x46a5f7)==='[object\\x20Set]'&&_0x46a5f7[_0x1cd231(0x151)]);}['_blacklistedProperty'](_0x2d4c66,_0x5a9dd5,_0x376420){var _0x5e5392=_0x5e4536;return _0x376420['noFunctions']?typeof _0x2d4c66[_0x5a9dd5]==_0x5e5392(0x73):!0x1;}['_type'](_0x2bbe33){var _0xb850e8=_0x5e4536,_0x1689f3='';return _0x1689f3=typeof _0x2bbe33,_0x1689f3===_0xb850e8(0x92)?this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20Array]'?_0x1689f3='array':this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20Date]'?_0x1689f3=_0xb850e8(0xdc):this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20BigInt]'?_0x1689f3=_0xb850e8(0x11e):_0x2bbe33===null?_0x1689f3=_0xb850e8(0x13c):_0x2bbe33[_0xb850e8(0xef)]&&(_0x1689f3=_0x2bbe33[_0xb850e8(0xef)][_0xb850e8(0xc1)]||_0x1689f3):_0x1689f3===_0xb850e8(0xb1)&&this[_0xb850e8(0x8d)]&&_0x2bbe33 instanceof this[_0xb850e8(0x8d)]&&(_0x1689f3=_0xb850e8(0xe1)),_0x1689f3;}[_0x5e4536(0xc3)](_0x5dd4b0){var _0x1632ad=_0x5e4536;return Object[_0x1632ad(0xd7)]['toString'][_0x1632ad(0xec)](_0x5dd4b0);}['_isPrimitiveType'](_0x1f5a22){var _0x3dee54=_0x5e4536;return _0x1f5a22===_0x3dee54(0x14e)||_0x1f5a22===_0x3dee54(0x137)||_0x1f5a22===_0x3dee54(0x9c);}['_isPrimitiveWrapperType'](_0x4586a0){var _0x40e278=_0x5e4536;return _0x4586a0===_0x40e278(0xe4)||_0x4586a0===_0x40e278(0xd8)||_0x4586a0===_0x40e278(0x10a);}[_0x5e4536(0x11d)](_0xe4027,_0x3cdb7a,_0x54a03a,_0xc38f3c,_0x2d9806,_0x35eae9){var _0x3aac20=this;return function(_0x13ded6){var _0x36766e=_0x20e3,_0x1ce93a=_0x2d9806['node'][_0x36766e(0xf1)],_0x557935=_0x2d9806['node']['index'],_0x38730b=_0x2d9806[_0x36766e(0x13d)]['parent'];_0x2d9806['node'][_0x36766e(0x11f)]=_0x1ce93a,_0x2d9806[_0x36766e(0x13d)]['index']=typeof _0xc38f3c=='number'?_0xc38f3c:_0x13ded6,_0xe4027[_0x36766e(0xab)](_0x3aac20['_property'](_0x3cdb7a,_0x54a03a,_0xc38f3c,_0x2d9806,_0x35eae9)),_0x2d9806['node'][_0x36766e(0x11f)]=_0x38730b,_0x2d9806[_0x36766e(0x13d)]['index']=_0x557935;};}[_0x5e4536(0x109)](_0x206818,_0x2fa3d1,_0x4a693e,_0x110a3a,_0x2a75ed,_0x35a66c,_0x296548){var _0x15ed0a=_0x5e4536,_0x5ce9b2=this;return _0x2fa3d1[_0x15ed0a(0xa8)+_0x2a75ed[_0x15ed0a(0x9e)]()]=!0x0,function(_0x2d064d){var _0x1dfd28=_0x15ed0a,_0x49845f=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xf1)],_0x10138b=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)],_0x95a110=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)];_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)]=_0x49845f,_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)]=_0x2d064d,_0x206818['push'](_0x5ce9b2[_0x1dfd28(0xe9)](_0x4a693e,_0x110a3a,_0x2a75ed,_0x35a66c,_0x296548)),_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)]=_0x95a110,_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)]=_0x10138b;};}[_0x5e4536(0xe9)](_0x704d65,_0x3bfada,_0x20bf0e,_0xeaf73d,_0x1364ce){var _0x32ff7f=_0x5e4536,_0x5b199d=this;_0x1364ce||(_0x1364ce=function(_0x349eaa,_0x321bf8){return _0x349eaa[_0x321bf8];});var _0x17302b=_0x20bf0e[_0x32ff7f(0x9e)](),_0x243f44=_0xeaf73d[_0x32ff7f(0xe3)]||{},_0x4b7b20=_0xeaf73d[_0x32ff7f(0xbd)],_0xa4413a=_0xeaf73d[_0x32ff7f(0x148)];try{var _0x53d4d8=this[_0x32ff7f(0xb7)](_0x704d65),_0x772690=_0x17302b;_0x53d4d8&&_0x772690[0x0]==='\\x27'&&(_0x772690=_0x772690['substr'](0x1,_0x772690['length']-0x2));var _0x11d7ca=_0xeaf73d[_0x32ff7f(0xe3)]=_0x243f44[_0x32ff7f(0xa8)+_0x772690];_0x11d7ca&&(_0xeaf73d['depth']=_0xeaf73d[_0x32ff7f(0xbd)]+0x1),_0xeaf73d[_0x32ff7f(0x148)]=!!_0x11d7ca;var _0x413db1=typeof _0x20bf0e==_0x32ff7f(0xf4),_0x2f2c56={'name':_0x413db1||_0x53d4d8?_0x17302b:this['_propertyName'](_0x17302b)};if(_0x413db1&&(_0x2f2c56[_0x32ff7f(0xf4)]=!0x0),!(_0x3bfada==='array'||_0x3bfada===_0x32ff7f(0xcd))){var _0x16ee46=this[_0x32ff7f(0x152)](_0x704d65,_0x20bf0e);if(_0x16ee46&&(_0x16ee46[_0x32ff7f(0x142)]&&(_0x2f2c56[_0x32ff7f(0x150)]=!0x0),_0x16ee46[_0x32ff7f(0x14f)]&&!_0x11d7ca&&!_0xeaf73d[_0x32ff7f(0xc4)]))return _0x2f2c56[_0x32ff7f(0x13b)]=!0x0,this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d),_0x2f2c56;}var _0x5b10c1;try{_0x5b10c1=_0x1364ce(_0x704d65,_0x20bf0e);}catch(_0x305588){return _0x2f2c56={'name':_0x17302b,'type':'unknown','error':_0x305588[_0x32ff7f(0x125)]},this['_processTreeNodeResult'](_0x2f2c56,_0xeaf73d),_0x2f2c56;}var _0x438b29=this[_0x32ff7f(0xde)](_0x5b10c1),_0x320df6=this[_0x32ff7f(0x14c)](_0x438b29);if(_0x2f2c56[_0x32ff7f(0xdb)]=_0x438b29,_0x320df6)this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d,_0x5b10c1,function(){var _0x3ca8c8=_0x32ff7f;_0x2f2c56[_0x3ca8c8(0x90)]=_0x5b10c1[_0x3ca8c8(0x112)](),!_0x11d7ca&&_0x5b199d[_0x3ca8c8(0x7c)](_0x438b29,_0x2f2c56,_0xeaf73d,{});});else{var _0x24d613=_0xeaf73d[_0x32ff7f(0xca)]&&_0xeaf73d[_0x32ff7f(0x149)]<_0xeaf73d[_0x32ff7f(0x118)]&&_0xeaf73d[_0x32ff7f(0xf0)][_0x32ff7f(0xaf)](_0x5b10c1)<0x0&&_0x438b29!=='function'&&_0xeaf73d[_0x32ff7f(0xbc)]<_0xeaf73d['autoExpandLimit'];_0x24d613||_0xeaf73d['level']<_0x4b7b20||_0x11d7ca?(this[_0x32ff7f(0xfc)](_0x2f2c56,_0x5b10c1,_0xeaf73d,_0x11d7ca||{}),this[_0x32ff7f(0xc7)](_0x5b10c1,_0x2f2c56)):this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d,_0x5b10c1,function(){var _0x1b0798=_0x32ff7f;_0x438b29===_0x1b0798(0x13c)||_0x438b29===_0x1b0798(0xb1)||(delete _0x2f2c56[_0x1b0798(0x90)],_0x2f2c56[_0x1b0798(0x122)]=!0x0);});}return _0x2f2c56;}finally{_0xeaf73d['expressionsToEvaluate']=_0x243f44,_0xeaf73d[_0x32ff7f(0xbd)]=_0x4b7b20,_0xeaf73d['isExpressionToEvaluate']=_0xa4413a;}}[_0x5e4536(0x7c)](_0xb536a2,_0x2db91d,_0x51b067,_0xba2856){var _0x109452=_0x5e4536,_0x5de578=_0xba2856['strLength']||_0x51b067[_0x109452(0xa2)];if((_0xb536a2===_0x109452(0x137)||_0xb536a2===_0x109452(0xd8))&&_0x2db91d[_0x109452(0x90)]){let _0x2c3611=_0x2db91d[_0x109452(0x90)][_0x109452(0x136)];_0x51b067[_0x109452(0x117)]+=_0x2c3611,_0x51b067[_0x109452(0x117)]>_0x51b067[_0x109452(0x8a)]?(_0x2db91d[_0x109452(0x122)]='',delete _0x2db91d['value']):_0x2c3611>_0x5de578&&(_0x2db91d[_0x109452(0x122)]=_0x2db91d[_0x109452(0x90)][_0x109452(0x12b)](0x0,_0x5de578),delete _0x2db91d[_0x109452(0x90)]);}}['_isMap'](_0x51eead){var _0x238a60=_0x5e4536;return!!(_0x51eead&&_0x59f420[_0x238a60(0xd3)]&&this[_0x238a60(0xc3)](_0x51eead)===_0x238a60(0xb9)&&_0x51eead['forEach']);}[_0x5e4536(0xeb)](_0x365158){var _0x4218fa=_0x5e4536;if(_0x365158['match'](/^\\d+$/))return _0x365158;var _0x2bcf77;try{_0x2bcf77=JSON[_0x4218fa(0x6f)](''+_0x365158);}catch{_0x2bcf77='\\x22'+this[_0x4218fa(0xc3)](_0x365158)+'\\x22';}return _0x2bcf77[_0x4218fa(0xa1)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x2bcf77=_0x2bcf77[_0x4218fa(0x12b)](0x1,_0x2bcf77[_0x4218fa(0x136)]-0x2):_0x2bcf77=_0x2bcf77[_0x4218fa(0xf8)](/'/g,'\\x5c\\x27')[_0x4218fa(0xf8)](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x2bcf77;}['_processTreeNodeResult'](_0x3baede,_0x5d8960,_0x2f812e,_0x5c898d){var _0x53d175=_0x5e4536;this['_treeNodePropertiesBeforeFullValue'](_0x3baede,_0x5d8960),_0x5c898d&&_0x5c898d(),this[_0x53d175(0xc7)](_0x2f812e,_0x3baede),this['_treeNodePropertiesAfterFullValue'](_0x3baede,_0x5d8960);}['_treeNodePropertiesBeforeFullValue'](_0x2c7139,_0x1ccbe1){var _0x33d856=_0x5e4536;this[_0x33d856(0xe7)](_0x2c7139,_0x1ccbe1),this[_0x33d856(0xce)](_0x2c7139,_0x1ccbe1),this[_0x33d856(0xd6)](_0x2c7139,_0x1ccbe1),this['_setNodePermissions'](_0x2c7139,_0x1ccbe1);}[_0x5e4536(0xe7)](_0xbbbc64,_0x576727){}['_setNodeQueryPath'](_0x2ef019,_0x6bdaa7){}['_setNodeLabel'](_0x4e653b,_0x18ec71){}['_isUndefined'](_0x2304ca){return _0x2304ca===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x12c9a4,_0x1eca4b){var _0x87d4fc=_0x5e4536;this[_0x87d4fc(0x145)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0xf6)](_0x12c9a4),_0x1eca4b['sortProps']&&this['_sortProps'](_0x12c9a4),this[_0x87d4fc(0x9d)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0x133)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0x6d)](_0x12c9a4);}['_additionalMetadata'](_0x46f001,_0x48d304){var _0x312fe7=_0x5e4536;let _0x444c4d;try{_0x59f420['console']&&(_0x444c4d=_0x59f420[_0x312fe7(0xf3)][_0x312fe7(0x123)],_0x59f420[_0x312fe7(0xf3)]['error']=function(){}),_0x46f001&&typeof _0x46f001['length']==_0x312fe7(0x9c)&&(_0x48d304['length']=_0x46f001[_0x312fe7(0x136)]);}catch{}finally{_0x444c4d&&(_0x59f420[_0x312fe7(0xf3)][_0x312fe7(0x123)]=_0x444c4d);}if(_0x48d304[_0x312fe7(0xdb)]===_0x312fe7(0x9c)||_0x48d304[_0x312fe7(0xdb)]==='Number'){if(isNaN(_0x48d304['value']))_0x48d304[_0x312fe7(0x6e)]=!0x0,delete _0x48d304[_0x312fe7(0x90)];else switch(_0x48d304[_0x312fe7(0x90)]){case Number[_0x312fe7(0x76)]:_0x48d304[_0x312fe7(0x107)]=!0x0,delete _0x48d304[_0x312fe7(0x90)];break;case Number['NEGATIVE_INFINITY']:_0x48d304['negativeInfinity']=!0x0,delete _0x48d304[_0x312fe7(0x90)];break;case 0x0:this[_0x312fe7(0xe6)](_0x48d304[_0x312fe7(0x90)])&&(_0x48d304['negativeZero']=!0x0);break;}}else _0x48d304[_0x312fe7(0xdb)]===_0x312fe7(0x73)&&typeof _0x46f001[_0x312fe7(0xc1)]==_0x312fe7(0x137)&&_0x46f001[_0x312fe7(0xc1)]&&_0x48d304['name']&&_0x46f001[_0x312fe7(0xc1)]!==_0x48d304[_0x312fe7(0xc1)]&&(_0x48d304[_0x312fe7(0x134)]=_0x46f001[_0x312fe7(0xc1)]);}[_0x5e4536(0xe6)](_0xea8dd4){return 0x1/_0xea8dd4===Number['NEGATIVE_INFINITY'];}[_0x5e4536(0x13e)](_0x8c64a1){var _0x21f19d=_0x5e4536;!_0x8c64a1[_0x21f19d(0xbb)]||!_0x8c64a1['props']['length']||_0x8c64a1['type']===_0x21f19d(0x127)||_0x8c64a1[_0x21f19d(0xdb)]===_0x21f19d(0xd3)||_0x8c64a1[_0x21f19d(0xdb)]===_0x21f19d(0x111)||_0x8c64a1['props'][_0x21f19d(0x128)](function(_0x5e2f8b,_0x226a5b){var _0x2d5732=_0x21f19d,_0x4da0fc=_0x5e2f8b[_0x2d5732(0xc1)][_0x2d5732(0x8f)](),_0x29afb7=_0x226a5b[_0x2d5732(0xc1)]['toLowerCase']();return _0x4da0fc<_0x29afb7?-0x1:_0x4da0fc>_0x29afb7?0x1:0x0;});}['_addFunctionsNode'](_0x3fbedf,_0x27c343){var _0x8cc86e=_0x5e4536;if(!(_0x27c343[_0x8cc86e(0xf2)]||!_0x3fbedf[_0x8cc86e(0xbb)]||!_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0x136)])){for(var _0x31fc60=[],_0x32f0f6=[],_0x180ca1=0x0,_0x54a446=_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0x136)];_0x180ca1<_0x54a446;_0x180ca1++){var _0x2c3adc=_0x3fbedf[_0x8cc86e(0xbb)][_0x180ca1];_0x2c3adc[_0x8cc86e(0xdb)]==='function'?_0x31fc60[_0x8cc86e(0xab)](_0x2c3adc):_0x32f0f6['push'](_0x2c3adc);}if(!(!_0x32f0f6[_0x8cc86e(0x136)]||_0x31fc60['length']<=0x1)){_0x3fbedf['props']=_0x32f0f6;var _0x526a94={'functionsNode':!0x0,'props':_0x31fc60};this[_0x8cc86e(0xe7)](_0x526a94,_0x27c343),this[_0x8cc86e(0x145)](_0x526a94,_0x27c343),this[_0x8cc86e(0xf6)](_0x526a94),this[_0x8cc86e(0x140)](_0x526a94,_0x27c343),_0x526a94['id']+='\\x20f',_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0xa7)](_0x526a94);}}}['_addLoadNode'](_0x2cd35c,_0x3c2256){}[_0x5e4536(0xf6)](_0x5071a6){}['_isArray'](_0x201500){var _0x59e4d0=_0x5e4536;return Array[_0x59e4d0(0x13a)](_0x201500)||typeof _0x201500==_0x59e4d0(0x92)&&this[_0x59e4d0(0xc3)](_0x201500)===_0x59e4d0(0x11b);}[_0x5e4536(0x140)](_0x3f2c0a,_0x7450b9){}['_cleanNode'](_0x2e62ee){var _0x43cee3=_0x5e4536;delete _0x2e62ee['_hasSymbolPropertyOnItsPath'],delete _0x2e62ee[_0x43cee3(0xb6)],delete _0x2e62ee['_hasMapOnItsPath'];}['_setNodeExpressionPath'](_0x6525a9,_0x40549){}}let _0x5a92e0=new _0x3b9973(),_0x1d487d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x14fde1={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x40b2e7(_0x5130bb,_0x498a31,_0xbe04b7,_0x3de39f,_0x4121eb,_0x551e16){var _0x2a0f0b=_0x5e4536;let _0x16c88b,_0x243190;try{_0x243190=_0x376512(),_0x16c88b=_0x332c05[_0x498a31],!_0x16c88b||_0x243190-_0x16c88b['ts']>0x1f4&&_0x16c88b['count']&&_0x16c88b[_0x2a0f0b(0x121)]/_0x16c88b[_0x2a0f0b(0x96)]<0x64?(_0x332c05[_0x498a31]=_0x16c88b={'count':0x0,'time':0x0,'ts':_0x243190},_0x332c05[_0x2a0f0b(0x147)]={}):_0x243190-_0x332c05[_0x2a0f0b(0x147)]['ts']>0x32&&_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]&&_0x332c05['hits'][_0x2a0f0b(0x121)]/_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]<0x64&&(_0x332c05[_0x2a0f0b(0x147)]={});let _0x2d2538=[],_0x423652=_0x16c88b[_0x2a0f0b(0x113)]||_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x113)]?_0x14fde1:_0x1d487d,_0x53cd5b=_0x5a350e=>{var _0x52ca0f=_0x2a0f0b;let _0x1664a3={};return _0x1664a3['props']=_0x5a350e[_0x52ca0f(0xbb)],_0x1664a3[_0x52ca0f(0xd0)]=_0x5a350e[_0x52ca0f(0xd0)],_0x1664a3[_0x52ca0f(0xa2)]=_0x5a350e[_0x52ca0f(0xa2)],_0x1664a3[_0x52ca0f(0x8a)]=_0x5a350e[_0x52ca0f(0x8a)],_0x1664a3['autoExpandLimit']=_0x5a350e['autoExpandLimit'],_0x1664a3[_0x52ca0f(0x118)]=_0x5a350e[_0x52ca0f(0x118)],_0x1664a3[_0x52ca0f(0xbf)]=!0x1,_0x1664a3[_0x52ca0f(0xf2)]=!_0x187f00,_0x1664a3[_0x52ca0f(0xbd)]=0x1,_0x1664a3[_0x52ca0f(0x149)]=0x0,_0x1664a3[_0x52ca0f(0x9b)]=_0x52ca0f(0x114),_0x1664a3['rootExpression']=_0x52ca0f(0x12f),_0x1664a3['autoExpand']=!0x0,_0x1664a3['autoExpandPreviousObjects']=[],_0x1664a3[_0x52ca0f(0xbc)]=0x0,_0x1664a3[_0x52ca0f(0xc4)]=!0x0,_0x1664a3[_0x52ca0f(0x117)]=0x0,_0x1664a3[_0x52ca0f(0x13d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1664a3;};for(var _0x35cfbf=0x0;_0x35cfbf<_0x4121eb[_0x2a0f0b(0x136)];_0x35cfbf++)_0x2d2538[_0x2a0f0b(0xab)](_0x5a92e0[_0x2a0f0b(0xfc)]({'timeNode':_0x5130bb==='time'||void 0x0},_0x4121eb[_0x35cfbf],_0x53cd5b(_0x423652),{}));if(_0x5130bb===_0x2a0f0b(0x74)){let _0x414286=Error[_0x2a0f0b(0xe2)];try{Error[_0x2a0f0b(0xe2)]=0x1/0x0,_0x2d2538['push'](_0x5a92e0['serialize']({'stackNode':!0x0},new Error()[_0x2a0f0b(0x105)],_0x53cd5b(_0x423652),{'strLength':0x1/0x0}));}finally{Error[_0x2a0f0b(0xe2)]=_0x414286;}}return{'method':_0x2a0f0b(0x82),'version':_0x42bea6,'args':[{'ts':_0xbe04b7,'session':_0x3de39f,'args':_0x2d2538,'id':_0x498a31,'context':_0x551e16}]};}catch(_0x220553){return{'method':_0x2a0f0b(0x82),'version':_0x42bea6,'args':[{'ts':_0xbe04b7,'session':_0x3de39f,'args':[{'type':'unknown','error':_0x220553&&_0x220553[_0x2a0f0b(0x125)]}],'id':_0x498a31,'context':_0x551e16}]};}finally{try{if(_0x16c88b&&_0x243190){let _0x5ba0ff=_0x376512();_0x16c88b['count']++,_0x16c88b[_0x2a0f0b(0x121)]+=_0x150150(_0x243190,_0x5ba0ff),_0x16c88b['ts']=_0x5ba0ff,_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]++,_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x121)]+=_0x150150(_0x243190,_0x5ba0ff),_0x332c05[_0x2a0f0b(0x147)]['ts']=_0x5ba0ff,(_0x16c88b['count']>0x32||_0x16c88b[_0x2a0f0b(0x121)]>0x64)&&(_0x16c88b[_0x2a0f0b(0x113)]=!0x0),(_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]>0x3e8||_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x121)]>0x12c)&&(_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x113)]=!0x0);}}catch{}}}return _0x40b2e7;}((_0x1736d1,_0x121bc3,_0x97b8d5,_0x555de5,_0x29646c,_0x33a8db,_0x27feac,_0x2310b,_0x2e77ad,_0x4c8059)=>{var _0x4cbce5=_0x40415b;if(_0x1736d1['_console_ninja'])return _0x1736d1[_0x4cbce5(0x116)];if(!J(_0x1736d1,_0x2310b,_0x29646c))return _0x1736d1[_0x4cbce5(0x116)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1736d1['_console_ninja'];let _0x151cd0=W(_0x1736d1),_0xef5bf9=_0x151cd0[_0x4cbce5(0xc6)],_0x1688fe=_0x151cd0['timeStamp'],_0x4f14e6=_0x151cd0[_0x4cbce5(0x84)],_0x1baceb={'hits':{},'ts':{}},_0x314e00=Y(_0x1736d1,_0x2e77ad,_0x1baceb,_0x33a8db),_0x24315a=_0x5715b2=>{_0x1baceb['ts'][_0x5715b2]=_0x1688fe();},_0x44ac7c=(_0x505b4b,_0x42578e)=>{var _0x339ca0=_0x4cbce5;let _0xc4bb15=_0x1baceb['ts'][_0x42578e];if(delete _0x1baceb['ts'][_0x42578e],_0xc4bb15){let _0x5a72a8=_0xef5bf9(_0xc4bb15,_0x1688fe());_0x30913b(_0x314e00(_0x339ca0(0x121),_0x505b4b,_0x4f14e6(),_0x42b2e6,[_0x5a72a8],_0x42578e));}},_0xf224fe=_0x1dd9a3=>_0x2f9a6d=>{var _0x33fb3d=_0x4cbce5;try{_0x24315a(_0x2f9a6d),_0x1dd9a3(_0x2f9a6d);}finally{_0x1736d1['console'][_0x33fb3d(0x121)]=_0x1dd9a3;}},_0x37a34e=_0x4d8f53=>_0x62c773=>{var _0x2bb2f8=_0x4cbce5;try{let [_0x2138fe,_0x2665b0]=_0x62c773['split'](':logPointId:');_0x44ac7c(_0x2665b0,_0x2138fe),_0x4d8f53(_0x2138fe);}finally{_0x1736d1[_0x2bb2f8(0xf3)][_0x2bb2f8(0x12c)]=_0x4d8f53;}};_0x1736d1[_0x4cbce5(0x116)]={'consoleLog':(_0x5c1676,_0x1fc79d)=>{var _0xaa988d=_0x4cbce5;_0x1736d1[_0xaa988d(0xf3)]['log']['name']!=='disabledLog'&&_0x30913b(_0x314e00(_0xaa988d(0x82),_0x5c1676,_0x4f14e6(),_0x42b2e6,_0x1fc79d));},'consoleTrace':(_0x19003f,_0xdf40de)=>{var _0x46ecdb=_0x4cbce5;_0x1736d1['console'][_0x46ecdb(0x82)][_0x46ecdb(0xc1)]!==_0x46ecdb(0x78)&&_0x30913b(_0x314e00(_0x46ecdb(0x74),_0x19003f,_0x4f14e6(),_0x42b2e6,_0xdf40de));},'consoleTime':()=>{var _0x32a4f3=_0x4cbce5;_0x1736d1[_0x32a4f3(0xf3)]['time']=_0xf224fe(_0x1736d1['console'][_0x32a4f3(0x121)]);},'consoleTimeEnd':()=>{var _0xcc7eae=_0x4cbce5;_0x1736d1[_0xcc7eae(0xf3)][_0xcc7eae(0x12c)]=_0x37a34e(_0x1736d1[_0xcc7eae(0xf3)][_0xcc7eae(0x12c)]);},'autoLog':(_0x52a395,_0xa2c9f3)=>{var _0x46acf6=_0x4cbce5;_0x30913b(_0x314e00(_0x46acf6(0x82),_0xa2c9f3,_0x4f14e6(),_0x42b2e6,[_0x52a395]));},'autoLogMany':(_0xb1c044,_0x31827c)=>{var _0xe19820=_0x4cbce5;_0x30913b(_0x314e00(_0xe19820(0x82),_0xb1c044,_0x4f14e6(),_0x42b2e6,_0x31827c));},'autoTrace':(_0x2502c8,_0x141673)=>{var _0x13b592=_0x4cbce5;_0x30913b(_0x314e00(_0x13b592(0x74),_0x141673,_0x4f14e6(),_0x42b2e6,[_0x2502c8]));},'autoTraceMany':(_0x3dcf65,_0x54d89d)=>{_0x30913b(_0x314e00('trace',_0x3dcf65,_0x4f14e6(),_0x42b2e6,_0x54d89d));},'autoTime':(_0x2cdd34,_0x5e0404,_0x318624)=>{_0x24315a(_0x318624);},'autoTimeEnd':(_0x12728b,_0x47f3f3,_0x2acb07)=>{_0x44ac7c(_0x47f3f3,_0x2acb07);},'coverage':_0x214d75=>{var _0x47fb9e=_0x4cbce5;_0x30913b({'method':_0x47fb9e(0x146),'version':_0x33a8db,'args':[{'id':_0x214d75}]});}};let _0x30913b=b(_0x1736d1,_0x121bc3,_0x97b8d5,_0x555de5,_0x29646c,_0x4c8059),_0x42b2e6=_0x1736d1[_0x4cbce5(0x106)];return _0x1736d1[_0x4cbce5(0x116)];})(globalThis,_0x40415b(0x91),_0x40415b(0x75),"c:\\\\Users\\\\Administrat\xF6r\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.241\\\\node_modules",'remix',_0x40415b(0x12e),_0x40415b(0x130),_0x40415b(0xac),_0x40415b(0x7a),_0x40415b(0x8e));`);
  } catch {
  }
}
function oo_oo2(i, ...v) {
  try {
    oo_cm2().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  default: () => LogoutRoute
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let response = new Response();
  return await Logout(request, response);
};
function LogoutRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", {}, void 0, !1, {
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
var import_react9 = require("@remix-run/react"), import_node5 = require("@remix-run/node");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
async function action3({ request }) {
  let uploadHandler = (0, import_node5.unstable_createMemoryUploadHandler)(), formData = await (0, import_node5.unstable_parseMultipartFormData)(
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
  let actionData = (0, import_react9.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FormComponent, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InputComponent, { name: "username", placeholder: "username" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InputComponent, { name: "firstname", placeholder: "firstname" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InputComponent, { name: "lastname", placeholder: "lastname" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InputComponent, { name: "email", type: "email", placeholder: "email" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InputComponent, { name: "phone", type: "tel", placeholder: "phone" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { children: "Signup" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    actionData?.user?.confirmation_sent_at && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
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
  loader: () => loader3,
  meta: () => meta
});
var import_node6 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
], loader3 = async ({ request }) => {
  let response = new Response();
  return await getPosts(request, response);
}, action4 = async ({ request }) => {
  let uploadHandler = (0, import_node6.unstable_createMemoryUploadHandler)(), formData = await (0, import_node6.unstable_parseMultipartFormData)(
    request,
    uploadHandler
  ), _action = formData.get("_action"), response = new Response(), currentUser = await getUser(request, response);
  if (_action === "add-post") {
    let image = formData.get("image"), title = formData.get("title"), userId = await getUserId(request, response);
    return await addPost(request, response, image, title, userId), (0, import_node6.json)(null, { headers: response.headers });
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
  let posts = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: " ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react10.Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { name: "image", type: "file", accept: "image/png, image/jpeg" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { name: "title" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { children: "Add Post" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid max-w-lg mx-auto", children: posts && posts.map((post) => post?.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react10.Link, { to: `/user/${post?.user[0].username}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Card, { post }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 19
    }, this) }, post.id, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, {}, void 0, !1, {
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
  loader: () => loader4
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
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
async function loader4({ request }) {
  return new URL(request.url).searchParams.get("email_confirmed") ? { message: "Email Confirmed!" } : null;
}
function Login() {
  let error = (0, import_react11.useActionData)(), email_confirmed = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
    email_confirmed ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: email_confirmed.message }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 26
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {}, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 61
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FormComponent, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(InputComponent, { type: "hidden", value: "email", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(InputComponent, { placeholder: "email", name: "email", type: "email" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: error.toString() }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, {}, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 46
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FormComponent, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(InputComponent, { type: "hidden", value: "google", name: "_action" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { children: "Login w Google" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-WICQOCQ6.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HXSINT44.js", "/build/_shared/chunk-PWKMZAPV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AOLL23JE.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-5FB3334L.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FI6JGTB4.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-3RAQGGOA.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-RXEJJPAU.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-LMLQ6HEK.js", imports: ["/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/user.$username": { id: "routes/user.$username", parentId: "root", path: "user/:username", index: void 0, caseSensitive: void 0, module: "/build/routes/user.$username-3AITQZHN.js", imports: ["/build/_shared/chunk-QZBLPBDB.js", "/build/_shared/chunk-OW4LD7OY.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "4ab25c32", hmr: { runtime: "/build/_shared\\chunk-PWKMZAPV.js", timestamp: 1698652049707 }, url: "/build/manifest-4AB25C32.js" };

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
