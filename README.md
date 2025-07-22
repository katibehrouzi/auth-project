هدف پروژه:
پیاده‌سازی ساده یک سیستم احراز هویت با Next.js App Router و TypeScript.
ابتدا پروژه با localStorage پیاده‌سازی شد، سپس با توجه به نیاز Context-based state جایگزین شد.

تکنولوژی‌ها:
Next.js App Router (v14 / 15)
React Context API
TypeScript
SCSS Module
Responsive Design

در ابتدا از localStorage برای ذخیره‌ی اطلاعات کاربر استفاده شد:

کاربر با دکمه ورود → دریافت کاربر از API تصادفی.

user ذخیره در localStorage.
/dashboard با useEffect بررسی می‌کرد localStorage را.

در /auth هنگام ورود پاک می‌شد.

👎 مشکل این روش:

localStorage فقط در client در دسترس است.

امکان چک در SSR یا middleware وجود ندارد.

نیاز به use client زیاد می‌شود.

نه مناسب پروژه‌های بزرگ یا SSR.
فاز دوم (Context-based)
Context API جایگزین شد.

tsx
Copy
Edit
<AuthProvider>{children}</AuthProvider>
✅ مزیت این روش:
user به کل app با Context داده می‌شود.

نیازی به localStorage نیست.

راحت‌تر برای مدیریت.

کدهای /dashboard و /auth ساده و تمیزتر.

 نحوه عملکرد:
1️⃣ صفحه /auth:

ولیدیشن شماره موبایل ایران (۰۹x).

روی دکمه کلیک → fetch user از randomuser.me.

ذخیره در Context.

redirect به /dashboard.

2️⃣ صفحه /dashboard:

اگر user در Context نباشد → redirect به /auth.

نمایش Welcome to dashboard.

 اجرا:
pnpm install
pnpm dev
