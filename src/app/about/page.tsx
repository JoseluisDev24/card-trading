export default function About() {
  const sections = [
    { title: "How it works" },
    { title: "Security" },
    { title: "FAQ" },
    { title: "About us" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-6 px-4 lg:px-70 lg:py-14 bg-white">
      <section>
        <div className="flex flex-col gap-3 items-center justify-center bg-[url('/city.jpg')] bg-cover bg-center pb-16">
          <h1 className="text-4xl font-bold">Help center</h1>
          <p className="text-xl font-semibold">
            Have questions? you&apos;re in the right place!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl -mt-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex justify-center items-center h-20 p-4 bg-gray-100 rounded-3xl shadow hover:shadow-lg transition-shadow w-full min-w-[165px] whitespace-nowrap cursor-pointer hover:bg-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                {section.title}
              </h2>
            </div>
          ))}
        </div>
      </section>
      <div className="flex flex-col">
        <p className="text-3xl font-bold mt-6">How does Trade Up work? </p>
        <p className="text-lg">
          TradeUp reduces the risk of fraud by acting as a trusted plataform
          that facilitates secure transactions. It ensures both parties are
          satisfied before completing the trade
        </p>
        <p className="text-2xl font-bold py-2">1. Initiate Trade</p>
      </div>
    </div>
  );
}
