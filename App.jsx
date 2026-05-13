import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  CreditCard,
  Home,
  Lock,
  Menu,
  Search,
  Settings,
  Shield,
  Sparkles,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

const stats = [
  { label: "Total Users", value: "24,892", change: "+18.4%" },
  { label: "Revenue", value: "$84,320", change: "+12.7%" },
  { label: "Conversion", value: "8.92%", change: "+4.1%" },
  { label: "Active Sessions", value: "1,248", change: "+22.3%" },
];

const chartBars = [45, 68, 52, 81, 74, 92, 63, 88, 70, 96, 84, 78];

const plans = [
  { name: "Starter", price: "$19", features: ["Core dashboard", "Basic analytics", "Email support"] },
  { name: "Growth", price: "$49", popular: true, features: ["Advanced analytics", "Team access", "API integrations", "Priority support"] },
  { name: "Scale", price: "$99", features: ["Custom reports", "SSO security", "Dedicated support", "Unlimited projects"] },
];

function Sidebar({ open, setOpen }) {
  const items = [
    { icon: Home, label: "Dashboard" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Users, label: "Customers" },
    { icon: CreditCard, label: "Billing" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <>
      <div className={`fixed inset-0 z-30 bg-black/40 lg:hidden ${open ? "block" : "hidden"}`} onClick={() => setOpen(false)} />
      <aside className={`fixed left-0 top-0 z-40 h-full w-72 border-r border-slate-200 bg-white p-5 transition-transform lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
              <Sparkles size={21} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-950">GrowthFlow</h1>
              <p className="text-xs text-slate-500">SaaS Analytics</p>
            </div>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(false)}><X size={20} /></button>
        </div>

        <nav className="space-y-2">
          {items.map((item, index) => (
            <button key={item.label} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${index === 0 ? "bg-slate-950 text-white shadow-lg" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}>
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-8 rounded-3xl bg-slate-950 p-5 text-white shadow-xl">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
            <Zap size={20} />
          </div>
          <h3 className="font-semibold">Upgrade workspace</h3>
          <p className="mt-2 text-sm text-slate-300">Unlock advanced reports, automation, and team permissions.</p>
          <button className="mt-4 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950">View plans</button>
        </div>
      </aside>
    </>
  );
}

function Landing() {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-white shadow-2xl md:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
            <Shield size={16} /> Secure production-grade dashboard UI
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">Modern analytics for fast-moving teams.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">A responsive React interface built with clean layouts, reusable sections, polished cards, and scalable Tailwind architecture.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-lg">Start demo</button>
            <button className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white">View dashboard</button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
          <div className="rounded-3xl bg-white p-5 text-slate-950">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Monthly Growth</p>
                <h3 className="text-2xl font-bold">$84,320</h3>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">+12.7%</span>
            </div>
            <div className="flex h-56 items-end gap-3 rounded-3xl bg-slate-50 p-4">
              {chartBars.map((bar, i) => <div key={i} className="flex-1 rounded-t-xl bg-slate-950" style={{ height: `${bar}%` }} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="mt-8">
      <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-950">Dashboard</h2>
          <p className="mt-1 text-slate-500">Track users, revenue, conversion, and product performance.</p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Search size={18} className="text-slate-400" />
          <input className="w-full outline-none placeholder:text-slate-400" placeholder="Search reports..." />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <motion.div key={stat.label} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <div className="mt-3 flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-950">{stat.value}</h3>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-950">Revenue Overview</h3>
              <p className="text-sm text-slate-500">Last 12 months performance</p>
            </div>
            <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold">Export</button>
          </div>
          <div className="flex h-72 items-end gap-3 rounded-3xl bg-slate-50 p-5">
            {chartBars.map((bar, i) => <div key={i} className="flex-1 rounded-t-xl bg-slate-900" style={{ height: `${bar}%` }} />)}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Recent Activity</h3>
          <div className="mt-5 space-y-4">
            {["New customer onboarded", "Stripe payment completed", "API sync finished", "Security settings updated"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-950" />
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthAndProfile() {
  return (
    <section className="mt-4 grid gap-4 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-slate-950 p-3 text-white"><Lock size={20} /></div>
          <div>
            <h3 className="text-xl font-bold text-slate-950">Login UI</h3>
            <p className="text-sm text-slate-500">Clean authentication card</p>
          </div>
        </div>
        <div className="space-y-3">
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-950" placeholder="Email address" />
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-950" placeholder="Password" type="password" />
          <button className="w-full rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white shadow-lg">Sign in</button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100"><User size={26} /></div>
          <div>
            <h3 className="text-xl font-bold text-slate-950">Profile Settings</h3>
            <p className="text-sm text-slate-500">Manage account and security preferences</p>
          </div>
        </div>
        <div className="space-y-3">
          {["Two-factor authentication", "Billing notifications", "API access enabled"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <span className="font-medium text-slate-700">{item}</span>
              <span className="rounded-full bg-emerald-100 p-1 text-emerald-700"><Check size={16} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mt-4 rounded-[2rem] bg-white p-6 shadow-sm border border-slate-200">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-950">Simple pricing</h2>
        <p className="mt-2 text-slate-500">Flexible plans for growing products.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative rounded-3xl border p-6 ${plan.popular ? "border-slate-950 shadow-xl" : "border-slate-200 shadow-sm"}`}>
            {plan.popular && <span className="absolute right-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">Popular</span>}
            <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
            <p className="mt-4 text-4xl font-bold text-slate-950">{plan.price}<span className="text-sm font-medium text-slate-500">/mo</span></p>
            <div className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-slate-600"><Check size={16} /> {feature}</div>
              ))}
            </div>
            <button className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 font-semibold ${plan.popular ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-950"}`}>Choose plan <ChevronRight size={16} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar open={open} setOpen={setOpen} />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <header className="mb-5 flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <button className="lg:hidden" onClick={() => setOpen(true)}><Menu size={24} /></button>
            <div className="hidden lg:block">
              <p className="text-sm text-slate-500">Welcome back</p>
              <h1 className="text-xl font-bold">Product Analytics Workspace</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-2xl border border-slate-200 p-3"><Bell size={18} /></button>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2">
                <div className="h-8 w-8 rounded-full bg-slate-950" />
                <span className="hidden text-sm font-semibold sm:block">Senior Demo</span>
              </div>
            </div>
          </header>

          <Landing />
          <Dashboard />
          <AuthAndProfile />
          <Pricing />
        </main>
      </div>
    </div>
  );
}
