export default function ReviewMarquee() {
  const reviews = [
    { name: "Sarah L.", text: "Absolutely incredible service. I had Invisalign and my smile is perfect now. The staff makes you feel like royalty.", source: "Google Reviews" },
    { name: "James T.", text: "Best dental practice in London. Completely painless implants and the clinic looks like a 5-star hotel.", source: "Trustpilot" },
    { name: "Emma W.", text: "I was terrified of the dentist until I came here. Dr. Smith is so gentle. Can't stop smiling!", source: "Google Reviews" },
    { name: "Michael R.", text: "State of the art equipment and lovely reception team. Got veneers done and my confidence is through the roof.", source: "Google Reviews" },
    { name: "Sophia M.", text: "Highly professional. They explained everything clearly and the teeth whitening results were instant.", source: "Trustpilot" },
  ];

  // Duplicate for infinite scroll loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="marquee-container reveal">
      <div className="marquee-content">
        {duplicatedReviews.map((review, i) => (
          <div key={i} className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
              <span>{review.name}</span>
              <span style={{ fontSize: '0.8em', color: '#94a3b8', fontWeight: 400 }}>{review.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
