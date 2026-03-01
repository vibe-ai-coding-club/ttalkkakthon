export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-4 text-center space-y-3">
        <h3 className="text-lg font-bold">문의하기</h3>
        <p className="text-sm text-muted-foreground">
          <a
            href="mailto:vibecodingclub.team@gmail.com"
            className="underline hover:text-foreground transition-colors"
          >
            vibecodingclub.team@gmail.com
          </a>
        </p>
        <p className="text-xs text-muted-foreground">&copy; 2026 딸깍톤. All rights reserved.</p>
      </div>
    </footer>
  );
};
