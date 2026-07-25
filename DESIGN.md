<!-- Design System -->
<!DOCTYPE html><html class="light" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>MediBrief | Health Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes progress {
            0% { width: 0%; }
            20% { width: 15%; }
            50% { width: 65%; }
            80% { width: 85%; }
            100% { width: 100%; }
        }

        .animate-progress {
            animation: progress 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .floating {
            animation: float 6s ease-in-out infinite;
        }

        .subtle-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-variant": "#d3e4fe",
                        "on-primary-fixed-variant": "#005049",
                        "tertiary-fixed-dim": "#4edea3",
                        "surface-tint": "#006a61",
                        "on-secondary": "#ffffff",
                        "surface-container-highest": "#d3e4fe",
                        "surface-container-high": "#dce9ff",
                        "outline-variant": "#bcc9c6",
                        "inverse-primary": "#6bd8cb",
                        "secondary-container": "#39b8fd",
                        "on-secondary-fixed-variant": "#004c6e",
                        "error-container": "#ffdad6",
                        "secondary-fixed": "#c9e6ff",
                        "on-tertiary-fixed": "#002113",
                        "on-tertiary-container": "#f5fff6",
                        "tertiary-container": "#00855b",
                        "on-secondary-container": "#004666",
                        "on-primary-container": "#f4fffc",
                        "tertiary": "#006947",
                        "surface-container-lowest": "#ffffff",
                        "surface-container": "#e5eeff",
                        "inverse-on-surface": "#eaf1ff",
                        "surface-bright": "#f8f9ff",
                        "on-error": "#ffffff",
                        "tertiary-fixed": "#6ffbbe",
                        "on-surface": "#0b1c30",
                        "outline": "#6d7a77",
                        "on-background": "#0b1c30",
                        "primary-fixed-dim": "#6bd8cb",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#89ceff",
                        "primary-container": "#008378",
                        "inverse-surface": "#213145",
                        "on-tertiary-fixed-variant": "#005236",
                        "secondary": "#006591",
                        "primary-fixed": "#89f5e7",
                        "on-error-container": "#93000a",
                        "on-secondary-fixed": "#001e2f",
                        "on-tertiary": "#ffffff",
                        "background": "#f8f9ff",
                        "surface": "#f8f9ff",
                        "on-surface-variant": "#3d4947",
                        "primary": "#00685f",
                        "on-primary-fixed": "#00201d",
                        "surface-container-low": "#eff4ff",
                        "surface-dim": "#cbdbf5",
                        "on-primary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "section-gap": "2.5rem",
                        "nav-rail-expanded": "240px",
                        "container-margin": "2rem",
                        "nav-rail-width": "80px",
                        "gutter": "1.5rem",
                        "card-padding": "1.5rem"
                    },
                    "fontFamily": {
                        "body-lg": ["Plus Jakarta Sans"],
                        "label-sm": ["Plus Jakarta Sans"],
                        "label-md": ["Plus Jakarta Sans"],
                        "title-lg": ["Plus Jakarta Sans"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "display-lg": ["Plus Jakarta Sans"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "body-md": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "body-lg": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-sm": ["11px", {"lineHeight": "1.2", "fontWeight": "500"}],
                        "label-md": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "title-lg": ["20px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col overflow-hidden">
<!-- Background Ambient Layer -->
<div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
<div class="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px]"></div>
<div class="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-tertiary/5 blur-[150px]"></div>
</div>
<!-- Main Content Container -->
<main class="relative z-10 flex-grow flex flex-col items-center justify-center px-gutter">
<!-- Logo and Branding Section -->
<div class="flex flex-col items-center text-center space-y-6 max-w-lg">
<!-- Logo Icon Container -->
<div class="relative w-24 h-24 flex items-center justify-center bg-surface-container-low rounded-3xl shadow-sm border border-outline-variant/30 floating mb-4">
<span class="material-symbols-outlined text-primary text-[48px]" style="font-variation-settings: 'FILL' 1;">
                    medical_services
                </span>
<!-- Subtle Orbiting Particle -->
<div class="absolute -top-1 -right-1 w-4 h-4 bg-tertiary rounded-full border-2 border-white subtle-pulse"></div>
</div>
<!-- Brand Typography -->
<div class="space-y-2">
<h1 class="font-display-lg text-display-lg text-primary tracking-tight">
                    MediBrief
                </h1>
<p class="font-title-lg text-title-lg text-on-surface-variant font-medium opacity-80">
                    Your Health Intelligence Partner
                </p>
</div>
<!-- Illustration Container -->
<div class="w-full max-w-sm mt-12 mb-16 px-4">
<div class="relative aspect-video rounded-2xl overflow-hidden glass-card shadow-lg border border-white/40">
<img class="w-full h-full object-cover" data-alt="A sophisticated medical-grade 3D digital illustration in a minimalist white and teal palette. The scene shows a stylized human DNA double helix dissolving into glowing geometric data points and health icons. The lighting is soft and ethereal, using high-key studio lighting to create a clean, trustworthy medical SaaS aesthetic. Soft depth of field blurs the background of floating blue-tinted micro-elements, maintaining a calm and professional atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyPyBuqeJBPfy5PCDDyn03R9CZ8gOTmsw1IliBX97h9Opt0NdE-aRlzD9IYUDJJaOiwysn6QynG9u6ximy6iVveKYvP8vF3ZG0eW7FvTV-1-xn8kJK_cgUAD1Ds-mC-H0dOlDodhmWvLSWfKS89tMooi9Zd8I8DZe2SysckntNtL8lPY3RZHphXAtv5hlJa4wNc__ubTRC2XsOj2tALvXauGw8Abwz_Bua2RYxc54IaVFi6osNRCSJZtbeSJ8_f2NjYXT3XdszF-s">
<!-- Glass Overlay for Texture -->
<div class="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
<!-- Footer / Progress Area -->
<div class="w-full max-w-md space-y-4 fixed bottom-16 px-gutter mb-16">
<div class="flex justify-between items-end mb-2">
<span class="font-label-md text-label-md text-primary uppercase tracking-widest">System Check</span>
<span class="font-label-md text-label-md text-on-surface-variant" id="progress-text">100%</span>
</div>
<!-- Progress Bar -->
<div class="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary animate-progress rounded-full"></div>
</div>
<!-- Loading Status Indicators -->
<div class="flex justify-center items-center gap-6 pt-4">
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-tertiary-container"></div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Encrypted</span>
</div>
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Validated</span>
</div>
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-primary-container"></div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Cloud Sync</span>
</div>
</div><div class="flex justify-center pt-8">
    <button class="flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full font-title-lg shadow-lg hover:opacity-90 transition-opacity">
        <span class="">Get Started</span>
        <span class="material-symbols-outlined">chevron_right</span>
    </button>
</div>
</div>
</main>
<!-- Footer Copyright Notice -->
<footer class="relative z-10 w-full py-8 text-center px-gutter">
<p class="font-label-sm text-label-sm text-on-surface-variant max-w-2xl mx-auto opacity-60 leading-relaxed">
            © 2024 MediBrief Health Intelligence. This dashboard is for informational purposes only and does not constitute medical advice. Secured by HealthIntel Encryption.
        </p>
</footer>
<script>
        // Simple Micro-interaction for the progress percentage
        const progressText = document.getElementById('progress-text');
        let count = 0;
        const target = 100;
        const duration = 4000; // Match the CSS animation duration
        const increment = target / (duration / 100);

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                progressText.innerText = Math.floor(count) + '%';
                setTimeout(updateCounter, 100);
            } else {
                progressText.innerText = '100%';
            }
        };

        // Start counter
        updateCounter();

        // Optional: Interaction to skip or navigate
        document.body.addEventListener('click', () => {
            // This would normally trigger a redirect or state change
            console.log('User interacting with splash screen');
        });

        // Initialize Material Symbols weight logic
        window.addEventListener('DOMContentLoaded', () => {
            const symbols = document.querySelectorAll('.material-symbols-outlined');
            symbols.forEach(symbol => {
                // Example check for specific weight requirements if needed beyond CSS
            });
        });
    </script>


</body></html>

<!-- A clean, minimal, premium medical illustration for a splash screen. Abstract geometric shapes representing health and intelligence, soft teal and blue gradients, high-end SaaS aesthetic, clinical and trustworthy feel. White background. -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>MediBrief | Sign In</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Google Fonts: Plus Jakarta Sans -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
      vertical-align: middle;
    }
    
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .glass-effect {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }

    .shimmer-bg {
      background: linear-gradient(
        -45deg, 
        #f8f9ff 0%, 
        #eff4ff 50%, 
        #f8f9ff 100%
      );
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .auth-card-shadow {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    }

    /* Custom Input Focus */
    .input-field:focus {
      outline: none;
      border-color: #006a61;
      box-shadow: 0 0 0 2px rgba(0, 106, 97, 0.1);
    }
  </style>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
                  "surface-variant": "#d3e4fe",
                  "on-primary-fixed-variant": "#005049",
                  "tertiary-fixed-dim": "#4edea3",
                  "surface-tint": "#006a61",
                  "on-secondary": "#ffffff",
                  "surface-container-highest": "#d3e4fe",
                  "surface-container-high": "#dce9ff",
                  "outline-variant": "#bcc9c6",
                  "inverse-primary": "#6bd8cb",
                  "secondary-container": "#39b8fd",
                  "on-secondary-fixed-variant": "#004c6e",
                  "error-container": "#ffdad6",
                  "secondary-fixed": "#c9e6ff",
                  "on-tertiary-fixed": "#002113",
                  "on-tertiary-container": "#f5fff6",
                  "tertiary-container": "#00855b",
                  "on-secondary-container": "#004666",
                  "on-primary-container": "#f4fffc",
                  "tertiary": "#006947",
                  "surface-container-lowest": "#ffffff",
                  "surface-container": "#e5eeff",
                  "inverse-on-surface": "#eaf1ff",
                  "surface-bright": "#f8f9ff",
                  "on-error": "#ffffff",
                  "tertiary-fixed": "#6ffbbe",
                  "on-surface": "#0b1c30",
                  "outline": "#6d7a77",
                  "on-background": "#0b1c30",
                  "primary-fixed-dim": "#6bd8cb",
                  "error": "#ba1a1a",
                  "secondary-fixed-dim": "#89ceff",
                  "primary-container": "#008378",
                  "inverse-surface": "#213145",
                  "on-tertiary-fixed-variant": "#005236",
                  "secondary": "#006591",
                  "primary-fixed": "#89f5e7",
                  "on-error-container": "#93000a",
                  "on-secondary-fixed": "#001e2f",
                  "on-tertiary": "#ffffff",
                  "background": "#f8f9ff",
                  "surface": "#f8f9ff",
                  "on-surface-variant": "#3d4947",
                  "primary": "#00685f",
                  "on-primary-fixed": "#00201d",
                  "surface-container-low": "#eff4ff",
                  "surface-dim": "#cbdbf5",
                  "on-primary": "#ffffff"
          },
          "borderRadius": {
                  "DEFAULT": "0.25rem",
                  "lg": "0.5rem",
                  "xl": "0.75rem",
                  "full": "9999px"
          },
          "spacing": {
                  "section-gap": "2.5rem",
                  "nav-rail-expanded": "240px",
                  "container-margin": "2rem",
                  "nav-rail-width": "80px",
                  "gutter": "1.5rem",
                  "card-padding": "1.5rem"
          },
          "fontFamily": {
                  "body-lg": ["Plus Jakarta Sans"],
                  "label-sm": ["Plus Jakarta Sans"],
                  "label-md": ["Plus Jakarta Sans"],
                  "title-lg": ["Plus Jakarta Sans"],
                  "headline-lg": ["Plus Jakarta Sans"],
                  "display-lg": ["Plus Jakarta Sans"],
                  "headline-lg-mobile": ["Plus Jakarta Sans"],
                  "body-md": ["Plus Jakarta Sans"],
                  "headline-md": ["Plus Jakarta Sans"]
          },
          "fontSize": {
                  "body-lg": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                  "label-sm": ["11px", {"lineHeight": "1.2", "fontWeight": "500"}],
                  "label-md": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                  "title-lg": ["20px", {"lineHeight": "1.4", "fontWeight": "600"}],
                  "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                  "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                  "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
                  "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                  "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}]
          }
        },
      },
    }
  </script>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col shimmer-bg">
<!-- Background Decorative Element -->
<div class="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
<div class="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary-fixed/20 blur-[120px]"></div>
<div class="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full bg-secondary-fixed/20 blur-[100px]"></div>
</div>
<!-- Main Content Container -->
<main class="flex-grow flex items-center justify-center px-4 py-12 relative z-10">
<div class="w-full max-w-[440px] transition-all duration-500 ease-in-out">
<!-- Logo/Brand Header -->
<div class="text-center mb-8">
<div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary shadow-lg mb-4 text-white">
<span class="material-symbols-outlined text-[32px]">health_and_safety</span>
</div>
<h1 class="font-headline-lg text-headline-lg text-on-surface">MediBrief</h1>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">Health Intelligence System</p>
</div>
<!-- Auth Card -->
<div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 md:p-10 auth-card-shadow glass-effect">
<div class="mb-8">
<h2 class="font-title-lg text-title-lg text-on-surface">Welcome back</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Please enter your clinical credentials to access your health intel dashboard.</p>
</div>
<form action="#" class="space-y-6" method="POST">
<!-- Email Field -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface uppercase tracking-wider block" for="email">Email Address</label>
<div class="relative">
<span class="absolute inset-y-0 left-0 pl-4 flex items-center text-outline pointer-events-none">
<span class="material-symbols-outlined text-[20px]">mail</span>
</span>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-outline/50" id="email" name="email" placeholder="dr.miller@medibrief.io" required="" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<div class="flex justify-between items-center">
<label class="font-label-md text-label-md text-on-surface uppercase tracking-wider block" for="password">Password</label>
<a class="font-label-md text-label-md text-primary hover:underline transition-all" href="#">Forgot Password?</a>
</div>
<div class="relative">
<span class="absolute inset-y-0 left-0 pl-4 flex items-center text-outline pointer-events-none">
<span class="material-symbols-outlined text-[20px]">lock</span>
</span>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3.5 pl-12 pr-12 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-outline/50" id="password" name="password" placeholder="••••••••••••" required="" type="password"/>
<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<!-- Remember Me -->
<div class="flex items-center">
<input class="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary transition-all" id="remember" name="remember" type="checkbox"/>
<label class="ml-3 font-body-md text-body-md text-on-surface-variant cursor-pointer" for="remember">
              Remember this device for 30 days
            </label>
</div>
<!-- Login Button -->
<button class="w-full bg-primary text-white py-4 px-6 rounded-xl font-title-lg text-title-lg hover:bg-surface-tint active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2" type="submit">
            Login to Dashboard
            <span class="material-symbols-outlined">arrow_forward</span>
</button>
</form>
<!-- SSO Divider -->
<div class="my-8 flex items-center gap-4">
<div class="h-[1px] flex-grow bg-outline-variant/30"></div>
<span class="font-label-sm text-label-sm text-outline uppercase tracking-widest">Authorized Access Only</span>
<div class="h-[1px] flex-grow bg-outline-variant/30"></div>
</div>
<!-- Security Notice -->
<div class="flex items-start gap-3 p-4 bg-primary-container/10 rounded-2xl border border-primary-container/20">
<span class="material-symbols-outlined text-primary text-[20px]">verified_user</span>
<p class="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
            This session is protected by end-to-end clinical grade encryption. Unauthorized access is strictly prohibited under medical privacy laws.
          </p>
