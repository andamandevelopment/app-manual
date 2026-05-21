import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andaman GPS Manual — Fleet Telematics Documentation" },
      {
        name: "description",
        content:
          "Complete user manual for Andaman GPS: real-time tracking, playback, reports, fuel monitoring and driver behavior analytics.",
      },
      { property: "og:title", content: "Andaman GPS Manual" },
      { property: "og:description", content: "Fleet telematics platform documentation." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
      },
    ],
  }),
  component: Index,
});

const IMG = {
  login:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDRWUfdXJjQkvgnZ_LIXwZcNBm9_u3K4I06Pl_UQxoqoMg8ky0uskM5tMseiYbnNzEa5sPQnGwWn8pBQlMIa5SKt_xVZwmDtBo28TtS_SWu93U3owMo_Qfh9eX1Mu9NIfvjEQ__7n05FV3QjoBW2ERuKJneMR7BNMVzCLmbdal1tLvM_gXbnVfRK-2lcinkYShPWaJKmaiDtBhMaJTVboXZABloGEdXi0itc5NzLYrKRhxPHXBkqcDfnqa0kk8yE_Udi0M8Z-fUMRA",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGuFmNGaF9W3z6vJ_9B_HPKCwLq5eRIcUfYHCtwheUGvSnFv6HTBSmuNw0Sod7fiTZ4kPQqj-sCROab2SIgID0eaRRNlt3DPNd_1Yim2kiVQXZPfelPOOe-w7Wu-1Qck35s2DEGJz0xHlHXTMIcoFuFZFPAxAXmUFOCxjExGgQthjRJJUF_q2_3IYGBMx9Rhq0VKMrwZZajnHK-4GT4JJJO-SpIvu1lOhJx0bvq82eA4AYNQjtd0GyJglah3O0Jkjk2l_Agvvdqb8",
  info: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLYbhW3NLNQRR3DasuCrz2cjdee5Ri988S_TxZgtz0nXSVfL_om7bgWgwx-MO13RJ3_bL9mxI7RbGWlPJEFqKFNvxOhz7CLfpFFAaWoG28EwcYtKJDXLcRh9LFqzIU1rz0OFTQZH-w34-Rao5wXHGRA3RMbr7V6N1jpf7lDPT5t7T3WWVnjSnm9rhgLGR1XiNOw8UvJ00UowIKBsYqc1FEvtB4ZSbGq-ZpyFe1N4InKB_XWMwG1C0Tf6QzccgCabP_Bim6wMVl1yk",
  fleet:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB9FnYdtI9UJ0e_nB4QqsPAVybFaIJGq532_oBt5K9q_UN87RL0DuXBFMtUlSUUBrucO5Tk_j7QZYSFG558l9Ioe4rCjKV4mRdXJUpH5flEEbbgbxabwMmd1RZa8KhZTL1T5BO6wbSUoTRlkS79AtfDBdfboIWDHfN6DdXPNvpOB7x8PnrKQkYdvn3rAD8TFZHtWXGA54pa6e9AtIKgrIAj8GB2c7NexbuA0YhqtWHOhzASOInVMsh3JssXNR28MChPmSLrqufnkqQ",
  playback:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOo0To5EQgDDsVMnfBLrIY6cGI0YMdEtR8d3okicKfo5R0605THoBK_W2tPu4B_vKmUhBgQiigWRpVkwk7ZCtoi1Eh70KzNTFc8JD2htVMgI925xCslSO5floOuUeXXoyglD1VcV8wymwD6MTRbYXu4pFPkbpnubQWwJD4MJuaIbU8t2r8pER-Ecclds8xIRYbwMgJrr9FwYw42yo0uKevf6zaA32ExveOqhJHqM8V2ENETDsWUgl5u9WobwJPapkM5OQlG2iYNAk",
  trip: "https://lh3.googleusercontent.com/aida-public/AB6AXuBohiwlVGmwkia7k9cv6O9JgeeAmMsy3m15gV9HgoDrP2SG7Xus3vtyUmQY94ptOCLH-3sVMn_wE7wXDRpH1lV75lWR_etSVogsgIFr8b1xoY0ARZSWoD7BBtW2K0qzqef_df-NPMD2aHHd-X8KyRehT9KV819f-IkOa2kT0p4LqbQY5brBar1MAOukzT6VT75pZ1mMeyxkEX1lWXHCbP_xSgpt_pebzj-1JzSKUT7BH3DmWyyzHmNlpKiwMCdzhiZkl1p8aCukEQ0",
  geofence:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDyPZdrsKGcjjj9g8OEx0Stq54KmnCsLinOYdOuMvNUJexIieCJsxaH2Uarwnm0Ix2vsIabb8CqvPaZBGJjkguNaZoiGugYZHjbha7hqL9E4uGTEnYySXYwem2L1FTb-IduAdOl5ot4y9vazl-zBdIVvOplcVip5YIJoInKQuxsyFZCJZQ-cmzBMBWS8XGhde6JZcmh3jP1WBRKtyMWFrX7Or7dO-ZzDcmoP1JoReNmg9Fax_c45qOXIVdcyPgCLpZRNI8UGej43JY",
  temp: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAn4AENnaE1ueosfUenmmjkmWfQym-ufz9wh2OY2ZTFcETVPuf-FX5TgB_-VtwlaK6Lhr2Yx-keaCqdyGy6nn3-gB32g63-G5kwGGLAgG4-gwE1Mxsp1WTPsW5cYs83BxKPmHIFxcGM_kh8pzErG7KDsCXoFL7NwUQKpva23lt76WMJm6E_A9fviwQhIENQu9_gJZ2pRod48aJsdNZT3zDRBCgbxvHgD_uLw9Uxd2_qPludT9gG40Dc8Y5KXdVc5ffIkE0C2FcI6A",
  fuel: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6TZXSrB7zcL5EmF-F6Gmwn6W8d4QuJxLA_vdyXFkfzqg7hpmkMul5N_e8l9gEM7LQfX0lHChWtExAyqG6Mf_gWvDXLvkMZwSSqfNiXcnbGRWD89f-3g3yoP108wEueSsgLsyeb1_dVQr7LSgiSTfhhqeT6lDIAXVyNh8o7VmGYFuaLlIknv_Igm-7NhMeyfAEAB_rBBDYlysU-L1i1qXXsT5nZ7gkOfM2-kO3Lk_skn7pXuX-MV7f-dKXFYlaeCa7xnJMTN7c-HQ",
  notif:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6kDA6Ww1EnNC87BoNlz_uYgLEGSwRdkO8helUSzsGsMx6UevJpUa5EZP1klZI6AAJ4Btc0fuEJ6b83kHtpp-lqtiOwRZ2JSXbfDXvGi_S0Zou4S5XpJs2lpeFktQZ6ZVwB1KpoIXvhR5KqlhttvN3E1OYZgaWDRmyE8bgpdjhI2YmKiyyhcc3CH4S1Ql5yfqj1-e4C3BS_6IH1NJiucZljJfR6QSj2MLcytjTxUs4nwk98qxF2yJp9Ca8i0tZAGtJJwX_Q2dzcN0",
  diag: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIAhOgKsahpODqs2JYdkZR4c-HKi5h-gh7GowVBFAPKdpA737iZN55xve1kvnBXNXQgil4_iYpi5q0E9Nyv2h0WivPcmHOT2c1AnQAxmIedn1m3WizoVDTZ5bfZUpfMvfWwg5GOUwhUMFKwTiDu6qVNyHqveY66EmXzcmi30qrog8FSrCTL_vZtQc6P9_pr3Kag8Ml07SkOMu1mvfvVrQDMKIIsncFEVAj0xaEifPeBX-TrTw4LGQVjCla3_jLdPxNzi5lOAk3IY4",
  contact:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCSkrKWQHAHlJVxpn1_iPJZZM-crsrvh73E4H5muXgy77jjumpktXDSNELzHQF7bZyK1DEchhcoHLcxT9D6lXkhoQlxEB9yvnpUjZnM0nbog70I2gLdvfhTzgcg-qmqV6UXIukBPPSrDye4-EmVt9AotKuHGUkN4dFJkqG8yUTRl8lu2acNbP2L5aB9KKy_J6odG76uLL2t98TF2kavMa6QMrkaUrfnW8Npkiumar6QYA4dH8XJM0IBmJzWYqMMdYyg_d2rYDt1FEY",
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined align-middle ${className}`}
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}

const drawerLinks = [
  { icon: "local_shipping", label: "Fleet Overview", active: true },
  { icon: "history", label: "Playback" },
  { icon: "assessment", label: "Reports" },
  { icon: "map", label: "Geofencing" },
  { icon: "settings", label: "Server Settings" },
];

function Index() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant h-14 flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <button
            className="text-primary hover:bg-surface-container rounded-full p-2"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </button>
          <h1 className="text-lg font-bold text-primary">Andaman GPS Manual</h1>
        </div>
        <button
          className="text-primary hover:bg-surface-container rounded-full p-2"
          aria-label="Search"
        >
          <Icon name="search" />
        </button>
      </header>

      {/* Drawer */}
      <nav
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col py-4 h-full w-80 bg-surface shadow-xl transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-primary">Documentation</h2>
          <button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <Icon name="close" />
          </button>
        </div>
        <div className="flex flex-col mt-4">
          {drawerLinks.map((l) => (
            <a
              key={l.label}
              href="#"
              className={`mx-2 my-1 px-4 py-3 flex items-center gap-4 rounded-full ${
                l.active
                  ? "bg-primary-container text-on-primary-container font-semibold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <Icon name={l.icon} />
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      </nav>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55]"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Main */}
      <main className="pt-20 pb-24 px-4 max-w-screen-xl mx-auto space-y-8">
        {/* Intro */}
        <section id="intro" className="space-y-4">
          <div className="bg-primary p-8 rounded-xl text-primary-foreground shadow-lg overflow-hidden relative">
            <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
              <Icon name="gps_fixed" className="!text-[160px]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Welcome to Andaman GPS
            </h2>
            <p className="text-lg opacity-90 max-w-prose">
              Empowering your logistics with high-precision telematics and
              institutional-grade fleet management tools.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {[
                {
                  icon: "update",
                  title: "Real-time Tracking",
                  desc: "Track every movement with second-by-second updates.",
                },
                {
                  icon: "gas_meter",
                  title: "Fuel Monitoring",
                  desc: "Highly accurate sensor data to prevent fuel theft.",
                },
                {
                  icon: "psychology",
                  title: "Driver Behavior",
                  desc: "Analysis of speeding, braking, and idle times.",
                },
              ].map((f) => (
                <div key={f.title} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <Icon name={f.icon} className="mb-2 text-secondary-fixed" />
                  <h4 className="font-bold">{f.title}</h4>
                  <p className="text-sm opacity-80">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="glass-card p-6 rounded-xl space-y-6">
          <div className="flex items-center gap-3 text-primary border-b border-outline-variant pb-4">
            <Icon name="login" />
            <h2 className="text-xl font-semibold">Getting Started</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">How to Login</h3>
              <p className="text-on-surface-variant">
                Follow these steps to access your fleet dashboard:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-on-surface-variant ml-2">
                <li>Open the Andaman GPS mobile app.</li>
                <li>
                  <strong>Server Selection:</strong> Choose the assigned server for your
                  region (server1, server2, or server3).
                </li>
                <li>
                  Enter your unique <strong>Account ID</strong>.
                </li>
                <li>
                  Enter your <strong>Username</strong> and <strong>Password</strong>.
                </li>
                <li>Tap 'Sign In' to proceed to the map overview.</li>
              </ol>
              <div className="bg-secondary-fixed text-on-secondary-fixed p-4 rounded-lg border-l-4 border-secondary flex gap-4">
                <Icon name="error" className="shrink-0" />
                <p className="text-sm">
                  Ensure you have selected the correct server provided in your onboarding
                  email, or login will fail.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border border-outline-variant">
              <img
                src={IMG.login}
                alt="Login screen of Andaman GPS"
                className="w-full object-cover aspect-[0.45]"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary">Key Platform Features</h2>
            <p className="text-on-surface-variant">
              Master the tools designed for fleet optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Icon name="location_on" />
                  <h3 className="font-bold">Real-time Tracking &amp; Map</h3>
                </div>
                <p className="text-on-surface-variant mb-6">
                  View your entire fleet live on high-resolution maps. Monitor speed,
                  direction, and engine status in one unified view.
                </p>
              </div>
              <div className="flex gap-4">
                <img
                  src={IMG.map}
                  alt="Map interface"
                  className="w-1/2 rounded-lg border border-outline-variant shadow-md"
                />
                <img
                  src={IMG.info}
                  alt="Vehicle info panel"
                  className="w-1/2 rounded-lg border border-outline-variant shadow-md"
                />
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Icon name="dashboard" />
                  <h3 className="font-bold">Fleet Overview</h3>
                </div>
                <p className="text-on-surface-variant mb-6">
                  Get a bird's-eye view of your assets. Quickly filter by 'Online',
                  'Offline', or 'Idle' statuses to identify operational gaps immediately.
                </p>
              </div>
              <img
                src={IMG.fleet}
                alt="Fleet overview list"
                className="w-full h-48 object-cover object-top rounded-lg border border-outline-variant shadow-md"
              />
            </div>
          </div>

          {/* Playback */}
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="play_circle" className="text-secondary" />
              <h3 className="text-xl font-semibold">Playback (History)</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={IMG.playback}
                  alt="Playback screen"
                  className="w-full rounded-xl shadow-lg border border-outline-variant"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-lg">
                  The playback feature allows you to audit routes taken on specific dates
                  and times. It provides a visual breadcrumb trail of vehicle history.
                </p>
                <ul className="zebra-stripes rounded-lg overflow-hidden border border-outline-variant">
                  {[
                    { icon: "calendar_today", text: "Select specific date and time ranges." },
                    { icon: "speed", text: "Adjust playback speed (1x to 10x)." },
                    { icon: "stop", text: "Visualize stop durations and locations." },
                  ].map((r) => (
                    <div key={r.text} className="p-3 flex items-center gap-3">
                      <Icon name={r.icon} className="text-primary" />
                      <span>{r.text}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div className="bg-surface-container p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
              <Icon name="analytics" /> Detailed Reporting
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { img: IMG.trip, label: "Trip Report" },
                { img: IMG.geofence, label: "Geofence Report" },
                { img: IMG.temp, label: "Temperature Log" },
                { img: IMG.fuel, label: "Fuel Report" },
              ].map((r) => (
                <div key={r.label} className="space-y-2">
                  <img
                    src={r.img}
                    alt={r.label}
                    className="rounded-lg shadow border border-white/50"
                  />
                  <p className="text-xs font-semibold tracking-wider text-center uppercase">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="glass-card p-6 rounded-xl flex items-start gap-6 border-l-4 border-primary">
            <div className="hidden md:block w-32 shrink-0">
              <img src={IMG.notif} alt="Notifications" className="rounded-lg shadow" />
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                <Icon name="notifications_active" /> Real-time Notifications
              </h3>
              <p className="text-on-surface-variant">
                Stay informed without opening the app. Configure push notifications for
                critical events like speeding, idling, or entering unauthorized zones.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="glass-card p-6 rounded-xl space-y-6">
          <div className="flex items-center gap-3 text-secondary border-b border-outline-variant pb-4">
            <Icon name="build" />
            <h2 className="text-xl font-semibold">Troubleshooting</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 space-y-4">
              <p className="text-on-surface-variant">
                If a vehicle appears offline or data seems incorrect, check the{" "}
                <strong>Status Information</strong> panel. Monitor these three critical
                sensors:
              </p>
              <div className="space-y-2">
                {[
                  ["GSM Signal", "Cellular connection status"],
                  ["Satellite Count", "GPS positional accuracy"],
                  ["Fuel Sensor", "Current tank volume (L)"],
                ].map(([name, desc]) => (
                  <div
                    key={name}
                    className="flex justify-between items-center p-3 bg-surface rounded border border-outline-variant"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="text-sm text-on-surface-variant">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={IMG.diag}
                alt="Diagnostic status"
                className="rounded-xl border border-outline-variant shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="support"
          className="bg-surface-container-highest p-8 rounded-xl text-center space-y-6"
        >
          <Icon name="contact_support" className="!text-4xl text-primary" />
          <h2 className="text-2xl font-semibold text-primary">Need Assistance?</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Our technical support team is available 24/7 to help you with installation,
            configuration, or any technical queries.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img src={IMG.contact} alt="Contact form" className="w-48 rounded-lg shadow-xl" />
            <div className="text-left space-y-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold w-full md:w-auto hover:opacity-80 transition-opacity">
                Open Contact Form
              </button>
              <p className="text-sm text-on-surface-variant italic">
                Direct Email: support@andamangps.com
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-lg h-16 flex justify-around items-center rounded-t-xl md:hidden">
        {[
          { href: "#intro", icon: "info", label: "Intro", active: true },
          { href: "#features", icon: "gps_fixed", label: "Features" },
          { href: "#support", icon: "help_outline", label: "Support" },
          { href: "#troubleshooting", icon: "notifications", label: "Alerts" },
        ].map((n) => (
          <a
            key={n.label}
            href={n.href}
            className={`flex flex-col items-center justify-center px-4 py-1 rounded-full ${
              n.active
                ? "bg-secondary-container text-on-secondary-container scale-95"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <Icon name={n.icon} />
            <span className="text-xs font-semibold tracking-wider">{n.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
