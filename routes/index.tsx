/** @jsx h */
import "@atomico/react/proxy";
import { h } from "preact";
import Component from "../islands/Atomico.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <p>
        This is an example of Atomico web components taking advantage of Fresh's
        support for Preact, thanks to the @atomico/react package things
        magically work even with SSR
      </p>
      <Component count={100}></Component>
      <script src="/polyfill.js"></script>
    </div>
  );
}
