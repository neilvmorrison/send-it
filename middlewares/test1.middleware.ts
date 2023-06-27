export default function middleware() {
  console.log("test1");
}

middleware.config = {
  matcher: "/api/hello",
};
