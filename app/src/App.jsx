import CardAction from './components/CardAction.jsx'

export default function App() {
  return (
    <div style={{ padding: 16, background: "#F9FAFB", minHeight: "100vh" }}>
      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
        ⚡ À faire maintenant
      </div>

      <CardAction
        title="Pierre Leroy"
        amount="2060 €"
        subtitle="2 mois de retard · T2 Roquette"
        status="critical"
        ctaLabel="Ouvrir le dossier"
        onClick={() => {}}
      />

      <CardAction
        title="Karim Benali"
        amount="1620 €"
        subtitle="Studio Nation · 2 mois de retard"
        status="critical"
        ctaLabel="Ouvrir le dossier"
        onClick={() => {}}
      />
    </div>
  )
}