</div>
</div>
<!-- Footer Action -->
<div class="text-center mt-8">
<p class="font-body-md text-body-md text-on-surface-variant">
          New to the MediBrief network? 
          <a class="font-bold text-primary hover:underline ml-1" href="#">Create Account</a>
</p>
</div>
</div>
</main>
<!-- Global Footer -->
<footer class="w-full py-8 border-t border-outline-variant/20 bg-surface-container-lowest/50 backdrop-blur-md z-10">
<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-label-sm text-label-sm text-on-surface-variant max-w-xl text-center md:text-left">
        © 2024 MediBrief Health Intelligence. Medical Informational Notice: This dashboard is for informational purposes only and does not constitute medical advice.
      </p>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Support</a>
</div>
</div>
</footer>
<!-- Micro-interactions Script -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
      const inputs = document.querySelectorAll('.input-field');
      
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          input.parentElement.parentElement.classList.add('scale-[1.01]');
        });
        input.addEventListener('blur', () => {
          input.parentElement.parentElement.classList.remove('scale-[1.01]');
        });
      });

      // Simple password toggle logic
      const togglePassword = document.querySelector('button[type="button"]');
      const passwordInput = document.querySelector('#password');
      
      if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          togglePassword.querySelector('span').textContent = type === 'password' ? 'visibility' : 'visibility_off';
        });
      }
    });
  </script>
</body></html>

<!-- Splash Screen -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sign Up | MediBrief Health Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-variant": "#d3e4fe",
                        "on-primary-fixed-variant": "#005049",
                        "tertiary-fixed-dim": "#4edea3",
                        "surface-tint": "#006a61",
                        "on-secondary": "#ffffff",
                        "surface-container-highest": "#d3e4fe",
                        "surface-container-high": "#dce9ff",
                        "outline-variant": "#bcc9c6",
                        "inverse-primary": "#6bd8cb",
                        "secondary-container": "#39b8fd",
                        "on-secondary-fixed-variant": "#004c6e",
                        "error-container": "#ffdad6",
                        "secondary-fixed": "#c9e6ff",
                        "on-tertiary-fixed": "#002113",
                        "on-tertiary-container": "#f5fff6",
                        "tertiary-container": "#00855b",
                        "on-secondary-container": "#004666",
                        "on-primary-container": "#f4fffc",
                        "tertiary": "#006947",
                        "surface-container-lowest": "#ffffff",
                        "surface-container": "#e5eeff",
                        "inverse-on-surface": "#eaf1ff",
                        "surface-bright": "#f8f9ff",
                        "on-error": "#ffffff",
                        "tertiary-fixed": "#6ffbbe",
                        "on-surface": "#0b1c30",
                        "outline": "#6d7a77",
                        "on-background": "#0b1c30",
                        "primary-fixed-dim": "#6bd8cb",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#89ceff",
                        "primary-container": "#008378",
                        "inverse-surface": "#213145",
                        "on-tertiary-fixed-variant": "#005236",
                        "secondary": "#006591",
                        "primary-fixed": "#89f5e7",
                        "on-error-container": "#93000a",
                        "on-secondary-fixed": "#001e2f",
                        "on-tertiary": "#ffffff",
                        "background": "#f8f9ff",
                        "surface": "#f8f9ff",
                        "on-surface-variant": "#3d4947",
                        "primary": "#00685f",
                        "on-primary-fixed": "#00201d",
                        "surface-container-low": "#eff4ff",
                        "surface-dim": "#cbdbf5",
                        "on-primary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "section-gap": "2.5rem",
                        "nav-rail-expanded": "240px",
                        "container-margin": "2rem",
                        "nav-rail-width": "80px",
                        "gutter": "1.5rem",
                        "card-padding": "1.5rem"
                    },
                    "fontFamily": {
                        "body-lg": ["Plus Jakarta Sans"],
                        "label-sm": ["Plus Jakarta Sans"],
                        "label-md": ["Plus Jakarta Sans"],
                        "title-lg": ["Plus Jakarta Sans"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "display-lg": ["Plus Jakarta Sans"],
                        "headline-lg-mobile": ["Plus Jakarta Sans"],
                        "body-md": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "body-lg": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-sm": ["11px", {"lineHeight": "1.2", "fontWeight": "500"}],
                        "label-md": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "title-lg": ["20px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #f8f9ff;
            color: #0b1c30;
        }
        .glass-header {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(188, 201, 198, 0.3);
        }
        .auth-card {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(188, 201, 198, 0.2);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">
<!-- Atmospheric Background Shader -->

<!-- Header Section (Minimalist Top Bar) -->
<nav class="fixed top-0 left-0 w-full px-gutter py-6 flex justify-between items-center z-50">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container shadow-sm">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">medical_services</span>
</div>
<span class="font-headline-md text-headline-md font-bold text-primary tracking-tight">MediBrief</span>
</div>
<div class="hidden md:flex items-center gap-6">
<span class="font-label-md text-label-md text-on-surface-variant">Intelligent Health Companion</span>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="w-full max-w-lg px-4 py-24 md:py-32 flex flex-col items-center">
<!-- Auth Card Container -->
<div class="auth-card bg-surface-container-lowest rounded-3xl w-full p-card-padding md:p-12 transition-all duration-300">
<div class="text-center mb-10">
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-2">Create Account</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Join the next generation of clinical intelligence.</p>
</div>
<form class="space-y-6" onsubmit="return false;">
<!-- Full Name -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant block px-1" for="fullname">Full Name</label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined text-body-lg">person</span>
</div>
<input class="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface" id="fullname" name="fullname" placeholder="Dr. Julian Sterling" type="text"/>
</div>
</div>
<!-- Email -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant block px-1" for="email">Email Address</label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined text-body-lg">mail</span>
</div>
<input class="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface" id="email" name="email" placeholder="julian@medical-intel.com" type="email"/>
</div>
</div>
<!-- Password Row -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Password -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant block px-1" for="password">Password</label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined text-body-lg">lock</span>
</div>
<input class="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface" id="password" name="password" placeholder="••••••••" type="password"/>
</div>
</div>
<!-- Confirm Password -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant block px-1" for="confirm_password">Confirm</label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined text-body-lg">verified_user</span>
</div>
<input class="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl py-3.5 pl-12 pr-4 font-body-md text-body-md transition-all outline-none text-on-surface" id="confirm_password" name="confirm_password" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
<!-- Privacy & HIPAA Notice -->
<div class="bg-primary-container/5 rounded-2xl p-4 flex gap-4 items-start border border-primary/10">
<span class="material-symbols-outlined text-primary text-[20px] mt-0.5">shield_lock</span>
<p class="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                        MediBrief ensures full <span class="font-bold text-primary">HIPAA compliance</span>. Your medical data is encrypted with AES-256 standard and stored on secure, sovereign infrastructure.
                    </p>
</div>
<!-- CTA Button -->
<button class="w-full bg-primary hover:bg-primary-container text-on-primary font-title-lg text-title-lg py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                    Create Account
                    <span class="material-symbols-outlined text-title-lg">arrow_forward</span>
</button>
</form>
<div class="mt-8 pt-8 border-t border-outline-variant flex flex-col items-center gap-4">
<p class="font-body-md text-body-md text-on-surface-variant">
                    Already have a MediBrief account?
                    <a class="text-primary font-bold hover:underline ml-1" href="#">Sign In</a>
</p>
</div>
</div>
<!-- Secondary Decoration / Trust Seals -->
<div class="mt-12 flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div class="flex flex-col items-center">
<span class="material-symbols-outlined text-display-lg text-on-surface-variant">security</span>
<span class="font-label-sm text-label-sm uppercase mt-2">End-to-End</span>
</div>
<div class="flex flex-col items-center">
<span class="material-symbols-outlined text-display-lg text-on-surface-variant">verified</span>
<span class="font-label-sm text-label-sm uppercase mt-2">Certified</span>
</div>
<div class="flex flex-col items-center">
<span class="material-symbols-outlined text-display-lg text-on-surface-variant">cloud_done</span>
<span class="font-label-sm text-label-sm uppercase mt-2">Zero Trust</span>
</div>
</div>
</main>
<!-- Footer -->
<footer class="mt-auto w-full py-8 bg-surface-container-lowest border-t border-outline-variant">
<div class="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left max-w-md">
                © 2024 MediBrief Health Intelligence. Medical Informational Notice: This dashboard is for informational purposes only and does not constitute medical advice.
            </p>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Support</a>
</div>
</div>
</footer>
<!-- Micro-interactions Script -->
<script>
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.parentElement.classList.add('scale-[1.01]');
            });
            input.addEventListener('blur', () => {
                input.parentElement.parentElement.classList.remove('scale-[1.01]');
            });
        });
    </script>
</body></html>

<!-- Sign In -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>MediBrief | Share Health Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-container": "#f4fffc",
                    "primary-fixed": "#89f5e7",
                    "on-primary-fixed": "#00201d",
                    "surface-dim": "#cbdbf5",
                    "error-container": "#ffdad6",
                    "inverse-on-surface": "#eaf1ff",
                    "surface-tint": "#006a61",
                    "inverse-primary": "#6bd8cb",
                    "secondary-fixed-dim": "#89ceff",
                    "on-tertiary-fixed-variant": "#005236",
                    "secondary-fixed": "#c9e6ff",
                    "on-tertiary-container": "#f5fff6",
                    "on-secondary": "#ffffff",
                    "surface-container": "#e5eeff",
                    "background": "#f8f9ff",
                    "on-background": "#0b1c30",
                    "primary-fixed-dim": "#6bd8cb",
                    "on-surface": "#0b1c30",
                    "on-secondary-container": "#004666",
                    "tertiary-container": "#00855b",
                    "on-tertiary-fixed": "#002113",
                    "surface-container-low": "#eff4ff",
                    "on-secondary-fixed": "#001e2f",
                    "on-tertiary": "#ffffff",
                    "tertiary": "#006947",
                    "secondary-container": "#39b8fd",
                    "on-primary-fixed-variant": "#005049",
                    "surface-container-lowest": "#ffffff",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-error": "#ffffff",
                    "outline-variant": "#bcc9c6",
                    "on-error-container": "#93000a",
                    "primary": "#00685f",
                    "surface": "#f8f9ff",
                    "surface-bright": "#f8f9ff",
                    "primary-container": "#008378",
                    "on-secondary-fixed-variant": "#004c6e",
                    "secondary": "#006591",
                    "outline": "#6d7a77",
                    "surface-container-highest": "#d3e4fe",
                    "tertiary-fixed": "#6ffbbe",
                    "tertiary-fixed-dim": "#4edea3",
                    "on-surface-variant": "#3d4947",
                    "surface-container-high": "#dce9ff",
                    "surface-variant": "#d3e4fe",
                    "inverse-surface": "#213145"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px",
                    "3xl": "1.5rem"
            },
            "spacing": {
                    "gutter": "1.5rem",
                    "nav-rail-width": "80px",
                    "card-padding": "1.5rem",
                    "nav-rail-expanded": "240px",
                    "container-margin": "2rem",
                    "section-gap": "2.5rem"
            },
            "fontFamily": {
                    "body-md": ["Plus Jakarta Sans"],
                    "body-lg": ["Plus Jakarta Sans"],
                    "label-sm": ["Plus Jakarta Sans"],
                    "display-lg": ["Plus Jakarta Sans"],
                    "title-lg": ["Plus Jakarta Sans"],
                    "label-md": ["Plus Jakarta Sans"],
                    "headline-md": ["Plus Jakarta Sans"]
            }
          }
        }
      }
    </script>
