import { FaCode, FaClock, FaTrophy, FaFire } from "react-icons/fa";

function DashboardCards() {
  const cards = [
    {
      title: "Problems Solved",
      value: "245",
      icon: <FaCode />,
      color: "#4F46E5",
    },
    {
      title: "Study Hours",
      value: "120h",
      icon: <FaClock />,
      color: "#06B6D4",
    },
    {
      title: "Mock Score",
      value: "88%",
      icon: <FaTrophy />,
      color: "#F59E0B",
    },
    {
      title: "Current Streak",
      value: "17 Days",
      icon: <FaFire />,
      color: "#EF4444",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "22px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 18px 35px rgba(79,70,229,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(0,0,0,0.08)";
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "16px",
              background: card.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "28px",
            }}
          >
            {card.icon}
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "28px",
                color: "#111827",
              }}
            >
              {card.value}
            </h2>

            <p
              style={{
                marginTop: "6px",
                color: "#6B7280",
                fontSize: "15px",
              }}
            >
              {card.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;