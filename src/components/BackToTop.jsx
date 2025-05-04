function BackToTop({ isVisible }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={scrollToTop}
        className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
      >
        Back to Top
      </button>
    </div>
  );
}

export default BackToTop;