<style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .modal-overlay {
            background: rgba(11, 28, 48, 0.4);
            backdrop-filter: blur(8px);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface overflow-hidden">
<!-- DASHBOARD BACKGROUND SIMULATION -->
<div class="flex h-screen w-full">
<!-- Sidebar Rail (from JSON) -->
<aside class="w-[80px] bg-surface shadow-[4px_0_20px_rgba(0,0,0,0.05)] flex flex-col items-center py-6 border-r border-outline-variant/30">
<div class="mb-8">
<span class="material-symbols-outlined text-primary text-3xl">medical_services</span>
</div>
<nav class="flex flex-col gap-6">
<div class="p-3 bg-primary-container/10 border-l-4 border-primary text-primary">
<span class="material-symbols-outlined">dashboard</span>
</div>
<div class="p-3 text-on-surface-variant opacity-70">
<span class="material-symbols-outlined">description</span>
</div>
<div class="p-3 text-on-surface-variant opacity-70">
<span class="material-symbols-outlined">history</span>
</div>
<div class="p-3 text-on-surface-variant opacity-70">
<span class="material-symbols-outlined">settings</span>
</div>
</nav>
</aside>
<main class="flex-1 overflow-auto p-gutter">
<!-- Top Nav (from JSON) -->
<header class="flex justify-between items-center mb-8">
<div>
<h1 class="font-headline-md text-headline-md text-on-surface">Health Intelligence Dashboard</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Welcome back, Alex. Your reports are updated.</p>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full hover:bg-surface-container-low transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional high-resolution headshot of a diverse male patient in a modern minimalist setting. The lighting is soft and natural, emphasizing a calm and healthy appearance. The background is a clean, slightly blurred medical office with light teal and white accents, maintaining a clinical yet approachable aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAEEUQlKx35LTH-4sobVQTFUWSYiAXtJo1NXCoCmB-CU9UVop0Dmho8I24Hsw25IqYls3S88B26IfLsRm041J_0EJEVtqOmOFGYBd5aGahTHkSS3-fl3xDVd-WyZWVkBwty9B_FGY7pOzcifc3p0Jf8XNDpARK0xr92hExvh7Hkkrjmr-KyDVObioAmeOF1wQA8Rko7XARtLDIJtrMt0fHw14YVbHW1nakp9f2NTyZomvoFEyt3EcxnguS8SsxKKQsLucZ1x8mleo"/>
</div>
</div>
</header>
<!-- Bento Grid Content -->
<div class="grid grid-cols-12 gap-6">
<div class="col-span-8 p-card-padding bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/20">
<div class="flex justify-between items-center mb-6">
<h2 class="font-title-lg text-title-lg">Latest Lab Analysis</h2>
<span class="px-3 py-1 bg-tertiary-container/10 text-tertiary font-label-md text-label-md rounded-full">Updated 2h ago</span>
</div>
<div class="h-64 rounded-xl bg-surface-container-low flex items-center justify-center border border-dashed border-outline-variant">
<span class="text-on-surface-variant font-body-md">Data Visualization Placeholder</span>
</div>
</div>
<div class="col-span-4 space-y-6">
<div class="p-card-padding bg-primary/5 border border-primary/10 rounded-3xl">
<h3 class="font-title-lg text-title-lg text-primary mb-2">AI Summary</h3>
<p class="font-body-md text-body-md text-on-surface-variant">General vitals are within optimal range. Minor adjustment in Vitamin D levels noted.</p>
</div>
<div class="p-card-padding bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/20">
<h3 class="font-title-lg text-title-lg mb-4">Vitals</h3>
<div class="space-y-4">
<div class="flex justify-between items-center">
<span class="text-on-surface-variant">Blood Pressure</span>
<span class="font-bold text-primary">120/80</span>
</div>
<div class="flex justify-between items-center">
<span class="text-on-surface-variant">Heart Rate</span>
<span class="font-bold text-primary">72 bpm</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<!-- MODAL OVERLAY -->
<div class="fixed inset-0 z-50 flex items-center justify-center modal-overlay p-4" id="modalOverlay">
<!-- SHARE MODAL CONTAINER -->
<div class="relative w-full max-w-lg glass-panel rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-500 scale-100 opacity-100" id="shareModal">
<!-- Success Overlay (Hidden by default) -->
<div class="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center text-center p-8 opacity-0 pointer-events-none transition-opacity duration-300" id="successState">
<div class="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<h2 class="font-headline-md text-headline-md text-on-surface mb-2">Report Sent Successfully</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">Your health intelligence has been securely shared with the recipient.</p>
<button class="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-container transition-colors" onclick="closeModal()">Done</button>
</div>
<!-- Modal Content -->
<div class="p-8" id="modalMainContent">
<div class="flex justify-between items-start mb-6">
<div>
<h2 class="font-headline-md text-headline-md text-on-surface">Share Health Intelligence</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Securely transmit your data via n8n integration.</p>
</div>
<button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors" onclick="closeModal()">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<!-- Form Fields -->
<div class="space-y-6">
<!-- Recipient -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Recipient Contact</label>
<div class="relative">
<span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">alternate_email</span>
<input class="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-body-md" placeholder="Email or WhatsApp number" type="text"/>
</div>
</div>
<!-- Message Preview -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Message Preview</label>
<div class="p-4 bg-surface-container-low border border-outline-variant/30 rounded-xl">
<p class="font-body-md text-body-md italic text-on-surface-variant">"Hi Doctor, I'm sharing my latest Lab Results from MediBrief for your review."</p>
</div>
</div>
<!-- Toggles -->
<div class="space-y-3">
<label class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Attachments</label>
<div class="flex flex-col gap-2">
<label class="flex items-center justify-between p-4 bg-white/50 rounded-xl cursor-pointer hover:bg-white transition-colors group">
<span class="font-body-md text-body-md flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary">psychology</span>
                                    Include AI Summary
                                </span>
<input checked="" class="w-6 h-6 rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
</label>
<label class="flex items-center justify-between p-4 bg-white/50 rounded-xl cursor-pointer hover:bg-white transition-colors group">
<span class="font-body-md text-body-md flex items-center gap-3">
<span class="material-symbols-outlined text-secondary">description</span>
                                    Include Original Report
                                </span>
<input checked="" class="w-6 h-6 rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
</label>
</div>
</div>
<!-- Actions -->
<div class="grid grid-cols-2 gap-4 pt-4">
<button class="flex items-center justify-center gap-2 py-4 px-6 bg-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95" onclick="simulateSend()">
<span class="material-symbols-outlined text-lg">mail</span>
                            Send via Email
                        </button>
<button class="flex items-center justify-center gap-2 py-4 px-6 bg-tertiary-container text-white rounded-xl font-bold hover:shadow-lg hover:shadow-tertiary-container/20 transition-all active:scale-95" onclick="simulateSend()">
<span class="material-symbols-outlined text-lg">chat_bubble</span>
                            Send via WhatsApp
                        </button>
</div>
</div>
<div class="mt-8 pt-6 border-t border-outline-variant/20 flex items-center gap-3">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center border-2 border-white">
<span class="material-symbols-outlined text-[12px] text-on-primary-fixed">encrypted</span>
</div>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant">All transmissions are encrypted and HIPAA compliant.</p>
</div>
</div>
</div>
</div>
<!-- Micro-interaction Scripts -->
<script>
        function closeModal() {
            const modal = document.getElementById('shareModal');
            const overlay = document.getElementById('modalOverlay');
            
            modal.classList.add('scale-95', 'opacity-0');
            overlay.classList.add('opacity-0');
            
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }

        function simulateSend() {
            const mainContent = document.getElementById('modalMainContent');
            const successState = document.getElementById('successState');
            
            mainContent.classList.add('opacity-0', 'pointer-events-none');
            
            setTimeout(() => {
                successState.classList.remove('opacity-0', 'pointer-events-none');
                successState.classList.add('opacity-100');
                
                // Add a little celebration pop animation
                const icon = successState.querySelector('.material-symbols-outlined');
                icon.animate([
                    { transform: 'scale(0.5)' },
                    { transform: 'scale(1.2)' },
                    { transform: 'scale(1)' }
                ], { duration: 500, easing: 'ease-out' });
            }, 300);
        }

        // Re-open logic for demo purposes (can be called from console)
        window.openModal = function() {
            const overlay = document.getElementById('modalOverlay');
            const modal = document.getElementById('shareModal');
            const mainContent = document.getElementById('modalMainContent');
            const successState = document.getElementById('successState');

            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                modal.classList.remove('scale-95', 'opacity-0');
                mainContent.classList.remove('opacity-0', 'pointer-events-none');
                successState.classList.add('opacity-0', 'pointer-events-none');
            }, 10);
        };
    </script>
</body></html>

<!-- Sign Up -->
<!DOCTYPE html><html lang="en" class="light"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=block" rel="stylesheet"><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script id="tailwind-config">try{
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-container": "#f4fffc",
                    "primary-fixed": "#89f5e7",
                    "on-primary-fixed": "#00201d",
                    "surface-dim": "#cbdbf5",
                    "error-container": "#ffdad6",
                    "inverse-on-surface": "#eaf1ff",
                    "surface-tint": "#006a61",
                    "inverse-primary": "#6bd8cb",
                    "secondary-fixed-dim": "#89ceff",
                    "on-tertiary-fixed-variant": "#005236",
                    "secondary-fixed": "#c9e6ff",
                    "on-tertiary-container": "#f5fff6",
                    "on-secondary": "#ffffff",
                    "surface-container": "#e5eeff",
                    "background": "#f8f9ff",
                    "on-background": "#0b1c30",
                    "primary-fixed-dim": "#6bd8cb",
                    "on-surface": "#0b1c30",
                    "on-secondary-container": "#004666",
                    "tertiary-container": "#00855b",
                    "on-tertiary-fixed": "#002113",
                    "surface-container-low": "#eff4ff",
                    "on-secondary-fixed": "#001e2f",
                    "on-tertiary": "#ffffff",
                    "tertiary": "#006947",
                    "secondary-container": "#39b8fd",
                    "on-primary-fixed-variant": "#005049",
                    "surface-container-lowest": "#ffffff",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-error": "#ffffff",
                    "outline-variant": "#bcc9c6",
                    "on-error-container": "#93000a",
                    "primary": "#00685f",
                    "surface": "#f8f9ff",
                    "surface-bright": "#f8f9ff",
                    "primary-container": "#008378",
                    "on-secondary-fixed-variant": "#004c6e",
                    "secondary": "#006591",
                    "outline": "#6d7a77",
                    "surface-container-highest": "#d3e4fe",
                    "tertiary-fixed": "#6ffbbe",
                    "tertiary-fixed-dim": "#4edea3",
                    "on-surface-variant": "#3d4947",
                    "surface-container-high": "#dce9ff",
                    "surface-variant": "#d3e4fe",
                    "inverse-surface": "#213145"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "1.5rem",
                    "nav-rail-width": "80px",
                    "card-padding": "1.5rem",
                    "nav-rail-expanded": "240px",
                    "container-margin": "2rem",
                    "section-gap": "2.5rem"
            },
            "fontFamily": {
                    "headline-lg": ["Plus Jakarta Sans"],
                    "body-md": ["Plus Jakarta Sans"],
                    "body-lg": ["Plus Jakarta Sans"],
                    "label-sm": ["Plus Jakarta Sans"],
                    "display-lg": ["Plus Jakarta Sans"],
                    "title-lg": ["Plus Jakarta Sans"],
                    "label-md": ["Plus Jakarta Sans"],
                    "headline-md": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                    "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "body-lg": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "label-sm": ["11px", {"lineHeight": "1.2", "fontWeight": "500"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "title-lg": ["20px", {"lineHeight": "1.4", "fontWeight": "600"}],
                    "label-md": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}]
            }
          },
        },
      }
    }catch(_e){}</script><meta charset="utf-8"></head><body class="bg-background text-on-background font-body-md overflow-x-hidden">
<div class="flex min-h-screen">
<!-- Side Navigation Rail -->
<aside class="w-[80px] hover:w-[240px] transition-all duration-300 h-screen sticky left-0 top-0 bg-surface shadow-[4px_0_20px_rgba(0,0,0,0.05)] flex flex-col py-gutter items-center overflow-hidden z-50 group">
<div class="mb-10 flex items-center w-full px-6 gap-4">
<div class="min-w-[32px] h-[32px] bg-primary rounded-lg flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined text-[20px]">medical_services</span>
</div>
<span class="font-headline-md text-headline-md font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">MediBrief</span>
</div>
<nav class="flex flex-col w-full gap-2 px-3">
<!-- Dashboard Active -->
<a href="#" class="flex items-center gap-4 py-3 px-3 rounded-xl border-l-4 border-primary text-primary bg-primary-container/10 nav-active-glow transition-all duration-300">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dashboard</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-all duration-300">
<span class="material-symbols-outlined">description</span>
<span class="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Reports</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-all duration-300">
<span class="material-symbols-outlined">history</span>
<span class="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">History</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-all duration-300">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Settings</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-all duration-300">
<span class="material-symbols-outlined">person</span>
<span class="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Profile</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-3 rounded-xl text-error opacity-70 hover:bg-error-container/10 transition-all duration-300"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sign Out</span></a></nav>
<div class="mt-auto w-full px-6 group-hover:px-4 transition-all">
<div class="flex items-center gap-3 py-4 border-t border-outline-variant/30">
<div class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-highest">
<img class="w-full h-full object-cover" data-alt="A clean, professional headshot of a friendly middle-aged male patient with a warm smile, wearing a casual navy blue sweater, set against a blurred modern clinic interior background with soft, natural lighting. The image communicates health and trust in a premium UI context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZBQB7E3dI3D83Li4A3rkWctmfRNTn1GdXTjNVTxOAiI-oHyrwyJdmE5tD2U3QXOzSMcKH25AxXrTrkWik2zj1fp_Lz1NrpwOOW0QFpkvwp7LZQyYL8pLyPW77CYnIZs9EOZfkDXrz3eNiDIicOXMcKtDXa7gc3pcOMRXvB_m0318Vc7eBkH69scHvxy9V9qnG-lxyKVoSSeLY8REgEv071Eq4GrsperHcw_7hrMcst32vxTf-D5xNmrzo3NAJqk1DVTuqjAXyJs">
</div>
<div class="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
<span class="font-label-md text-on-surface truncate">Alex Johnson</span>
<span class="text-[10px] text-on-surface-variant">Member since 2022</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col min-w-0">
<!-- Top App Bar -->
<header class="glass-header sticky top-0 z-40 flex justify-between items-center px-gutter py-4 w-full shadow-sm">
<div class="flex items-center gap-4 flex-1">
<div class="relative w-full max-w-md group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input class="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary transition-all" placeholder="Search reports, health data, or labs..." type="text">
</div>
</div>
<div class="flex items-center gap-6">
<button class="relative text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-all">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-all">
<span class="material-symbols-outlined">help</span>
</button>
<div class="h-8 w-[1px] bg-outline-variant/40 mx-2"></div>
<div class="relative group">
  <button class="flex items-center gap-3 hover:bg-surface-container-low p-1 pr-3 rounded-full transition-all">
    <div class="w-10 h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
      <img class="w-full h-full object-cover" data-alt="A close-up profile picture of a health-conscious user, looking professional and calm, styled for a modern SaaS dashboard. The lighting is soft and high-key, maintaining the white and teal color palette of the MediBrief platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZGRsErssxEP7VZjatlgEnMdpygIcFNA7n5Z3caG4Id4E5uTGi8H-vQe-Z72u7ktn9l4qGwxH6BPGRVOLN_Z5zESqSMouzeFjW6_5hytK4T00m60b51-WBKZyiTb-CwbnxW8eXz1bucC5ITfBKv7TzCtN3DuTj0DRFjO8aOzXL3Gh1t3lcwtf_TAPJHZvwKVdG72zILMI4NnrlwpunSx47ZOCrZ3hwWjn8aNvD83qcNx0V-FYhp1usoIR4DxGImD7ggsl7SfzyywI">
    </div>
    <div class="hidden md:flex flex-col items-start">
      <span class="font-label-md text-on-surface">Alex Johnson</span>
      <span class="text-[10px] text-on-surface-variant">Premium Member</span>
    </div>
    <span class="material-symbols-outlined text-on-surface-variant">expand_more</span>
  </button>
  <!-- Dropdown Menu -->
  <div class="absolute right-0 mt-2 w-56 bg-surface-container-lowest rounded-2xl shadow-lg border border-outline-variant/20 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <div class="px-4 py-2 border-b border-outline-variant/10 mb-1">
      <p class="text-label-sm text-on-surface-variant uppercase tracking-wider">Account</p>
    </div>
    <a href="#" class="flex items-center gap-3 px-4 py-2 text-body-md text-on-surface hover:bg-surface-container-low transition-colors">
      <span class="material-symbols-outlined text-[20px]">person</span>
      Profile Settings
    </a>
    <a href="#" class="flex items-center gap-3 px-4 py-2 text-body-md text-on-surface hover:bg-surface-container-low transition-colors">
      <span class="material-symbols-outlined text-[20px]">security</span>
      Privacy &amp; Security
    </a>
    <a href="#" class="flex items-center gap-3 px-4 py-2 text-body-md text-on-surface hover:bg-surface-container-low transition-colors">
      <span class="material-symbols-outlined text-[20px]">payments</span>
      Billing
    </a>
    <div class="h-[1px] bg-outline-variant/10 my-1"></div>
    <button class="w-full flex items-center gap-3 px-4 py-2 text-body-md text-error hover:bg-error-container/10 transition-colors">
      <span class="material-symbols-outlined text-[20px]">logout</span>
      Sign Out
    </button>
  </div>
</div>
</div>
</header>
<!-- Dashboard Content -->
<div class="p-gutter lg:p-10 space-y-section-gap max-w-[1600px] mx-auto w-full">
<!-- Hero Section & Summary -->
<section class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
<div class="space-y-2">
<h1 class="font-headline-lg text-headline-lg text-on-surface">Welcome back, Alex.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Your health intelligence is up to date. We've processed your latest blood work and compared it against your 12-month history.</p>
</div>
<div class="flex gap-4">
<div class="bg-surface-container-lowest dashboard-card rounded-xl p-4 flex items-center gap-4 border border-outline-variant/20">
<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">analytics</span>
</div>
<div>
<div class="font-headline-md text-headline-md text-primary">3</div>
<div class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Reports Analyzed</div>
</div>
</div>
<div class="bg-surface-container-lowest dashboard-card rounded-xl p-4 flex items-center gap-4 border border-outline-variant/20">
<div class="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">pending_actions</span>
</div>
<div>
<div class="font-headline-md text-headline-md text-tertiary">1</div>
<div class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Pending Recommendation</div>
</div>
</div>
</div>
</section>
<!-- Main Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Upload & Progress Column (Left) -->
<div class="lg:col-span-8 space-y-gutter">
<!-- Premium Upload Panel -->
<div class="relative overflow-hidden bg-surface-container-lowest dashboard-card rounded-3xl p-8 border-2 border-dashed border-primary/20 hover:border-primary/50 transition-all cursor-pointer group">
<div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
<div class="relative flex flex-col items-center text-center py-10 space-y-6">
<div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary animate-float">
<span class="material-symbols-outlined text-[40px]">cloud_upload</span>
</div>
<div class="space-y-2">
<h3 class="font-headline-md text-headline-md text-on-surface">Upload New Medical Report</h3>
<p class="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">Drag and drop your PDF lab results, MRI scans, or prescription photos here for instant intelligent analysis.</p>
</div>
<button class="bg-primary hover:bg-primary-container text-on-primary px-8 py-3 rounded-lg font-label-md flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
<span class="material-symbols-outlined">add</span>
                                    Upload New Report
                                </button>
