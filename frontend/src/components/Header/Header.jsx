import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../container/Container";
import { Button } from "@/components/ui/button";

function Header() {
  const { status } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
          >
            Learnify
          </Link>

          {/* Nav */}
          <div className="flex items-center gap-3">
            {!status ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>

                <Link to="/signup">
                  <Button className="rounded-xl px-5">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>

                <Button variant="destructive">Logout</Button>
              </>
            )}
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Header;