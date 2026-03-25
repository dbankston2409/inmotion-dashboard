import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-[#32373c] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="InMotion Technical"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-300">Houston, TX</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">All Systems Operational</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#32373c] mb-2">Operations Dashboard</h1>
          <p className="text-slate-600">Real-time monitoring and analytics for InMotion Technical</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Clients"
            value="247"
            change="+12%"
            positive={true}
            icon="👥"
            color="from-[#0693e3] to-blue-600"
          />
          <MetricCard
            title="Tickets Resolved"
            value="1,834"
            change="+8%"
            positive={true}
            icon="✓"
            color="from-green-500 to-green-600"
          />
          <MetricCard
            title="System Uptime"
            value="99.97%"
            change="+0.02%"
            positive={true}
            icon="⚡"
            color="from-[#9b51e0] to-purple-600"
          />
          <MetricCard
            title="Monthly Revenue"
            value="$342K"
            change="+15%"
            positive={true}
            icon="💰"
            color="from-amber-500 to-orange-600"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Ticket Volume Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-[#32373c] mb-4">Ticket Volume (Last 7 Days)</h3>
            <div className="flex items-end justify-between h-48 gap-3">
              <Bar height={65} label="Mon" value={42} />
              <Bar height={80} label="Tue" value={53} />
              <Bar height={55} label="Wed" value={35} />
              <Bar height={90} label="Thu" value={67} />
              <Bar height={70} label="Fri" value={48} />
              <Bar height={45} label="Sat" value={28} />
              <Bar height={40} label="Sun" value={22} />
            </div>
          </div>

          {/* Service Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-[#32373c] mb-4">Service Distribution</h3>
            <div className="space-y-4">
              <ServiceBar label="Managed IT Services" percentage={45} color="bg-[#0693e3]" />
              <ServiceBar label="Hosted Exchange" percentage={28} color="bg-[#9b51e0]" />
              <ServiceBar label="Cloud Solutions" percentage={18} color="bg-green-500" />
              <ServiceBar label="Backup & Recovery" percentage={9} color="bg-amber-500" />
            </div>
          </div>
        </div>

        {/* Bottom Row: Activity Feed & System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-[#32373c] mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <ActivityItem
                type="success"
                title="Backup completed successfully"
                client="Acme Corporation"
                time="5 minutes ago"
              />
              <ActivityItem
                type="info"
                title="New client onboarded"
                client="Houston Medical Group"
                time="23 minutes ago"
              />
              <ActivityItem
                type="warning"
                title="Server maintenance scheduled"
                client="TechStart Inc."
                time="1 hour ago"
              />
              <ActivityItem
                type="success"
                title="Ticket #2847 resolved"
                client="Premier Consulting"
                time="2 hours ago"
              />
              <ActivityItem
                type="info"
                title="Exchange migration completed"
                client="Riverside Partners"
                time="3 hours ago"
              />
              <ActivityItem
                type="success"
                title="Security patch deployed"
                client="Global Ventures LLC"
                time="4 hours ago"
              />
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-[#32373c] mb-4">System Status</h3>
            <div className="space-y-3">
              <StatusItem service="Email Servers" status="operational" />
              <StatusItem service="Cloud Storage" status="operational" />
              <StatusItem service="Backup Systems" status="operational" />
              <StatusItem service="VPN Gateway" status="operational" />
              <StatusItem service="Monitoring" status="operational" />
              <StatusItem service="Support Portal" status="operational" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#32373c] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-slate-300">
          <p>InMotion Technical Support • Secure. Reliable. 24 Hour Monitoring.</p>
          <p className="mt-1">© 2026 InMotion Technical • Houston, Texas</p>
        </div>
      </footer>
    </div>
  );
}

// Metric Card Component
function MetricCard({
  title,
  value,
  change,
  positive,
  icon,
  color
}: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-sm font-medium text-slate-600 mb-1">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-[#32373c]">{value}</p>
        <span className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

// Bar Chart Component
function Bar({ height, label, value }: { height: number; label: string; value: number }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-2">
      <div className="w-full bg-slate-100 rounded-t flex items-end justify-center" style={{ height: '160px' }}>
        <div
          className="w-full bg-gradient-to-t from-[#0693e3] to-blue-400 rounded-t flex items-start justify-center pt-2 text-xs font-semibold text-white transition-all hover:from-[#0693e3] hover:to-[#0693e3]"
          style={{ height: `${height}%` }}
        >
          {value}
        </div>
      </div>
      <span className="text-xs font-medium text-slate-600">{label}</span>
    </div>
  );
}

// Service Bar Component
function ServiceBar({ label, percentage, color }: { label: string; percentage: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold text-slate-900">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

// Activity Item Component
function ActivityItem({
  type,
  title,
  client,
  time
}: {
  type: 'success' | 'info' | 'warning';
  title: string;
  client: string;
  time: string;
}) {
  const colors = {
    success: 'bg-green-100 text-green-700',
    info: 'bg-blue-100 text-blue-700',
    warning: 'bg-amber-100 text-amber-700'
  };

  const icons = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠'
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
      <div className={`w-8 h-8 rounded-full ${colors[type]} flex items-center justify-center flex-shrink-0 font-bold`}>
        {icons[type]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900">{title}</p>
        <p className="text-xs text-slate-600">{client}</p>
      </div>
      <span className="text-xs text-slate-500 flex-shrink-0">{time}</span>
    </div>
  );
}

// Status Item Component
function StatusItem({ service, status }: { service: string; status: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm font-medium text-slate-700">{service}</span>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-xs text-green-600 font-semibold capitalize">{status}</span>
      </div>
    </div>
  );
}