<div class="flex gap-4 text-on-surface-variant/60 font-label-sm">
<span class="">Supports: PDF, JPG, PNG, DICOM</span>
<span class="">•</span>
<span class="">Max 50MB</span>
</div>
</div>
</div>
<!-- Active Analysis Progress -->
<div class="bg-surface-container-low dashboard-card rounded-2xl p-6 border border-primary/10">
<div class="flex justify-between items-center mb-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary animate-spin">
<span class="material-symbols-outlined text-[16px]">sync</span>
</div>
<h4 class="font-title-lg text-title-lg">Analyzing: Blood_Panel_Oct2024.pdf</h4>
</div>
<span class="font-label-md text-primary">65% Complete</span>
</div>
<div class="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
<div class="bg-primary h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,104,95,0.4)]" style="width: 71.5%;"></div>
</div>
<p class="mt-4 text-body-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px] text-primary">info</span>
                                Cross-referencing biomarkers with your previous History...
                            </p>
</div>
<!-- Recent Reports List -->
<div class="space-y-4">
<div class="flex justify-between items-center">
<h3 class="font-headline-md text-headline-md text-on-surface">Recent Reports</h3>
<button class="text-primary font-label-md hover:underline">View All</button>
</div>
<div class="space-y-3">
<!-- Report Item 1 -->
<div class="bg-surface-container-lowest dashboard-card rounded-2xl p-5 flex items-center justify-between group hover:border-primary/30 transition-all">
<div class="flex items-center gap-5">
<div class="w-14 h-14 bg-secondary-container/10 rounded-xl flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[28px]">biotech</span>
</div>
<div>
<h5 class="font-title-lg text-title-lg group-hover:text-primary transition-colors">Comprehensive Metabolic Panel</h5>
<div class="flex gap-4 font-label-sm text-on-surface-variant">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">calendar_today</span> Oct 12, 2024</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">local_hospital</span> Quest Diagnostics</span>
</div>
</div>
</div>
<div class="flex items-center gap-6">
<span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm">Completed</span>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<!-- Report Item 2 -->
<div class="bg-surface-container-lowest dashboard-card rounded-2xl p-5 flex items-center justify-between group hover:border-primary/30 transition-all">
<div class="flex items-center gap-5">
<div class="w-14 h-14 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[28px]">radiology</span>
</div>
<div>
<h5 class="font-title-lg text-title-lg group-hover:text-primary transition-colors">MRI Lumbar Spine</h5>
<div class="flex gap-4 font-label-sm text-on-surface-variant">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">calendar_today</span> Sep 28, 2024</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">local_hospital</span> City Medical Imaging</span>
</div>
</div>
</div>
<div class="flex items-center gap-6">
<span class="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full font-label-sm">Archived</span>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
<!-- Side Column (Right) -->
<div class="lg:col-span-4 space-y-gutter">
<!-- Key Health Insights -->
<div class="bg-surface-container-lowest dashboard-card rounded-3xl p-card-padding">
<div class="flex justify-between items-center mb-6">
<h3 class="font-title-lg text-title-lg">Health Intelligence</h3>
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
</div>
<div class="space-y-4">
<!-- Insight Card 1 -->
<div class="p-4 rounded-2xl bg-tertiary-fixed/10 border border-tertiary/10">
<div class="flex items-center justify-between mb-2">
<span class="font-label-md text-tertiary-fixed-dim bg-tertiary p-1 px-2 rounded-lg">IMPROVING</span>
<span class="material-symbols-outlined text-tertiary">trending_down</span>
</div>
<h5 class="font-body-lg font-bold text-on-surface">LDL Cholesterol</h5>
<p class="text-body-md text-on-surface-variant mt-1">Your LDL has decreased by 12% since July. Keep up the Mediterranean-focused diet.</p>
</div>
<!-- Insight Card 2 -->
<div class="p-4 rounded-2xl bg-secondary-container/10 border border-secondary/10">
<div class="flex items-center justify-between mb-2">
<span class="font-label-md text-secondary bg-white p-1 px-2 rounded-lg border border-secondary/20">STABLE</span>
<span class="material-symbols-outlined text-secondary">remove</span>
</div>
<h5 class="font-body-lg font-bold text-on-surface">Vitamin D Levels</h5>
<p class="text-body-md text-on-surface-variant mt-1">Remaining within optimal range (45 ng/mL). No adjustment to supplements needed.</p>
</div>
<!-- Insight Card 3 (Action Required) -->
<div class="p-4 rounded-2xl bg-error-container/20 border border-error/10">
<div class="flex items-center justify-between mb-2">
<span class="font-label-md text-error bg-white p-1 px-2 rounded-lg border border-error/20">ATTENTION</span>
<span class="material-symbols-outlined text-error">priority_high</span>
</div>
<h5 class="font-body-lg font-bold text-on-surface">Glucose Fluctuation</h5>
<p class="text-body-md text-on-surface-variant mt-1">Slight upward trend in fasting glucose. Consider scheduling a follow-up with Dr. Smith.</p>
<button class="mt-3 w-full py-2 bg-error text-on-error rounded-lg font-label-md">Schedule Follow-up</button>
</div>
</div>
</div>
<!-- Data Viz Placeholder (Health Trends) -->
<div class="bg-surface-container-high dashboard-card rounded-3xl p-card-padding flex flex-col justify-between h-64 overflow-hidden relative group">
<div class="relative z-10">
<h3 class="font-title-lg text-title-lg mb-1">Wellness Pulse</h3>
<p class="text-label-sm text-on-surface-variant">Last 30 Days Activity</p>
</div>
<!-- Simple Animated Graphic -->
<div class="absolute bottom-0 left-0 w-full h-32 flex items-end px-4 pb-4 gap-2">
<div class="flex-1 bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary group-hover:h-24 h-12"></div>
<div class="flex-1 bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary group-hover:h-16 h-20"></div>
<div class="flex-1 bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary group-hover:h-32 h-16"></div>
<div class="flex-1 bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary group-hover:h-28 h-24"></div>
<div class="flex-1 bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary group-hover:h-20 h-14"></div>
<div class="flex-1 bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary group-hover:h-36 h-28"></div>
<div class="flex-1 bg-primary/20 rounded-t-lg transition-all duration-500 hover:bg-primary group-hover:h-24 h-18"></div>
</div>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="mt-auto py-8 px-gutter border-t border-outline-variant bg-surface-container-lowest">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex flex-col items-center md:items-start">
<span class="font-label-md text-on-surface font-bold">MediBrief</span>
<p class="text-label-sm text-on-surface-variant max-w-md text-center md:text-left mt-1">
                            © 2024 MediBrief Health Intelligence. Medical Informational Notice: This dashboard is for informational purposes only and does not constitute medical advice.
                        </p>
</div>
<div class="flex gap-6">
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Privacy Policy</a>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Terms of Service</a>
<a class="text-label-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Support</a>
</div>
</div>
</footer>
</main>
</div>
<!-- Micro-interactions Script -->
<script>
        document.addEventListener('DOMContentLoaded', () => {
            // Simple logic for progress bar mock animation
            const progressBar = document.querySelector('.bg-primary.h-full');
            let width = 65;
            setInterval(() => {
                if (width >= 99) {
                    width = 65;
                } else {
                    width += 0.5;
                }
                progressBar.style.width = width + '%';
            }, 3000);

            // Hover effect for report cards
            const cards = document.querySelectorAll('.dashboard-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-2px)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0px)';
                });
            });
        });
    </script>



</body></html>

