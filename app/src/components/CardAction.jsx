export default function CardAction({
  title,
  amount,
  subtitle,
  status = "critical",
  ctaLabel,
  onClick
}) {
  const badgeLabel =
    status === "critical" ? "Critique" :
    status === "warning" ? "Attention" :
    "OK";

  const badgeColor =
    status === "critical" ? "#DC2626" :
    status === "warning" ? "#F59E0B" :
    "#10B981";

  return (
    <div
      style={{
        background: "white",
        borderRadius: 14,
        padding: 16,
        marginBottom: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid #E5E7EB"
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
        {title}
      </div>

      <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 6 }}>
        {amount}
      </div>

      <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 12 }}>
        {subtitle}
      </div>

      <div
        style={{
          display: "inline-block",
          fontSize: 12,
          fontWeight: 600,
          color: badgeColor,
          border: `1px solid ${badgeColor}`,
          borderRadius: 999,
          padding: "4px 10px",
          marginBottom: 12
        }}
      >
        {badgeLabel}
      </div>

      <button
        onClick={onClick}
        style={{
          width: "100%",
          height: 46,
          background: "#2563EB",
          color: "white",
          border: "none",
          borderRadius: 10,
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer"
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}