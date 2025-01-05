"use client";
import Head from "next/head";

// Job data to display
const jobData = [
  {
    company: "Foodora",
    emoji: "🍕", // Emoji representing Foodora
    description:
      "Join Foodora as a delivery driver and earn flexible income while delivering food from local restaurants.",
  },
  {
    company: "Wolt",
    emoji: "🍔", // Emoji representing Wolt
    description:
      "Become a part of Wolt's dynamic team and deliver food from your favorite local restaurants to customers.",
  },
  {
    company: "UberEats",
    emoji: "🥡", // Emoji representing UberEats
    description:
      "Drive with UberEats and enjoy the freedom to work whenever you want while delivering food to hungry customers.",
  },
  {
    company: "Kokit",
    emoji: "🍳", // Emoji representing Kokit
    description:
      "Join Kokit and become a delivery partner in your city. Deliver delicious food and make money on your schedule.",
  },
  {
    company: "Koti Pizza",
    emoji: "🍕", // Emoji representing Koti Pizza
    description:
      "Deliver pizza with Koti Pizza and enjoy great pay, flexible hours, and the satisfaction of delivering hot meals to customers.",
  },
];

const Jobs: React.FC = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <Head>
        <title>Find Delivery Jobs | Local Food Delivery Opportunities</title>
        <meta
          name="description"
          content="Find food delivery jobs from local businesses like Foodora, Wolt, UberEats, Kokit, and Koti Pizza. Flexible hours and great pay!"
        />
        <meta
          name="keywords"
          content="delivery jobs, food delivery, local delivery, Foodora, Wolt, UberEats, Kokit, Koti Pizza, part-time jobs, flexible jobs"
        />
        <meta
          property="og:title"
          content="Find Delivery Jobs | Local Food Delivery Opportunities"
        />
        <meta
          property="og:description"
          content="Find food delivery jobs from local businesses like Foodora, Wolt, UberEats, Kokit, and Koti Pizza. Flexible hours and great pay!"
        />
        <meta
          property="og:image"
          content="/images/delivery-jobs-thumbnail.jpg"
        />{" "}
        {/* Replace with your own thumbnail image */}
        <meta
          property="og:url"
          content="https://yourwebsite.com/delivery-jobs"
        />{" "}
        {/* Update with your actual URL */}
        <meta name="robots" content="index, follow" />
      </Head>

      <h1>Delivery Jobs Near You</h1>
      <p>
        Find delivery jobs from local businesses and restaurants in your area.
        Explore flexible opportunities with companies like Foodora, Wolt,
        UberEats, Kokit, and Koti Pizza.
      </p>

      <div className="job-cards">
        {jobData.map((job, index) => (
          <div key={index} className="job-card">
            <div className="company-emoji">{job.emoji}</div>
            <h2>{job.company}</h2>
            <p>{job.description}</p>
            <a href="#" className="apply-btn">
              Apply Now
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .job-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .job-card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .company-emoji {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .job-card h2 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .job-card p {
          color: #666;
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .apply-btn {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }

        .apply-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Jobs;
