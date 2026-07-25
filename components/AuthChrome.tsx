export function AuthBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary-fixed/20 blur-[120px]" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full bg-secondary-fixed/20 blur-[100px]" />
    </div>
  );
}

export function AuthFooter() {
  return (
    <footer className="w-full py-8 border-t border-outline-variant/20 dark:border-inverse-on-surface/10 bg-surface-container-lowest/50 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 max-w-xl text-center md:text-left">
          © 2026 MediBrief Health Intelligence. Medical Informational Notice:
          this app is for informational purposes only and does not
          constitute medical advice.
        </p>
        <div className="flex gap-6">
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 hover:text-primary dark:text-inverse-primary underline transition-all"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-inverse-on-surface/70 hover:text-primary dark:text-inverse-primary underline transition-all"
            href="#"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
