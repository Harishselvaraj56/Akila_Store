const TopBar = () => (
  <div className="fixed top-0 left-0 right-0 z-50
                  bg-primary text-white
                  overflow-hidden h-10 flex items-center">
    <div className="animate-marquee flex whitespace-nowrap">
      {[1, 2, 3].map(i => (
        <span key={i} className="mx-8 text-sm font-medium text-white/95">
          🎉 Fresh Vegetables Arrived Today&nbsp;&nbsp;|&nbsp;&nbsp;
          Open Daily 6:00 AM – 10:00 PM&nbsp;&nbsp;|&nbsp;&nbsp;
          WhatsApp Orders Available: +91 9344384078&nbsp;&nbsp;|&nbsp;&nbsp;
          Free Delivery on Large Orders
        </span>
      ))}
    </div>
  </div>
);

export default TopBar;
