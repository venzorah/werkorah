export const manifest = {
  screens: {
    scr_hm5jst: { name: "Splash", route: "/", position: { "x": 160, "y": 220 } },
    scr_ut53v8: { name: "Onboarding", route: "/onboarding", position: { "x": 1560, "y": 220 } },
    scr_f950xt: { name: "Login", route: "/login", position: { "x": 2960, "y": 220 } },
    scr_nw61ho: { name: "Register", route: "/register", position: { "x": 4360, "y": 220 } },
    scr_8se9xe: { name: "Home", route: "/home", position: { "x": 160, "y": 2200 } },
    scr_i3zg0u: { name: "Search Results", route: "/search", position: { "x": 1560, "y": 2200 } },
    scr_lkxxk1: { name: "Artisan Profile", route: "/artisan/1", position: { "x": 2960, "y": 2200 } },
    scr_u5wbdy: { name: "Booking", route: "/booking/1", position: { "x": 160, "y": 4180 } },
    scr_bsreue: { name: "Quote & Negotiation", route: "/quote/1", position: { "x": 1560, "y": 4180 } },
    scr_rprxi0: { name: "Payment & Escrow", route: "/payment", position: { "x": 2960, "y": 4180 } },
    scr_z3f55i: { name: "Live Job", route: "/live-job", position: { "x": 4360, "y": 4180 } },
    scr_p1zy24: { name: "Customer Dashboard", route: "/dashboard", position: { "x": 160, "y": 6160 } },
    scr_mduwor: { name: "Wallet", route: "/wallet", position: { "x": 1560, "y": 6160 } },
    scr_9ygzmm: { name: "Profile", route: "/profile", position: { "x": 2960, "y": 6160 } },
    scr_tjk0kd: { name: "Artisan Registration", route: "/pro/register", position: { "x": 160, "y": 8140 } },
    scr_u386jy: { name: "KYC Verification", route: "/pro/kyc", position: { "x": 1560, "y": 8140 } },
    scr_lu05n7: { name: "Artisan Dashboard", route: "/pro/dashboard", position: { "x": 160, "y": 10120 } },
    scr_vhhiy5: { name: "Manage Services", route: "/pro/services", position: { "x": 1560, "y": 10120 } },
    scr_feyv07: { name: "Create Service", route: "/pro/create-service", position: { "x": 2960, "y": 10120 } },
    scr_3h59fi: { name: "Portfolio Management", route: "/pro/portfolio", position: { "x": 4360, "y": 10120 } },
    scr_1rjiwf: { name: "Job Requests", route: "/pro/requests", position: { "x": 5760, "y": 10120 } },
    scr_14n06d: { name: "Earnings", route: "/pro/earnings", position: { "x": 7160, "y": 10120 } },
    scr_d30dy4: { name: "Artisan Profile (Pro)", route: "/pro/profile", position: { "x": 8560, "y": 10120 } },
    scr_s5289d: { name: "Edit Service", route: "/pro/create-service?id=s1", position: { "x": 9960, "y": 10120 } },
    scr_jcmq2s: { name: "Edit Artisan Profile", route: "/pro/edit-profile", position: { "x": 11360, "y": 10120 } },
    scr_vnal9l: { name: "Business Details", route: "/pro/business", position: { "x": 12760, "y": 10120 } },
    scr_cu25d3: { name: "Job Activity", route: "/pro/history", position: { "x": 14160, "y": 10120 } },
    scr_jkz8u3: { name: "Help & Support", route: "/pro/support", position: { "x": 15560, "y": 10120 } }
  },
  sections: {
    sec_2izltu: { name: "Authentication & Onboarding", x: 0, y: 0, width: 5720, height: 1180 },
    sec_5p3l97: { name: "Discovery", x: 0, y: 1980, width: 4320, height: 1180 },
    sec_536nga: { name: "Booking & Service Delivery", x: 0, y: 3960, width: 5720, height: 1180 },
    sec_9tnd00: { name: "Account & Wallet", x: 0, y: 5940, width: 4320, height: 1180 },
    sec_99kpn9: { name: "Artisan Onboarding", x: 0, y: 7920, width: 2920, height: 1180 },
    sec_mqawyc: { name: "Artisan Platform", x: 0, y: 9900, width: 16920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_2izltu", children: [
    { kind: "screen", id: "scr_hm5jst" },
    { kind: "screen", id: "scr_ut53v8" },
    { kind: "screen", id: "scr_f950xt" },
    { kind: "screen", id: "scr_nw61ho" }]
  },
  { kind: "section", id: "sec_5p3l97", children: [
    { kind: "screen", id: "scr_8se9xe" },
    { kind: "screen", id: "scr_i3zg0u" },
    { kind: "screen", id: "scr_lkxxk1" }]
  },
  { kind: "section", id: "sec_536nga", children: [
    { kind: "screen", id: "scr_u5wbdy" },
    { kind: "screen", id: "scr_bsreue" },
    { kind: "screen", id: "scr_rprxi0" },
    { kind: "screen", id: "scr_z3f55i" }]
  },
  { kind: "section", id: "sec_9tnd00", children: [
    { kind: "screen", id: "scr_p1zy24" },
    { kind: "screen", id: "scr_mduwor" },
    { kind: "screen", id: "scr_9ygzmm" }]
  },
  { kind: "section", id: "sec_99kpn9", children: [
    { kind: "screen", id: "scr_tjk0kd" },
    { kind: "screen", id: "scr_u386jy" }]
  },
  { kind: "section", id: "sec_mqawyc", children: [
    { kind: "screen", id: "scr_lu05n7" },
    { kind: "screen", id: "scr_vhhiy5" },
    { kind: "screen", id: "scr_feyv07" },
    { kind: "screen", id: "scr_3h59fi" },
    { kind: "screen", id: "scr_1rjiwf" },
    { kind: "screen", id: "scr_14n06d" },
    { kind: "screen", id: "scr_d30dy4" },
    { kind: "screen", id: "scr_s5289d" },
    { kind: "screen", id: "scr_jcmq2s" },
    { kind: "screen", id: "scr_vnal9l" },
    { kind: "screen", id: "scr_cu25d3" },
    { kind: "screen", id: "scr_jkz8u3" }]
  }]

};