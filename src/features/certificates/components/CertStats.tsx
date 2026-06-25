const stats = [
    { value: "15+", label: "Certificates" },
    { value: "5", label: "Awards" },
    { value: "3", label: "Bootcamps" },
    { value: "2", label: "Hackathons Won" },
]

export function CertStats() {
    return (
        <div className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-primary sm:text-3xl">
                        {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
            ))}
        </div>
    )
}