<!-- Send Report Modal -->
<!DOCTYPE html><html class="light" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>MediBrief | Profile</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #f8f9ff;
        }
        .glass-header {
            backdrop-filter: blur(16px);
            background: rgba(255, 255, 255, 0.8);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .profile-card-shadow {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .health-gradient {
            background: linear-gradient(135deg, #00685f 0%, #008378 100%);
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-bright": "#f8f9ff",
                        "surface-container-high": "#dce9ff",
                        "secondary-fixed": "#c9e6ff",
                        "surface-container-lowest": "#ffffff",
                        "on-surface": "#0b1c30",
                        "surface-dim": "#cbdbf5",
                        "on-primary-container": "#f4fffc",
                        "surface-container-low": "#eff4ff",
                        "on-secondary-fixed": "#001e2f",
                        "surface-container-highest": "#d3e4fe",
                        "primary": "#00685f",
                        "on-error": "#ffffff",
                        "primary-fixed": "#89f5e7",
                        "tertiary-fixed": "#6ffbbe",
                        "on-secondary-fixed-variant": "#004c6e",
                        "inverse-primary": "#6bd8cb",
                        "on-surface-variant": "#3d4947",
                        "on-tertiary-fixed": "#002113",
                        "outline": "#6d7a77",
                        "tertiary-fixed-dim": "#4edea3",
                        "surface-variant": "#d3e4fe",
                        "on-secondary-container": "#004666",
                        "on-background": "#0b1c30",
                        "background": "#f8f9ff",
                        "tertiary": "#006947",
                        "error": "#ba1a1a",
                        "secondary-container": "#39b8fd",
                        "error-container": "#ffdad6",
                        "secondary": "#006591",
                        "on-tertiary-fixed-variant": "#005236",
                        "inverse-on-surface": "#eaf1ff",
                        "on-primary-fixed": "#00201d",
                        "on-error-container": "#93000a",
                        "surface-container": "#e5eeff",
                        "surface": "#f8f9ff",
                        "on-secondary": "#ffffff",
                        "secondary-fixed-dim": "#89ceff",
                        "outline-variant": "#bcc9c6",
                        "on-tertiary-container": "#f5fff6",
                        "on-primary": "#ffffff",
                        "primary-fixed-dim": "#6bd8cb",
                        "inverse-surface": "#213145",
                        "surface-tint": "#006a61",
                        "on-primary-fixed-variant": "#005049",
                        "tertiary-container": "#00855b",
                        "on-tertiary": "#ffffff",
                        "primary-container": "#008378"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "nav-rail-width": "80px",
                        "card-padding": "1.5rem",
                        "gutter": "1.5rem",
                        "container-margin": "2rem",
                        "nav-rail-expanded": "240px",
                        "section-gap": "2.5rem"
                    },
                    "fontFamily": {
                        "label-md": ["Plus Jakarta Sans"],
                        "label-sm": ["Plus Jakarta Sans"],
                        "headline-lg": ["Plus Jakarta Sans"],
                        "title-lg": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-md": ["Plus Jakarta Sans"],
                        "body-lg": ["Plus Jakarta Sans"],
                        "display-lg": ["Plus Jakarta Sans"]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-surface text-on-surface">
<div class="flex min-h-screen">
<!-- SideNavBar (Predicted Rail) -->
<aside class="w-[80px] hover:w-[240px] transition-all duration-300 h-screen sticky left-0 top-0 bg-surface dark:bg-inverse-surface shadow-[4px_0_20px_rgba(0,0,0,0.05)] flex flex-col py-gutter items-center overflow-hidden z-50">
<div class="mb-10 flex flex-col items-center gap-2">
<div class="w-10 h-10 rounded-xl health-gradient flex items-center justify-center text-white shrink-0">
<span class="material-symbols-outlined" data-icon="health_metrics">health_metrics</span>
</div>
<div class="whitespace-nowrap overflow-hidden transition-opacity duration-300">
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed block">MediBrief</span>
<span class="text-xs text-on-surface-variant font-medium text-center block">Health Intel</span>
</div>
</div>
<nav class="flex flex-col gap-4 w-full px-4">
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors scale-95 active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors scale-95 active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="description">description</span>
<span class="font-label-md text-label-md">Reports</span>
</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors scale-95 active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
<span class="font-label-md text-label-md">History</span>
</a>
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors scale-95 active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
<!-- Active Tab: Profile -->
<a class="flex items-center gap-4 p-3 rounded-xl border-l-4 border-primary text-primary bg-primary-container/10 transition-colors scale-95 active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-md text-label-md">Profile</span>
</a>
</nav>
<div class="mt-auto w-full px-4">
    <a class="flex items-center gap-4 p-3 rounded-xl text-error opacity-70 hover:bg-error/10 transition-colors scale-95 active:scale-90" href="#">
        <span class="material-symbols-outlined" data-icon="logout">logout</span>
        <span class="font-label-md text-label-md">Sign Out</span>
    </a>
</div></aside>
<div class="flex-1 flex flex-col">
<!-- TopNavBar -->
<header class="flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-40 backdrop-blur-xl bg-surface/80 dark:bg-inverse-surface/80 shadow-sm">
<div class="flex items-center gap-4 max-w-md w-full">
<div class="relative w-full flex items-center focus-within:ring-2 focus-within:ring-primary rounded-lg bg-surface-container-low px-4 py-2">
<span class="material-symbols-outlined text-on-surface-variant mr-2" data-icon="search">search</span>
<input class="bg-transparent border-none focus:ring-0 w-full text-body-md font-body-md" placeholder="Search health records..." type="text">
</div>
</div>
<div class="flex items-center gap-6">
<button class="relative hover:bg-surface-container-low p-2 rounded-full transition-all">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="hover:bg-surface-container-low p-2 rounded-full transition-all">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="help">help</span>
</button>
<div class="flex items-center gap-3 border-l pl-6 border-outline-variant">
<div class="text-right hidden sm:block">
<p class="font-title-lg text-title-lg text-primary">Alex Johnson</p>
<p class="text-xs text-on-surface-variant">Patient ID: MB-9920</p>
</div>
<img class="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="A professional, close-up studio portrait of a friendly man in his early 30s with a warm smile, wearing a casual professional outfit. The lighting is soft and high-key, set against a blurred medical-office background with subtle teal and white tones to match the MediBrief health intelligence brand aesthetic. The overall mood is calm, trustworthy, and modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPs75E9VHgwfno1OAUQffDRw3uUGvpm6usVHgUQX0qqEU9Wyk5CFiQf1zOFg9kAo9U5RWXjnMyKRjWn1SbKH3dhTbs5-1esTKcZ7gBwcgRVn5eRYExSSiw8eus4ZsOy9Ga1NWdlD7wM9-Y4tTA3xMQjHVExo_0K4mSVybfvAAV9LGNb_5mqqOD5UpR9KR2du0-VmULjjct1wX0WYfiQV06rpM6vgUSwprJqTBdpS3xA5GwQMrhRmssRiPL7VGPXjXn8IBG8vTqXFo">
</div>
</div>
</header>
<!-- Main Content Area -->
<main class="flex-1 p-gutter overflow-y-auto">
<div class="max-w-7xl mx-auto space-y-section-gap">
<!-- Page Header & Action -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 class="font-headline-lg text-headline-lg text-on-surface">Personal Profile</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Manage your clinical data and identity preferences.</p>
</div>
<button class="bg-primary text-white px-6 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 profile-card-shadow">
<span class="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
                            Edit Profile
                        </button>
</div>
<!-- Bento Layout Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Primary Info Card -->
<div class="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-card-padding profile-card-shadow">
<div class="flex items-center justify-between mb-8">
<h2 class="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-primary" data-icon="person_filled">person</span>
                                    Identity Details
                                </h2>
<span class="px-3 py-1 bg-tertiary-container/10 text-tertiary text-xs font-bold rounded-full border border-tertiary/20 uppercase tracking-wider">Verified Account</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-1">
<label class="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Full Legal Name</label>
<p class="font-body-lg text-body-lg text-on-surface font-semibold">Alex Johnson</p>
</div>
<div class="space-y-1">
<label class="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Date of Birth</label>
<p class="font-body-lg text-body-lg text-on-surface">March 14, 1992 (32 years old)</p>
</div>
<div class="space-y-1">
<label class="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Email Address</label>
<div class="flex items-center gap-2">
<p class="font-body-lg text-body-lg text-on-surface">alex.johnson@medibrief.ai</p>
<span class="material-symbols-outlined text-tertiary text-sm" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
<div class="space-y-1">
<label class="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Phone Number</label>
<p class="font-body-lg text-body-lg text-on-surface">+1 (555) 0123-4567</p>
</div>
<div class="space-y-1">
<label class="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Gender Identity</label>
<p class="font-body-lg text-body-lg text-on-surface">Male (Non-binary)</p>
</div>
<div class="space-y-1">
<label class="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Home Address</label>
<p class="font-body-lg text-body-lg text-on-surface">742 Evergreen Terrace, Springfield, OR</p>
</div>
</div>
</div>
<!-- Vital Stats Card -->
<div class="lg:col-span-4 space-y-gutter">
<div class="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-card-padding profile-card-shadow overflow-hidden relative">
<div class="absolute top-0 right-0 w-24 h-24 health-gradient opacity-5 rounded-bl-[100%]"></div>
<h2 class="font-title-lg text-title-lg text-on-surface mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary" data-icon="monitor_heart">monitor_heart</span>
                                    Clinical Vitals
                                </h2>
<div class="space-y-6">
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
<span class="material-symbols-outlined" data-icon="bloodtype">bloodtype</span>
</div>
<p class="font-label-md text-label-md text-on-surface-variant">Blood Type</p>
</div>
<p class="font-headline-md text-headline-md text-primary font-bold">O-</p>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="p-4 border border-outline-variant/20 rounded-2xl">
<p class="text-xs font-bold text-on-surface-variant/60 uppercase mb-2">Height</p>
<p class="font-headline-md text-headline-md text-on-surface">182<span class="text-sm font-normal text-on-surface-variant ml-1">cm</span></p>
</div>
<div class="p-4 border border-outline-variant/20 rounded-2xl">
<p class="text-xs font-bold text-on-surface-variant/60 uppercase mb-2">Weight</p>
<p class="font-headline-md text-headline-md text-on-surface">78<span class="text-sm font-normal text-on-surface-variant ml-1">kg</span></p>
</div>
</div>
<div class="p-4 border border-outline-variant/20 rounded-2xl bg-primary/5">
<p class="text-xs font-bold text-on-surface-variant/60 uppercase mb-2">BMI Index</p>
<div class="flex items-end justify-between">
<p class="font-headline-md text-headline-md text-on-surface">23.5</p>
<span class="text-xs font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">Healthy</span>
</div>
</div>
</div>
</div>
</div>
<!-- Medical ID & Emergency Section -->
<div class="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div class="bg-surface-container-highest/30 border border-outline-variant/20 rounded-3xl p-card-padding profile-card-shadow">
<h3 class="font-title-lg text-title-lg text-on-surface mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-error" data-icon="emergency">emergency</span>
                                    Emergency Contact
                                </h3>
<div class="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
<div class="flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined" data-icon="family_history">family_history</span>
</div>
<div>
<p class="font-body-lg text-body-lg font-bold text-on-surface">Sarah Johnson</p>
<p class="text-sm text-on-surface-variant">Spouse • Emergency Liaison</p>
</div>
</div>
<div class="space-y-3">
<div class="flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-[20px]" data-icon="call">call</span>
<span class="font-body-md">+1 (555) 987-6543</span>
</div>
<div class="flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-[20px]" data-icon="location_on">location_on</span>
<span class="font-body-md">Primary residence as patient</span>
</div>
</div>
</div>
</div>
<div class="bg-surface-container-highest/30 border border-outline-variant/20 rounded-3xl p-card-padding profile-card-shadow">
<h3 class="font-title-lg text-title-lg text-on-surface mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary" data-icon="badge">badge</span>
                                    Medical ID
                                </h3>
<div class="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 space-y-4">
<div class="flex items-start gap-4">
<div class="w-6 h-6 mt-1 flex items-center justify-center text-error">
<span class="material-symbols-outlined" data-icon="warning" style="font-variation-settings: 'FILL' 1;">warning</span>
</div>
<div>
<p class="text-xs font-bold text-on-surface-variant/60 uppercase">Critical Allergies</p>
<p class="font-body-md text-on-surface font-semibold">Penicillin, Shellfish</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="w-6 h-6 mt-1 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="medication" style="font-variation-settings: 'FILL' 1;">medication</span>
</div>
<div>
<p class="text-xs font-bold text-on-surface-variant/60 uppercase">Current Medications</p>
<p class="font-body-md text-on-surface font-semibold">Lisinopril 10mg (Daily)</p>
</div>
</div>
<div class="pt-2">
<button class="w-full py-2 bg-surface-container-low text-primary font-label-md text-label-md rounded-xl hover:bg-primary/5 transition-all">
                                            Generate Digital Health Card
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer (from JSON) -->
<footer class="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant py-8">
<div class="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex flex-col items-center md:items-start">
<span class="font-label-md text-label-md font-bold text-on-surface">MediBrief</span>
<p class="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left max-w-xl mt-2">
                            © 2024 MediBrief Health Intelligence. Medical Informational Notice: This dashboard is for informational purposes only and does not constitute medical advice.
                        </p>
</div>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all opacity-80 hover:opacity-100" href="#">Support</a>
</div>
</div>
</footer>
</div>
</div>
<script>
        // Simple Micro-interaction: Update Profile Image Hover
        const profileImg = document.querySelector('img[data-alt]');
        profileImg.addEventListener('mouseover', () => {
            profileImg.classList.add('scale-105');
            profileImg.classList.add('ring-4');
        });
        profileImg.addEventListener('mouseout', () => {
            profileImg.classList.remove('scale-105');
            profileImg.classList.remove('ring-4');
        });

        // Toggle Rail logic simulation (Purely visual)
        const sideNav = document.querySelector('aside');
        sideNav.addEventListener('mouseenter', () => {
           // Transition handled by tailwind transition-all duration-300
        });
    </script>


</body></html>

<!-- Dashboard Overview -->
<!DOCTYPE html><html class="light" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Settings | MediBrief Health Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<!-- Tailwind Configuration -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-bright": "#f8f9ff",
                    "surface-container-high": "#dce9ff",
                    "secondary-fixed": "#c9e6ff",
                    "surface-container-lowest": "#ffffff",
                    "on-surface": "#0b1c30",
                    "surface-dim": "#cbdbf5",
                    "on-primary-container": "#f4fffc",
                    "surface-container-low": "#eff4ff",
                    "on-secondary-fixed": "#001e2f",
                    "surface-container-highest": "#d3e4fe",
                    "primary": "#00685f",
                    "on-error": "#ffffff",
                    "primary-fixed": "#89f5e7",
                    "tertiary-fixed": "#6ffbbe",
                    "on-secondary-fixed-variant": "#004c6e",
                    "inverse-primary": "#6bd8cb",
                    "on-surface-variant": "#3d4947",
                    "on-tertiary-fixed": "#002113",
                    "outline": "#6d7a77",
                    "tertiary-fixed-dim": "#4edea3",
                    "surface-variant": "#d3e4fe",
                    "on-secondary-container": "#004666",
                    "on-background": "#0b1c30",
                    "background": "#f8f9ff",
                    "tertiary": "#006947",
                    "error": "#ba1a1a",
                    "secondary-container": "#39b8fd",
                    "error-container": "#ffdad6",
                    "secondary": "#006591",
                    "on-tertiary-fixed-variant": "#005236",
                    "inverse-on-surface": "#eaf1ff",
                    "on-primary-fixed": "#00201d",
                    "on-error-container": "#93000a",
                    "surface-container": "#e5eeff",
                    "surface": "#f8f9ff",
                    "on-secondary": "#ffffff",
                    "secondary-fixed-dim": "#89ceff",
                    "outline-variant": "#bcc9c6",
                    "on-tertiary-container": "#f5fff6",
                    "on-primary": "#ffffff",
                    "primary-fixed-dim": "#6bd8cb",
                    "inverse-surface": "#213145",
                    "surface-tint": "#006a61",
                    "on-primary-fixed-variant": "#005049",
                    "tertiary-container": "#00855b",
                    "on-tertiary": "#ffffff",
                    "primary-container": "#008378"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "nav-rail-width": "80px",
                    "card-padding": "1.5rem",
                    "gutter": "1.5rem",
                    "container-margin": "2rem",
                    "nav-rail-expanded": "240px",
                    "section-gap": "2.5rem"
            },
            "fontFamily": {
                    "label-md": ["Plus Jakarta Sans"],
                    "label-sm": ["Plus Jakarta Sans"],
                    "headline-lg": ["Plus Jakarta Sans"],
                    "title-lg": ["Plus Jakarta Sans"],
                    "headline-md": ["Plus Jakarta Sans"],
                    "body-md": ["Plus Jakarta Sans"],
                    "body-lg": ["Plus Jakarta Sans"],
                    "display-lg": ["Plus Jakarta Sans"]
            }
          }
        }
      }
    </script>
<style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .glass-panel {
            backdrop-filter: blur(16px);
            background: rgba(255, 255, 255, 0.8);
        }
        .dark .glass-panel {
            background: rgba(33, 49, 69, 0.8);
        }
        .settings-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .toggle-switch {
            appearance: none;
            width: 48px;
            height: 24px;
            background: #bcc9c6;
            border-radius: 9999px;
            position: relative;
            cursor: pointer;
            transition: background 0.3s;
        }
        .toggle-switch:checked {
            background: #00685f;
        }
        .toggle-switch::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            top: 2px;
            left: 2px;
            transition: transform 0.3s;
        }
        .toggle-switch:checked::before {
            transform: translateX(24px);
        }
        .custom-scroll::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
            background: #bcc9c6;
            border-radius: 10px;
        }
    </style>
</head>
<body class="bg-surface text-on-surface min-h-screen flex overflow-hidden">
<!-- Sidebar Navigation Rail -->
<aside class="w-[80px] hover:w-[240px] transition-all duration-300 h-screen sticky left-0 top-0 bg-surface dark:bg-inverse-surface shadow-[4px_0_20px_rgba(0,0,0,0.05)] flex flex-col py-gutter items-center overflow-hidden z-50 group">
<div class="flex items-center gap-4 px-6 w-full mb-10 overflow-hidden">
<div class="min-w-[32px] h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm">medical_services</span>
</div>
<div class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
<p class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MediBrief</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Health Intel</p>
</div>
</div>
<nav class="flex-1 w-full space-y-2 px-3">
<!-- Dashboard -->
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high dark:hover:bg-surface-variant transition-all scale-95 active:scale-90 overflow-hidden" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-label-md text-label-md">Dashboard</span>
</a>
<!-- Reports -->
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high dark:hover:bg-surface-variant transition-all scale-95 active:scale-90 overflow-hidden" href="#">
<span class="material-symbols-outlined">description</span>
<span class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-label-md text-label-md">Reports</span>
</a>
<!-- History -->
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high dark:hover:bg-surface-variant transition-all scale-95 active:scale-90 overflow-hidden" href="#">
<span class="material-symbols-outlined">history</span>
<span class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-label-md text-label-md">History</span>
</a>
<!-- Settings (ACTIVE) -->
<a class="flex items-center gap-4 p-3 rounded-xl border-l-4 border-primary text-primary bg-primary-container/10 transition-all scale-95 active:scale-90 overflow-hidden" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">settings</span>
<span class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-label-md text-label-md">Settings</span>
</a>
<!-- Profile -->
<a class="flex items-center gap-4 p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high dark:hover:bg-surface-variant transition-all scale-95 active:scale-90 overflow-hidden" href="#">
<span class="material-symbols-outlined">person</span>
<span class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-label-md text-label-md">Profile</span>
</a>
</nav>
<div class="mt-auto px-6 w-full flex items-center gap-4 overflow-hidden py-4 border-t border-outline-variant">
<div class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="A professional studio portrait of a healthcare professional with a warm smile, wearing a modern white clinical coat. The background is a soft, out-of-focus medical office with light teal and white tones, reflecting a clean and trustworthy medical environment. High-key lighting emphasizes clarity and precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL_AjWDFz6_6lSNr10VcBS6WC287d6dVlHER_CZ6sSBGdsID-9FHAbTHbNGtQ-9gxtOpMtjhSjDRMCzwXSmVgNWy8goo6GR021r3PGyWPOmhJaelGZxJTRyYILt2iQwtJs5iN0F-IgNgHzPN5Nt7EiXh9NiljEjCzmyLDlALHr3gX_FfApis97Y4H51gsC9UZWcr8s2TGGKNXsFCuT1KvdObJIEV3GsGPReCNIsoCXcIaqTOn-tfSImi-oDMCJEBntNoJOICIgjfs">
</div>
<div class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
<p class="font-label-md text-label-md text-on-surface">Dr. Sarah Miller</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Chief Resident</p>
</div>
</div>
<a class="mt-2 flex items-center gap-4 p-3 rounded-xl text-error opacity-70 hover:bg-error-container/20 transition-all scale-95 active:scale-90 overflow-hidden w-[calc(100%-1.5rem)] mx-3" href="#">
<span class="material-symbols-outlined">logout</span>
<span class="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-label-md text-label-md">Sign Out</span>
</a></aside>
<!-- Main Content Canvas -->
<main class="flex-1 h-screen overflow-y-auto custom-scroll flex flex-col">
<!-- Top App Bar -->
<header class="flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-40 backdrop-blur-xl bg-surface/80 dark:bg-inverse-surface/80 shadow-sm">
<div class="flex items-center gap-4">
<h1 class="font-headline-md text-headline-md font-bold text-primary">Settings</h1>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full hover:bg-surface-container-low transition-all focus-within:ring-2 focus-within:ring-primary">
<span class="material-symbols-outlined text-on-surface-variant">notifications</span>
</button>
<button class="p-2 rounded-full hover:bg-surface-container-low transition-all focus-within:ring-2 focus-within:ring-primary">
<span class="material-symbols-outlined text-on-surface-variant">help</span>
</button>
</div>
</header>
<!-- Settings Grid Container -->
<div class="max-w-7xl mx-auto px-gutter py-8 w-full">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left Column: Navigation Summary -->
<div class="lg:col-span-4 space-y-6">
<div class="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10">
<div class="mb-8">
<h2 class="font-title-lg text-title-lg text-on-surface mb-1">Configuration</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Manage your account and medical data privacy preferences.</p>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-3 p-3 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md transition-all" href="#account">
<span class="material-symbols-outlined">manage_accounts</span> Account Settings
                            </a>
<a class="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-all" href="#notifications">
<span class="material-symbols-outlined">notifications_active</span> Notifications
                            </a>
<a class="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-all" href="#privacy">
<span class="material-symbols-outlined">security</span> Privacy &amp; Security
                            </a>
<a class="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-all" href="#appearance">
<span class="material-symbols-outlined">palette</span> Appearance
                            </a>
