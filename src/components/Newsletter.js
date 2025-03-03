
const Newsletter = () => {
  return (
    <div className="newsletter-section bg-gray-100 p-6 rounded-lg text-center mt-6">
      <h2 className="text-2xl font-bold">Join our newsletter</h2>
      <p>Get exclusive content and become a part of the HorizonTechAI community.</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded w-1/2 my-4"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Join</button>
    </div>
  );
};

export default Newsletter;
