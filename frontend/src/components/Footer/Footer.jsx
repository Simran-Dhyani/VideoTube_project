import Container from "../container/Container";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20">
      <Container>
        <div className="py-12 text-center space-y-3">
          <h2 className="text-xl font-semibold text-white">Learnify</h2>
          <p className="text-sm">
            Learn smarter. Build faster.
          </p>
          <p className="text-xs text-gray-600">
            © 2026 Learnify. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;