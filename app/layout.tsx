'use client';

import React, { Suspense } from 'react';
import '/app/styles/globals.css';
import Sidebar from '@/app/components/common/Sidebar';
import Header from '@/app/components/common/Header';
import BackgroundOverlay from '@/app/components/common/BackgroundOverlay';
import { Providers } from '@/app/providers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({});
  return (
    <Providers>
      <QueryClientProvider client={queryClient}>
        <html>
          <body>
            <div>
              <div className="flex bg-gray-50 ">
                <BackgroundOverlay />
                <Sidebar />
                <div className="flex-grow">
                  <Header />

                  <div className="mt-10 mx-5 min-h-screen">{children}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      </QueryClientProvider>
    </Providers>
  );
}

// import '/app/styles/tailwind.css';
// import React from 'react';
//
// export default function RootLayout() {
//   return (
//     <Providers>
//       {/*<html lang="en">*/}
//       {/*  <body>*/}
//       {/*    <section className={styles.container}>*/}
//       {/*      <Nav />*/}
//       {/*      <h1 className="text-2xl fonts-bold ">Hello world!!</h1>*/}
//       {/*      <header className={styles.header}>*/}
//       {/*        <img src="/logo.svg" className={styles.logo} alt="logo" />*/}
//       {/*      </header>*/}
//
//       {/*      <main className={styles.main}>{props.children}</main>*/}
//       {/*      <div className="bg-amber-900 w-16 h-16">asd</div>*/}
//       {/*      <footer className={styles.footer}>*/}
//       {/*        <span>Learn </span>*/}
//       {/*        <a*/}
//       {/*          className={styles.link}*/}
//       {/*          href="https://reactjs.org/"*/}
//       {/*          target="_blank"*/}
//       {/*          rel="noopener noreferrer"*/}
//       {/*        >*/}
//       {/*          React*/}
//       {/*        </a>*/}
//       {/*        <span>, </span>*/}
//       {/*        <a*/}
//       {/*          className={styles.link}*/}
//       {/*          href="https://redux.js.org/"*/}
//       {/*          target="_blank"*/}
//       {/*          rel="noopener noreferrer"*/}
//       {/*        >*/}
//       {/*          Redux*/}
//       {/*        </a>*/}
//       {/*        <span>, </span>*/}
//       {/*        <a*/}
//       {/*          className={styles.link}*/}
//       {/*          href="https://redux-toolkit.js.org/"*/}
//       {/*          target="_blank"*/}
//       {/*          rel="noopener noreferrer"*/}
//       {/*        >*/}
//       {/*          Redux Toolkit*/}
//       {/*        </a>*/}
//       {/*        ,<span> and </span>*/}
//       {/*        <a*/}
//       {/*          className={styles.link}*/}
//       {/*          href="https://react-redux.js.org/"*/}
//       {/*          target="_blank"*/}
//       {/*          rel="noopener noreferrer"*/}
//       {/*        >*/}
//       {/*          React Redux*/}
//       {/*        </a>*/}
//       {/*      </footer>*/}
//       {/*    </section>*/}
//       {/*  </body>*/}
//       {/*</html>*/}
//     </Providers>
//   );
// }
