"use client";

const stars = Array.from({ length: 45 }, (_, i) => {
  // Deterministic values so server/client rendering stays consistent
  const x = (i * 37.7) % 100;
  const y = (i * 66.3) % 100;
  const size = 3 + ((i * 17) % 4);
  const duration = 6 + ((i * 13) % 12);
  const delay = -((i * 7) % 12);

    return {
        id: i,
        x,
        y,
        size,
        duration,
        delay,
    };
    });

    export default function StarField() {
    return (
        <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
        {stars.map((star) => (
            <span
            key={star.id}
            className="star"
            style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
            }}
            />
        ))}
        </div>
    );
}