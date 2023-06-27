export default function middleware() {
  console.log("test2");
}

export const config = {
  matcher: "/api/hello",
};