</nav>
</div>
<div class="bg-primary-container/10 p-6 rounded-3xl border border-primary/10">
<div class="flex items-center gap-3 text-primary mb-3">
<span class="material-symbols-outlined">verified</span>
<span class="font-label-md text-label-md">Intelligence Tier: Premium</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">Your health intelligence reports are enhanced with the latest AI medical synthesis.</p>
<button class="w-full py-2 bg-primary text-white rounded-xl font-label-md text-label-md hover:shadow-lg transition-all">Manage Subscription</button>
</div>
</div>
<!-- Right Column: Settings Sections -->
<div class="lg:col-span-8 space-y-8 pb-10">
<!-- Section: Account Settings -->
<section class="bg-surface-container-lowest p-card-padding rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10" id="account">
<div class="flex items-center gap-4 mb-8">
<div class="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined">account_circle</span>
</div>
<div>
<h3 class="font-title-lg text-title-lg text-on-surface">Account Settings</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Update your primary login information.</p>
</div>
</div>
<div class="space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant px-1">Email Address</label>
<input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary text-body-md font-body-md" type="email" value="sarah.miller@medibrief.ai">
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant px-1">Contact Phone</label>
<input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary text-body-md font-body-md" type="tel" value="+1 (555) 012-3456">
</div>
</div>
<div class="pt-4 border-t border-outline-variant/20">
<div class="flex items-center justify-between">
<div>
<p class="font-label-md text-label-md text-on-surface">Password</p>
<p class="font-body-md text-body-md text-on-surface-variant">Last updated 3 months ago</p>
</div>
<button class="px-6 py-2 border border-primary text-primary rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all">Change Password</button>
</div>
</div>
<div class="flex justify-end pt-4">
<button class="px-8 py-3 bg-primary text-white rounded-xl font-label-md text-label-md hover:shadow-xl transition-all">Save Changes</button>
</div>
</div>
</section>
<!-- Section: Notification Preferences -->
<section class="bg-surface-container-lowest p-card-padding rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10" id="notifications">
<div class="flex items-center gap-4 mb-8">
<div class="w-12 h-12 rounded-2xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined">notifications_active</span>
</div>
<div>
<h3 class="font-title-lg text-title-lg text-on-surface">Notification Preferences</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Choose how you receive health updates and reminders.</p>
</div>
</div>
<div class="space-y-4">
<!-- Table-like layout for notifications -->
<div class="grid grid-cols-4 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20 pb-4 px-2">
<div class="col-span-1">Notification Type</div>
<div class="text-center">Email</div>
<div class="text-center">Push</div>
<div class="text-center">SMS</div>
</div>
<div class="grid grid-cols-4 items-center p-2 hover:bg-surface-container-low transition-colors rounded-xl">
<div class="col-span-1">
<p class="font-label-md text-label-md">Report Analysis</p>
<p class="text-[11px] text-on-surface-variant">AI-generated lab insights</p>
</div>
<div class="flex justify-center"><input checked="" class="toggle-switch" type="checkbox"></div>
<div class="flex justify-center"><input checked="" class="toggle-switch" type="checkbox"></div>
<div class="flex justify-center"><input class="toggle-switch" type="checkbox"></div>
</div>
<div class="grid grid-cols-4 items-center p-2 hover:bg-surface-container-low transition-colors rounded-xl">
<div class="col-span-1">
<p class="font-label-md text-label-md">Doctor Reminders</p>
<p class="text-[11px] text-on-surface-variant">Upcoming appointments</p>
</div>
<div class="flex justify-center"><input checked="" class="toggle-switch" type="checkbox"></div>
<div class="flex justify-center"><input checked="" class="toggle-switch" type="checkbox"></div>
<div class="flex justify-center"><input checked="" class="toggle-switch" type="checkbox"></div>
</div>
<div class="grid grid-cols-4 items-center p-2 hover:bg-surface-container-low transition-colors rounded-xl">
<div class="col-span-1">
<p class="font-label-md text-label-md">Health Intel Tips</p>
<p class="text-[11px] text-on-surface-variant">Personalized wellness tips</p>
</div>
<div class="flex justify-center"><input checked="" class="toggle-switch" type="checkbox"></div>
<div class="flex justify-center"><input class="toggle-switch" type="checkbox"></div>
<div class="flex justify-center"><input class="toggle-switch" type="checkbox"></div>
</div>
<div class="flex justify-end pt-6">
<button class="px-8 py-3 bg-primary text-white rounded-xl font-label-md text-label-md hover:shadow-xl transition-all">Update Preferences</button>
</div>
</div>
</section>
<!-- Section: Privacy & Security -->
<section class="bg-surface-container-lowest p-card-padding rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10" id="privacy">
<div class="flex items-center gap-4 mb-8">
<div class="w-12 h-12 rounded-2xl bg-error-container/20 flex items-center justify-center text-error">
<span class="material-symbols-outlined">security</span>
</div>
<div>
<h3 class="font-title-lg text-title-lg text-on-surface">Privacy &amp; Security</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Control your data and authentication methods.</p>
</div>
</div>
<div class="space-y-6">
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary mt-1">vibration</span>
<div>
<p class="font-label-md text-label-md text-on-surface">Two-Factor Authentication</p>
<p class="font-body-md text-body-md text-on-surface-variant">Add an extra layer of security to your health records.</p>
</div>
</div>
<input checked="" class="toggle-switch" type="checkbox">
</div>
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary mt-1">share</span>
<div>
<p class="font-label-md text-label-md text-on-surface">Data Sharing Permissions</p>
<p class="font-body-md text-body-md text-on-surface-variant">Allow anonymous data usage for medical research advancement.</p>
</div>
</div>
<input class="toggle-switch" type="checkbox">
</div>
<div class="pt-4 flex items-center justify-between border-t border-outline-variant/20">
<div>
<p class="font-label-md text-label-md text-on-surface">Download Health Vault</p>
<p class="font-body-md text-body-md text-on-surface-variant">Get a full export of all your medical data (Encrypted PDF).</p>
</div>
<button class="flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-xl font-label-md text-label-md hover:bg-secondary/90 transition-all">
<span class="material-symbols-outlined text-sm">download</span> Export
                                </button>
</div>
</div>
</section>
<!-- Section: Appearance -->
<section class="bg-surface-container-lowest p-card-padding rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10" id="appearance">
<div class="flex items-center gap-4 mb-8">
<div class="w-12 h-12 rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed-variant">
<span class="material-symbols-outlined">palette</span>
</div>
<div>
<h3 class="font-title-lg text-title-lg text-on-surface">Appearance</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Customize your interface for comfort and clarity.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="cursor-pointer group p-4 border-2 border-primary bg-surface rounded-2xl transition-all hover:scale-[1.02]" id="lightModeBtn" onclick="setTheme('light')">
<div class="flex items-center justify-between mb-4">
<span class="material-symbols-outlined text-primary">light_mode</span>
<div class="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
<div class="w-3 h-3 bg-primary rounded-full" id="lightModeCheck"></div>
</div>
</div>
<p class="font-label-md text-label-md text-on-surface">Light Mode</p>
<p class="font-body-md text-body-md text-on-surface-variant">Optimal for bright clinical environments.</p>
</div>
<div class="cursor-pointer group p-4 border-2 border-transparent bg-inverse-surface rounded-2xl transition-all hover:scale-[1.02]" id="darkModeBtn" onclick="setTheme('dark')">
<div class="flex items-center justify-between mb-4">
<span class="material-symbols-outlined text-primary-fixed">dark_mode</span>
<div class="w-5 h-5 rounded-full border-2 border-outline flex items-center justify-center">
<div class="w-3 h-3 bg-transparent rounded-full" id="darkModeCheck"></div>
</div>
</div>
<p class="font-label-md text-label-md text-surface-bright">Dark Mode</p>
<p class="font-body-md text-body-md text-surface-variant">Reduced eye strain in low-light settings.</p>
</div>
</div>
</section>
</div>
</div>
</div>
<!-- Footer -->
<footer class="mt-auto bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant py-8">
<div class="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex flex-col gap-1">
<p class="font-label-md text-label-md font-bold text-on-surface">MediBrief Health Intelligence</p>
<p class="font-label-sm text-label-sm text-on-surface-variant max-w-xl">
                        © 2024 MediBrief. Medical Informational Notice: This dashboard is for informational purposes only and does not constitute medical advice.
                    </p>
</div>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Support</a>
</div>
</div>
</footer>
</main>
<script>
        function setTheme(theme) {
            const html = document.documentElement;
            const lightBtn = document.getElementById('lightModeBtn');
            const darkBtn = document.getElementById('darkModeBtn');
            const lightCheck = document.getElementById('lightModeCheck');
            const darkCheck = document.getElementById('darkModeCheck');

            if (theme === 'dark') {
                html.classList.add('dark');
                darkBtn.classList.add('border-primary');
                darkBtn.classList.remove('border-transparent');
                lightBtn.classList.remove('border-primary');
                lightBtn.classList.add('border-transparent');
                darkCheck.classList.add('bg-primary');
                lightCheck.classList.remove('bg-primary');
            } else {
                html.classList.remove('dark');
                lightBtn.classList.add('border-primary');
                lightBtn.classList.remove('border-transparent');
                darkBtn.classList.remove('border-primary');
                darkBtn.classList.add('border-transparent');
                lightCheck.classList.add('bg-primary');
                darkCheck.classList.remove('bg-primary');
            }
        }

        // Smooth scroll implementation for side links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    // Update active state
                    document.querySelectorAll('nav a[href^="#"]').forEach(a => {
                        a.classList.remove('bg-primary-container', 'text-on-primary-container');
                        a.classList.add('hover:bg-surface-container-low', 'text-on-surface-variant');
                    });
                    this.classList.add('bg-primary-container', 'text-on-primary-container');
                    this.classList.remove('hover:bg-surface-container-low', 'text-on-surface-variant');
                }
            });
        });
    </script>


</body></html>

<!-- User Profile -->
<!DOCTYPE html><html lang="en" class="light"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=block" rel="stylesheet"><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script id="tailwind-config">try{
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-container": "#f4fffc",
                    "primary-fixed": "#89f5e7",
                    "on-primary-fixed": "#00201d",
                    "surface-dim": "#cbdbf5",
                    "error-container": "#ffdad6",
                    "inverse-on-surface": "#eaf1ff",
                    "surface-tint": "#006a61",
                    "inverse-primary": "#6bd8cb",
                    "secondary-fixed-dim": "#89ceff",
                    "on-tertiary-fixed-variant": "#005236",
                    "secondary-fixed": "#c9e6ff",
                    "on-tertiary-container": "#f5fff6",
                    "on-secondary": "#ffffff",
                    "surface-container": "#e5eeff",
                    "background": "#f8f9ff",
                    "on-background": "#0b1c30",
                    "primary-fixed-dim": "#6bd8cb",
                    "on-surface": "#0b1c30",
                    "on-secondary-container": "#004666",
                    "tertiary-container": "#00855b",
                    "on-tertiary-fixed": "#002113",
                    "surface-container-low": "#eff4ff",
                    "on-secondary-fixed": "#001e2f",
                    "on-tertiary": "#ffffff",
                    "tertiary": "#006947",
                    "secondary-container": "#39b8fd",
                    "on-primary-fixed-variant": "#005049",
                    "surface-container-lowest": "#ffffff",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-error": "#ffffff",
                    "outline-variant": "#bcc9c6",
                    "on-error-container": "#93000a",
                    "primary": "#00685f",
                    "surface": "#f8f9ff",
                    "surface-bright": "#f8f9ff",
                    "primary-container": "#008378",
                    "on-secondary-fixed-variant": "#004c6e",
                    "secondary": "#006591",
                    "outline": "#6d7a77",
                    "surface-container-highest": "#d3e4fe",
                    "tertiary-fixed": "#6ffbbe",
                    "tertiary-fixed-dim": "#4edea3",
                    "on-surface-variant": "#3d4947",
                    "surface-container-high": "#dce9ff",
                    "surface-variant": "#d3e4fe",
                    "inverse-surface": "#213145"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "1.5rem",
                    "nav-rail-width": "80px",
                    "card-padding": "1.5rem",
                    "nav-rail-expanded": "240px",
                    "container-margin": "2rem",
                    "section-gap": "2.5rem"
            },
            "fontFamily": {
                    "headline-lg": ["Plus Jakarta Sans"],
                    "body-md": ["Plus Jakarta Sans"],
                    "body-lg": ["Plus Jakarta Sans"],
                    "label-sm": ["Plus Jakarta Sans"],
                    "display-lg": ["Plus Jakarta Sans"],
                    "title-lg": ["Plus Jakarta Sans"],
                    "label-md": ["Plus Jakarta Sans"],
                    "headline-md": ["Plus Jakarta Sans"]
            }
          }
        }
      }
    }catch(_e){}</script><meta charset="utf-8"></head><body class="bg-background text-on-background min-h-screen flex overflow-hidden">
<!-- SideNavBar (Rail) -->
<aside class="w-[80px] hover:w-[240px] transition-all duration-300 h-screen sticky left-0 top-0 bg-surface dark:bg-inverse-surface shadow-[4px_0_20px_rgba(0,0,0,0.05)] z-50 group flex flex-col py-gutter items-center overflow-hidden">
<div class="mb-8 flex items-center w-full px-6">
<span class="material-symbols-outlined text-primary text-3xl shrink-0">clinical_notes</span>
<span class="ml-4 font-headline-md text-headline-md font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">MediBrief</span>
</div>
<nav class="flex flex-col gap-4 w-full px-2">
<!-- Dashboard -->
<button class="flex items-center w-full p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors group/item">
<span class="material-symbols-outlined shrink-0">dashboard</span>
<span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dashboard</span>
</button>
<!-- Reports -->
<button class="flex items-center w-full p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors group/item">
<span class="material-symbols-outlined shrink-0">description</span>
<span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Reports</span>
</button>
<!-- History (ACTIVE) -->
<button class="flex items-center w-full p-3 rounded-xl border-l-4 border-primary text-primary bg-primary-container/10 group/item">
<span class="material-symbols-outlined shrink-0">history</span>
<span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">History</span>
</button>
<!-- Settings -->
<button class="flex items-center w-full p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors group/item">
<span class="material-symbols-outlined shrink-0">settings</span>
<span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Settings</span>
</button>
<!-- Profile -->
<button class="flex items-center w-full p-3 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors group/item">
<span class="material-symbols-outlined shrink-0">person</span>
<span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Profile</span>
</button>
</nav>
<button class="flex items-center w-full p-3 mb-4 rounded-xl text-error opacity-70 hover:bg-error/10 transition-colors group/item">
  <span class="material-symbols-outlined shrink-0">logout</span>
  <span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sign Out</span>
</button><button class="flex items-center w-full p-3 mb-4 rounded-xl text-error opacity-70 hover:bg-error/10 transition-colors group/item">
  <span class="material-symbols-outlined shrink-0">logout</span>
  <span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sign Out</span>
</button><button class="flex items-center w-full p-3 mb-4 rounded-xl text-error opacity-70 hover:bg-error/10 transition-colors group/item">
  <span class="material-symbols-outlined shrink-0">logout</span>
  <span class="ml-6 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sign Out</span>
