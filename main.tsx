/** @jsx h */

import blog from "https://deno.land/x/blog/blog.tsx"

blog({
  title: "Sammy's Lab",
  description: "Where my thoughts get written",
  avatar: "https://avatars.githubusercontent.com/u/52640020?v=4",
  avatarClass: "rounded-full",
  author: "Samuel Pires",
  links: [
    { title: "Email", url: "mailto:samuel.ferpires@gmail.com" },
    { title: "GitHub", url: "https://github.com/SamuelPires1999" },
    { title: "Twitter", url: "https://twitter.com/Sammoks_FP" },
  ],

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
