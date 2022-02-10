import { LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
// LiveReload 컴포넌트는 변경이 있을때마다 브라우저를 개발 중에 auto-refresh해줘서 유용하다.
// build server가 굉장히 빠르기에, 알아채기도 전에 reload가 종종 발생하게 될 것이다.