</button><div class="mt-auto w-full px-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-white text-sm">health_metrics</span>
</div>
<div class="ml-3">
<p class="font-label-md text-label-md font-bold">Health Intel</p>
<p class="text-[10px] text-on-surface-variant">v2.4.0</p>
</div>
</div>
</aside>
<!-- Main Viewport -->
<div class="flex-1 flex flex-col h-screen overflow-hidden relative">
<!-- TopNavBar -->
<header class="flex justify-between items-center px-gutter py-4 w-full sticky top-0 backdrop-blur-xl bg-surface/80 dark:bg-inverse-surface/80 shadow-sm z-40">
<div class="flex items-center gap-6">
<div class="relative group">
<span class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-on-surface-variant text-lg">search</span>
</span>
<input type="text" placeholder="Search history..." class="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-body-md font-body-md focus:ring-2 focus:ring-primary w-64 transition-all">
</div>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full hover:bg-surface-container-low transition-all relative">
<span class="material-symbols-outlined text-on-surface-variant">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
</button>
<button class="p-2 rounded-full hover:bg-surface-container-low transition-all">
<span class="material-symbols-outlined text-on-surface-variant">help</span>
</button>
<div class="h-8 w-[1px] bg-outline-variant mx-2"></div>
<div class="flex items-center gap-3 cursor-pointer group"><div class="relative">
  <div class="flex items-center gap-3">
    <div class="text-right hidden sm:block">
      <p class="font-label-md text-label-md text-on-surface font-bold">Alexander Reed</p>
      <p class="font-label-sm text-label-sm text-on-surface-variant">Patient ID: #MB-9821</p>
    </div>
    <img class="w-10 h-10 rounded-full border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95L66IE8BrIpf03zz65mPXyitqvqJRn3e5Q0kovucU9HYkB8FBKXiLtXdcCUC1NrWmD9T4oOiLUz-FSnuoGkdCgfL_I3of-QhpckrLcSLTnQ1tn0iLdGE2x61oE7B3QrQMHwi8G1vA_O9x-TG3YAY8oNt-ZjN7HoEIREBYAFQBVljdawznucwiZWc8IwEDpjBw1-alsPRfhQsW2BUFkCmosiVIPfiF7mzG-szBdh91Vz95IiB1oNALMInSaLSia1xCBixf55shRY">
  </div>
  <!-- Dropdown Menu -->
  <div class="absolute right-0 top-full mt-2 w-48 bg-surface border border-outline-variant/20 rounded-xl soft-shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
    <div class="p-2">
      <button class="flex items-center w-full gap-3 p-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant text-label-md">
        <span class="material-symbols-outlined text-lg">account_circle</span>
        Account Settings
      </button>
      <button class="flex items-center w-full gap-3 p-2 rounded-lg hover:bg-error/10 text-error text-label-md border-t border-outline-variant/10 mt-1">
        <span class="material-symbols-outlined text-lg">logout</span>
        Sign Out
      </button>
    </div>
  </div>
</div></div>
</div>
</header>
<!-- Content Canvas -->
<main class="flex-1 overflow-y-auto no-scrollbar p-gutter space-y-section-gap">
<!-- Page Header -->
<section class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
<h1 class="font-headline-lg text-headline-lg text-on-surface">Health Intelligence History</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-1">Detailed analysis of your clinical trajectory over the last 12 months.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-md text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-all">
<span class="material-symbols-outlined text-lg">download</span>
                        Export PDF
                    </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md font-label-md text-label-md hover:opacity-90 transition-all shadow-sm">
<span class="material-symbols-outlined text-lg">compare_arrows</span>
                        New Comparison
                    </button>
</div>
</section>
<!-- Main Dashboard Grid -->
<div class="grid grid-cols-12 gap-gutter">
<!-- Timeline View (Left Column) -->
<div class="col-span-12 lg:col-span-3 space-y-4">
<h3 class="font-title-lg text-title-lg text-on-surface px-1">Report Timeline</h3>
<div class="relative pl-4 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
<!-- Active Entry -->
<div class="relative pl-8 group cursor-pointer">
<div class="absolute left-[-29px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10">
<span class="material-symbols-outlined text-[12px] text-white" style="font-variation-settings: 'FILL' 1;">check</span>
</div>
<div class="bg-white p-4 rounded-xl soft-shadow border border-primary/20">
<span class="font-label-sm text-label-sm text-primary font-bold">NOV 20, 2023</span>
<p class="font-title-lg text-title-lg text-on-surface text-sm mt-1">General Lab Panel</p>
<div class="flex gap-2 mt-2">
<span class="material-symbols-outlined text-on-surface-variant text-lg">science</span>
<span class="material-symbols-outlined text-on-surface-variant text-lg">ecg</span>
</div>
</div>
</div>
<!-- Previous Entry -->
<div class="relative pl-8 group cursor-pointer">
<div class="absolute left-[-29px] top-1 w-6 h-6 rounded-full bg-outline-variant flex items-center justify-center border-4 border-background z-10 group-hover:bg-primary/50 transition-colors"></div>
<div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 hover:border-primary/20 transition-all">
<span class="font-label-sm text-label-sm text-on-surface-variant">AUG 15, 2023</span>
<p class="font-title-lg text-title-lg text-on-surface text-sm mt-1">Cardiac Stress Test</p>
<div class="flex gap-2 mt-2 opacity-50">
<span class="material-symbols-outlined text-on-surface-variant text-lg">monitor_heart</span>
</div>
</div>
</div>
<!-- Previous Entry -->
<div class="relative pl-8 group cursor-pointer">
<div class="absolute left-[-29px] top-1 w-6 h-6 rounded-full bg-outline-variant flex items-center justify-center border-4 border-background z-10 group-hover:bg-primary/50 transition-colors"></div>
<div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 hover:border-primary/20 transition-all">
<span class="font-label-sm text-label-sm text-on-surface-variant">MAY 02, 2023</span>
<p class="font-title-lg text-title-lg text-on-surface text-sm mt-1">Annual Physical</p>
<div class="flex gap-2 mt-2 opacity-50">
<span class="material-symbols-outlined text-on-surface-variant text-lg">medical_services</span>
</div>
</div>
</div>
</div>
</div>
<!-- Main Content Area -->
<div class="col-span-12 lg:col-span-9 space-y-gutter">
<!-- Severity Heatmap -->
<div class="bg-white rounded-xl soft-shadow border border-outline-variant/20 overflow-hidden">
<div class="glass-header px-card-padding py-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/30">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">grid_view</span>
<h2 class="font-title-lg text-title-lg">System Severity Matrix</h2>
</div>
<div class="flex gap-4">
<div class="flex items-center gap-1"><div class="heatmap-cell bg-tertiary/20 scale-75"></div><span class="text-[10px] font-label-sm">Optimal</span></div>
<div class="flex items-center gap-1"><div class="heatmap-cell bg-secondary-container/30 scale-75"></div><span class="text-[10px] font-label-sm">Mild</span></div>
<div class="flex items-center gap-1"><div class="heatmap-cell bg-error/30 scale-75"></div><span class="text-[10px] font-label-sm">Critical</span></div>
</div>
</div>
<div class="p-card-padding overflow-x-auto no-scrollbar">
<table class="w-full text-left">
<thead>
<tr>
<th class="pb-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Category</th>
<th class="pb-4 font-label-sm text-label-sm text-on-surface-variant text-center">Feb</th>
<th class="pb-4 font-label-sm text-label-sm text-on-surface-variant text-center">May</th>
<th class="pb-4 font-label-sm text-label-sm text-on-surface-variant text-center">Aug</th>
<th class="pb-4 font-label-sm text-label-sm text-on-surface-variant text-center">Nov</th>
<th class="pb-4 font-label-sm text-label-sm text-on-surface-variant text-center">Trend</th>
</tr>
</thead>
<tbody class="space-y-4">
<tr class="border-t border-outline-variant/10">
<td class="py-4 font-body-md font-bold">Cardiovascular</td>
<td class="py-4"><div class="heatmap-cell bg-tertiary mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-tertiary mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-secondary-container mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-tertiary mx-auto"></div></td>
<td class="py-4 text-center"><span class="material-symbols-outlined text-tertiary">trending_up</span></td>
</tr>
<tr class="border-t border-outline-variant/10">
<td class="py-4 font-body-md font-bold">Hematology</td>
<td class="py-4"><div class="heatmap-cell bg-secondary-container mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-error mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-secondary-container mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-secondary-container mx-auto"></div></td>
<td class="py-4 text-center"><span class="material-symbols-outlined text-secondary">trending_flat</span></td>
</tr>
<tr class="border-t border-outline-variant/10">
<td class="py-4 font-body-md font-bold">Hepatic (Liver)</td>
<td class="py-4"><div class="heatmap-cell bg-tertiary mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-tertiary mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-tertiary mx-auto"></div></td>
<td class="py-4"><div class="heatmap-cell bg-tertiary mx-auto"></div></td>
<td class="py-4 text-center"><span class="material-symbols-outlined text-tertiary">trending_flat</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Comparison Mode Side-by-Side -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Previous Lab -->
<div class="bg-surface-container-low rounded-xl p-card-padding border border-outline-variant/30">
<div class="flex justify-between items-start mb-6">
<div>
<h4 class="font-label-md text-label-md text-on-surface-variant">BASELINE</h4>
<h3 class="font-headline-md text-headline-md">Aug 15 Lab</h3>
</div>
<span class="material-symbols-outlined text-on-surface-variant opacity-40">history</span>
</div>
<div class="space-y-4">
<div class="flex justify-between py-2 border-b border-outline-variant/20">
<span class="text-body-md">Blood Pressure</span>
<span class="font-bold">138/88 <span class="text-[10px] font-normal">mmHg</span></span>
</div>
<div class="flex justify-between py-2 border-b border-outline-variant/20">
<span class="text-body-md">Cholesterol (LDL)</span>
<span class="font-bold">124 <span class="text-[10px] font-normal">mg/dL</span></span>
</div>
<div class="flex justify-between py-2 border-b border-outline-variant/20">
<span class="text-body-md">Hemoglobin A1c</span>
<span class="font-bold">6.1 <span class="text-[10px] font-normal">%</span></span>
</div>
</div>
</div>
<!-- Current Lab -->
<div class="bg-white rounded-xl p-card-padding soft-shadow border-2 border-primary/30 relative">
<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full font-label-sm text-[10px] tracking-widest">CURRENT SELECTION</div>
<div class="flex justify-between items-start mb-6">
<div>
<h4 class="font-label-md text-label-md text-primary">LATEST INSIGHT</h4>
<h3 class="font-headline-md text-headline-md">Nov 20 Lab</h3>
</div>
<span class="material-symbols-outlined text-primary">verified</span>
</div>
<div class="space-y-4">
<div class="flex justify-between py-2 border-b border-outline-variant/20 items-center">
<span class="text-body-md">Blood Pressure</span>
<div class="text-right">
<span class="font-bold text-tertiary">122/78</span>
<div class="flex items-center justify-end text-[10px] text-tertiary">
<span class="material-symbols-outlined text-[12px]">arrow_downward</span> 11.5% Improvement
                                        </div>
</div>
</div>
<div class="flex justify-between py-2 border-b border-outline-variant/20 items-center">
<span class="text-body-md">Cholesterol (LDL)</span>
<div class="text-right">
<span class="font-bold text-tertiary">108</span>
<div class="flex items-center justify-end text-[10px] text-tertiary">
<span class="material-symbols-outlined text-[12px]">arrow_downward</span> 12.9% Improvement
                                        </div>
</div>
</div>
<div class="flex justify-between py-2 border-b border-outline-variant/20 items-center">
<span class="text-body-md">Hemoglobin A1c</span>
<div class="text-right">
<span class="font-bold text-on-surface">5.9</span>
<div class="flex items-center justify-end text-[10px] text-on-surface-variant">
<span class="material-symbols-outlined text-[12px]">arrow_downward</span> 3.2% Shift
                                        </div>
</div>
</div>
</div>
</div>
</div>
<!-- Trend Charts -->
<div class="bg-white rounded-xl soft-shadow border border-outline-variant/20 p-card-padding">
<div class="flex justify-between items-center mb-8">
<div>
<h2 class="font-title-lg text-title-lg">6-Month Metric Trajectory</h2>
<p class="text-body-md text-on-surface-variant">Continuous monitoring of primary vital signs</p>
</div>
<div class="flex bg-surface-container rounded-lg p-1">
<button class="px-3 py-1 bg-white rounded shadow-sm text-label-sm">Monthly</button>
<button class="px-3 py-1 text-label-sm text-on-surface-variant opacity-70">Weekly</button>
</div>
</div>
<div class="h-64 relative w-full overflow-hidden">
<!-- Visual placeholder for a complex line chart -->
<div class="absolute inset-0 flex items-end justify-between px-4 pb-8">
<div class="w-[12%] h-[60%] bg-primary/10 rounded-t-lg relative group">
<div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-on-background text-white text-[10px] px-2 py-1 rounded">138</div>
</div>
<div class="w-[12%] h-[65%] bg-primary/20 rounded-t-lg"></div>
<div class="w-[12%] h-[55%] bg-primary/10 rounded-t-lg"></div>
<div class="w-[12%] h-[58%] bg-primary/20 rounded-t-lg"></div>
<div class="w-[12%] h-[45%] bg-primary/30 rounded-t-lg"></div>
<div class="w-[12%] h-[40%] bg-primary rounded-t-lg relative group">
<div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-100 bg-primary text-white text-[10px] px-2 py-1 rounded">122</div>
</div>
</div>
<!-- SVG Sparkline Path -->
<svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M 0 60 Q 15 50, 25 35 T 50 45 T 75 55 T 100 65" fill="none" stroke="#00685f" stroke-width="2" vector-effect="non-scaling-stroke"></path>
<path d="M 0 75 Q 20 70, 40 85 T 60 75 T 80 80 T 100 70" fill="none" stroke="#006591" stroke-dasharray="4" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg>
<!-- X-Axis -->
<div class="absolute bottom-0 w-full flex justify-between px-2 text-[10px] font-label-sm text-on-surface-variant uppercase tracking-widest pt-4 border-t border-outline-variant/10">
<span class="">Jun</span><span class="">Jul</span><span class="">Aug</span><span class="">Sep</span><span class="">Oct</span><span class="">Nov</span>
</div>
</div>
<div class="mt-8 flex gap-6">
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-primary"></span>
<span class="font-label-md text-label-md">Systolic Pressure</span>
</div>
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full border-2 border-secondary border-dashed"></span>
<span class="font-label-md text-label-md">LDL Cholesterol</span>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="full-width py-8 bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant">
<div class="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex flex-col items-center md:items-start">
<p class="font-label-md text-label-md font-bold text-on-surface">MediBrief Health Intelligence</p>
<p class="font-label-sm text-label-sm text-on-surface-variant max-w-xl mt-2 text-center md:text-left">
                        © 2024 MediBrief. Medical Informational Notice: This dashboard is for informational purposes only and does not constitute medical advice.
                    </p>
</div>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Support</a>
</div>
</div>
</footer>
</div>
<!-- Micro-interactions Script -->
<script>
        document.querySelectorAll('.group\/item').forEach(item => {
            item.addEventListener('mousedown', () => {
                item.classList.add('scale-95');
            });
            item.addEventListener('mouseup', () => {
                item.classList.remove('scale-95');
            });
        });

        // Simple smooth scroll behavior for the main canvas
        const mainCanvas = document.querySelector('main');
        mainCanvas.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (mainCanvas.scrollTop > 10) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    </script>




</body></html>

