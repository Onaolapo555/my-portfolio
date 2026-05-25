

# Onaolapo Ayomide | Full-Stack Software Engineer
> Building high-performance, clean, and intuitive web applications that solve real-world problems.

Standard developer portfolio showcasing advanced frontend interactions, modern UI design patterns, and streamlined asset performance management.

## 🚀 Live Demo
[View Live Portfolio](https://your-portfolio-url.com)

---

## 🛠️ The Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, Next.js, Vite, Tailwind CSS |
| **Backend & DB** | Node.js, Supabase, PostgreSQL |
| **Animations** | Lottie-Web, Framer Motion |
| **Tools & Build** | Git, Vercel, Vite Image Optimizer |

---

## 💎 Key Features & Visual Architecture

### 1. Optical Glassmorphism Navigation
* Built a custom dynamic glass navbar using an inline SVG displacement map engine (`feDisplacementMap`, `feColorMatrix`).
* Handled relative percentage layouts directly in JSX via Tailwind (`w-full min-w-[280px] max-w-[600px]`) coupled with a React `useRef` to feed exact pixel dimensions to the SVG background engine in real-time.
* Integrated hybrid dark-tinted/white-glow anchor classes (`.icon-pod-portfolio`) ensuring flawless accessibility and icon visibility when scrolling seamlessly over pure black (`#000`) or contrasting light background layers.

### 2. High-Performance Asset Infrastructure
* **71% Total Image Optimization:** Implemented automated image processing via `vite-plugin-image-optimizer`, compressing multi-megabyte screenshots and assets down to highly optimized WebP files for instant mobile rendering.
* **Layout Shift Prevention:** Leveraged code splitting (`React.lazy`) paired with independent, custom `HeaderSkeleton` components inside React `Suspense` wrappers to lock footers to the bottom and prevent intrusive content flashing during initial network load.


## 📦 Project Showcase
Some of the featured builds linked within this portfolio:
* **FitThread** – E-commerce application integrated with automated Stripe payment processing and protected deployment pipelines.
* **The Wild Oasis** – Internal management application built with a modern React stack, Vite, and real-time Supabase database synchronizations.
* **Desert Order** – Asset-heavy web application focusing on rigid Git configuration optimization and public asset routing pipelines.