<!-- Settings -->
<!DOCTYPE html><html lang="en" class="light"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=block" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script id="tailwind-config">try{
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-container": "#f4fffc",
                        "primary-fixed": "#89f5e7",
                        "on-primary-fixed": "#00201d",
                        "surface-dim": "#cbdbf5",
                        "error-container": "#ffdad6",
                        "inverse-on-surface": "#eaf1ff",
                        "surface-tint": "#006a61",
                        "inverse-primary": "#6bd8cb",
                        "secondary-fixed-dim": "#89ceff",
                        "on-tertiary-fixed-variant": "#005236",
                        "secondary-fixed": "#c9e6ff",
                        "on-tertiary-container": "#f5fff6",
                        "on-secondary": "#ffffff",
                        "surface-container": "#e5eeff",
                        "background": "#f8f9ff",
                        "on-background": "#0b1c30",
                        "primary-fixed-dim": "#6bd8cb",
                        "on-surface": "#0b1c30",
                        "on-secondary-container": "#004666",
                        "tertiary-container": "#00855b",
                        "on-tertiary-fixed": "#002113",
                        "surface-container-low": "#eff4ff",
                        "on-secondary-fixed": "#001e2f",
                        "on-tertiary": "#ffffff",
                        "tertiary": "#006947",
                        "secondary-container": "#39b8fd",
                        "on-primary-fixed-variant": "#005049",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-error": "#ffffff",
                        "outline-variant": "#bcc9c6",
                        "on-error-container": "#93000a",
                        "primary": "#00685f",
                        "surface": "#f8f9ff",
                        "surface-bright": "#f8f9ff",
                        "primary-container": "#008378",
                        "on-secondary-fixed-variant": "#004c6e",
                        "secondary": "#006591",
                        "outline": "#6d7a77",
                        "surface-container-highest": "#d3e4fe",
                        "tertiary-fixed": "#6ffbbe",
                        "tertiary-fixed-dim": "#4edea3",
                        "on-surface-variant": "#3d4947",
                        "surface-container-high": "#dce9ff",
                        "surface-variant": "#d3e4fe",
                        "inverse-surface": "#213145"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "1.5rem",
                        "nav-rail-width": "80px",
                        "card-padding": "1.5rem",
                        "nav-rail-expanded": "240px",
                        "container-margin": "2rem",
                        "section-gap": "2.5rem"
                    },
                    "fontFamily": {
                        "headline-lg": ["Plus Jakarta Sans"],
                        "body-md": ["Plus Jakarta Sans"],
                        "body-lg": ["Plus Jakarta Sans"],
                        "label-sm": ["Plus Jakarta Sans"],
                        "display-lg": ["Plus Jakarta Sans"],
                        "title-lg": ["Plus Jakarta Sans"],
                        "label-md": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                        "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "body-lg": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "label-sm": ["11px", { "lineHeight": "1.2", "fontWeight": "500" }],
                        "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "title-lg": ["20px", { "lineHeight": "1.4", "fontWeight": "600" }],
                        "label-md": ["12px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
                        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }]
                    }
                },
            },
        }
    }catch(_e){}</script><meta charset="utf-8"></head><body class="bg-background text-on-surface">
<div class="flex min-h-screen">
<!-- SideNavBar (Rail) -->
<aside class="w-[80px] hover:w-[240px] transition-all duration-300 h-screen sticky left-0 top-0 bg-surface shadow-[4px_0_20px_rgba(0,0,0,0.05)] flex flex-col py-6 items-center overflow-hidden z-50 group">
<div class="mb-12 flex flex-col items-center">
<span class="font-headline-md text-headline-md font-bold text-primary">MB</span>
<div class="hidden group-hover:block transition-all duration-300 mt-2">
<span class="font-title-lg text-title-lg font-bold text-primary">MediBrief</span>
</div>
</div>
<nav class="flex flex-col gap-6 w-full px-4">
<a href="#" class="flex items-center gap-4 py-3 px-2 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">dashboard</span>
<span class="hidden group-hover:block font-label-md text-label-md">Dashboard</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-2 rounded-xl border-l-4 border-primary text-primary bg-primary-container/10 transition-colors">
<span class="material-symbols-outlined">description</span>
<span class="hidden group-hover:block font-label-md text-label-md">Reports</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-2 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">history</span>
<span class="hidden group-hover:block font-label-md text-label-md">History</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-2 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">settings</span>
<span class="hidden group-hover:block font-label-md text-label-md">Settings</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-2 rounded-xl text-on-surface-variant opacity-70 hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">person</span>
<span class="hidden group-hover:block font-label-md text-label-md">Profile</span>
</a>
<a href="#" class="flex items-center gap-4 py-3 px-2 rounded-xl text-error opacity-70 hover:bg-error/5 transition-colors mt-auto">
<span class="material-symbols-outlined">logout</span>
<span class="hidden group-hover:block font-label-md text-label-md">Sign Out</span>
</a></nav>
</aside>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col overflow-hidden">
<!-- TopNavBar -->
<header class="flex justify-between items-center px-gutter py-4 w-full sticky top-0 backdrop-blur-xl bg-surface/80 shadow-sm z-40">
<div class="flex items-center gap-4">
<h1 class="font-title-lg text-title-lg font-bold text-primary">Report Detail: Blood Panel Analysis</h1>
<span class="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">ID: #49281-MB</span>
</div>
<div class="flex items-center gap-6">
<div class="relative focus-within:ring-2 focus-within:ring-primary rounded-lg transition-all">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input type="text" placeholder="Search report content..." class="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg font-body-md text-body-md w-64 focus:ring-0">
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full cursor-pointer">notifications</span>
<span class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full cursor-pointer">help</span>
<div class="relative group">
    <button class="flex items-center gap-2 p-1 rounded-full hover:bg-surface-container-low transition-all border-2 border-transparent hover:border-primary-container">
        <img class="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXTiFSzpkaaOH8600SIF79dttuq1dZNipAYSd3n29FLr4A82ED1JOD4iVcC3HY9Ijn0s3jpb9Rg71g74VaJgnNdmg_V8A2l3EQEy19VyM_lxVI2bQKNXHCcQvQgssdSHGoroWJVG3rbSPLmrrhjfg7HVbrWHvpi8zq6SeCXOm4B2Q_qZXZ52agIU-o87uOpGatRpP2iXZg3INwCiSBTK4X1P93uFmZixzfDU5RXR79YMSI64amO2a5jLfm1CEE5rF_QGKtfBXXMHU" alt="User Profile">
        <span class="material-symbols-outlined text-on-surface-variant">expand_more</span>
    </button>
    <!-- Dropdown Menu -->
    <div class="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-outline-variant/10 py-2 hidden group-hover:block z-50">
        <div class="px-4 py-2 border-b border-outline-variant/10 mb-1">
            <p class="font-label-md text-label-md text-on-surface">Alex Johnson</p>
            <p class="font-label-sm text-label-sm text-on-surface-variant">Patient ID: #49281</p>
        </div>
        <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-surface-container-low transition-colors">
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant">person</span>
            <span class="font-label-md text-label-md text-on-surface">Profile</span>
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-surface-container-low transition-colors">
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant">settings</span>
            <span class="font-label-md text-label-md text-on-surface">Settings</span>
        </a>
        <div class="h-[1px] bg-outline-variant/10 my-1"></div>
        <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-error/5 text-error transition-colors">
            <span class="material-symbols-outlined text-[20px]">logout</span>
            <span class="font-label-md text-label-md font-bold">Sign Out</span>
        </a>
    </div>
</div>
</div>
</div>
</header>
<!-- Dashboard Content -->
<div class="flex-1 p-gutter overflow-y-auto bg-background">
<div class="grid grid-cols-12 gap-6 h-full min-h-[800px]">
<!-- Left Side: Document Preview (8 Cols) -->
<div class="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
<div class="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10 overflow-hidden flex-1 relative group">
<div class="glass-panel absolute top-4 left-4 right-4 py-3 px-6 rounded-2xl flex justify-between items-center z-10">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">picture_as_pdf</span>
<span class="font-label-md text-label-md text-on-surface">Original_Blood_Panel_Oct2023.pdf</span>
</div>
<div class="flex gap-2">
<button class="p-2 hover:bg-surface-container rounded-lg transition-colors"><span class="material-symbols-outlined">zoom_in</span></button>
<button class="p-2 hover:bg-surface-container rounded-lg transition-colors"><span class="material-symbols-outlined">fullscreen</span></button>
</div>
</div>
<div class="w-full h-full bg-surface-dim/30 flex items-center justify-center p-12">
<div class="w-full max-w-2xl bg-white shadow-2xl rounded-sm p-12 min-h-[700px] border border-outline-variant">
<!-- Visual placeholder for a PDF document -->
<div class="border-b-2 border-on-surface-variant/10 pb-6 mb-8 flex justify-between">
<div>
<div class="h-6 w-48 bg-surface-container-high rounded-md mb-2"></div>
<div class="h-4 w-32 bg-surface-container rounded-md"></div>
</div>
<div class="h-12 w-12 bg-primary/10 rounded-full"></div>
</div>
<div class="space-y-6">
<div class="flex justify-between items-center">
<div class="h-4 w-1/3 bg-surface-container-high rounded-md"></div>
<div class="h-4 w-1/4 bg-surface-container rounded-md"></div>
</div>
<div class="h-[1px] w-full bg-outline-variant/30"></div>
<div class="grid grid-cols-4 gap-4">
<div class="h-4 w-full bg-surface-container rounded-md"></div>
<div class="h-4 w-full bg-surface-container rounded-md"></div>
<div class="h-4 w-full bg-surface-container-high rounded-md"></div>
<div class="h-4 w-full bg-surface-container rounded-md"></div>
</div>
<div class="grid grid-cols-4 gap-4">
<div class="h-4 w-full bg-surface-container rounded-md"></div>
<div class="h-4 w-full bg-surface-container rounded-md"></div>
<div class="h-4 w-full bg-error/10 rounded-md"></div>
<div class="h-4 w-full bg-surface-container rounded-md"></div>
</div>
<div class="h-[200px] w-full bg-surface-container-low border border-dashed border-outline-variant rounded-xl flex items-center justify-center">
<span class="text-on-surface-variant font-label-md">Laboratory Results Data Table</span>
</div>
<div class="space-y-3">
<div class="h-3 w-full bg-surface-container rounded-md"></div>
<div class="h-3 w-5/6 bg-surface-container rounded-md"></div>
<div class="h-3 w-4/6 bg-surface-container rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
<!-- Action Bar -->
<div class="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10 flex flex-wrap justify-between items-center gap-4">
<div class="flex items-center gap-4">
<button class="bg-primary text-white px-6 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-surface-tint active:scale-95 transition-all">
<span class="material-symbols-outlined text-[20px]">send</span>
                                    Send to Doctor
                                </button>
<button class="border border-primary text-primary px-6 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-primary-container/10 active:scale-95 transition-all">
<span class="material-symbols-outlined text-[20px]">download</span>
                                    Download PDF
                                </button>
</div>
<button class="text-on-surface-variant font-label-md text-label-md flex items-center gap-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">share</span>
                                Share Report
                            </button>
</div>
</div>
<!-- Right Side: AI Analysis Panel (4-5 Cols) -->
<div class="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
<!-- AI Intelligence Summary -->
<div class="bg-white p-card-padding rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10 flex flex-col gap-6 relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div class="flex justify-between items-start z-10">
<div>
<h2 class="font-headline-md text-headline-md text-on-surface">AI Analysis</h2>
<div class="flex items-center gap-2 mt-1">
<span class="material-symbols-outlined text-primary text-[16px]" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">AI Analysis: 98% confidence</span>
</div>
</div>
<span class="bg-error-container text-on-error-container px-4 py-1.5 rounded-full font-label-md text-label-md uppercase tracking-wider font-bold">Moderate Severity</span>
</div>
<div class="p-5 bg-surface-container-low rounded-2xl border border-outline-variant/20">
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                    The report indicates elevated levels of Low-Density Lipoprotein (LDL) and slightly higher than normal fasting glucose. While overall markers are stable, the cholesterol levels suggest a risk of plaque buildup if left unmanaged.
                                </p>
</div>
<!-- Abnormal Values Section -->
<div class="flex flex-col gap-4">
<h3 class="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-error">warning</span>
                                    Abnormal Values
                                </h3>
<div class="grid gap-3">
<div class="flex justify-between items-center p-4 bg-error-container/20 rounded-2xl border border-error/10">
<div>
<p class="font-label-md text-label-md text-on-surface-variant">LDL Cholesterol</p>
<p class="font-headline-md text-headline-md text-error font-bold">168 <span class="text-label-md font-normal">mg/dL</span></p>
</div>
<div class="text-right">
<span class="font-label-sm text-label-sm text-error uppercase font-bold">High</span>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-1">Range: &lt; 100</p>
</div>
</div>
<div class="flex justify-between items-center p-4 bg-error-container/20 rounded-2xl border border-error/10">
<div>
<p class="font-label-md text-label-md text-on-surface-variant">Fasting Glucose</p>
<p class="font-headline-md text-headline-md text-error font-bold">104 <span class="text-label-md font-normal">mg/dL</span></p>
</div>
<div class="text-right">
<span class="font-label-sm text-label-sm text-error uppercase font-bold">Pre-diabetic Range</span>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-1">Range: 70-99</p>
</div>
</div>
</div>
</div>
<!-- Specialist Recommendation -->
<div class="bg-secondary-container/10 p-6 rounded-2xl border border-secondary-container/20">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-secondary">medical_services</span>
<h3 class="font-title-lg text-title-lg text-on-secondary-container">Specialist Recommendation</h3>
</div>
<div class="space-y-3">
<div class="flex justify-between">
<span class="font-label-md text-label-md text-on-surface-variant">Recommended:</span>
<span class="font-label-md text-label-md text-on-surface font-bold">Cardiologist</span>
</div>
<div class="flex justify-between">
<span class="font-label-md text-label-md text-on-surface-variant">Urgency:</span>
<span class="font-label-md text-label-md text-secondary font-bold">Moderate</span>
</div>
<div class="pt-2 border-t border-outline-variant/20">
<p class="font-body-md text-body-md text-on-surface-variant italic">"Reason: Elevated LDL levels coupled with borderline glucose requires specialized cardiovascular risk assessment."</p>
</div>
</div>
<button class="w-full mt-6 bg-secondary text-white py-3 rounded-xl font-label-md text-label-md hover:bg-on-secondary-fixed-variant transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
                                    Book Appointment
                                </button>
</div>
</div>
<!-- Secondary Metrics / Trend Sparkline Card -->
<div class="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10">
<h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-4">Historical Trend (LDL)</h3>
<div class="h-32 w-full flex items-end gap-1">
<div class="bg-primary/20 w-full h-1/2 rounded-t-md hover:bg-primary transition-all cursor-help" title="June: 130"></div>
<div class="bg-primary/20 w-full h-2/3 rounded-t-md hover:bg-primary transition-all cursor-help" title="July: 142"></div>
<div class="bg-primary/20 w-full h-3/4 rounded-t-md hover:bg-primary transition-all cursor-help" title="August: 155"></div>
<div class="bg-error w-full h-full rounded-t-md shadow-lg" title="Current: 168"></div>
</div>
<div class="flex justify-between mt-4 text-on-surface-variant font-label-sm">
<span class="">Jun</span>
<span class="">Jul</span>
<span class="">Aug</span>
<span class="font-bold text-error">Current</span>
</div>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant py-8 px-gutter">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-label-sm text-label-sm text-on-surface-variant max-w-2xl text-center md:text-left">
                        © 2024 MediBrief Health Intelligence. Medical Informational Notice: This dashboard is for informational purposes only and does not constitute medical advice.
                    </p>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Support</a>
</div>
</div>
</footer>
</main>
</div>
<!-- Micro-interaction for specialist-->
<script class="">
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.add('scale-95');
                setTimeout(() => btn.classList.remove('scale-95'), 100);
            });
        });
    </script>



</body></html>